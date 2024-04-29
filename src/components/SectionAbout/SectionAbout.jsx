import React from "react";
import Button from "@/components/Button/Button";

function SectionAbout() {
  return (
    <div className="about text-center flex flex-col mx-auto items-center pt-8 pb-44">
      <h2 className="about-title">Ready to elevate your DevOps strategy?</h2>
      <p className="text-white text-xl font-thin mt-5 mb-10">
        Join the multitude of companies benefiting from optimized DevOps
        practices. Contact us to discover how DevOptima can help your business.
      </p>
      <div className="flex gap-x-4">
        <Button name="Contact us" bg="bg-blue-200" p="px-9 py-4" />
        <Button name="Try for free" bg="bg-blue-300" p="px-9 py-4" />
      </div>
    </div>
  );
}

export default SectionAbout;
