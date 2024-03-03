import { useDispatch, useSelector } from "react-redux";
import "./Bill.scss";
import { RootType } from "../../store";
import { TiDocumentDelete } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { FcPrint } from "react-icons/fc";
import { Table } from "antd";
import {
  addOrder,
  editOrder,
  removeAllData,
  removeOrder,
} from "../../Slices/OrdersSlice";
import React from "react";
import Cookies from "cookies-js";

const Bill = () => {
  const dispatch = useDispatch();
  const totalCashCookies = Cookies.get("totalCash");
  const ordersArray: any = useSelector((state: RootType) => state.orders.data);
  const [deleteHover, setDeleteHover] = React.useState(false);
  const [minusOneHover, setMinusOneHover] = React.useState(false);
  const [hoverIndex, setHoverIndex] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [totalCash, setTotalCash] = React.useState(0);

  /* Handle Remove Order */
  const handleRemoveOrder = (index: number) => {
    dispatch(removeOrder(index));
  };

  /* Handle Minus one Item */
  const handleMinusOne = (item: any, index: number) => {
    if (item.num === 1) {
      dispatch(removeOrder(index));
    } else {
      //dispatch(removeOrder(index));
      const newItem = { ...item, num: item.num - 1 };
      dispatch(editOrder({ newItem: newItem, index: index }));
    }
  };

  const columns: any = [
    {
      title: "Num",
      dataIndex: "num",
      key: "num",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Unit price",
      dataIndex: "unitPrice",
      key: "unitPrice",
    },
    {
      title: "Total price",
      dataIndex: "unitPrice",
      key: "unitPrice",
      render: (unit: number, item: any) => <p>{unit * item?.num}</p>,
    },
    {
      title: "Actions",
      render: (_: any, item: any, index: number) => {
        return (
          <div className="flexStart">
            <div
              className={`action-area flexCenter ${
                minusOneHover && index === hoverIndex && "action-area-hover"
              }`}
            >
              <TiDocumentDelete
                className="minus-one"
                color="green"
                onClick={() => handleMinusOne(item, index)}
                onMouseEnter={() => {
                  setMinusOneHover(true);
                  setHoverIndex(index);
                }}
                onMouseLeave={() => setMinusOneHover(false)}
              />
            </div>
            <div
              className={`action-area flexCenter ${
                deleteHover && index === hoverIndex && "action-area-hover"
              }`}
            >
              <MdDelete
                className="remove-item"
                color="red"
                onClick={() => handleRemoveOrder(index)}
                onMouseEnter={() => {
                  setDeleteHover(true);
                  setHoverIndex(index);
                }}
                onMouseLeave={() => setDeleteHover(false)}
              />
            </div>
          </div>
        );
      },
    },
  ];

  /* Calculate Total Price */
  React.useEffect(() => {
    setTotalPrice(0);
    for (let i = 0; i < ordersArray.length; i++) {
      const itemTotal = ordersArray[i].unitPrice * ordersArray[i].num;
      setTotalPrice((prev) => prev + itemTotal);
    }
  }, [ordersArray]);

  React.useEffect(() => {
    const handleBeforePrint = () => {
      console.log("Print Before...");
      setTotalCash((prev) => prev + totalPrice);
      dispatch(removeAllData());
      Cookies.set("totalCash", totalCash);
    };

    const handleAfterPrint = () => {
      console.log("Print After.");
    };

    window.onbeforeprint = handleBeforePrint;
    window.onafterprint = handleAfterPrint;

    return () => {
      window.onbeforeprint = null;
      window.onafterprint = null;
    };
  }, []);

  return (
    <div className="bill">
      <Table
        dataSource={ordersArray}
        columns={columns}
        key={"key"}
        footer={() => (
          <p>
            Total Price: &nbsp;{" "}
            <span className="total-price">{totalPrice}</span> SYP
          </p>
        )}
      />

      <button
        className="print-button flexCenterColumn"
        onClick={() => window.print()}
      >
        <p>Print</p>
        <FcPrint className="print-logo" />
      </button>

      <div className="total-cash flexCenterColumn">
        <p>
          Total cash : {totalCashCookies ? totalCashCookies : totalCash} SYP
        </p>
      </div>
    </div>
  );
};

export default Bill;
