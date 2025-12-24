import React from 'react';

const ImagePreview = ({ image, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <img
          src={image}
          alt="Preview"
          className="max-w-full max-h-[90vh] object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl leading-none font-bold text-black hover:bg-gray-200 transition"
          aria-label="Close preview"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ImagePreview;
