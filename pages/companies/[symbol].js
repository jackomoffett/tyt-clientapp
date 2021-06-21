import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Searchbar from "../../components/searchbar/searchbar.js";
import Card from "../../components/core/card.js";

const Overview = () => {
  const router = useRouter();
  const { symbol } = router.query;

  const [overview, setOverview] = useState(null);
  const [earnings, setEarnings] = useState(null);

  useEffect(async () => {
    if (symbol) {
      // await fetch(`/api/overview/${symbol}`)
      //   .then((res) => res.json())
      //   .then((json) => {
      //     console.log(json);
      //   });
      await fetch(`/api/earnings/${symbol}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(
            json.quoteSummary.result[0].earnings.earningsChart.quarterly
          );
          let quarterlyEarnings =
            json.quoteSummary.result[0].earnings.earningsChart.quarterly;

          setEarnings(quarterlyEarnings);
        });
    }
  }, [symbol]);

  const percentageChange = () => {
    return 10;
  };

  return (
    <div className="flex flex-col">
      <Searchbar />
      <h1>{symbol}</h1>
      {/* <Card></Card> */}
      {earnings !== null ? (
        <table class="table-auto text-center">
          <thead>
            <tr class="border">
              <th class="px-4 py-2 tracking-wider sticky">Quarterly</th>
              <th class="px-4 py-2 tracking-wider sticky">EPS</th>
              <th class="px-4 py-2 tracking-wider sticky">%Chg</th>
            </tr>
          </thead>
          <tbody className="border">
            {earnings.map((earning, key) => (
              <tr key={key}>
                <td class="px-4 py-1">{earning.date}</td>
                <td class="px-4 py-1">{earning.actual.raw}</td>
                <td class="px-4 py-1">{percentageChange()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default Overview;
