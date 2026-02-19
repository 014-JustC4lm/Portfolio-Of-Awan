// Cloudinary Base Configuration
export const cloudinaryConfig = {
  cloudName: 'djov8f8fa',
  baseUrl: 'https://res.cloudinary.com/djov8f8fa/image/upload',
  videoBaseUrl: 'https://res.cloudinary.com/djov8f8fa/video/upload',
};

// Helper function to generate Cloudinary image URL
export const getCloudinaryUrl = (path, transformations = 'f_auto,q_auto') => {
  if (!path) return '';
  
  // If path already has http/https, return as-is (untuk backward compatibility)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Generate Cloudinary URL dengan transformations
  return `${cloudinaryConfig.baseUrl}/${transformations}/${path}`;
};

// Helper untuk video URL
export const getCloudinaryVideoUrl = (path) => {
  if (!path) return '';
  
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  return `${cloudinaryConfig.videoBaseUrl}/${path}`;
};
