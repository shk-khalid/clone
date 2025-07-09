import Marquee from 'react-fast-marquee'
import { Star } from 'lucide-react'
import Google from '@/assets/google.svg?react'

const testimonials = [
    {
        name: 'Troy',
        rating: 5.0,
        text: "NOVOS fiber is the best! Great customer service and we've already noticed a difference in the wifi speed since switching to fiber."
    },
    {
        name: 'Rory Hand',
        rating: 5.0,
        text: "Novos has been a game-changer with fiber finally at my fingertips! It's not just fast; it's reliably stellar. The icing on the cake? Novos' customer service..."
    },
    {
        name: 'Shane John',
        rating: 5.0,
        text: "Marcus showed up on a Sunday MORNING to repair a connection that had broken on Saturday evening!!! Best service ever with guys who are..."
    },
    {
        name: 'Sarah Miller',
        rating: 5.0,
        text: 'Incredible speeds and even better customer support. The installation was seamless and the team was professional throughout the entire process.'
    },
    {
        name: 'Mike Johnson',
        rating: 5.0,
        text: 'Finally found an internet provider that delivers on their promises. Lightning fast speeds and zero downtime since we switched to NOVOS.'
    },
    {
        name: 'Lisa Chen',
        rating: 5.0,
        text: 'The fiber connection has transformed our home office setup. Video calls are crystal clear and file uploads are instantaneous.'
    }
]

const TestimonialCard = ({
    testimonial,
}: {
    testimonial: typeof testimonials[0]
}) => (
    <div
        className="tw-bg-white tw-rounded-2xl tw-shadow-lg tw-p-6 tw-mx-4 tw-min-w-[350px] tw-max-w-[350px] tw-flex tw-flex-col tw-justify-between tw-h-[200px]">
        {/* Name + Text */}
        <div>
            <h4 className="tw-font-semibold tw-text-gray-900 tw-text-lg">
                {testimonial.name}
            </h4>
            <p className="tw-text-gray-600 tw-text-sm tw-leading-relaxed tw-mt-2">
                {testimonial.text}
            </p>
        </div>

        {/* Footer: rating, stars, Google logo */}
        <div className="tw-flex tw-items-center tw-space-x-2 tw-pt-4">
            {/* numeric rating */}
            <span className="tw-text-sm tw-font-medium tw-text-gray-700">
                {testimonial.rating.toFixed(1)}
            </span>

            {/* stars */}
            <div className="tw-flex tw-space-x-1">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className="tw-w-4 tw-h-4 tw-fill-yellow-400 tw-text-yellow-400"
                    />
                ))}
            </div>

            {/* Google logo */}
            <img
                className="tw-w-6 tw-h-6"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="Google logo"
            />
        </div>
    </div>
)


const TestimonialsSection = () => (
    <section className="tw-relative tw-py-12 tw-bg-gray-100 tw-overflow-hidden">
        <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-mb-12">
            <h2 className="tw-text-4xl lg:tw-text-5xl tw-font-semibold tw-text-center tw-text-gray-900">
                Straight from the <span className="tw-text-teal-500">Fiberhood</span>
            </h2>
        </div>

        <div className="tw-relative tw-h-[200px] lg:tw-h-[250px]">
            <div className="tw-absolute tw-inset-0 tw-z-10">
                <Marquee speed={30} gradient={false} className="tw-flex tw-items-center tw-h-full">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} testimonial={t} />
                    ))}
                </Marquee>
            </div>

            <div
                className="tw-absolute tw-inset-0 tw-z-20 pointer-events-none"
                style={{
                    background: 'linear-gradient(to right, rgb(243 244 246) 30%, rgba(255,255,255,0) 100%)',
                }}
            />

            <div className="tw-relative tw-z-30 tw-max-w-7xl tw-mx-auto tw-px-6">
                <div className="tw-flex tw-items-center">
                    <div className="tw-max-w-lg">
                        <div className="tw-flex tw-items-end tw-space-x-4 tw-mb-6">
                            <div className="tw-text-8xl tw-font-bold tw-text-gray-900">4.8</div>
                            <div className="tw-flex tw-items-center tw-space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="tw-w-6 tw-h-6 tw-fill-yellow-400 tw-text-yellow-400" />
                                ))}
                            </div>
                        </div>
                        <div className="tw-flex tw-items-center tw-space-x-5 tw-mb-4">
                            <Google className="tw-h-6 tw-w-auto" />
                            <div className="tw-text-gray-600 tw-text-sm">
                                Avg. Customer Rating: <span className="tw-font-bold">4.8</span>
                            </div>
                        </div>
                        <p className="tw-text-gray-600 tw-text-lg tw-leading-relaxed">
                            Here’s what your neighbors are saying...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)


export default TestimonialsSection
