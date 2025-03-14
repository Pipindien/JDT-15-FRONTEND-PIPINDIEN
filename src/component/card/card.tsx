import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-xl overflow-hidden bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto transition-transform transform hover:scale-105 duration-300">
      <img
        className="h-36 sm:h-40 md:h-60 lg:h-72 w-full object-cover"
        src={imgSrc}
        alt={`project ${title}`}
      />

      <div className="p-4 sm:p-5 md:p-6 space-y-2 flex flex-col flex-grow">
        <h1 className="font-semibold text-md sm:text-lg md:text-xl">{title}</h1>
        {description && (
          <p className="text-xs sm:text-sm md:text-base text-gray-600 text-justify flex-grow">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
