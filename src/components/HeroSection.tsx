'use client';

import React, { useRef, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';
import gsap from 'gsap';
import HeroCover from '@/assets/heroCover.png';
import BottomTick from '@/assets/bottomTick.svg?react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const plans = [
    {
        speed: 500,
        unit: 'MBPS',
        price: '59.99',
        features: [
            '500 Mbps upload & download',
            'Ideal for streaming, video calls, & everyday browsing'
        ],
        popular: false,
        bestValue: false
    },
    {
        speed: 1000,
        unit: 'GIG',
        price: '79.99',
        features: [
            '1000 Mbps upload & download',
            'Great for 4K streaming, remote work, & connecting multiple devices'
        ],
        popular: true,
        bestValue: false
    },
    {
        speed: 2500,
        unit: 'GIG',
        price: '114.99',
        features: [
            '2,500 Mbps upload & download',
            'Perfect for busy households, effortless 4K/8K streaming, gaming & large-file transfers',
            'Wi-Fi extender included ($80/mo. value)'
        ],
        popular: false,
        bestValue: false
    },
    {
        speed: 5000,
        unit: 'GIG',
        price: '159.99',
        features: [
            '5,000 Mbps upload & download',
            'Designed for seamless 8K streaming, VR & massive backups in seconds',
            'Wi-Fi extender included ($80/mo. value)',
            'Our fastest, strongest network—no limits, no compromises'
        ],
        popular: false,
        bestValue: true
    }
];

interface ProgressArcProps {
    percent: number;
}

const ProgressArc: React.FC<ProgressArcProps> = ({ percent }) => {
    const radius = 50;
    const strokeWidth = 12;
    const cx = radius;
    const cy = radius;
    const r = radius - strokeWidth / 2;
    const fullArcLength = Math.PI * r;
    const dashLength = (percent / 100) * fullArcLength;

    return (
        <svg
            width={radius * 2}
            height={radius + strokeWidth / 2}
            viewBox={`0 0 ${radius * 2} ${radius + strokeWidth / 2}`}
            className="tw-block tw-mx-auto"
        >
            <path d={`M ${cx - r},${cy} A ${r},${r} 0 0 1 ${cx + r},${cy}`} fill="none" stroke="#E0FBF8" strokeWidth={strokeWidth} />
            <path d={`M ${cx - r},${cy} A ${r},${r} 0 0 1 ${cx + r},${cy}`} fill="none" stroke="#3FC9C5" strokeWidth={strokeWidth} strokeDasharray={`${dashLength},${fullArcLength}`} strokeLinecap="round" />
        </svg>
    );
};

const PricingCard = ({ plan }: { plan: typeof plans[0] }) => {
    const percent = (plan.speed / 5000) * 100;

    return (
        <div className="tw-bg-white tw-rounded-3xl tw-shadow-xl tw-p-6 tw-flex tw-flex-col tw-h-full tw-min-h-[480px]">
            <div className="tw-h-8 tw-flex tw-justify-center tw-items-center -tw-mt-3">
                {plan.popular && (
                    <div className="tw-text-yellow-400 tw-px-4 tw-py-1 tw-rounded-full tw-text-sm tw-font-semibold tw-flex tw-items-center tw-space-x-1">
                        <Star className="tw-w-3 tw-h-3 tw-fill-current" />
                        <span>Most Popular</span>
                    </div>
                )}
                {plan.bestValue && (
                    <div className="tw-text-yellow-400 tw-px-4 tw-py-1 tw-rounded-full tw-text-sm tw-font-semibold tw-flex tw-items-center tw-space-x-1">
                        <span>✓</span>
                        <span>Best Value</span>
                    </div>
                )}
            </div>

            <ProgressArc percent={percent} />
            <div className="tw-text-center tw-mt-[-24px]">
                <div className="tw-text-2xl tw-font-bold tw-text-gray-900">{plan.speed}</div>
                <div className="tw-text-xs tw-text-gray-600 tw-font-medium">{plan.unit}</div>
            </div>

            <div className="tw-text-center tw-mt-4 tw-mb-6">
                <span className="tw-text-3xl tw-font-bold tw-text-gray-900">${plan.price}</span>
                <span className="tw-text-gray-500 tw-ml-1">/month</span>
            </div>

            <ul className="tw-space-y-3 tw-flex-1">
                {plan.features.map((f, i) => (
                    <li key={i} className="tw-flex tw-items-start tw-space-x-2">
                        <div className="tw-w-4 tw-h-4 tw-bg-teal-500 tw-rounded-full tw-min-w-4 tw-flex tw-items-center tw-justify-center tw-mt-0.5">
                            <div className="tw-text-white tw-text-xs">✓</div>
                        </div>
                        <span className="tw-text-gray-600 tw-text-sm tw-leading-relaxed">{f}</span>
                    </li>
                ))}
            </ul>

            <button className="tw-mt-6 tw-w-full tw-bg-teal-600 tw-text-white tw-py-3 tw-rounded-full tw-font-semibold hover:tw-bg-teal-700 tw-transition-colors">
                Choose Plan
            </button>
        </div>
    );
};

const HeroSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(
            sectionRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, delay: 0.5, ease: 'power2.out' }
        );
    }, []);

    return (
        <div ref={sectionRef} className="tw-relative tw-min-h-screen tw-pt-32">
            <div className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center tw-bg-no-repeat" style={{ backgroundImage: ['linear-gradient(to top, white 0%, rgba(255,255,255,0) 40%, white 75%)', `url(${HeroCover})`].join(', ') }} />

            <div className="tw-relative tw-z-10 tw-max-w-7xl tw-mx-auto tw-px-4 tw-py-12 sm:tw-px-6 lg:tw-px-8">
                <div className="tw-flex tw-justify-center tw-mb-8">
                    <div className="tw-bg-white tw-rounded-lg tw-border-teal-300 tw-border-2 tw-px-4 tw-py-2 tw-shadow-lg tw-flex tw-items-center tw-space-x-2">
                        <img className="tw-w-6 tw-h-6" src="https://img.icons8.com/color/48/google-logo.png" alt="Google logo" />
                        <div className="tw-flex tw-items-center tw-space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="tw-w-4 tw-h-4 tw-fill-yellow-400 tw-text-yellow-400" />
                            ))}
                        </div>
                        <div>
                            <div className="tw-text-gray-700 tw-text-sm tw-font-medium">4.8 Rating</div>
                            <div className="tw-text-gray-500 tw-text-xs">250+ reviews</div>
                        </div>
                    </div>
                </div>

                <div className="tw-text-center tw-mb-6">
                    <h1 className="tw-text-4xl sm:tw-text-5xl lg:tw-text-6xl tw-font-semibold tw-text-gray-700 tw-leading-tight">
                        Big-time internet just<br />
                        got a {""}
                        <span className="tw-relative tw-inline-block">
                            <span className="tw-text-[#3FC9C5] tw-relative tw-z-10 tw-inline-block">
                                local
                                <span className="tw-absolute tw-left-0 -tw-bottom-2 sm:-tw-bottom-5 tw-w-full tw-pointer-events-none">
                                    <BottomTick className="tw-w-full tw-h-full" />
                                </span>
                            </span>
                        </span>{" "}
                        address.
                    </h1>
                </div>

                <div className="tw-text-center tw-mb-10">
                    <p className="tw-text-lg sm:tw-text-xl tw-text-gray-600 tw-font-medium">
                        Built on trust. Powered by people. Blazing fast.
                    </p>
                </div>

                <div className="tw-flex tw-justify-center tw-mb-16">
                    <div className="tw-flex tw-items-center tw-bg-white tw-border-2 tw-border-teal-600 tw-rounded-full tw-overflow-hidden tw-w-full tw-max-w-md">
                        <div className="tw-flex tw-items-center tw-justify-center tw-px-4">
                            <MapPin className="tw-w-5 tw-h-5 tw-text-teal-600" />
                        </div>
                        <input type="text" placeholder="Search for your address" className="tw-flex-1 tw-py-3 tw-pr-4 tw-bg-transparent tw-text-gray-700 tw-placeholder-gray-700 tw-outline-none" />
                        <button className="tw-bg-teal-600 tw-text-white tw-px-6 tw-py-3 tw-m-1 tw-rounded-full tw-font-semibold">
                            Search Now
                        </button>
                    </div>
                </div>

                <div className="tw-block lg:tw-hidden tw-mx-auto">
                    <div className="tw-block lg:tw-hidden">
                        <Swiper
                            spaceBetween={16}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {plans.map((plan, idx) => (
                                <SwiperSlide key={idx}>
                                    <PricingCard plan={plan} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="tw-hidden lg:tw-grid tw-grid-cols-4 tw-gap-6">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="tw-transition-transform tw-duration-500 hover:tw-scale-[1.03]"
                        >
                            <PricingCard plan={plan} />
                        </div>
                    ))}
                </div>

                <div className="tw-mt-12 tw-flex tw-justify-center">
                    <div className="tw-border tw-border-gray-300 tw-rounded-2xl tw-px-6 tw-py-4 tw-flex tw-flex-wrap tw-items-center tw-text-sm tw-text-gray-700">

                        <div className="tw-flex tw-items-center tw-gap-2 tw-mr-8 sm:tw-mr-12 lg:tw-mr-16">
                            <span>*All plans include</span>
                        </div>
                        {[
                            'FREE Wi-Fi 6 Router ($10/mo value)',
                            'Expert Installation ($100/mo value)',
                            'Lifetime pricing',
                        ].map((text, i) => (
                            <div key={i} className="tw-flex tw-items-center tw-gap-2 tw-mr-2">
                                <div className="tw-w-5 tw-h-5 tw-bg-teal-500 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                                    <span className="tw-text-white tw-text-xs">✓</span>
                                </div>
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
