import React, { useEffect, useMemo, useRef, useState } from 'react';
import { projects as allProjects } from '../assets/assets';

const BATCH_SIZE = 12;

export default function PortfolioGallery() {
  const [typeFilter, setTypeFilter] = useState(null);
  const [spaceFilter, setSpaceFilter] = useState(null);
  const [styleFilter, setStyleFilter] = useState(null);

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
          <figure key={p.id} className="overflow-hidden rounded shadow">
            <img src={p.image} alt={p.title} loading="lazy" className="w-full h-48 object-cover" />
            <figcaption className="p-2 text-sm">
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-gray-500">{p.category} • {p.subCategory.replace('-', ' ')} • {p.style}</div>
            </figcaption>
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
