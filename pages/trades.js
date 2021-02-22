import React, { useState } from "react";
import { Table, Row, Cell } from "../components";

export const Trades = () => {
  const [headers, setHeaders] = useState([
    "ticker",
    "entry",
    "quantity",
    "exit",
  ]);
  const [trades, setTrades] = useState([
    {
      ticker: "amd",
      entry: 80,
      exit: 82,
      quantity: 20,
    },
    {
      ticker: "nio",
      entry: 60,
      exit: 32,
      quantity: 20,
    },
    {
      ticker: "tsla",
      entry: 100,
      exit: 95,
      quantity: 20,
    },
    {
      ticker: "gme",
      entry: 60,
      exit: 400,
      quantity: 10,
    },
  ]);

  const tableHeaders = () => {
    return headers.map((header, index) => {
      return (
        <th
          key={index}
          className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
        >
          {header}
        </th>
      );
    });
  };

  const tableRows = () => {
    return trades.map((trade, index) => {
      //   const pl = profitLoss(trade);
      return (
        <Row key={index}>
          <Cell>{trade.ticker}</Cell>
          <Cell>{trade.entry}</Cell>
          <Cell>{trade.quantity}</Cell>
          <Cell>{trade.exit}</Cell>
          {/* <td
            className={`px-6 py-2 tracking-wider uppercase ${
              pl > 0 ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {pl > 0 ? `+${pl}` : pl}
          </td> */}
        </Row>
      );
    });
  };

  const profitLoss = ({ entry, exit, quantity }) => {
    return (exit - entry) * quantity;
  };

  return (
    <div className="flex ">
      <Table tableHeaders={tableHeaders()} tableRows={tableRows()} />
      <div className="ml-10 mt-10">
        <button
          type="button"
          className="bg-white sticky top-0 border border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Trades;
