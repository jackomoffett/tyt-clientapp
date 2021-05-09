import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import useRouter from "next/router";

export const Searchbar = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter;
  const [companies, setCompanies] = useState(null);

  const query = watch("query");

  // useEffect(async () => {
  //   console.log(query);
  //   if (query !== null && query !== "") {
  //     const response = await axios.get(`/api/fundamentals/search/${query}`);
  //     setCompanies(response.data.data);
  //   } else {
  //     setCompanies(null);
  //   }
  // }, [query]);

  // useEffect(async () => {
  //   console.log(query);
  //   fetch("/api/company")
  //     .then((res) => res.json())
  //     .then((response) => console.log(response));
  // }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    setCompanies(null);
    router.push(`/companies/${query}`);
  };

  return (
    <>
      <div className="flex">
        <form onSubmit={onSubmit}>
          <input
            className="border py-2 px-3 text-grey-darkest w-50"
            name="query"
            placeholder="Search"
            autoComplete="off"
            ref={register}
          />
        </form>
      </div>
      <div className="flex flex-col">
        {companies != null
          ? companies.map((company, index) => (
              <li
                onClick={(e) => setCompanies(null)}
                className="list-none flex border hover:bg-gray-50 cursor-pointer"
                key={index}
              >
                <Link href={`/companies/${encodeURIComponent(company.symbol)}`}>
                  <div className="flex py-2 px-3 w-full">
                    <a className="text-grey-darkest mr-4 w-32">
                      {company.symbol}
                    </a>
                    <p className="text-gray-500">{company.name}</p>
                  </div>
                </Link>
              </li>
            ))
          : null}
      </div>
    </>
  );
};

export default Searchbar;
