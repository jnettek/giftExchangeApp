import { Gift, Users, Mail, Sparkles, Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function Features() {
  const features = [
    {
      icon: Gift,
      title: "Easy Setup",
      description: "Create a gift exchange in minutes. No complicated forms or confusing steps."
    },
    {
      icon: Users,
      title: "Group Management",
      description: "Add participants, set spending limits, and manage exclusions effortlessly."
    },
    {
      icon: Sparkles,
      title: "Smart Matching",
      description: "Our algorithm ensures fair and random assignments with customizable rules."
    },
    {
      icon: Mail,
      title: "Auto Invitations",
      description: "Send beautiful email invitations with all the details automatically included."
    },
    {
      icon: Heart,
      title: "Wishlists",
      description: "Participants can create wishlists to help their Secret Santa find the perfect gift."
    },
    {
      icon: Star,
      title: "Track Progress",
      description: "See who has joined, created their wishlist, and purchased their gifts."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2>Why Choose Party Gift Exchange?</h2>
          <p className="text-large text-gray-600 max-w-2xl mx-auto">
            Make your gift exchanges memorable and stress-free with our powerful features
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-coral">
                <CardContent className="pt-8 text-center">
                  <div className="icon-bg-cream w-16 h-16 mx-auto mb-6">
                    <Icon className="text-[hsl(var(--coral-primary))]" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
