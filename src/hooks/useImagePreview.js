import { useContext } from 'react';
import { ImagePreviewContext } from '../contexts/ImagePreviewContext';

export const useImagePreview = () => {
  const context = useContext(ImagePreviewContext);
  if (!context) {
    throw new Error('useImagePreview must be used within ImagePreviewProvider');
  }
  return context;
};
