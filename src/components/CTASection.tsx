import { MapPin } from 'lucide-react';
import CTACover from '@/assets/home2.png'

const CTASection = () => {
  return (
    <section className="tw-py-20 tw-bg-white">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6">
        {/* CTA Card */}
        <div className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-max-w-5xl tw-mx-auto">
          {/* Background Image */}
          <div 
            className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center"
            style={{
              backgroundImage: `url(${CTACover})`,
            }}
          />
          
          {/* Overlay */}
          <div className="tw-absolute tw-inset-0 tw-bg-black/15" />
          
          {/* Content */}
          <div className="tw-relative tw-z-10 tw-px-8 tw-py-16 lg:tw-px-16 lg:tw-py-20 tw-text-center">
            {/* Heading */}
            <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-medium tw-text-white tw-mb-4 tw-leading-tight">
              Discover if NOVOS
              <br />
              FIBER is in Your Area
            </h2>
            
            {/* Subheading */}
            <p className="tw-text-sm lg:tw-text-lg tw-text-white/90 tw-mb-12 tw-max-w-2xl tw-mx-auto">
              Join countless others enjoying reliable speeds
              <br />
              and hometown support!
            </p>
            
            {/* Search Bar */}
            <div className="tw-flex tw-justify-center tw-mb-16">
              <div className="tw-flex tw-items-center tw-bg-white tw-border-2 tw-border-teal-600 tw-rounded-full tw-overflow-hidden tw-w-full tw-max-w-md">
                <div className="tw-flex tw-items-center tw-justify-center tw-px-4">
                  <MapPin className="tw-w-5 tw-h-5 tw-text-teal-600" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for your address" 
                  className="tw-flex-1 tw-py-3 tw-pr-4 tw-bg-transparent tw-text-gray-700 tw-placeholder-gray-700 tw-outline-none" 
                />
                <button className="tw-bg-teal-600 tw-text-white tw-px-6 tw-py-3 tw-m-1 tw-rounded-full tw-font-semibold tw-hover:tw-bg-teal-700 tw-transition-colors">
                  Search Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;