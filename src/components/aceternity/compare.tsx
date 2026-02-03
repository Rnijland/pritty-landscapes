'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CompareProps {
  firstImage: string;
  secondImage: string;
  firstImageAlt?: string;
  secondImageAlt?: string;
  className?: string;
  firstImageClassName?: string;
  secondImageClassname?: string;
  initialSliderPercentage?: number;
  slideMode?: 'hover' | 'drag';
  showHandlebar?: boolean;
  autoplay?: boolean;
  autoplayDuration?: number;
}

export function Compare({
  firstImage,
  secondImage,
  firstImageAlt = 'Before image',
  secondImageAlt = 'After image',
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 50,
  slideMode = 'drag',
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000,
}: CompareProps) {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const updateSliderPosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderXPercent(percent);
    },
    []
  );

  const handleMouseDown = useCallback(() => {
    if (slideMode === 'drag') {
      setIsDragging(true);
    }
  }, [slideMode]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent | MouseEvent) => {
      if (slideMode === 'hover') {
        updateSliderPosition(e.clientX);
      } else if (slideMode === 'drag' && isDragging) {
        updateSliderPosition(e.clientX);
      }
    },
    [isDragging, slideMode, updateSliderPosition]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent | TouchEvent) => {
      if (e.touches.length > 0) {
        updateSliderPosition(e.touches[0].clientX);
      }
    },
    [updateSliderPosition]
  );

  useEffect(() => {
    if (isDragging) {
      const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e);
      const handleGlobalMouseUp = () => handleMouseUp();
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleGlobalMouseMove);
        window.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    if (autoplay) {
      const direction = { current: 1 };
      autoplayRef.current = setInterval(() => {
        setSliderXPercent((prev) => {
          if (prev >= 95) direction.current = -1;
          if (prev <= 5) direction.current = 1;

          return prev + direction.current * 0.5;
        });
      }, autoplayDuration / 200);

      return () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
      };
    }
  }, [autoplay, autoplayDuration]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full overflow-hidden select-none rounded-xl',
        className
      )}
      onMouseMove={slideMode === 'hover' ? handleMouseMove : undefined}
      onMouseDown={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      style={{ cursor: slideMode === 'drag' ? 'ew-resize' : 'default' }}
    >
      {/* Second Image (After - Full width, behind) */}
      <div className="absolute inset-0">
        <Image
          src={secondImage}
          alt={secondImageAlt}
          fill
          className={cn('object-cover', secondImageClassname)}
          priority
        />
      </div>

      {/* First Image (Before - Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)` }}
      >
        <Image
          src={firstImage}
          alt={firstImageAlt}
          fill
          className={cn('object-cover', firstImageClassName)}
          priority
        />
      </div>

      {/* Slider Handle */}
      <AnimatePresence>
        {showHandlebar && (
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
            style={{ left: `${sliderXPercent}%`, transform: 'translateX(-50%)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Handle Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
              <div className="flex gap-0.5">
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
        Before
      </div>
      <div className="absolute bottom-4 right-4 px-3 py-1 bg-primary text-white text-sm rounded-full">
        After
      </div>
    </div>
  );
}

export default Compare;
