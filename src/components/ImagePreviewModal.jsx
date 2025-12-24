import React from 'react';
import { useImagePreview } from '../hooks/useImagePreview';

const ImagePreviewModal = () => {
  const { isOpen, imageUrl, closePreview } = useImagePreview();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={closePreview}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Preview"
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
        <button
          onClick={closePreview}
          className="absolute top-4 right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl leading-none font-bold text-black hover:bg-gray-200 transition duration-200 shadow-lg"
          aria-label="Close preview"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default ImagePreviewModal;
