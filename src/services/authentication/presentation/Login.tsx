import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from "../hooks/authHook";



const LoginForm: React.FC<AuthProps> = ({ onSwitch }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold font-heading text-stone-900 tracking-tight">Welcome back</h2>
        <p className="text-stone-500">Sign in to manage your workshop.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email Address"
          type="email"
          placeholder="name@workshop.com"
          required
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
            </svg>
          }
        />

        <div className="space-y-1">
          <Input
            label="Password"
            type="password"
            placeholder="Enter Secure Password Boss"
            required
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
          />
          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500 cursor-pointer" />
              <span className="text-sm text-stone-500 group-hover:text-stone-700 transition-colors">Remember me</span>
            </label>
            <button type="button" className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
              Forgot password?
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full" isLoading={isLoading}>
          Sign In
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-stone-200"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-stone-50 px-3 text-stone-400 font-medium tracking-wider">Or continue with</span>
        </div>
      </div>



      <p className="text-center text-sm text-stone-600">
        Don't have an account?{' '}
        <button
          onClick={() => onSwitch('register')}
          className="font-bold text-amber-600 hover:text-amber-700 transition-colors underline decoration-stone-200 hover:decoration-amber-300"
        >
          Create shop account
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
