import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "This made our family Secret Santa so much easier! No more confusion about who has who, and the wishlist feature was a lifesaver.",
      author: "Sarah Martinez",
      role: "Family Organizer",
      initials: "SM"
    },
    {
      quote: "Perfect for our office gift exchange! The spending limit feature kept everyone on track, and the automatic emails were so professional.",
      author: "James Thompson",
      role: "HR Manager",
      initials: "JT"
    },
    {
      quote: "We've used this for three years running now. It's become a tradition! Love how easy it is to re-use our group each year.",
      author: "Emma Peterson",
      role: "Friend Group Host",
      initials: "EP"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2>What Our Users Say</h2>
          <p className="text-large text-gray-600">
            Join thousands of happy gift exchangers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-[hsl(var(--coral-primary))] text-[hsl(var(--coral-primary))]" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="icon-bg-coral w-10 h-10">
                    <span className="font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-small text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
