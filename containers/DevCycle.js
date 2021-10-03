import React from "react";
import Image from "next/image";

import { devProcessImages } from "../constants/consants";

const Stage = ({ url, name, description }) => {
  return (
    <div className="p-4 mb-2 md:mb-10 mt-10 ">
      <div className="margin-auto">
        <Image src={url} height="100px" width="100px" />
      </div>
      <div className="text-left mt-10">
        <p className="text-xl md:text-2xl font-bold">{name}</p>
        <p className="text-xs opacity-50">{description}</p>
      </div>
    </div>
  );
};

const DevCycle = () => {
  return (
    <div className="w-full bg-purple text-white  p-4 md:p-6 md:pt-20">
      <div className="md:w-7/12">
        <h3 className="text-4xl md:text-6xl">Our Development Cycle...</h3>
        <p className="pt-4">
          With several offices in Ukraine and beyond, you’re more than welcome
          to come to visit us at any convenient time and meet your team in
          person.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3">
        {devProcessImages.map((process) => (
          <Stage
            url={process.url}
            name={process.name}
            key={process.key}
            description={process.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DevCycle;
