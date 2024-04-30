import React from "react";
import icon_1 from "../../../public/assets/images/Icons/icon-view-1.png";
import icon_2 from "../../../public/assets/images/Icons/icon-view-2.png";
import iconView_1 from "../../../public/assets/images/user-view-1.png";
import iconView_2 from "../../../public/assets/images/user-view-2.png";
import Image from "next/image";

const data = [
  {
    icon: icon_1,
    text: "Thanks to DevOptima, our team can focus more on innovation and less on operational challenges. Their cloud management solutions are top-notch.",
    user: {
      img: iconView_1,
      name: "John Smith",
      position: "IT Director at Reflex",
    },
  },
  {
    icon: icon_2,
    text: "DevOptima has been a game-changer for us. With their support, we've shifted our focus from operational hurdles to pushing boundaries in innovation.",
    user: {
      img: iconView_2,
      name: "Jane Doe",
      position: "Tech Lead at Dribble",
    },
  },
];
function SectionView() {
  return (
    <section className="views grid grid-cols-2 gap-x-20 items-center">
      {data.map((item) => {
        return (
          <div className="py-56">
            <Image width={64} height={64} src={item.icon} alt="icon" />
            <p className="text-white text-2xl font-thin">{item.text}</p>
            <div className="flex items-center gap-x-3 mt-8">
              <Image
                width={44}
                height={44}
                src={item.user.img}
                alt="user-img"
              />
              <div>
                <h4 className="text-white text-lg mb-1 font-light">
                  {item.user.name}
                </h4>
                <span className="subtitle-section-inners">
                  {item.user.position}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default SectionView;
