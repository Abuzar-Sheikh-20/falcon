import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { assets, projects as allProjects } from "../assets/assets";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Collection = () => {
  const { search } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [projectType, setProjectType] = useState([]);
  const [space, setSpace] = useState([]);
  const [style, setStyle] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
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
          setVisibleCount(prev => Math.min(prev + 12, filterProducts.length));
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
              <div key={item.id} className="overflow-hidden rounded shadow text-gray-700">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-2 text-sm">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.category} • {item.subCategory.replace('-', ' ')} • {item.style}</div>
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
      </div>
    </div>
  );
};

export default Collection;
