import React, { useState } from "react";
import { Table, Row, Cell } from "../components";
import { useForm } from "react-hook-form";

export const Trades = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [headers, setHeaders] = useState([
    "ticker",
    "quantity",
    "price",
    "position",
    "time",
  ]);
  const [trades, setTrades] = useState([
    {
      ticker: "cciv",
      quantity: 10,
      price: 55,
    },
  ]);

  const onSubmit = (data) => console.log(data);

  const tableHeaders = () => {
    return headers.map((header, index) => {
      return (
        <th
          key={index}
          className="bg-gray-100 sticky top-0 border-b border-r border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
        >
          {header}
        </th>
      );
    });
  };

  const tableRows = () => {
    return trades.map((trade, index) => {
      //   const pl = profitLoss(trade);
      {
        /* <td
            className={`px-6 py-2 tracking-wider uppercase ${
              pl > 0 ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {pl > 0 ? `+${pl}` : pl}
          </td> */
      }
      return (
        <Row key={index}>
          <Cell>{trade.ticker}</Cell>
          <Cell>{trade.quantity}</Cell>
          <Cell>{trade.price}</Cell>
          <Cell>position</Cell>
          <Cell>2:35</Cell>
        </Row>
      );
    });
  };

  const profitLoss = ({ entry, exit, quantity }) => {
    return (exit - entry) * quantity;
  };

  return (
    <div className="flex flex-col ml-10 mt-10">
      <div className="">
        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border py-2 px-3 text-grey-darkest"
            name="ticker"
            defaultValue="ticker"
            ref={register}
          />
          <input
            className="border py-2 px-3 text-grey-darkest"
            name="quantity"
            defaultValue="quantity"
            ref={register}
          />
          <input
            className="border py-2 px-3 text-grey-darkest"
            name="price"
            defaultValue="price"
            ref={register}
          />
          <input
            className="border py-2 px-3 text-grey-darkest"
            name="time"
            defaultValue="time"
            ref={register}
          />

          <input
            type="submit"
            className="bg-white sticky top-0 border border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
          />
        </form>
      </div>
      <Table tableHeaders={tableHeaders()} tableRows={tableRows()} />
      {/* <div className="ml-10 mt-10">
        <button
          type="button"
          className="bg-white sticky top-0 border border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
        >
          Add
        </button>
      </div> */}
    </div>
  );
};

export default Trades;
