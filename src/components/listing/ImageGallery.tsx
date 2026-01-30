'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) {
    return (
      <div className="aspect-square w-full rounded-xl bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400">No image</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <img
          src={images[activeIndex]}
          alt={`${title} - ${activeIndex + 1}`}
          className="h-full w-full object-cover"
        />

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 shadow-md hover:bg-white"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-white/80 shadow-md hover:bg-white"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {/* Image counter */}
        <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all',
                activeIndex === index
                  ? 'border-amber-500'
                  : 'border-transparent hover:border-gray-300'
              )}
            >
              <img
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
