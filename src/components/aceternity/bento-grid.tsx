'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * BentoGrid - A metro-style grid layout with variable cell sizes
 * Inspired by Aceternity UI's bento-grid component
 *
 * Features:
 * - Flexible grid with different cell sizes (1x1, 2x1, 1x2, 2x2)
 * - Smooth hover animations with elevation and glow
 * - Responsive breakpoints
 * - Accessibility: respects prefers-reduced-motion
 */

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  children: ReactNode;
  className?: string;
  /**
   * Size variant for the grid item
   * - 'default': 1x1 cell
   * - 'wide': 2x1 (spans 2 columns)
   * - 'tall': 1x2 (spans 2 rows)
   * - 'large': 2x2 (spans 2 columns and 2 rows)
   */
  size?: 'default' | 'wide' | 'tall' | 'large';
  /** Optional click handler for interactive items */
  onClick?: () => void;
  /** Disable hover animations */
  disableHover?: boolean;
}

/**
 * Container component for the bento grid
 */
export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        // Base grid setup
        'grid gap-4',
        // Responsive columns: 1 on mobile, 2 on tablet, 4 on desktop
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        // Auto rows for consistent sizing
        'auto-rows-[minmax(180px,_1fr)]',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Individual item within the bento grid
 */
export function BentoGridItem({
  children,
  className,
  size = 'default',
  onClick,
  disableHover = false,
}: BentoGridItemProps) {
  // Size classes based on variant
  const sizeClasses = {
    default: '',
    wide: 'sm:col-span-2',
    tall: 'sm:row-span-2',
    large: 'sm:col-span-2 sm:row-span-2',
  };

  // Animation variants for hover effect
  const hoverVariants = {
    initial: {
      scale: 1,
      y: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    hover: {
      scale: 1.02,
      y: -4,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };

  return (
    <motion.div
      className={cn(
        // Base styling
        'relative overflow-hidden rounded-xl',
        'bg-card border border-border',
        // Cursor pointer if clickable
        onClick && 'cursor-pointer',
        // Size variant
        sizeClasses[size],
        // Custom classes
        className
      )}
      initial="initial"
      whileHover={disableHover ? undefined : 'hover'}
      variants={disableHover ? undefined : hoverVariants}
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth feel
      }}
      onClick={onClick}
      // Accessibility
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Gold accent border on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent pointer-events-none z-10"
        initial={{ borderColor: 'transparent' }}
        whileHover={{ borderColor: 'rgba(201, 169, 98, 0.5)' }}
        transition={{ duration: 0.3 }}
      />

      {children}
    </motion.div>
  );
}

/**
 * Image variant for bento grid - optimized for gallery use
 */
interface BentoGridImageProps {
  src: string;
  alt: string;
  className?: string;
  size?: 'default' | 'wide' | 'tall' | 'large';
  onClick?: () => void;
  /** Optional overlay content (title, description) */
  overlay?: ReactNode;
  /** Show gradient overlay for better text readability */
  showGradient?: boolean;
}

export function BentoGridImage({
  src,
  alt,
  className,
  size = 'default',
  onClick,
  overlay,
  showGradient = true,
}: BentoGridImageProps) {
  return (
    <BentoGridItem size={size} onClick={onClick} className={className}>
      {/* Image with zoom effect on hover */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlay for text readability */}
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      )}

      {/* Optional overlay content */}
      {overlay && (
        <div className="absolute inset-0 flex items-end p-4 z-10">
          {overlay}
        </div>
      )}
    </BentoGridItem>
  );
}

/**
 * Pre-built gallery layout using BentoGrid
 * Automatically arranges images in an aesthetically pleasing pattern
 */
interface BentoGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }>;
  onImageClick?: (index: number) => void;
  className?: string;
}

export function BentoGallery({ images, onImageClick, className }: BentoGalleryProps) {
  // Determine size based on position in grid
  const getSize = (index: number): 'default' | 'wide' | 'tall' | 'large' => {
    // First image is always large (featured)
    if (index === 0) return 'large';

    // Create a repeating pattern for visual interest
    const pattern = index % 6;
    switch (pattern) {
      case 1:
      case 2:
        return 'default';
      case 3:
        return 'wide';
      case 4:
        return 'tall';
      case 5:
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <BentoGrid className={className}>
      {images.map((image, index) => (
        <BentoGridImage
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          size={getSize(index)}
          onClick={onImageClick ? () => onImageClick(index) : undefined}
          overlay={
            (image.title || image.description) && (
              <div className="text-white">
                {image.title && (
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-sm text-white/80">{image.description}</p>
                )}
              </div>
            )
          }
        />
      ))}
    </BentoGrid>
  );
}

export default BentoGrid;
