import Image from 'next/image';
import Link from 'next/link';
import { SiteLayout, VideoHero } from '@/components/pritty';
import { BlurFade, NumberTicker, Marquee } from '@/components/magicui';
import { Compare } from '@/components/aceternity';
import { Waves, Leaf, Sparkles, Phone, ArrowRight, Award, Shield, Gem, Star, MapPin, Mail } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Tyler and his crew transformed our eroding shoreline into the highlight of our property. Professional from start to finish, and the results speak for themselves.",
    name: 'The Hendersons',
    title: 'Sunset Bay • $100K-$250K',
    badge: 'Green Stamp Award Winner',
    rating: 5,
  },
  {
    quote:
      "From the first consultation to the final walkthrough, Tyler's team exceeded our expectations. Our Georgian Bay waterfront is now the envy of the neighborhood.",
    name: 'Michael & Sarah',
    title: 'On The Rocks • $500K-$1M',
    badge: 'Award of Excellence 2023',
    rating: 5,
  },
  {
    quote:
      "The attention to detail is remarkable. Every boulder placed with purpose, every plant selected with care. This is landscape architecture at its finest.",
    name: 'The Williams Family',
    title: 'Granite Shores • $100K-$250K',
    badge: 'Award of Excellence 2024',
    rating: 5,
  },
  {
    quote:
      "We interviewed five contractors. Tyler was the only one who understood our vision. The result? A waterfront that feels like it's always been there.",
    name: 'David & Christine',
    title: 'Island Retreat • $100K-$250K',
    badge: 'Award of Excellence 2024',
    rating: 5,
  },
];

const awards = [
  { year: '2024', project: 'A River Runs Through It', category: '$250K-$500K' },
  { year: '2024', project: 'Island Retreat', category: '$100K-$250K' },
  { year: '2024', project: 'Granite Shores', category: '$100K-$250K' },
  { year: '2024', project: 'Endless Views', category: '$100K-$250K' },
  { year: '2023', project: 'On The Rocks', category: '$500K-$1M' },
  { year: '2023', project: 'Sunset Bay', category: 'Green Stamp Award' },
  { year: '2021', project: 'The Magical Forest', category: 'Water Features' },
];

export default function HomePage() {
  return (
    <SiteLayout>
      <main className="min-h-screen">
        {/* ============================================
            HERO SECTION - Video Background
            ============================================ */}
        <VideoHero
          videoUrl="/videos/homepage-hero.mp4"
          posterImage="/assets/pritty-landscapes/projects/on-the-rocks/hero/drone-aerial.jpg"
        >
          <div className="text-center text-white px-4 max-w-5xl mx-auto pt-20">
            <BlurFade delay={0.3} inView>
              <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-white/90 font-medium">
                Ontario&apos;s Only Award-Winning Shoreline Contractor
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-[1.05]">
                Luxury Landscapes,
                <br />
                <span className="text-white/90">Naturally Refined</span>
              </h1>
            </BlurFade>

            <BlurFade delay={0.7} inView>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Award-winning design and build for discerning property owners
                across Georgian Bay, Muskoka, and the GTA.
              </p>
            </BlurFade>

            <BlurFade delay={0.9} inView>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Book Your Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  View Our Work
                </Link>
              </div>
            </BlurFade>
          </div>
        </VideoHero>

        {/* ============================================
            AWARDS MARQUEE - Gold used sparingly for awards only
            ============================================ */}
        <section className="py-4 bg-primary border-y border-primary/20 overflow-hidden">
          <Marquee pauseOnHover duration={40} className="[--gap:3rem]">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-2">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-gold font-bold">{award.year}</span>
                <span className="text-white/30">|</span>
                <span className="text-white font-medium">{award.project}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/70 text-sm">{award.category}</span>
              </div>
            ))}
          </Marquee>
        </section>

        {/* ============================================
            VALUE PROPOSITION - Split Asymmetric Layout
            Large image left, staggered content right
            ============================================ */}
        <section className="py-24 lg:py-32 bg-background overflow-hidden">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Large Image with Overlay Stats */}
              <BlurFade delay={0.1} inView>
                <div className="relative">
                  <div className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden">
                    <Image
                      src="/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC01981-Enhanced-NR.jpg"
                      alt="Award-winning Georgian Bay landscape"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Floating Stats Card */}
                  <div className="absolute -bottom-8 -right-4 lg:right-8 bg-white p-6 rounded-2xl shadow-2xl border border-border">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">
                          <NumberTicker value={7} suffix="+" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Awards</div>
                      </div>
                      <div className="w-px h-12 bg-border" />
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">
                          <NumberTicker value={2} suffix="x" />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">Green Stamp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>

              {/* Right - Staggered Content */}
              <div className="lg:pl-8">
                <BlurFade delay={0.2} inView>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
                    Why Pritty Landscapes
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    A Distinctively
                    <br />
                    Different Approach
                  </h2>
                  <p className="text-lg text-muted-foreground mb-10">
                    We don&apos;t just build landscapes—we craft immersive
                    environments that connect you with nature.
                  </p>
                </BlurFade>

                {/* Staggered Feature Cards */}
                <div className="space-y-4">
                  {[
                    {
                      icon: <Waves className="w-6 h-6" />,
                      title: 'Water-Inspired Design',
                      description: 'Every project flows from our connection to water—shorelines, ponds, streams.',
                    },
                    {
                      icon: <Leaf className="w-6 h-6" />,
                      title: 'Sustainable Practices',
                      description: 'Two-time Green Stamp Award winners. Native plants, best water management.',
                    },
                    {
                      icon: <Sparkles className="w-6 h-6" />,
                      title: 'Uncompromising Craft',
                      description: 'Every boulder placed with intention. Every plant selected with purpose.',
                    },
                  ].map((item, index) => (
                    <BlurFade key={index} delay={0.3 + index * 0.1} inView>
                      <div className="group flex gap-5 p-5 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 cursor-default border border-transparent hover:border-primary/20">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICES - Premium Bento Grid on Forest Green Background
            ============================================ */}
        <section className="py-24 lg:py-32 bg-primary text-white relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="text-center mb-16">
              <BlurFade delay={0.1} inView>
                <p className="text-sm uppercase tracking-[0.2em] text-white/70 font-medium mb-4">
                  Our Expertise
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Award-Winning Services
                </h2>
                <p className="text-white/70 max-w-xl mx-auto">
                  From concept to completion, we deliver landscapes that earn recognition.
                </p>
              </BlurFade>
            </div>

            {/* Custom Bento Layout - 5 tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {/* Large Featured Tile - Shorelines (spans 2 cols, 2 rows) */}
              <BlurFade delay={0.15} inView className="md:col-span-2 md:row-span-2">
                <Link href="/services/shoreline-protection" className="group block h-full">
                  <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-white/20 hover:border-gold/50 transition-all duration-500">
                    <Image
                      src="/assets/pritty-landscapes/shorelines/on-the-rocks.jpeg"
                      alt="Shoreline Protection"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Shield className="w-5 h-5 text-gold" />
                        <span className="text-sm text-gold font-medium">Most Awarded Service</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3 group-hover:text-gold transition-colors">
                        Shoreline Protection
                      </h3>
                      <p className="text-white/70 mb-4 max-w-md">
                        Ontario&apos;s only award-winning shoreline contractor. Armour stone revetments, breakwalls, and coastal engineering.
                      </p>
                      <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                        Explore Shorelines <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </BlurFade>

              {/* Water Features Tile */}
              <BlurFade delay={0.2} inView>
                <Link href="/services/water-features" className="group block h-full">
                  <div className="relative h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500">
                    <Image
                      src="/assets/pritty-landscapes/homepage/backyard-pond-designer.jpg"
                      alt="Water Features"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold mb-1">
                        Water Features
                      </h3>
                      <p className="text-white/60 text-sm">
                        Ponds, waterfalls & streams
                      </p>
                    </div>
                  </div>
                </Link>
              </BlurFade>

              {/* Outdoor Living Tile */}
              <BlurFade delay={0.25} inView>
                <Link href="/projects/thunder-beach" className="group block h-full">
                  <div className="relative h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500">
                    <Image
                      src="/assets/pritty-landscapes/shorelines/coastal-paradise.jpeg"
                      alt="Outdoor Living"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold mb-1">
                        Outdoor Living
                      </h3>
                      <p className="text-white/60 text-sm">
                        Patios, terraces & fire features
                      </p>
                    </div>
                  </div>
                </Link>
              </BlurFade>

              {/* Landscape Design Tile */}
              <BlurFade delay={0.3} inView>
                <Link href="/projects/on-the-rocks" className="group block h-full">
                  <div className="relative h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500">
                    <Image
                      src="/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03985-featured.jpeg"
                      alt="Landscape Design"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold mb-1">
                        Landscape Design
                      </h3>
                      <p className="text-white/60 text-sm">
                        3D renders & master planning
                      </p>
                    </div>
                  </div>
                </Link>
              </BlurFade>

              {/* Native Plantings Tile */}
              <BlurFade delay={0.35} inView>
                <Link href="/about" className="group block h-full">
                  <div className="relative h-full min-h-[240px] rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500">
                    <Image
                      src="/assets/pritty-landscapes/projects/magical-forest/magical-forest-1.jpg"
                      alt="Native Plantings"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-gold text-charcoal rounded-full text-xs font-semibold">
                        Green Stamp
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold mb-1">
                        Native Plantings
                      </h3>
                      <p className="text-white/60 text-sm">
                        Sustainable & beautiful
                      </p>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* ============================================
            BEFORE/AFTER - Keep as requested
            ============================================ */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container-wide">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
                  The Transformation
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  See the Pritty Difference
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Drag the slider to reveal the dramatic transformation
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="h-[450px] md:h-[550px] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-border">
                <Compare
                  firstImage="/assets/pritty-landscapes/projects/on-the-rocks/construction/before-construction.jpeg"
                  secondImage="/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03985-featured.jpeg"
                  firstImageAlt="Before - Eroding shoreline"
                  secondImageAlt="After - Award-winning transformation"
                  className="w-full h-full"
                  slideMode="drag"
                  showHandlebar={true}
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                <span className="text-primary font-medium">&quot;On The Rocks&quot;</span> — Award of Excellence Winner, $500K-$1M Category
              </p>
            </BlurFade>
          </div>
        </section>

        {/* ============================================
            FEATURED PROJECTS - Asymmetric Masonry
            1 Hero (60%) + 2 Stacked (40%)
            ============================================ */}
        <section id="portfolio" className="py-24 lg:py-32 bg-muted">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <BlurFade delay={0.1} inView>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
                    Portfolio
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold">
                    Featured Projects
                  </h2>
                </div>
              </BlurFade>
              <BlurFade delay={0.2} inView>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-primary font-medium mt-4 md:mt-0 hover:gap-3 transition-all"
                >
                  View All Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </BlurFade>
            </div>

            {/* Asymmetric Grid: 60/40 split */}
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Hero Project - 3 columns (60%) */}
              <BlurFade delay={0.2} inView className="lg:col-span-3">
                <Link
                  href="/projects/on-the-rocks"
                  className="group relative block h-[500px] lg:h-[600px] rounded-3xl overflow-hidden"
                >
                  <Image
                    src="/assets/pritty-landscapes/shorelines/on-the-rocks.jpeg"
                    alt="On The Rocks"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Award Badge - Gold for awards */}
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gold text-charcoal rounded-full text-sm font-semibold">
                      <Gem className="w-4 h-4" />
                      $500K-$1M Winner
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-gold text-sm font-medium mb-2">Georgian Bay</p>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-white/80 transition-colors">
                      On The Rocks
                    </h3>
                    <p className="text-white/70 max-w-md">
                      A stunning shoreline transformation that earned Landscape Ontario&apos;s highest recognition.
                    </p>
                  </div>
                </Link>
              </BlurFade>

              {/* Stacked Projects - 2 columns (40%) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                <BlurFade delay={0.3} inView className="flex-1">
                  <Link
                    href="/projects/thunder-beach"
                    className="group relative block h-[280px] lg:h-full rounded-3xl overflow-hidden"
                  >
                    <Image
                      src="/assets/pritty-landscapes/shorelines/coastal-paradise.jpeg"
                      alt="Thunder Beach"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/70 text-sm font-medium mb-1">Georgian Bay</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                        Thunder Beach
                      </h3>
                    </div>
                  </Link>
                </BlurFade>

                <BlurFade delay={0.4} inView className="flex-1">
                  <Link
                    href="/services/water-features"
                    className="group relative block h-[280px] lg:h-full rounded-3xl overflow-hidden"
                  >
                    <Image
                      src="/assets/pritty-landscapes/projects/magical-forest/magical-forest-1.jpg"
                      alt="The Magical Forest"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 bg-gold text-charcoal rounded-full text-xs font-semibold">
                        Water Features Award
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/70 text-sm font-medium mb-1">Water Features</p>
                      <h3 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors">
                        The Magical Forest
                      </h3>
                    </div>
                  </Link>
                </BlurFade>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            TESTIMONIALS - Light Background, Clean Cards
            ============================================ */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="container-wide">
            {/* Header */}
            <div className="text-center mb-16">
              <BlurFade delay={0.1} inView>
                <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
                  Client Stories
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  The trust of our clients is our greatest recognition.
                </p>
              </BlurFade>
            </div>

            {/* 4-Card Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <BlurFade key={index} delay={0.15 + index * 0.1} inView>
                  <div className="group bg-muted p-6 lg:p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-foreground mb-6 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author & Badge */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                      {testimonial.badge && (
                        <div className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs font-medium">
                          {testimonial.badge.split(' ').slice(0, 2).join(' ')}
                        </div>
                      )}
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            CONTACT - Clean Split Layout with Image Background
            ============================================ */}
        <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03676-night.jpeg"
              alt="Georgian Bay at twilight"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/80" />
          </div>

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left - Content */}
              <BlurFade delay={0.1} inView>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gold font-medium mb-4">
                    Start Your Journey
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Your Dream Landscape Starts Here
                  </h2>
                  <p className="text-white/70 text-lg mb-8">
                    Every award-winning project starts with a conversation.
                    Book a consultation with Tyler to discuss your vision, goals, and possibilities.
                  </p>

                  {/* Contact Options */}
                  <div className="space-y-4 mb-8">
                    <a href="tel:4167220210" className="group flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/80 transition-colors">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-gold transition-colors">(416) 722-0210</div>
                        <div className="text-sm text-white/50">Markham Office</div>
                      </div>
                    </a>
                    <a href="tel:7059844810" className="group flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/80 transition-colors">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold text-white group-hover:text-gold transition-colors">(705) 984-4810</div>
                        <div className="text-sm text-white/50">Collingwood Office</div>
                      </div>
                    </a>
                  </div>

                  {/* Service Areas */}
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Georgian Bay • Muskoka • Collingwood • GTA</span>
                  </div>
                </div>
              </BlurFade>

              {/* Right - Form */}
              <BlurFade delay={0.2} inView>
                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Book Your Consultation
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We&apos;ll get back to you within 24 hours.
                  </p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                        required
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                    <select
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all cursor-pointer"
                      required
                    >
                      <option value="">Select a service...</option>
                      <option value="shoreline">Shoreline Protection</option>
                      <option value="landscape">Landscape Design</option>
                      <option value="water-features">Water Features</option>
                      <option value="outdoor-living">Outdoor Living</option>
                    </select>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                    >
                      Request Consultation
                    </button>
                  </form>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
