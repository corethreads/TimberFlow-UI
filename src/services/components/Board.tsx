
import React from 'react';
import timberLogo from '../../assets/timber.png';
export type AuthView = 'login' | 'register';

interface AuthLayoutProps {
  children: React.ReactNode;
  view: AuthView;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Left Pane: Visual/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-stone-900 text-white overflow-hidden">
        {/* Dynamic Background Image based on carpenter theme */}
        <div
          className="absolute inset-0 z-0 opacity-40 grayscale-[0.2]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=2000')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent z-10" />

        {/* Branding Content */}
        <div className="relative z-20 p-16 flex flex-col justify-between h-full w-full">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg overflow-hidden">
                <img
                  src={timberLogo}

                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-3xl font-bold tracking-tight font-heading">TimberFlow</span>
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6 font-heading">
              Built by carpenters,<br />
              <span className="text-amber-500 underline decoration-stone-500/30">for carpenters.</span>
            </h1>
            <p className="text-stone-300 text-xl max-w-md leading-relaxed">
              Manage projects, track supplies, and handle client invoices with the industry's most specialized toolkit.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/${i + 40}/64/64`}
                    className="w-10 h-10 rounded-full border-2 border-stone-900 ring-2 ring-stone-900"
                    alt="User"
                  />
                ))}
              </div>
              <p className="text-stone-400 text-sm">
                Join <span className="text-white font-semibold">2,400+</span> professionals growing their woodshops.
              </p>
            </div>
            <div className="bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 p-6 rounded-2xl">
              <p className="italic text-stone-200 mb-4">
                "TimberFlow saved me 15 hours a week on quoting and client follow-ups. I'm finally back in the shop where I belong."
              </p>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-amber-500 text-sm">Marcus Thorne</span>
                <span className="text-stone-500 text-xs">• Lead Carpenter, MT Woodworks</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Pane: Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-24 bg-stone-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <span className="text-2xl font-bold font-heading">TimberFlow</span>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>

          <footer className="mt-12 pt-8 border-t border-stone-200 text-center">
            <p className="text-stone-500 text-xs">
              © {new Date().getFullYear()} TimberFlow Inc. All rights reserved.
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span>
              <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
              <span> • </span>
              <a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
