import React, { useEffect, useState } from "react";
import { projects as allProjects } from "../assets/assets";
import Title from "./Title";

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(allProjects.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"FEATURED"} text2={"PROJECTS"} />
        <p className="w-3/4 m-auto text-sm sm:text-base md:text-lg text-gray-600 mt-4 font-light">
          Discover our curated portfolio of thoughtfully designed interior spaces that showcase innovation, elegance, and timeless aesthetics.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item) => (
          <div key={item.id} className="overflow-hidden rounded shadow text-gray-700">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-2 text-sm">
              <div className="font-semibold">{item.title}</div>
              <div className="text-xs text-gray-500">{item.category} • {item.subCategory.replace('-', ' ')} • {item.style}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
