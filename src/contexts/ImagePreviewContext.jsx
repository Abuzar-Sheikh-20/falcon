import React, { createContext, useState } from 'react';

export const ImagePreviewContext = createContext();

export const ImagePreviewProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const openPreview = (url) => {
    setImageUrl(url);
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closePreview = () => {
    setIsOpen(false);
    setImageUrl(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <ImagePreviewContext.Provider value={{ isOpen, imageUrl, openPreview, closePreview }}>
      {children}
    </ImagePreviewContext.Provider>
  );
};
