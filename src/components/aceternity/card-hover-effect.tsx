'use client';

import { ReactNode, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * CardHoverEffect - Premium card with spotlight effect following cursor
 * Inspired by Aceternity UI's card-hover-effect component
 *
 * Features:
 * - Radial gradient spotlight that follows mouse position
 * - Smooth elevation and scale on hover
 * - Gold accent border glow
 * - Accessible keyboard navigation
 */

interface CardHoverEffectProps {
  children: ReactNode;
  className?: string;
  /** Container class for the inner content */
  containerClassName?: string;
  /** Disable all hover effects */
  disabled?: boolean;
  /** Custom spotlight color (default: gold accent) */
  spotlightColor?: string;
  /** Click handler */
  onClick?: () => void;
  /** Make the card a link */
  href?: string;
}

export function CardHoverEffect({
  children,
  className,
  containerClassName,
  disabled = false,
  spotlightColor = 'rgba(201, 169, 98, 0.15)', // Gold accent with transparency
  onClick,
  href,
}: CardHoverEffectProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Handle mouse move to update spotlight position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Spotlight gradient that follows cursor
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      350px circle at ${mouseX}px ${mouseY}px,
      ${spotlightColor},
      transparent 80%
    )
  `;

  // Wrapper component - either div or anchor based on href
  const WrapperComponent = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined }
    : {};

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        'relative group',
        disabled ? 'cursor-default' : 'cursor-pointer',
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 1, y: 0 }}
      whileHover={
        disabled
          ? undefined
          : {
              scale: 1.02,
              y: -4,
            }
      }
      transition={{
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onClick={onClick}
      role={onClick || href ? 'button' : undefined}
      tabIndex={onClick || href ? 0 : undefined}
      onKeyDown={(e) => {
        if ((onClick || href) && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          if (onClick) onClick();
          if (href) window.location.href = href;
        }
      }}
    >
      <WrapperComponent
        {...wrapperProps}
        className={cn(
          'block relative overflow-hidden rounded-2xl',
          'bg-card border border-border',
          'transition-shadow duration-300',
          // Shadow on hover
          'group-hover:shadow-xl group-hover:shadow-black/5',
          containerClassName
        )}
      >
        {/* Spotlight overlay - only visible on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlightBackground }}
          aria-hidden="true"
        />

        {/* Gold border glow on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            border: '2px solid rgba(201, 169, 98, 0.4)',
            boxShadow: '0 0 20px rgba(201, 169, 98, 0.15)',
          }}
          aria-hidden="true"
        />

        {/* Card content */}
        <div className="relative z-0">{children}</div>
      </WrapperComponent>
    </motion.div>
  );
}

/**
 * Pre-styled card content layout for common use cases
 */
interface CardContentProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
  /** Image to display at top of card */
  image?: string;
  imageAlt?: string;
}

export function CardContent({
  icon,
  title,
  description,
  className,
  image,
  imageAlt = '',
}: CardContentProps) {
  return (
    <div className={cn('h-full flex flex-col', className)}>
      {/* Optional image header */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      {/* Content area */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Icon with subtle animation */}
        {icon && (
          <motion.div
            className="mb-4 text-primary"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground flex-1">{description}</p>
      </div>
    </div>
  );
}

/**
 * Grid container for multiple hover effect cards
 */
interface CardGridProps {
  children: ReactNode;
  className?: string;
  /** Number of columns on different breakpoints */
  columns?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
}

export function CardGrid({
  children,
  className,
  columns = { default: 1, sm: 2, lg: 3 },
}: CardGridProps) {
  const columnClasses = cn(
    'grid gap-6',
    columns.default && `grid-cols-${columns.default}`,
    columns.sm && `sm:grid-cols-${columns.sm}`,
    columns.md && `md:grid-cols-${columns.md}`,
    columns.lg && `lg:grid-cols-${columns.lg}`
  );

  return (
    <div
      className={cn(
        'grid gap-6',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Convenience component combining CardHoverEffect with CardContent
 */
interface HoverCardProps extends CardContentProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export function HoverCard({
  onClick,
  href,
  className,
  disabled,
  ...contentProps
}: HoverCardProps) {
  return (
    <CardHoverEffect
      onClick={onClick}
      href={href}
      className={cn('h-full', className)}
      containerClassName="h-full"
      disabled={disabled}
    >
      <CardContent {...contentProps} />
    </CardHoverEffect>
  );
}

export default CardHoverEffect;
