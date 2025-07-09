import React from 'react';
import { ArrowUpRight, Zap, DollarSign, Shield } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="tw-w-16 tw-h-16 tw-text-teal-500" />,
      title: "Lightning-fast speeds",
      description: "Fiber supercharges your internet with average speeds 25x times faster than cable."
    },
    {
      icon: <DollarSign className="tw-w-16 tw-h-16 tw-text-teal-500" />,
      title: "Simple, fair pricing",
      description: "No hidden fees, no surprises — just clear, honest pricing."
    },
    {
      icon: <Shield className="tw-w-16 tw-h-16 tw-text-teal-500" />,
      title: "Ultra-reliable",
      description: "Our 100% fiber-optic network ensures unmatched reliability and consistency."
    }
  ];

  const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
    <div className="tw-bg-teal-50 tw-rounded-3xl tw-p-8 tw-relative tw-h-full tw-flex tw-flex-col tw-items-center tw-text-center">
      {/* Arrow Icon */}
      <div className="tw-absolute tw-top-6 tw-right-6">
        <div className="tw-w-10 tw-h-10 tw-bg-white tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-sm">
          <ArrowUpRight className="tw-w-5 tw-h-5 tw-text-gray-600" />
        </div>
      </div>
      
      {/* Feature Icon */}
      <div className="tw-mb-6 tw-mt-4">
        {feature.icon}
      </div>
      
      {/* Title */}
      <h3 className="tw-text-xl tw-font-bold tw-text-gray-900 tw-mb-4">
        {feature.title}
      </h3>
      
      {/* Description */}
      <p className="tw-text-gray-600 tw-leading-relaxed tw-flex-1">
        {feature.description}
      </p>
    </div>
  );

  return (
    <section className="tw-py-16 tw-bg-white">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6">
        {/* Heading and Subheading */}
        <div className="tw-text-center tw-mb-16">
          <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-4">
            Why Switch to <span className="tw-text-teal-500">NOVOS</span>?
          </h2>
          <p className="tw-text-lg tw-text-gray-600 tw-max-w-2xl tw-mx-auto">
            Fast fiber. No fine print. Backed by local, Texas-based support.
          </p>
        </div>

        {/* Features Grid - Desktop */}
        <div className="tw-hidden md:tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* Features Swiper - Mobile */}
        <div className="tw-block md:tw-hidden tw-mb-16">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            className="tw-pb-12"
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <FeatureCard feature={feature} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Text Content - Before Image */}
        <div className="tw-block md:tw-hidden tw-mb-8">
          <h3 className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-mb-4">
            Enjoy locally-based customer support
          </h3>
        </div>

        {/* Large Hero Image */}
        <div className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-h-[500px] lg:tw-h-[600px]">
          <img
            src="https://images.pexels.com/photos/4545962/pexels-photo-4545962.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Family using devices"
            className="tw-w-full tw-h-full tw-object-cover"
          />
          
          {/* Overlay */}
          <div className="tw-absolute tw-inset-0 tw-bg-black/30" />
          
          {/* Desktop Text Content - Bottom Left */}
          <div className="tw-hidden md:tw-block tw-absolute tw-bottom-8 tw-left-8 tw-max-w-md">
            <h3 className="tw-text-3xl lg:tw-text-4xl tw-font-bold tw-text-white tw-mb-4 tw-leading-tight">
              Enjoy locally-based customer support
            </h3>
          </div>
          
          {/* Chat Widget - Bottom Right */}
          <div className="tw-absolute tw-bottom-8 tw-right-8">
            <div className="tw-bg-white tw-rounded-2xl tw-p-4 tw-shadow-lg tw-max-w-xs">
              <div className="tw-flex tw-items-start tw-space-x-3">
                <div className="tw-flex-1">
                  <p className="tw-text-gray-900 tw-font-medium tw-mb-1">
                    Chat with <span className="tw-font-bold">real people</span> from our locally-based team
                  </p>
                </div>
              </div>
              <button className="tw-mt-3 tw-bg-teal-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-full tw-text-sm tw-font-semibold tw-hover:tw-bg-teal-600 tw-transition-colors tw-flex tw-items-center tw-space-x-2">
                <span>Contact Us</span>
                <ArrowUpRight className="tw-w-4 tw-h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Chat Widget - After Image */}
        <div className="tw-block md:tw-hidden tw-mt-8">
          <div className="tw-bg-gray-50 tw-rounded-2xl tw-p-6">
            <p className="tw-text-gray-900 tw-font-medium tw-mb-4">
              Chat with <span className="tw-font-bold">real people</span> from our locally-based team
            </p>
            <button className="tw-bg-teal-500 tw-text-white tw-px-6 tw-py-3 tw-rounded-full tw-font-semibold tw-hover:tw-bg-teal-600 tw-transition-colors tw-flex tw-items-center tw-space-x-2 tw-w-full tw-justify-center">
              <span>Contact Us</span>
              <ArrowUpRight className="tw-w-4 tw-h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;