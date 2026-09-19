import React, { useState, useEffect } from 'react';

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '', 
  style = {}, 
  aspectRatio, 
  objectFit = 'cover',
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset loaded state if src changes
    setIsLoaded(false);
    setHasError(false);

    const img = new Image();
    img.src = src;
    if (img.complete) {
      setIsLoaded(true);
    } else {
      img.onload = () => setIsLoaded(true);
      img.onerror = () => {
        setIsLoaded(true);
        setHasError(true);
      };
    }
  }, [src]);

  return (
    <div 
      className={`img-buffer-wrapper ${containerClassName} ${isLoaded ? 'is-loaded' : 'is-loading'}`}
      style={{
        aspectRatio: aspectRatio || undefined,
        ...style
      }}
    >
      {/* Elegant Shimmer Skeleton + Subtle Pulse Buffer */}
      {!isLoaded && (
        <div className="img-skeleton-buffer" aria-hidden="true">
          <div className="img-buffer-shimmer"></div>
          <div className="img-buffer-spinner">
            <span className="buffer-pulse-ring"></span>
            <i className="fas fa-leaf buffer-icon"></i>
          </div>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setIsLoaded(true);
          setHasError(true);
        }}
        className={`buffered-img ${className} ${isLoaded ? 'loaded' : 'loading'} ${hasError ? 'has-error' : ''}`}
        style={{ objectFit }}
        {...props}
      />

      {/* Fallback if image fails */}
      {hasError && (
        <div className="img-fallback">
          <i className="fas fa-image"></i>
          <span>Image preview</span>
        </div>
      )}
    </div>
  );
}
