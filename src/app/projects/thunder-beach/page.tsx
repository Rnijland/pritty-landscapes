import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteLayout, VideoHero, ImageGallery } from '@/components/pritty';
import { BlurFade } from '@/components/magicui';
import { TextGenerateEffect, CardHoverEffect } from '@/components/aceternity';

export const metadata: Metadata = {
  title: 'Thunder Beach | Georgian Bay Waterfront Transformation',
  description:
    'Explore our Thunder Beach project - a stunning Georgian Bay waterfront transformation featuring shoreline protection, landscape design, and outdoor living spaces.',
};

export default function ThunderBeachPage() {
  // Gallery images - using available shoreline images as placeholders
  const galleryImages = [
    '/assets/pritty-landscapes/shorelines/coastal-paradise.jpeg',
    '/assets/pritty-landscapes/shorelines/granite-shores.jpg',
    '/assets/pritty-landscapes/shorelines/endless-views.jpg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03985-featured.jpeg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC01981-Enhanced-NR.jpg',
    '/assets/pritty-landscapes/projects/on-the-rocks/gallery/DSC03676-night.jpeg',
  ];

  return (
    <SiteLayout>
      <main className="min-h-screen">
        {/* Hero with Thunder Beach Video */}
        <VideoHero
          videoUrl="/videos/thunder-beach.mp4"
          posterImage="/assets/pritty-landscapes/shorelines/coastal-paradise.jpeg"
        >
          <div className="container-wide text-white pt-20">
            <BlurFade delay={0.3} inView>
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                Georgian Bay | Waterfront Transformation
              </div>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <TextGenerateEffect
                  words="Thunder Beach"
                  staggerDelay={0.1}
                  duration={0.5}
                />
              </h1>
            </BlurFade>
            <BlurFade delay={0.7} inView>
              <p className="text-xl text-white/80 max-w-2xl">
                A complete waterfront transformation where shoreline protection
                meets luxury outdoor living on Georgian Bay.
              </p>
            </BlurFade>
          </div>
        </VideoHero>

        {/* Project Story */}
        <section className="section-padding bg-background">
          <div className="container-tight">
            <div className="grid md:grid-cols-2 gap-12">
              <BlurFade delay={0.1} inView>
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Vision</h2>
                  <p className="text-muted-foreground mb-4">
                    This Thunder Beach property demanded a landscape as dramatic as its
                    Georgian Bay setting—outdoor living spaces that embrace the water,
                    protected shorelines that enhance rather than obstruct, and plantings
                    that thrive in the coastal environment.
                  </p>
                  <p className="text-foreground font-medium">
                    The owners wanted both protection and beauty. They refused to
                    sacrifice one for the other.
                  </p>
                </div>
              </BlurFade>
              <BlurFade delay={0.2} inView>
                <div>
                  <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                  <p className="text-muted-foreground mb-4">
                    Georgian Bay&apos;s fluctuating water levels and relentless wave action
                    had taken their toll on the existing shoreline. The property needed
                    protection that would last generations—but the owners also wanted
                    outdoor living spaces that maximized their stunning water views.
                  </p>
                  <p className="text-muted-foreground">
                    We needed to engineer a solution that worked with the natural contours
                    of the land while creating functional, beautiful outdoor spaces.
                  </p>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* The Transformation */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Transformation</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Working with the natural contours of the shoreline, we designed
                  a complete waterfront transformation.
                </p>
              </div>
            </BlurFade>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Armour Stone Revetment',
                  description:
                    'Premium Ontario granite protecting against erosion while creating natural visual appeal.',
                },
                {
                  title: 'Curved Flagstone Pathways',
                  description:
                    "Natural stone pathways that follow the land's organic flow down to the water.",
                },
                {
                  title: 'Native Coastal Plantings',
                  description:
                    'Carefully selected species for year-round colour and resilience in the coastal environment.',
                },
                {
                  title: 'Outdoor Living Terraces',
                  description:
                    'Multiple entertaining areas oriented to capture sunset views over Georgian Bay.',
                },
                {
                  title: 'Professional Landscape Lighting',
                  description:
                    'Extending the enjoyment of the space well into the evening hours.',
                },
                {
                  title: 'Water Access Points',
                  description:
                    'Thoughtfully designed access to the water that integrates with the shoreline protection.',
                },
              ].map((item, index) => (
                <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                  <CardHoverEffect className="h-full">
                    <div className="p-6 h-full">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </CardHoverEffect>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* Video Feature */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <BlurFade delay={0.1} inView>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Watch the Transformation</h2>
                <p className="text-muted-foreground">
                  See the full Thunder Beach project come to life
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/HYnvFONCZSo?rel=0&modestbranding=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  title="Thunder Beach Waterfront Transformation"
                />
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-muted">
          <div className="container-wide">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl font-bold text-center mb-12">Project Gallery</h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <ImageGallery images={galleryImages} columns={3} featuredFirst={true} />
            </BlurFade>
          </div>
        </section>

        {/* Project Details */}
        <section className="section-padding bg-[#1E1E1E] text-white">
          <div className="container-tight">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl font-bold text-center mb-12">Project Details</h2>
            </BlurFade>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <BlurFade delay={0.1} inView>
                <div>
                  <div className="text-sm text-white/60 uppercase tracking-wider mb-2">
                    Location
                  </div>
                  <div className="font-semibold">Thunder Beach, Georgian Bay</div>
                </div>
              </BlurFade>
              <BlurFade delay={0.2} inView>
                <div>
                  <div className="text-sm text-white/60 uppercase tracking-wider mb-2">
                    Scope
                  </div>
                  <div className="font-semibold">Complete Waterfront Transformation</div>
                </div>
              </BlurFade>
              <BlurFade delay={0.3} inView>
                <div>
                  <div className="text-sm text-white/60 uppercase tracking-wider mb-2">
                    Services
                  </div>
                  <div className="font-semibold">
                    Shoreline, Landscape, Outdoor Living
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={0.4} inView>
                <div>
                  <div className="text-sm text-white/60 uppercase tracking-wider mb-2">
                    Materials
                  </div>
                  <div className="font-semibold">Ontario Granite, Native Plantings</div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Thunder Beach Services CTA */}
        <section className="section-padding bg-background">
          <div className="container-tight text-center">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Thunder Beach Property Deserves This
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you&apos;re protecting your shoreline, reimagining your outdoor
                space, or starting from scratch—we bring the same award-winning
                approach to every Georgian Bay project.
              </p>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Link
                  href="/services/shoreline-protection"
                  className="group p-6 bg-muted rounded-xl border-2 border-transparent hover:border-[#C9A962]/30 hover:shadow-[0_0_20px_rgba(201,169,98,0.1)] transition-all duration-300 text-left"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-[#C9A962] transition-colors duration-300">Shoreline Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Armour stone revetments, breakwalls, and coastal engineering
                  </p>
                </Link>
                <Link
                  href="#"
                  className="group p-6 bg-muted rounded-xl border-2 border-transparent hover:border-[#C9A962]/30 hover:shadow-[0_0_20px_rgba(201,169,98,0.1)] transition-all duration-300 text-left"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-[#C9A962] transition-colors duration-300">Landscape Design</h3>
                  <p className="text-sm text-muted-foreground">
                    3D renders, architectural planning, native plantings
                  </p>
                </Link>
                <Link
                  href="/services/water-features"
                  className="group p-6 bg-muted rounded-xl border-2 border-transparent hover:border-[#C9A962]/30 hover:shadow-[0_0_20px_rgba(201,169,98,0.1)] transition-all duration-300 text-left"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-[#C9A962] transition-colors duration-300">Water Features</h3>
                  <p className="text-sm text-muted-foreground">
                    Ponds, waterfalls, streams, and ecosystem design
                  </p>
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-[#1E1E1E] text-white relative overflow-hidden">
          {/* Subtle gradient orb */}
          <div
            className="absolute w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #C9A962 0%, transparent 70%)',
              filter: 'blur(60px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          <div className="container-tight text-center relative z-10">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Waterfront?
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Every award-winning project starts with a conversation. Let&apos;s
                discuss your vision for your Georgian Bay property.
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
                  href="tel:7059844810"
                  className="inline-flex items-center justify-center px-10 py-5 bg-white/10 text-white border border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 hover:border-[#C9A962]/50 transition-all duration-300"
                >
                  Call Collingwood: (705) 984-4810
                </a>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
