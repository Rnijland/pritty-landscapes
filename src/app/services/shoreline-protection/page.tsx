import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { AlertTriangle, Palette, HardHat, RefreshCw, Check } from 'lucide-react';
import { SiteLayout, VideoHero } from '@/components/pritty';
import { BlurFade, NumberTicker } from '@/components/magicui';
import { TextGenerateEffect, CardHoverEffect } from '@/components/aceternity';

export const metadata: Metadata = {
  title: 'Shoreline Protection | Award-Winning Waterfront Services',
  description:
    "Ontario's only award-winning shoreline contractor. Protect your waterfront with engineering expertise and artistic design. Georgian Bay, Muskoka, and beyond.",
};

export default function ShorelineProtectionPage() {
  const projects = [
    {
      name: 'On The Rocks',
      category: '$500K-$1M Award Winner',
      image: '/assets/pritty-landscapes/shorelines/on-the-rocks.jpeg',
      href: '/projects/on-the-rocks',
    },
    {
      name: 'Thunder Beach',
      category: 'Georgian Bay Transformation',
      image: '/assets/pritty-landscapes/shorelines/coastal-paradise.jpeg',
      href: '/projects/thunder-beach',
    },
    {
      name: 'Sunset Bay',
      category: 'Green Stamp Award',
      image: '/assets/pritty-landscapes/shorelines/sunset-bay.jpeg',
    },
    {
      name: 'Granite Shores',
      category: '$100K-$250K',
      image: '/assets/pritty-landscapes/shorelines/granite-shores.jpg',
    },
  ];

  return (
    <SiteLayout>
    <main className="min-h-screen">
      {/* Hero with Video */}
      <VideoHero
        videoUrl="/videos/island-retreat.mp4"
        posterImage="/assets/pritty-landscapes/shorelines/on-the-rocks.jpeg"
        height="h-[80vh]"
      >
        <div className="container-wide text-white pt-20">
          <BlurFade delay={0.3} inView>
            <p className="text-sm uppercase tracking-widest text-[#C9A962] mb-4">
              Ontario&apos;s Only Award-Winning Shoreline Contractor
            </p>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
              <TextGenerateEffect
                words="Shoreline Protection That Makes a Statement"
                staggerDelay={0.06}
                duration={0.4}
              />
            </h1>
          </BlurFade>
          <BlurFade delay={0.7} inView>
            <p className="text-xl text-white/80 max-w-2xl mb-8">
              Engineering meets artistry. Protect your waterfront investment with solutions that
              don&apos;t just work—they inspire.
            </p>
          </BlurFade>
          <BlurFade delay={0.9} inView>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
            >
              Protect Your Waterfront
            </Link>
          </BlurFade>
        </div>
      </VideoHero>

      {/* Problem/Agitate */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.1} inView>
              <div>
                <h2 className="text-3xl font-bold mb-6">Your Shoreline Is Under Constant Assault</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Fluctuating water levels</strong> — Great Lakes erosion rates can reach
                      17 feet per year
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>High wind and wave action</strong> — Georgian Bay storms don&apos;t
                      forgive
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Boat traffic erosion</strong> — Constant wake impacts weaken your shore
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Winter ice damage</strong> — Ice heave can destroy unprotected
                      shorelines
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-foreground font-medium">
                  That waterfront view you paid premium for? It&apos;s at risk. Waiting isn&apos;t a
                  strategy—it&apos;s a gamble with your investment.
                </p>
              </div>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="/assets/pritty-landscapes/projects/on-the-rocks/construction/before-construction1.jpeg"
                  alt="Shoreline erosion"
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center mb-12">
            <BlurFade delay={0.1} inView>
              <h2 className="text-3xl font-bold mb-4">
                We Approach Shoreline Protection as Landscape Architecture
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our award-winning armour stone revetments don&apos;t just protect—they transform.
                Premium Ontario granite, placed with intention, designed to last generations.
              </p>
            </BlurFade>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-10 h-10 text-gold" />,
                title: 'Design & Planning',
                description:
                  'Site assessment, shoreline design, and coastal engineering coordination. We handle permits and regulations.',
              },
              {
                icon: <HardHat className="w-10 h-10 text-forest" />,
                title: 'Construction',
                description:
                  'Breakwalls, rock groynes, armour stone revetments, and water access points. Built to withstand Georgian Bay.',
              },
              {
                icon: <RefreshCw className="w-10 h-10 text-teal" />,
                title: 'Restoration',
                description:
                  'Repair of existing structures and remediation of sensitive coastal environments.',
              },
            ].map((service, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <CardHoverEffect className="h-full">
                  <div className="p-8 text-center h-full">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardHoverEffect>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Why Armour Stone */}
      <section className="section-padding bg-[#1E1E1E] text-white">
        <div className="container-tight">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-center mb-12">Why Boulders Beat Concrete</h2>
          </BlurFade>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <BlurFade delay={0.2} inView>
              <div>
                <p className="text-white/80 mb-6">
                  Unlike rigid concrete walls that reflect wave energy back into the lake (causing
                  scour erosion at the base), armour stone <strong>disperses</strong> energy
                  naturally. It works WITH the water.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Toe stones (4-16 tons)</strong> anchor the foundation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Armour layer</strong> absorbs and dissipates wave energy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#C9A962] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Premium Ontario granite</strong> sourced from our own quarry
                    </span>
                  </li>
                </ul>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src="/assets/pritty-landscapes/projects/on-the-rocks/construction/DJI-drone-2.jpg"
                  alt="Armour stone installation"
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <BlurFade delay={0.1} inView>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">See the Transformation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch how we transform Georgian Bay waterfronts with award-winning
                shoreline protection.
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube-nocookie.com/embed/0eGl9QUy8pU?rel=0&modestbranding=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                title="Island Retreat - Award-Winning Shoreline Design"
              />
            </div>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <p className="text-center text-sm text-muted-foreground mt-4">
              &quot;Island Retreat&quot; — Award-Winning Shoreline Design, Honey Harbour, Georgian Bay
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold text-center mb-12">Award-Winning Shoreline Projects</h2>
          </BlurFade>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <BlurFade key={index} delay={0.1 + index * 0.1} inView>
                <Link
                  href={project.href || '#'}
                  className="group relative h-64 rounded-xl overflow-hidden block border-2 border-transparent hover:border-[#C9A962]/40 hover:shadow-[0_0_25px_rgba(201,169,98,0.15)] transition-all duration-500"
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold group-hover:translate-x-1 transition-transform duration-300">{project.name}</h3>
                    <p className="text-sm text-[#C9A962]">{project.category}</p>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Banner */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <BlurFade delay={0.1} inView>
            <h3 className="text-2xl font-bold mb-4">
              Ontario&apos;s ONLY Award-Winning Shoreline Contractor
            </h3>
          </BlurFade>
          <div className="flex flex-wrap justify-center gap-8">
            <BlurFade delay={0.2} inView>
              <div>
                <div className="text-3xl font-bold">
                  <NumberTicker value={7} suffix="+" className="text-primary-foreground" />
                </div>
                <div className="text-sm opacity-80">LO Awards of Excellence</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <div>
                <div className="text-3xl font-bold">
                  <NumberTicker value={2} suffix="x" className="text-primary-foreground" />
                </div>
                <div className="text-sm opacity-80">Green Stamp Winner</div>
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <div>
                <div className="text-3xl font-bold">$1M+</div>
                <div className="text-sm opacity-80">Project Capability</div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container-tight text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Waterfront?</h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a consultation to discuss your shoreline, your goals, and your options.
            </p>
          </BlurFade>
          <BlurFade delay={0.3} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#C9A962] text-[#1E1E1E] rounded-lg font-semibold hover:bg-[#C9A962]/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(201,169,98,0.35)]"
              >
                Book Your Consultation
              </Link>
              <a
                href="tel:4167220210"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 hover:border-[#C9A962]/30 transition-all duration-300"
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
