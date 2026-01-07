import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="gradient-coral rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-gray-900 mb-4">
            Ready to Simplify Your Gift Exchange?
          </h2>
          <p className="text-large text-gray-800 mb-8 max-w-2xl mx-auto">
            Join thousands of happy users who have made their gift exchanges stress-free and fun.
            Get started today—it's completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white h-14 px-8 text-lg">
                Create Free Exchange
              </Button>
            </Link>
            <Link href="#features">
              <Button variant="outline" className="bg-white hover:bg-gray-50 h-14 px-8 text-lg border-2">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
