import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Searchbar from "../../components/searchbar/searchbar.js";

const Overview = () => {
  const router = useRouter();
  const { symbol } = router.query;

  useEffect(async () => {
    if (symbol) {
      await fetch(`/api/overview/${symbol}`)
        .then((res) => res.json())
        .then((response) => console.log(response));
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
