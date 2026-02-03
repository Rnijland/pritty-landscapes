import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sprout, Fish, Droplets, Check } from 'lucide-react';
import { SiteLayout, VideoHero, ImageGallery } from '@/components/pritty';
import { BlurFade } from '@/components/magicui';
import { TextGenerateEffect, CardHoverEffect } from '@/components/aceternity';

export const metadata: Metadata = {
  title: 'Water Features & Ponds',
  description:
    'Award-winning ecosystem ponds, koi ponds, waterfalls & streams. Pritty Landscapes brings living water features to your backyard with expert design and craftsmanship.',
};

export default function WaterFeaturesPage() {
  const galleryImages = [
    '/assets/pritty-landscapes/homepage/backyard-pond-designer.jpg',
    '/assets/pritty-landscapes/projects/magical-forest/magical-forest-1.jpg',
    '/assets/pritty-landscapes/projects/magical-forest/magical-forest-image.jpg',
    '/assets/pritty-landscapes/testimonials/modern-pond.jpg',
  ];

  return (
    <SiteLayout>
      <main className="min-h-screen">
        {/* Hero with Video */}
        <VideoHero
          videoUrl="/videos/backyard-pond.mp4"
          posterImage="/assets/pritty-landscapes/homepage/backyard-pond-designer.jpg"
          height="h-[70vh]"
        >
          <div className="text-center text-white px-4 max-w-4xl mx-auto pt-20">
            <BlurFade delay={0.3} inView>
              <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-6 text-white/80 font-medium">
                Award-Winning Water Feature Design
              </p>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                <TextGenerateEffect
                  words="Living Water Features"
                  staggerDelay={0.08}
                  duration={0.4}
                />
              </h1>
            </BlurFade>

            <BlurFade delay={0.7} inView>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Ecosystem ponds, koi ponds, waterfalls & streams that bring
                the magic of water to your landscape.
              </p>
            </BlurFade>

            <BlurFade delay={0.9} inView>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Bring Water to Life
              </Link>
            </BlurFade>
          </div>
        </VideoHero>

        {/* The Experience */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <BlurFade delay={0.1} inView>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  The Sound of Tranquility
                </h2>
                <p className="text-muted-foreground text-lg mb-4">
                  There&apos;s something primal about water in a landscape. The sound
                  of a waterfall cascading over granite boulders. Koi gliding beneath
                  lily pads. The reflection of clouds in a still pond at dusk.
                </p>
                <p className="text-foreground font-medium">
                  We design water features that aren&apos;t just beautiful—they&apos;re alive.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our Water Feature Services
              </h2>
            </BlurFade>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sprout className="w-10 h-10 text-forest" />,
                  title: 'Ecosystem Ponds',
                  description:
                    'Self-sustaining natural ponds with aquatic plants, fish, and beneficial bacteria. Low maintenance, high reward. A complete ecosystem in your backyard.',
                  image: '/assets/pritty-landscapes/homepage/backyard-pond-designer.jpg',
                },
                {
                  icon: <Fish className="w-10 h-10 text-water" />,
                  title: 'Koi Ponds',
                  description:
                    'Engineered for fish health with proper filtration, ideal depth zones, and predator protection. Watch your koi thrive for decades.',
                  image: '/assets/pritty-landscapes/testimonials/modern-pond.jpg',
                },
                {
                  icon: <Droplets className="w-10 h-10 text-teal" />,
                  title: 'Waterfalls & Streams',
                  description:
                    'From gentle cascades to dramatic boulder drops—moving water transforms any space. The sound alone changes how you experience your property.',
                  image: '/assets/pritty-landscapes/projects/magical-forest/magical-forest-1.jpg',
                },
              ].map((service, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                  <CardHoverEffect className="h-full">
                    <div className="rounded-xl overflow-hidden h-full">
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardHoverEffect>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Award Highlight */}
        <section className="section-padding bg-[#1E1E1E] text-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <BlurFade delay={0.1} inView>
                <div>
                  <div className="inline-block px-4 py-2 bg-[#C9A962]/20 text-[#C9A962] rounded-full text-sm font-semibold mb-6">
                    Award of Excellence | Water Features | 2021
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    &quot;The Magical Forest&quot;
                  </h2>
                  <p className="text-white/70 mb-4">
                    Our award-winning water feature cascades through a canopy of mature
                    trees, creating an ecosystem where nature and design become one.
                  </p>
                  <p className="text-white/70 mb-6">
                    This project earned Landscape Ontario&apos;s Award of Excellence in the
                    Special Construction - Water Features category, recognizing the
                    technical complexity and artistic vision required to bring it to life.
                  </p>
                  <Link
                    href="/projects/magical-forest"
                    className="inline-flex items-center text-[#C9A962] hover:text-[#C9A962]/80 font-medium transition-colors"
                  >
                    View Project Details →
                  </Link>
                </div>
              </BlurFade>
              <BlurFade delay={0.2} inView>
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden border-2 border-[#C9A962]/30 shadow-[0_0_30px_rgba(201,169,98,0.15)] hover:shadow-[0_0_40px_rgba(201,169,98,0.25)] transition-all duration-500">
                  <Image
                    src="/assets/pritty-landscapes/projects/magical-forest/magical-forest-1.jpg"
                    alt="The Magical Forest - Award-winning water feature"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Why Water Features */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Add Water to Your Landscape?
              </h2>
            </BlurFade>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Sound & Serenity',
                  description:
                    'The sound of moving water masks traffic noise and creates a peaceful atmosphere that reduces stress.',
                },
                {
                  title: 'Wildlife Habitat',
                  description:
                    'Ponds attract birds, butterflies, dragonflies, and other beneficial wildlife to your property.',
                },
                {
                  title: 'Property Value',
                  description:
                    'Well-designed water features are proven to increase property value and curb appeal.',
                },
                {
                  title: 'Year-Round Interest',
                  description:
                    'From spring blooms to winter ice formations, water features provide visual interest in every season.',
                },
              ].map((item, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Water Feature Gallery
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <ImageGallery images={galleryImages} columns={4} featuredFirst={true} />
            </BlurFade>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/pritty-landscapes/projects/magical-forest/magical-forest-image.jpg"
              alt="Water feature at dusk"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 container-tight text-center text-white">
            <BlurFade delay={0.1} inView>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Bring the Sound of Water Home
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                From simple bubbling rocks to elaborate ecosystem ponds, we design
                water features that fit your space and your vision.
              </p>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-[#C9A962] text-[#1E1E1E] rounded-lg font-semibold text-lg hover:bg-[#C9A962]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(201,169,98,0.4)]"
                >
                  Book Your Consultation
                </Link>
                <a
                  href="tel:4167220210"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 hover:border-[#C9A962]/50 transition-all duration-300"
                >
                  Call (416) 722-0210
                </a>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
