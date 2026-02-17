import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className='w-full font-sans group cursor-pointer'>
      {/* Image Skeleton */}
      <div className="relative w-full h-75 bg-gray-200 mb-4 overflow-hidden rounded-md animate-pulse">
        <div className="absolute inset-0 bg-gray-300"></div>
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col gap-1">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded animate-pulse mb-2"></div>

        {/* Category */}
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mb-2"></div>

        {/* Price */}
        <div className="h-5 bg-gray-200 rounded animate-pulse w-1/2 mb-3"></div>

        {/* Sizes */}
        <div className="flex gap-2 mb-3">
          <div className="w-9 h-9 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-9 h-9 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-9 h-9 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Colors */}
        <div className="flex gap-2 mb-4">
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Button */}
        <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;