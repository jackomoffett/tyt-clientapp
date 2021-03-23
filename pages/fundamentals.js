import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Fundamentals = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => console.log(data);

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
      </div>
    </div>
  );
};

export default Fundamentals;
