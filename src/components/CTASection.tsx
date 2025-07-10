import { MapPin } from 'lucide-react';
import CTACover from '@/assets/home2.png';

const CTASection = () => {
  return (
    <section className="tw-py-20 tw-bg-white">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6">
        <div className="tw-relative tw-rounded-3xl tw-overflow-hidden tw-shadow-2xl tw-max-w-5xl tw-mx-auto">
          <div
            className="tw-absolute tw-inset-0 tw-bg-cover tw-bg-center"
            style={{ backgroundImage: `url(${CTACover})` }}
          />
          <div className="tw-absolute tw-inset-0 tw-bg-black/15" />
          <div className="tw-relative tw-z-10 tw-px-8 tw-py-16 lg:tw-px-16 lg:tw-py-20 tw-text-center tw-max-w-sm lg:tw-max-w-xl tw-mx-auto">
            <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-medium tw-text-white tw-mb-4 tw-leading-tight">
              Discover if NOVOS FIBER is in Your Area
            </h2>
            <p className="tw-text-sm lg:tw-text-lg tw-text-white/90 tw-mb-12">
              Join countless others enjoying reliable speeds and hometown support!
            </p>
            <div className="tw-flex tw-justify-center tw-mb-16">
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-items-center tw-w-full tw-max-w-md tw-bg-white tw-rounded-3xl lg:tw-rounded-full tw-p-4 lg:tw-px-2 lg:tw-py-0 lg:tw-border-2 lg:tw-border-teal-600">
                <div className="tw-flex tw-items-center tw-w-full">
                  <div className="tw-flex tw-items-center tw-px-2 lg:tw-px-4">
                    <MapPin className="tw-w-5 tw-h-5 tw-text-teal-600" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for your address"
                    className="tw-flex-1 tw-w-full tw-py-3 tw-px-2 tw-bg-transparent tw-text-gray-700 tw-placeholder-gray-700 tw-outline-none"
                  />
                </div>
                <button className="tw-whitespace-nowrap tw-w-full lg:tw-w-auto tw-bg-teal-600 tw-text-white tw-py-3 tw-px-6 tw-rounded-full tw-font-semibold tw-hover:tw-bg-teal-700 tw-transition-colors tw-mt-4 lg:tw-m-3 tw-text-sm lg:tw-text-base">
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
