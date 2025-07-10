import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Zap from '@/assets/lighting-speed_edit.png'
import DollarSign from '@/assets/pricing-tag_edit.png'
import Shield from '@/assets/ultra-reliable_edit.png'
import FeatureCover from '@/assets/chat-background.png'
import CTACover from '@/assets/headphone-mobile.svg?react'
import HomeCover from '@/assets/home-coverage.png'

const FeaturesSection: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapperRef.current
    const txt = textRef.current
    if (!el || !txt) return

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: 'power2.out' }
    )

    const onEnter = () => gsap.to(txt, { x: 20, y: -20, duration: 0.3 })
    const onLeave = () => gsap.to(txt, { x: 0, y: 0, duration: 0.3 })

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  useEffect(() => {
    gsap.utils
      .toArray<SVGCircleElement>('.stronger-section-dot circle')
      .forEach((circle, i) => {
        const fullR = [150, 100, 50][i % 3]
        const startR = fullR * 0.2
        gsap.fromTo(
          circle,
          { attr: { r: startR } },
          {
            attr: { r: fullR },
            repeat: -1,
            duration: 2,
            ease: 'sine.inOut',
            delay: i * 0.2
          }
        )
      })
  }, [])

  const features = [
    { icon: Zap, title: 'Lightning-fast speeds', description: 'Fiber supercharges your internet with average speeds 25× faster than cable.' },
    { icon: DollarSign, title: 'Simple, fair pricing', description: 'No hidden fees, no surprises — just clear, honest pricing.' },
    { icon: Shield, title: 'Ultra-reliable', description: 'Our 100% fiber-optic network ensures unmatched reliability and consistency.' }
  ]

  const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
    <div className="tw-bg-[#DCEFEF] tw-rounded-3xl tw-p-8 tw-relative tw-flex tw-flex-col tw-text-center tw-h-[400px]">
      <button className="tw-absolute tw-top-6 tw-right-6 tw-w-10 tw-h-10 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-sm hover:tw-scale-125 tw-transition">
        <ArrowUpRight className="tw-w-5 tw-h-5 tw-text-teal-500" />
      </button>
      <div className="tw-flex-1 tw-flex tw-items-center tw-justify-center">
        <img src={feature.icon} alt={feature.title} className="tw-w-48 tw-h-auto" />
      </div>
      <div className="tw-w-full tw-pt-6">
        <h3 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-2">{feature.title}</h3>
        <p className="tw-text-gray-600 tw-leading-relaxed">{feature.description}</p>
      </div>
    </div>
  )

  return (
    <section className="tw-bg-white">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6">
        {/* Features Grid/Swiper */}
        <div className="tw-text-center tw-mb-16">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-semibold tw-text-gray-900 tw-mb-4">
            Why Switch to <span className="tw-text-teal-500">NOVOS</span>?
          </h2>
          <p className="tw-text-lg tw-text-gray-600 tw-max-w-2xl tw-mx-auto">
            Fast fiber. No fine print. Backed by local, Texas-based support.
          </p>
        </div>
        <div className="tw-hidden lg:tw-grid tw-grid-cols-3 tw-gap-6 tw-mb-6">
          {features.map((f, i) => <FeatureCard key={i} feature={f} />)}
        </div>
        <div className="tw-block lg:tw-hidden tw-mb-16">
          <Swiper spaceBetween={16} loop className="tw-flex tw-items-stretch" breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}>
            {features.map((f, i) => (
              <SwiperSlide key={i} className="tw-h-full">
                <FeatureCard feature={f} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Support Section */}
        <div ref={wrapperRef} className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-mb-16">
          <img src={FeatureCover} alt="Family using devices" className="tw-w-full tw-h-auto tw-object-cover" />
          <div ref={textRef} className="tw-hidden md:tw-block tw-absolute tw-bottom-8 tw-left-8 tw-max-w-md">
            <h3 className="tw-text-3xl lg:tw-text-5xl tw-font-semibold tw-text-white tw-leading-tight">
              Enjoy locally-based customer support
            </h3>
          </div>
          <div className="tw-hidden md:tw-block tw-absolute tw-bottom-8 tw:right-8">
            <div className="tw-relative tw-rounded-3xl tw-bg-white tw-shadow-lg tw-p-6 tw-max-w-md">
              <CTACover className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-fill tw-z-0" />
              <div className="tw-relative tw-flex tw-justify-between tw-items-start tw-z-10">
                <p className="tw-text-gray-900 tw-font-medium tw-text-3xl tw-leading-snug tw-pr-6 tw-flex-1">
                  Chat with <span className="tw-font-bold">real people</span> from our locally-based team
                </p>
                <button className="tw-flex tw-items-center tw-bg-teal-500 tw-text-white tw-px-5 tw-py-2.5 tw-rounded-full tw-text-xs tw-font-semibold hover:tw-bg-teal-600 tw-transition-colors">
                  <span>Contact Us</span>
                  <ArrowRight className="tw-w-4 tw-h-4 tw-ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Home Coverage with Animated Circles */}
<div className="tw-mt-32 tw-pb-16">
  <div className="tw-flex tw-flex-col-reverse md:tw-flex-row tw-items-center tw-gap-10 tw-px-5">
    <div className="tw-w-full md:tw-w-1/2 tw-mt-10 sm:tw-mt-0 tw-z-20 tw-space-y-3">
      <h3 className="tw-text-2xl md:tw-text-4xl lg:tw-text-5xl tw-font-medium tw-leading-tight">
        <span className="tw-text-teal-400">Smarter Wi‑Fi.</span><br/>
        <span className="tw-text-gray-900">Better Coverage.</span>
      </h3>
      <p className="tw-text-gray-600 tw-text-base md:tw-text-lg tw-leading-relaxed">
        Tired of dropped signals or buffering in certain rooms? NOVOS delivers fast, reliable Wi-Fi with solutions tailored to your home. And with optional add‑ons like Wi‑Fi beacons, we make it easy to extend your coverage where you need it most.
      </p>
    </div>
    <div className="tw-w-full md:tw-w-1/2 tw-relative tw-overflow-visible">
      <div className="tw-relative tw-w-full tw-flex tw-justify-center">
        <div className="tw-bg-teal-300 tw-rounded-[30px] tw-w-full tw-h-[200px] lg:tw-w-[650px] lg:tw-h-[400px] tw-mx-auto" />
        <img
          src={HomeCover}
          alt="Home coverage illustration"
          className="tw-absolute tw--top-10 md:tw--top-20 tw-left-0 tw-right-0 tw-z-10 tw-w-full sm:tw-max-w-[650px] tw-h-auto sm:tw-max-h-[586px] tw-mx-auto"
        />
        {/* Dot 1: 20% from left, 25% from bottom */}
        <div className="tw-absolute stronger-section-dot tw-z-20 tw-w-[150px] tw-h-[150px] tw-left-[30%] tw-top-[10%]">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="10" fill="white" fillOpacity="0.1"/>
            <circle cx="250" cy="250" r="20" fill="white" fillOpacity="0.15"/>
            <circle cx="250" cy="250" r="30" fill="white" fillOpacity="0.2"/>
          </svg>
        </div>
        {/* Dot 2: 20% from right, 25% from bottom */}
        <div className="tw-absolute stronger-section-dot tw-z-20 tw-w-[150px] tw-h-[150px] tw-right-[20%] tw-bottom-[25%]">
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="10" fill="white" fillOpacity="0.1"/>
            <circle cx="250" cy="250" r="20" fill="white" fillOpacity="0.15"/>
            <circle cx="250" cy="250" r="30" fill="white" fillOpacity="0.2"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default FeaturesSection