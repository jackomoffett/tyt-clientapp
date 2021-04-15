import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";

export const Searchbar = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const [companies, setCompanies] = useState(null);

  const onSubmit = async ({ search }) => {
    const response = await axios.get(`/api/fundamentals/search/${search}`);
    setCompanies(response.data.data);
  };
  return (
    <>
      <div className="flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border py-2 px-3 text-grey-darkest w-50"
            name="search"
            placeholder="Search"
            ref={register}
          />
          {/* <input
            type="submit"
            className="bg-white sticky top-0 border border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
          /> */}
        </form>
      </div>
      <div className="flex flex-col">
        {companies != null
          ? companies.map((company, index) => (
              <li className="list-none flex w-50" key={index}>
                <Link href={`/companies/${encodeURIComponent(company.symbol)}`}>
                  <a className="border py-2 px-3 text-grey-darkest w-50">
                    {company.symbol}
                  </a>
                </Link>
              </li>
            ))
          : null}
      </div>
    </>
  );
};

export default Searchbar;
