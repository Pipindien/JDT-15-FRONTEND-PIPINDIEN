import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0a40] text-white py-6">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-lime-300 font-bold italic text-xl mb-4 md:mb-0">
          MiniProject
        </h2>

        <p className="text-gray-400 text-xs mt-4 md:mt-0">
          © 2024 MiniProject. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
