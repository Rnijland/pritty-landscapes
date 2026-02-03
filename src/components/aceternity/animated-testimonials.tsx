'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * AnimatedTestimonials - Premium testimonial display with animations
 * Inspired by Aceternity UI's testimonials component
 *
 * Features:
 * - Multiple layout variants (carousel, grid, marquee)
 * - Auto-rotation option
 * - Smooth transitions
 * - Gold accent styling
 * - Responsive design
 */

export interface Testimonial {
  /** The testimonial quote */
  quote: string;
  /** Author name */
  name: string;
  /** Author title/role (e.g., "Homeowner" or project name) */
  title?: string;
  /** Optional image/avatar URL */
  image?: string;
  /** Optional award or badge text */
  badge?: string;
  /** Optional rating (1-5) */
  rating?: number;
}

interface AnimatedTestimonialsProps {
  /** Array of testimonials */
  testimonials: Testimonial[];
  /** Layout variant */
  variant?: 'carousel' | 'grid' | 'marquee' | 'stacked';
  /** Auto-rotate carousel (in seconds, 0 to disable) */
  autoRotate?: number;
  /** Show navigation arrows for carousel */
  showNavigation?: boolean;
  /** Additional class names */
  className?: string;
  /** Section title */
  title?: string;
  /** Section description */
  description?: string;
}

export function AnimatedTestimonials({
  testimonials,
  variant = 'carousel',
  autoRotate = 5,
  showNavigation = true,
  className,
  title,
  description,
}: AnimatedTestimonialsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div ref={sectionRef} className={cn('py-16 md:py-24', className)}>
      {/* Section Header */}
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </div>
      )}

      {/* Testimonials Layout */}
      {variant === 'carousel' && (
        <TestimonialCarousel
          testimonials={testimonials}
          autoRotate={autoRotate}
          showNavigation={showNavigation}
          isInView={isInView}
        />
      )}
      {variant === 'grid' && (
        <TestimonialGrid testimonials={testimonials} isInView={isInView} />
      )}
      {variant === 'marquee' && (
        <TestimonialMarquee testimonials={testimonials} />
      )}
      {variant === 'stacked' && (
        <TestimonialStacked
          testimonials={testimonials}
          autoRotate={autoRotate}
          isInView={isInView}
        />
      )}
    </div>
  );
}

/**
 * Carousel variant - one testimonial at a time with transitions
 */
function TestimonialCarousel({
  testimonials,
  autoRotate,
  showNavigation,
  isInView,
}: {
  testimonials: Testimonial[];
  autoRotate: number;
  showNavigation: boolean;
  isInView: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation
  useEffect(() => {
    if (autoRotate <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotate * 1000);

    return () => clearInterval(interval);
  }, [autoRotate, testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <TestimonialCard
            testimonial={testimonials[currentIndex]}
            variant="large"
            isInView={isInView}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showNavigation && testimonials.length > 1 && (
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={goToPrev}
            className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  index === currentIndex
                    ? 'bg-[#C9A962] w-6'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Grid variant - multiple testimonials in a grid
 */
function TestimonialGrid({
  testimonials,
  isInView,
}: {
  testimonials: Testimonial[];
  isInView: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container-wide">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <TestimonialCard
            testimonial={testimonial}
            variant="compact"
            isInView={isInView}
          />
        </motion.div>
      ))}
    </div>
  );
}

/**
 * Marquee variant - infinite horizontal scroll
 */
function TestimonialMarquee({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-6"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-[350px]">
            <TestimonialCard
              testimonial={testimonial}
              variant="compact"
              isInView={true}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Stacked variant - cards that stack and rotate
 */
function TestimonialStacked({
  testimonials,
  autoRotate,
  isInView,
}: {
  testimonials: Testimonial[];
  autoRotate: number;
  isInView: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoRotate <= 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotate * 1000);

    return () => clearInterval(interval);
  }, [autoRotate, testimonials.length]);

  return (
    <div className="relative max-w-2xl mx-auto h-[350px] perspective-1000">
      {testimonials.map((testimonial, index) => {
        const offset = (index - currentIndex + testimonials.length) % testimonials.length;
        const isActive = offset === 0;

        return (
          <motion.div
            key={index}
            className="absolute inset-0 cursor-pointer"
            initial={false}
            animate={{
              scale: isActive ? 1 : 0.9 - offset * 0.05,
              y: offset * 20,
              zIndex: testimonials.length - offset,
              opacity: offset > 2 ? 0 : 1 - offset * 0.2,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => setCurrentIndex(index)}
          >
            <TestimonialCard
              testimonial={testimonial}
              variant="large"
              isInView={isInView}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

/**
 * Individual testimonial card
 */
function TestimonialCard({
  testimonial,
  variant = 'compact',
  isInView,
}: {
  testimonial: Testimonial;
  variant?: 'compact' | 'large';
  isInView: boolean;
}) {
  const isLarge = variant === 'large';

  return (
    <div
      className={cn(
        'relative bg-card rounded-2xl border border-border h-full',
        'transition-all duration-300 hover:shadow-xl hover:border-[#C9A962]/30',
        isLarge ? 'p-8 md:p-10' : 'p-6'
      )}
    >
      {/* Gold accent border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-[#C9A962]/20 transition-colors duration-300 pointer-events-none" />

      {/* Quote icon */}
      <Quote
        className={cn(
          'text-[#C9A962] mb-4',
          isLarge ? 'w-10 h-10' : 'w-8 h-8'
        )}
      />

      {/* Badge */}
      {testimonial.badge && (
        <div className="inline-block px-3 py-1 bg-[#C9A962]/10 text-[#C9A962] rounded-full text-xs font-medium mb-4">
          {testimonial.badge}
        </div>
      )}

      {/* Quote text */}
      <blockquote
        className={cn(
          'text-foreground mb-6',
          isLarge ? 'text-lg md:text-xl leading-relaxed' : 'text-base'
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={cn(
                'w-5 h-5',
                i < testimonial.rating! ? 'text-[#C9A962]' : 'text-muted'
              )}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-4">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A962]/20"
          />
        )}
        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          {testimonial.title && (
            <div className="text-sm text-muted-foreground">{testimonial.title}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimatedTestimonials;
