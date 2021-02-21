import React, { useState } from "react";

export const Trades = () => {
  const [headers, setHeaders] = useState([
    "ticker",
    "entry",
    "quantity",
    "exit",
    "pl",
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
      const pl = profitLoss(trade);

      return (
        <tr key={index} className="text-left">
          <td className="p-2 px-3">{trade.ticker.toUpperCase()}</td>
          <td className="p-2 px-3">{trade.entry}</td>
          <td className="p-2 px-3">{trade.quantity}</td>
          <td className="p-2 px-3">{trade.exit}</td>
          <td
            className="p-2 px-3"
            className={pl > 0 ? "bg-green-200" : "bg-red-200"}
          >
            {pl}
          </td>
        </tr>
      );
    });
  };

  const profitLoss = ({ entry, exit, quantity }) => {
    return (exit - entry) * quantity;
  };

  return (
    // Entry form for trade
    // Table displaying trades for the day
    // Account value at the start and current value
    //
    <>
      <table className="table-auto rounded-lg whitespace-no-wrap bg-white table-striped relative">
        <thead>
          <tr className="text-left border-b border-gray-200 bg-gray-100">
            {tableHeaders()}
          </tr>
        </thead>
        <tbody>{tableRows()}</tbody>
      </table>
    </>
  );
};

export default Trades;
