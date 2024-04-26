import React from "react";
import devImg from "../../../public/assets/images/devoptimaImg.png";
import icon_1 from "../../../public/assets/images/Icons/icon-1.svg";
import icon_2 from "../../../public/assets/images/Icons/icon-2.svg";
import icon_3 from "../../../public/assets/images/Icons/icon-3.svg";
import icon_4 from "../../../public/assets/images/Icons/icon-4.svg";
import Image from "next/image";

const dataDev = [
  {
    icon: icon_1,
    title: "DevOps transformation",
    desc: "Reshaping businesses with DevOps expertise.",
  },
  {
    icon: icon_2,
    title: "Efficient operations",
    desc: "Streamline processes for productivity gains.",
  },
  {
    icon: icon_3,
    title: "CI/CD implementation",
    desc: "Seamless software delivery pipeline.",
  },
  {
    icon: icon_4,
    title: "Automation mastery",
    desc: "Unlock full automation potential.",
  },
];
function SectionDevoptima() {
  return (
    <div className="flex justify-between items-center gap-x-20 py-32">
      <Image src={devImg} alt="devimg" />
      <div>
        <h2 className="text-white text-5xl font-light mb-5">
          What is DevOptima?
        </h2>
        <p className="text-gray-200 text-xl font-thin">
          At DevOptima, we are a team of passionate DevOps experts committed to
          transforming the way businesses approach software development and
          operations.
        </p>
        <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-x-24 gap-y-10">
          {dataDev.map((data) => {
            return (
              <div>
                <Image
                  className="mb-3"
                  src={data.icon}
                  width={50}
                  height={50}
                  alt="icon"
                />
                <h4 className="text-white text-xl font-medium mb-2">
                  {data.title}
                </h4>
                <p className="text-gray-200 text-md font-light">{data.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SectionDevoptima;
