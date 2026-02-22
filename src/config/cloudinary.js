// Cloudinary Base Configuration
export const cloudinaryConfig = {
  cloudName: 'djov8f8fa',
  baseUrl: 'https://res.cloudinary.com/djov8f8fa/image/upload',
  videoBaseUrl: 'https://res.cloudinary.com/djov8f8fa/video/upload',
};

// Helper function to generate Cloudinary image URL
export const getCloudinaryUrl = (path, transformations = 'f_auto,q_auto') => {
  if (!path) return '';
  
  // If it's a Cloudinary URL, we MUST inject transformations
  if (path.includes('res.cloudinary.com')) {
    // Check if it already has transformations right after /upload/
    // Typical format: .../image/upload/v123456/filename.jpg
    // We want: .../image/upload/TRANSFORMATIONS/v123456/filename.jpg
    const uploadIndex = path.indexOf('/upload/');
    if (uploadIndex !== -1) {
      const basePath = path.substring(0, uploadIndex + 8); // includes '/upload/'
      const restOfPath = path.substring(uploadIndex + 8);
      
      // If it already has transformations (e.g. c_fill,...), replace them or we can just prepend ours.
      // To be safe and simple, we inject our new transformations before the version number (v...) or filename.
      // But it's safer to just strip old transforms if we know they exist. Let's assume we prepend.
      // Actually, standard practice is to insert right after /upload/
      
      // Prevent double applying if the transformations string is already there
      if (restOfPath.startsWith(transformations + '/')) {
          return path;
      }

      return `${basePath}${transformations}/${restOfPath}`;
    }
  }

  // If path is some other external URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Generate Cloudinary URL dengan transformations untuk relative paths
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
