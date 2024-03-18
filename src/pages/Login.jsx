import React from "react";
import OtpInput from "../components/OtpInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onOtpSubmit = (otp) => {
    console.log("Login Successful", otp);
  };
  return (
    <div>
      <div className=" flex justify-center  items-center w-screen h-screen ">
        <div className="  border-2 border-blue-500 p-5 flex flex-col justify-center items-center   rounded-xl ">
          <p className=" font-bold  text-2xl ">Login</p>
          <p className=" font-bold text-xl ">Enter Your Otp</p>

          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          <button
            onClick={() => {
              navigate("/home");
            }}
            className=" p-2 my-3  bg-red-500 text-white text-md  "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
