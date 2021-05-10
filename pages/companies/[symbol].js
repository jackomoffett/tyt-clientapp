import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Searchbar from "../../components/searchbar/searchbar.js";

const Company = () => {
  const router = useRouter();
  const { symbol } = router.query;

  useEffect(async () => {
    fetch("/api/company")
      .then((res) => res.json())
      .then((response) => console.log(response));
  }, []);

  console.log(symbol);

  return (
    <div className="flex flex-col">
      <Searchbar />
      <h1>{symbol}</h1>
    </div>
  );
};

export default Company;
