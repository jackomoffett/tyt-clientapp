import React, { useState } from "react";

export const Trades = () => {
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

  const tableRows = () => {
    return trades.map((trade, index) => {
      const pl = profitLoss(trade);
      console.log(Math.sign(pl));
      return (
        <tr key={index}>
          <td>{trade.ticker}</td>
          <td>{trade.entry}</td>
          <td>{trade.quantity}</td>
          <td>{trade.exit}</td>
          <td className={pl > 0 ? "bg-green-200" : "bg-red-200"}>{pl}</td>
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
      <table className="table-auto">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Entry</th>
            <th>Quantity</th>
            <th>Exit</th>
            <th>P/L</th>
          </tr>
        </thead>
        <tbody>{tableRows()}</tbody>
      </table>
    </>
  );
};

export default Trades;
