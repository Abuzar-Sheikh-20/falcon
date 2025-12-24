import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets, projects as allProjects } from "../assets/assets";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { useImagePreview } from "../hooks/useImagePreview";

const Collection = () => {
  const { search } = useContext(ShopContext);
  const { openPreview } = useImagePreview();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [projectType, setProjectType] = useState([]);
  const [space, setSpace] = useState([]);
  const [style, setStyle] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = React.useRef(null);

  const toggleProjectType = (e) => {
    if (projectType.includes(e.target.value)) {
      setProjectType((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setProjectType((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSpace = (e) => {
    if (space.includes(e.target.value)) {
      setSpace((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSpace((prev) => [...prev, e.target.value]);
    }
  };

  const toggleStyle = (e) => {
    if (style.includes(e.target.value)) {
      setStyle((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setStyle((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = allProjects.slice();

    if (projectType.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        projectType.includes(item.category)
      );
    }

    if (search) {
      productsCopy = productsCopy.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    }

    if (space.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        space.includes(item.subCategory)
      );
    }

    if (style.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        style.includes(item.style)
      );
    }

    setFilterProducts(productsCopy);
    setVisibleCount(12);
  };

  const sortProducts = () => {
    let filterProductCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [projectType, space, style, search]);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          // Simulate loading delay for better UX
          setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + 12, filterProducts.length));
            setIsLoading(false);
          }, 1000);
        }
      });
    }, { root: null, rootMargin: '200px', threshold: 0.1 });

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [filterProducts.length]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left Sidebar - Filters */}

      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="my-2 flex items-center gap-2 text-xl cursor-pointer font-light tracking-wide"
        >
          FILTERS
          <img
            className={`h-2 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Project Type Filter */}

        <div className="pl-5 py-3 mt-4">
          <button onClick={() => { setProjectType([]); setSpace([]); setStyle([]); setFilterProducts(allProjects.slice()); }} className="px-3 py-1 rounded bg-gray-100 text-sm">All</button>
        </div>

        <div
          className={`pl-5 py-3 border border-gray-300 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-light tracking-wide text-gray-900">PROJECT TYPE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"residential"}
                onChange={toggleProjectType}
              />
              Residential
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"commercial"}
                onChange={toggleProjectType}
              />
              Commercial
            </p>
          </div>
        </div>

        {/* Space Filter */}

        <div
          className={`pl-5 py-3 border border-gray-300 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-light tracking-wide text-gray-900">SPACE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"living-room"}
                onChange={toggleSpace}
              />
              Living Room
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"bedroom"}
                onChange={toggleSpace}
              />
              Bedroom
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"kitchen"}
                onChange={toggleSpace}
              />
              Kitchen
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"office"}
                onChange={toggleSpace}
              />
              Office
            </p>
          </div>
        </div>

        {/* Style Filter */}

        <div
          className={`pl-5 py-3 border border-gray-300 my-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-light tracking-wide text-gray-900">STYLE</p>

          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"modern"}
                onChange={toggleStyle}
              />
              Modern
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"minimal"}
                onChange={toggleStyle}
              />
              Minimal
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={"luxury"}
                onChange={toggleStyle}
              />
              Luxury
            </p>
          </div>
        </div>
      </div>

      {/* Right Content Area */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"OUR"} text2={"PROJECTS"} />
        </div>

        {/* Projects Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.slice(0, visibleCount).map((item) => (
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
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-base py-12">
              More spaces coming soon. <br /> Crafting perfection. <br />
              <Link
                className="bg-gray-900 text-white rounded-lg py-3 px-6 hover:bg-gray-800 transition mt-4 inline-block text-sm font-light"
                to={'/contact'}
              >
                Contact for Consultation
              </Link>
            </p>
          )}
        </div>
        <div ref={sentinelRef} className="h-8 mt-8" />
        
        {/* Animated Loader */}
        {isLoading && (
          <div className="flex justify-center items-center my-12">
            <div className="relative w-16 h-16">
              {/* Outer rotating circle */}
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gray-800 border-r-gray-800 animate-spin"></div>
              
              {/* Middle rotating circle (opposite direction) */}
              <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-gray-400 border-l-gray-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              
              {/* Inner dot */}
              <div className="absolute inset-5 rounded-full bg-gradient-to-r from-gray-800 to-gray-400 animate-pulse"></div>
            </div>
          </div>
        )}
        
        {/* Loading complete message */}
        {!isLoading && visibleCount < filterProducts.length && (
          <div className="text-center mt-8 text-sm text-gray-500 animate-pulse">
            Scroll down to load more...
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
