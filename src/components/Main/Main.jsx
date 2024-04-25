import React from "react";
import Image from "next/image";
import mainBg from "../../../public/assets/images/main-bg.png";
import Button from "@/components/Button/Button";

function Main() {
  return (
    <div className="main flex justify-between items-center py-20">
      <div className="z-10">
        <h1 className="text-white text-7xl">
          Revolutionize <br /> your DevOps journey with DevOptima
        </h1>
        <p className="text-xl text-gray-200 pt-7 pb-8 font-thin">
          Empower teams to innovate faster through streamlined development,{" "}
          <br />
          efficient automated workflows, and reliable scaling.
        </p>
        <form action="" className="form">
          <input
            placeholder="Your business email..."
            type="text"
            className="input"
          />
          <Button
            classStyle="btn-input"
            name="Free trial"
            bg="bg-blue-200"
            p="py-3 px-9"
          />
        </form>
      </div>
      <Image className="z-10" width={590} src={mainBg} alt="main-img" />
    </div>
  );
}

export default Main;
