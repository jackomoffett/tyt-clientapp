import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Searchbar from "../../components/searchbar/searchbar.js";

const Overview = () => {
  const router = useRouter();
  const { symbol } = router.query;

  const [overview, setOverview] = useState(null);
  const [earnigs, setEarnings] = useState(null);

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
        });
    }
  });

  return (
    <div className="flex flex-col">
      <Searchbar />
      <h1>{symbol}</h1>
    </div>
  );
};

export default Overview;
