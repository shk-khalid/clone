import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RainbowCover from '@/assets/rainbow.svg?react';
import BottomTick from '@/assets/bottomTick.svg?react';
import Connection1 from '@/assets/connection1.png';
import Connection2 from '@/assets/connection2.png';
import Connection3 from '@/assets/connection3.png';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ConnectionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);

  const [mobileImages, setMobileImages] = useState<
    { src: string; alt: string; key: string }[]
  >([]);

  const shuffle = <T,>(arr: T[]): T[] =>
    arr
      .map((v) => ({ v, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((o) => o.v);

  useEffect(() => {
    if (!sectionRef.current) return;

    const images = [image1Ref.current, image2Ref.current, image3Ref.current];
    images.forEach((image, idx) => {
      if (!image) return;
      gsap.fromTo(
        image,
        { rotation: 0 },
        {
          rotation: 0,
          duration: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current!,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
              const progress = Math.max(0, self.progress - idx * 0.1);
              const rot = -10 + progress * 20;
              gsap.set(image, { rotation: rot });
            },
          },
        }
      );
    });

    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    setMobileImages(
      shuffle([
        { src: Connection1, alt: 'Community event', key: 'img1' },
        { src: Connection2, alt: 'NOVOS team', key: 'img2' },
        { src: Connection3, alt: 'Community support', key: 'img3' },
      ])
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const stats = [
    {
      value: '100x',
      description: 'Faster speeds compared to the average U.S. internet provider.',
    },
    {
      value: '99.9%',
      description: 'Network uptime for seamless streaming, gaming, and browsing.',
    },
    {
      value: '4.8',
      icon: <Star className="tw-w-8 tw-h-8 tw-fill-current tw-text-teal-500" />,
      description:
        'High customer satisfaction score. Internet that delivers— trusted by your neighbors.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="tw-relative tw-py-20 tw-bg-gray-50 tw-overflow-hidden"
    >
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6">
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center -tw-z-0 tw-justify-center">
          <RainbowCover />
        </div>
        <div className="tw-text-center tw-mb-8">

          <h2 className="tw-text-4xl tw-font-medium tw-text-gray-900 lg:tw-text-6xl tw-mb-4">
            Building{' '}
            <span className="tw-text-[#3FC9C5] tw-relative tw-inline-block">
              Genuine
              <span className="tw-absolute tw-left-0 -tw-bottom-2 sm:-tw-bottom-5 tw-w-full">
                <BottomTick className="tw-w-full tw-h-full" />
              </span>
            </span>
            <br />
            Connections
          </h2>
          <p className="tw-text-lg tw-text-gray-600 tw-max-w-2xl tw-mx-auto tw-leading-relaxed">
            Connecting Texas & Arizona isn’t just about fiber—it’s about
            people. We bring neighbors together with reliable internet and
            deep community partnerships, proudly supporting local
            organizations, schools, and charities.
          </p>
        </div>

        <div className="tw-flex tw-justify-center tw-gap-4 tw-mb-12 lg:tw-hidden">
          {mobileImages.map((img) => (
            <div
              key={img.key}
              className="tw-w-20 tw-rounded-2xl tw-overflow-hidden tw-z-10 sm:tw-w-24 md:tw-w-32"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
          ))}
        </div>

        <div className="tw-relative tw-h-[500px] lg:tw-h-[800px] tw-overflow-hidden lg:tw-block tw-hidden">
          <div
            ref={image1Ref}
            className="tw-absolute tw-top-[0%] tw-left-[15%] tw-transform -tw-translate-x-1/2 tw-transition-all"
          >
            <div className="tw-w-20 lg:tw-w-44 tw-rounded-2xl tw-overflow-hidden">
              <img
                src={Connection1}
                alt="Community event"
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
          </div>

          <div
            ref={image2Ref}
            className="tw-absolute tw-top-[30%] tw-right-[15%] tw-transform tw-translate-x-1/2 tw-transition-all"
          >
            <div className="tw-w-28 lg:tw-w-52 tw-rounded-2xl tw-overflow-hidden">
              <img
                src={Connection2}
                alt="NOVOS team"
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
          </div>

          <div
            ref={image3Ref}
            className="tw-absolute tw-bottom-[5%] tw-left-[15%] tw-transform -tw-translate-x-1/2 tw-transition-all"
          >
            <div className="tw-w-28 lg:tw-w-48 tw-rounded-2xl tw-overflow-hidden">
              <img
                src={Connection3}
                alt="Community support"
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="tw-bg-teal-50 tw-rounded-3xl tw-p-8 lg:tw-p-12 tw-max-w-7xl tw-mx-auto tw-mt-12"
      >
        <div className="tw-flex tw-flex-col tw-space-y-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center tw-space-x-6"
            >
              <div className="tw-flex tw-items-center tw-space-x-2 tw-flex-shrink-0">
                <span className="tw-text-4xl lg:tw-text-6xl tw-font-medium tw-text-teal-500">
                  {stat.value}
                </span>
                {stat.icon}
              </div>
              <p className="tw-text-gray-600 tw-text-xs lg:tw-text-sm tw-leading-relaxed tw-max-w-[200px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConnectionsSection;