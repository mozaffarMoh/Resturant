import { useDispatch, useSelector } from "react-redux";
import { MenuListArray } from "../../assets/constants/MenuListArray";
import "./MenuList.scss";
import { addOrder, removeOrder } from "../../Slices/OrdersSlice";
import { RootType } from "../../store";

const MenuList = () => {
  const dispatch = useDispatch();
  const ordersArray: any = useSelector((state: RootType) => state.orders.data);

  /* Add new order */
  const handleAddOrder = (item: any) => {
    if (ordersArray.length === 0) {
      dispatch(addOrder(item));
    } else {
      for (let i = 0; i < ordersArray.length; i++) {
        if (ordersArray[i].name === item.name) {
          dispatch(removeOrder(i));
          const newItem = { ...item, num: ordersArray[i].num + 1 };
          dispatch(addOrder(newItem));
        } else {
          if (i === ordersArray.length - 1) {
            dispatch(addOrder(item));
          }
        }
      }
    }
  };

  return (
    <div className="MenuList">
      {MenuListArray.map((element: any, index: number) => {
        return (
          <div className="items" key={index}>
            <h1>{element.itemsType}</h1>
            <div className="items-template flexCenter">
              {element.items.map((item: any, itemIndex: number) => {
                return (
                  <div
                    className="item flexBetweenColumn"
                    onClick={() => handleAddOrder(item)}
                    key={itemIndex}
                  >
                    <img src={item.img} />
                    <div>
                      <p>{item.name}</p>
                      <p>{item.unitPrice}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <br />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;
