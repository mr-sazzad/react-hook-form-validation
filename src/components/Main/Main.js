import {
  TextField
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Main = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleData = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div
      className="md:flex mt-5 md:mt-10 mx-10"
      style={{ width: "100vw - 30px" }}
    >
      <div className="w-6/12 hidden md:block">
        <h1>WELCOME FOR FORM VALIDATION</h1>
      </div>

      <form onSubmit={handleSubmit(handleData)} className="md:w-6/12 w-full">
        <div className="w-full flex mb-5">
          <div className="mr-2 w-6/12">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              type="text"
              {...register("firstName", { required: true})}
            />
            {errors?.firstName?.type === "required" && <small className="text-red-900">This field is required</small>}
            {/* {errors?.firstName?.type === "required" && <small>This field is required</small>} */}
          </div>
          <div className="w-6/12">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              type="text"
              {...register("lastName", { required: true})}
            />
            {errors?.lastName?.type === "required" && <small className="text-red-900">This field is required</small>}
          </div>
        </div>
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          {...register("email", { required: true})}
        />
        {errors?.email?.type === "required" && <small className="text-red-900">This field is required</small>}
        <div className="w-full flex mt-5">
          <div className="w-6/12 mr-2">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              type="number"
              {...register("phone", { required: true})}
            />
            {errors?.phone?.type === "required" && <small className="text-red-900">This field is required</small>}
          </div>
          <div className="w-6/12">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              {...register("password", { required: true})}
            />
            {errors?.password?.type === "required" && <small className="text-red-900">This field is required</small>}
          </div>
        </div>
        <button type="submit" className="bg-green-200 px-5 py-2 mt-5 rounded hover:bg-green-300 hover:shadow-md" >submit</button>
      </form>
    </div>
  );
};

export default Main;
