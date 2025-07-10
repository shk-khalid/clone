import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import RainbowCover from '@/assets/rainbow.svg?react';
import BottomTick from '@/assets/bottomTick.svg?react';
import Connection1 from '@/assets/connection1.png';
import Connection2 from '@/assets/connection2.png';
import Connection3 from '@/assets/connection3.png';

gsap.registerPlugin(ScrollTrigger);

const ConnectionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);

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
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: self => {
              const progress = Math.max(0, self.progress - idx * 0.1);
              const rot = -10 + progress * 20;
              gsap.set(image, { rotation: rot });
            },
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="tw-relative tw-py-20 tw-bg-gray-50 tw-overflow-hidden"
    >
      {/* Rainbow SVG Background */}
      <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
        <RainbowCover />
      </div>

      {/* Content Container */}
      <div className="tw-relative tw-z-10 tw-max-w-7xl tw-mx-auto tw-px-6">

        <div className="tw-relative tw-h-[500px] lg:tw-h-[800px] tw-overflow-hidden">
          <div className="tw-absolute tw-top-1/4 tw-left-[20%] tw-transform-none tw-text-center tw-px-4 tw-z-20">
            <h2 className="tw-text-4xl lg:tw-text-6xl tw-font-medium tw-text-gray-900 tw-mb-4">
              Building {" "}
              <span className="tw-text-[#3FC9C5] tw-relative tw-z-10 tw-inline-block">
                Genuine
                <span className="tw-absolute tw-left-0 -tw-bottom-2 sm:-tw-bottom-5 tw-w-full tw-pointer-events-none">
                  <BottomTick className="tw-w-full tw-h-full" />
                </span>
              </span>
              <br />
              Connections
            </h2>
            <p className="tw-text-lg tw-text-gray-600 tw-max-w-2xl tw-mx-auto tw-leading-relaxed">
              Connecting Texas &amp; Arizona isn’t just about fiber—it’s about
              people. We bring neighbors together with reliable internet and
              deep community partnerships, proudly supporting local
              organizations, schools, and charities.
            </p>
          </div>

          {/* Image 1 - Top Left */}
          <div
            ref={image1Ref}
            className="tw-absolute tw-top-[10%] tw-left-[10%] sm:tw-top-[0%] sm:tw-left-[15%] tw-transform -tw-translate-x-1/2 tw-transition-all"
          >
            <div className="tw-w-36 lg:tw-w-44 tw-rounded-2xl tw-overflow-hidden">
              <img
                src={Connection1}
                alt="Community event"
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
          </div>

          {/* Image 2 - Top Right */}
          <div
            ref={image2Ref}
            className="tw-absolute tw-top-[25%] tw-right-[10%] sm:tw-top-[30%] sm:tw-right-[15%] tw-transform tw-translate-x-1/2 tw-transition-all"
          >
            <div className="tw-w-52 tw-rounded-2xl tw-overflow-hidden">
              <img
                src={Connection2}
                alt="NOVOS team"
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
          </div>

          {/* Image 3 - Bottom Center */}
          <div
            ref={image3Ref}
            className="tw-absolute tw-bottom-[5%] tw-left-[15%] tw-transform -tw-translate-x-1/2 tw-transition-all"
          >
            <div className="tw-w-48 tw-rounded-2xl tw-overflow-hidden">
              <img
                src={Connection3}
                alt="Community support"
                className="tw-w-full tw-h-full tw-object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionsSection;