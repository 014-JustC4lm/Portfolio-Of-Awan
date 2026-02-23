import { useState } from 'react';
import { getCloudinaryUrl } from '../config/cloudinary';

/**
 * CloudImage - A highly optimized, responsive image component.
 * Uses LQIP (Low Quality Image Placeholder) and Cloudinary responsive srcSets.
 */
const CloudImage = ({ 
  src, 
  alt, 
  className = "", 
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  aspectRatio = "auto",
  objectFit = "cover"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // 1. LQIP (Ultra small, blurry placeholder)
  // e_blur:1000 applies a heavy Gaussian blur on Cloudinary's server
  const placeholderUrl = getCloudinaryUrl(src, 'w_50,q_10,f_auto,e_blur:1000');

  // 2. Responsive SrcSet URLs
  // The browser will automatically download the smallest necessary image
  const srcsetSm = getCloudinaryUrl(src, 'w_640,c_fill,f_auto,q_auto');
  const srcsetMd = getCloudinaryUrl(src, 'w_1024,c_fill,f_auto,q_auto');
  const srcsetLg = getCloudinaryUrl(src, 'w_1400,c_fill,f_auto,q_auto');
  
  // 3. Fallback src (for browsers that don't support srcset/picture)
  const fallbackSrc = getCloudinaryUrl(src, 'w_800,c_fill,f_auto,q_auto');

  return (
    <div 
      className={`relative overflow-hidden bg-gray-200 dark:bg-gray-800 ${className}`} 
      style={{ aspectRatio }}
    >
      {/* 
        LQIP Placeholder Image 
        This is mounted immediately and sits behind the main image.
      */}
      <img
        src={placeholderUrl}
        alt={`${alt} placeholder`}
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-md pointer-events-none"
        aria-hidden="true"
      />

      {/* 
        Main Responsive Picture Element 
        Transitions opacity from 0 to 1 when fully loaded.
      */}
      <picture>
        <source srcSet={`${srcsetSm} 640w, ${srcsetMd} 1024w, ${srcsetLg} 1400w`} sizes={sizes} />
        <img
          src={fallbackSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{ objectFit }}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </picture>
    </div>
  );
};

export default CloudImage;
