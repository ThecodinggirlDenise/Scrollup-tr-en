import React from "react";
import Image from "next/image";

interface CardProps {
  title?: string;
  description?: string;
  imageUrl: string;
  color: "white" | "grey";
  onlyImage?: boolean;
  smallImage?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  color,
  smallImage = false,
  onlyImage = false,
}) => {
  const getCardColor = () => {
    switch (color) {
      case "white":
        return "bg-white text-black";
      case "grey":
        return "bg-[#F9F9FB] text-black";
      default:
        return "";
    }
  };

  return (
    <div className={`flex h-full w-full rounded-md p-4 ${getCardColor()}`}>
      <div
        className={`h-full ${
          onlyImage ? "w-full flex items-center justify-center" : "w-1/3"
        } justify-center pt-2`}
      >
        <Image
          src={imageUrl}
          alt="Image"
          width={smallImage ? 70 : 130}
          height={smallImage ? 100 : 100}
        />
      </div>
      {title && description && (
        <div className="flex flex-col w-2/3 font-sans px-1 justify-center">
          <div className="mb-4 text-[#030407] font-medium text-base">
            {title}
          </div>
          <div className="text-[#606476]">{description}</div>
        </div>
      )}
    </div>
  );
};

export default Card;
