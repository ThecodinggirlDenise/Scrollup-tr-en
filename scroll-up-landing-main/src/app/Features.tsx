import Image from "next/image";
import React from "react";

interface FeaturesProps {
  text: string;
}

const Features: React.FC<FeaturesProps> = ({ text }) => {
  return (
    <div className="w-full flex">
      <div>
        <Image src={"/tick.svg"} alt="alt" width={24} height={24} />
      </div>
      <div className="flex ml-5 items-center">
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Features;
