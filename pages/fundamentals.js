import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Fundamentals = () => {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const [companies, setCompanies] = useState(null);
  const [activeCompany, setActiveCompany] = useState(null);

  const onSubmit = async ({ search }) => {
    const response = await axios.get(`/api/fundamentals/search/${search}`);
    setCompanies(response.data.data);
  };

  const setCompany = (company) => {
    setActiveCompany(company);
    setCompanies(null);
    reset();
  };

  return (
    <div>
      <h1>Search fundamentals</h1>
      <div className="flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border py-2 px-3 text-grey-darkest w-50"
            name="search"
            placeholder="Search"
            ref={register}
          />
          <input
            type="submit"
            className="bg-white sticky top-0 border border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
          />
        </form>
      </div>
      <div className="flex flex-col">
        {companies != null
          ? companies.map((company, index) => {
              return (
                <div
                  className="border py-2 px-3 text-grey-darkest pointer"
                  key={index}
                  onClick={(e) => setCompany(company.symbol)}
                >
                  {company.symbol}
                </div>
              );
            })
          : null}
      </div>
      <div className="flex">
        {activeCompany ? <p>{activeCompany}</p> : null}
      </div>
    </div>
  );
};

export default Fundamentals;
