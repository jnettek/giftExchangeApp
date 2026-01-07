import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* Left Column - Image */}
          <div className="gradient-coral rounded-3xl p-8 shadow-xl hover-scale transition-smooth flex flex-col">
            <div className="bg-white rounded-2xl p-6 max-w-xl mx-auto flex-grow flex items-center">
              <img
                src="/assets/landing_image.png"
                alt="Friends exchanging gifts"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="flex flex-col gap-4">
            {/* Main Heading & Description */}
            <div className="gradient-cream rounded-3xl p-8 sm:p-10 shadow-card flex-grow flex flex-col justify-center">
              <h3 className="mb-4">Organize Gift Exchanges with Ease</h3>

              <p className="text-large text-gray-700 mb-8">
                Say goodbye to the hassle of coordinating gift exchanges Join thousands making gift exchanges effortless. Draw names, create wish lists,
                and find the perfect gifts for friends, family, or colleagues.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up" className="flex-1">
                  <Button className="btn-coral w-full h-12 text-base font-semibold">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/sign-in" className="flex-1">
                  <Button variant="outline" className="w-full h-12 text-base border-2 hover:bg-gray-50">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3">
              {/* Stat 1 */}
              <div className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-smooth text-center">
                <div className="icon-bg-coral w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold">10k+</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">Happy Users</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-smooth text-center">
                <div className="icon-bg-coral w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold">5min</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">Setup Time</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-2xl p-5 shadow-soft hover:shadow-card transition-smooth text-center">
                <div className="icon-bg-coral w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">Free Forever</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
