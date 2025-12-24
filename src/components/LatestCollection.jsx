import React, { useEffect, useState } from "react";
import { projects as allProjects } from "../assets/assets";
import Title from "./Title";
import { useImagePreview } from "../hooks/useImagePreview";

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const { openPreview } = useImagePreview();

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
          <div key={item.id} className="relative overflow-hidden rounded shadow text-gray-700 cursor-pointer group" onClick={() => openPreview(item.image)}>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
                </svg>
                <span className="text-white text-sm font-light tracking-wide">View</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
