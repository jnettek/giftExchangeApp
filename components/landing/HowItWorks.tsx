import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Set Up Details",
      description: "Create your gift exchange by setting a name, date, spending limit, and any special rules. Choose between Secret Santa, White Elephant, or other exchange types."
    },
    {
      number: "2",
      title: "Add Participants",
      description: "Enter the names and email addresses of everyone participating. You can also set exclusions if certain people shouldn't be matched together."
    },
    {
      number: "3",
      title: "Create Wishlists",
      description: "Each participant can create their own wishlist with gift ideas, links, sizes, and preferences. This helps ensure everyone gets something they'll love."
    },
    {
      number: "4",
      title: "Send Invitations",
      description: "With one click, send personalized invitations to all participants. They'll receive their match and can access their recipient's wishlist."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2>How It Works</h2>
          <p className="text-large text-gray-600">
            Get started with your gift exchange in four simple steps
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="icon-bg-coral w-16 h-16 flex-shrink-0">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <div className="flex-1">
                <h3>{step.title}</h3>
                <p className="text-large text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/sign-up">
            <Button className="btn-coral h-14 px-8 text-lg">
              Get Started Now <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
