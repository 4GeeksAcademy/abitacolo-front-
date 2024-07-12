import React from "react";

const FooterHome = () => {
  return (
    <div className="flex justify-center my-16 gap-14 ">
      <div className=" grid place-items-center  max-md:hidden">
        <div className="bg-black h-1.5  w-36"></div>
      </div>
      <div>
        <p className="text-3xl text-center">
          en abitacolo creemos que la
          <br /> <span className="font-bold">historia</span> de cada{" "}
          <span className="line-through">ser humano </span>
          es la
          <br /> que lo hace único y maravilloso
        </p>
      </div>
      <div className="grid place-items-center max-md:hidden">
        <div className="bg-black h-1.5  w-36"></div>
      </div>
    </div>
  );
};

export default FooterHome;
