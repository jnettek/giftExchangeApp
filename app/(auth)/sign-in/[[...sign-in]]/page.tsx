import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-theme";

export default function Page() {
  return (
    <div className="min-h-screen bg-cream-light flex items-center justify-center p-4">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4A79D] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e89689] opacity-10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-md">
        {/* Custom branding header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">
            Sign in to continue to Gift Exchange
          </p>
        </div>

        {/* Clerk component with theme */}
        <SignIn appearance={clerkAppearance} />

        {/* Custom footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Need help?{' '}
            <a href="/user" className="text-[#F4A79D] hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
