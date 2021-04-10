import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const Fundamentals = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [companyOverview, setCompanyOverview] = useState();
  const [companies, setCompanies] = useState(null);

  const onSubmit = async ({ search }) => {
    const response = await axios.get(`/api/fundamentals/search/${search}`);
    setCompanies(response.data.data);
  };

  return (
    <div>
      <h1>Search fundamentals</h1>
      <div className="flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border py-2 px-3 text-grey-darkest"
            name="search"
            placeholder="Search"
            ref={register}
          />
          <input
            type="submit"
            className="bg-white sticky top-0 border border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
          />
        </form>
        {companies != null
          ? companies.map((company, index) => {
              return <div key={index}>{company.symbol}</div>;
            })
          : null}
      </div>
    </div>
  );
};

export default Fundamentals;
