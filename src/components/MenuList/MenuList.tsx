import { useDispatch, useSelector } from "react-redux";
import { MenuListArray } from "../../assets/constants/MenuListArray";
import "./MenuList.scss";
import { addOrder, updateOrdersArray } from "../../Slices/OrdersSlice";
import { RootType } from "../../store";

const MenuList = () => {
  const dispatch = useDispatch();
  const ordersArray: any = useSelector((state: RootType) => state.orders.data);

  const handleAddOrder = (item: any) => {
    const existingOrderIndex = ordersArray.findIndex(
      (order: any) => order.key === item.key
    );

    if (existingOrderIndex !== -1) {
      const updatedArray = [...ordersArray];
      updatedArray[existingOrderIndex] = {
        ...item,
        num: ordersArray[existingOrderIndex].num + 1,
      };
      dispatch(updateOrdersArray(updatedArray));
    } else {
      dispatch(addOrder(item));
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
