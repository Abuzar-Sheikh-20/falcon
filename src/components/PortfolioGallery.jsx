import React, { useEffect, useMemo, useRef, useState } from 'react';
import { projects as allProjects } from '../assets/assets';
import { useImagePreview } from '../hooks/useImagePreview';

const BATCH_SIZE = 12;

export default function PortfolioGallery() {
  const [typeFilter, setTypeFilter] = useState(null);
  const [spaceFilter, setSpaceFilter] = useState(null);
  const [styleFilter, setStyleFilter] = useState(null);
  const { openPreview } = useImagePreview();

  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const sentinelRef = useRef(null);
  const observerRef = useRef(null);

  const filtered = useMemo(() => {
    return allProjects.filter(p => {
      if (typeFilter && p.category !== typeFilter) return false;
      if (spaceFilter && p.subCategory !== spaceFilter) return false;
      if (styleFilter && p.style !== styleFilter) return false;
      return true;
    });
  }, [typeFilter, spaceFilter, styleFilter]);

  const visible = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount]);

  useEffect(() => {
    // reset when filters change
    setVisibleCount(BATCH_SIZE);
    // ensure observer re-attaches
    if (observerRef.current) observerRef.current.disconnect();
  }, [typeFilter, spaceFilter, styleFilter]);

  useEffect(() => {
    if (!sentinelRef.current) return;

    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleCount(prev => Math.min(prev + BATCH_SIZE, filtered.length));
        }
      });
    }, { root: null, rootMargin: '200px', threshold: 0.1 });

    observerRef.current.observe(sentinelRef.current);

    return () => observerRef.current && observerRef.current.disconnect();
  }, [filtered]);

  const clearAll = () => {
    setTypeFilter(null);
    setSpaceFilter(null);
    setStyleFilter(null);
    setVisibleCount(BATCH_SIZE);
  };

  const toggleOrSet = (setter, value) => setter(cur => (cur === value ? null : value));

  return (
    <section id="portfolio-gallery" className="p-4">
      <div className="mb-4">
        <div className="flex gap-2 flex-wrap">
          <button onClick={clearAll} className={`px-3 py-1 rounded ${!typeFilter && !spaceFilter && !styleFilter ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
            All
          </button>

          <button onClick={() => toggleOrSet(setTypeFilter, 'residential')} className={`px-3 py-1 rounded ${typeFilter === 'residential' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Residential</button>
          <button onClick={() => toggleOrSet(setTypeFilter, 'commercial')} className={`px-3 py-1 rounded ${typeFilter === 'commercial' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>Commercial</button>

          <button onClick={() => toggleOrSet(setSpaceFilter, 'living-room')} className={`px-3 py-1 rounded ${spaceFilter === 'living-room' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>Living Room</button>
          <button onClick={() => toggleOrSet(setSpaceFilter, 'bedroom')} className={`px-3 py-1 rounded ${spaceFilter === 'bedroom' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>Bedroom</button>
          <button onClick={() => toggleOrSet(setSpaceFilter, 'kitchen')} className={`px-3 py-1 rounded ${spaceFilter === 'kitchen' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>Kitchen</button>
          <button onClick={() => toggleOrSet(setSpaceFilter, 'office')} className={`px-3 py-1 rounded ${spaceFilter === 'office' ? 'bg-green-600 text-white' : 'bg-gray-100'}`}>Office</button>

          <button onClick={() => toggleOrSet(setStyleFilter, 'modern')} className={`px-3 py-1 rounded ${styleFilter === 'modern' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}>Modern</button>
          <button onClick={() => toggleOrSet(setStyleFilter, 'minimal')} className={`px-3 py-1 rounded ${styleFilter === 'minimal' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}>Minimal</button>
          <button onClick={() => toggleOrSet(setStyleFilter, 'luxury')} className={`px-3 py-1 rounded ${styleFilter === 'luxury' ? 'bg-purple-600 text-white' : 'bg-gray-100'}`}>Luxury</button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {visible.map(p => (
          <figure key={p.id} className="relative overflow-hidden rounded shadow cursor-pointer group" onClick={() => openPreview(p.image)}>
            <img src={p.image} alt={p.title} loading="lazy" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center gap-2">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
                </svg>
                <span className="text-white text-sm font-light tracking-wide">View</span>
              </div>
            </div>
          </figure>
        ))}
      </div>

      <div ref={sentinelRef} className="h-8" />

      <div className="mt-4 text-center text-sm text-gray-500">
        {filtered.length === 0 && <div>No projects match selected filters.</div>}
        {filtered.length > 0 && visible.length < filtered.length && <div>Loading more...</div>}
        {filtered.length > 0 && visible.length === filtered.length && <div>End of results.</div>}
      </div>
    </section>
  );
}
