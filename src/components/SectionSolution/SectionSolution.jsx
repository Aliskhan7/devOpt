import React from "react";
import Image from "next/image";
import img1 from "../../../public/assets/images/solution-img-1.png";
import img2 from "../../../public/assets/images/solution-img-2.png";
import img3 from "../../../public/assets/images/solution-img-3.png";

const data = [
  {
    img: img1,
    title: "Continuous Integration & Deployment",
    desc: "Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.",
  },
  {
    img: img2,
    title: "Cloud Solutions & Infrastructure Management",
    desc: "Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.",
  },
  {
    img: img3,
    title: "Automated Testing & Quality Assurance",
    desc: "Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.",
  },
];
function SectionSolution() {
  return (
    <div className="solution mb-8">
      <div className="max-w-[580px] mx-auto">
        <h2 className="title-section mb-5 text-center">
          Innovative solutions for operational excellence
        </h2>
        <p className="subtitle-section text-center">
          Tailored DevOps expertise driving your business momentum. Personalized
          solutions for growth and evolution.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-10 mt-14">
        {data.map((item) => {
          return (
            <div className="solution-inner rounded-2xl flex flex-col justify-between ">
              <Image
                width="100%"
                height="100%"
                className="mx-auto"
                src={item.img}
                alt="img"
              />
              <div className="px-8 pb-8">
                <h4 className="title-section-inners mb-3">{item.title}</h4>
                <p className="subtitle-section-inners">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionSolution;
