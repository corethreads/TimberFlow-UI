
import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../hooks/authHook';
import type { RegisterRequestDTO } from '../types/auth';


export type AuthProps = {
  onSwitch: (view: 'login' | 'register') => void;
};


const RegisterForm: React.FC<AuthProps> = ({ onSwitch }) => {

  const { register, isLoading, error, clearError } = useAuth();

  const [formData, setFormData] = useState<RegisterRequestDTO>({
    businessname: "",
    username: "",
    email: "",
    password: ""
  });

  const [fieldErrors, setFieldErrors] = useState<{
    businessname?: string;
    username?: string;
    email?: string;
    password?: string;
  }>({});

  const validate = () => {
    const errs: typeof fieldErrors = {};
    if (!formData.username.trim()) errs.username = "Full name is required";
    if (!formData.businessname.trim()) errs.businessname = "Business name is required";
    if (!formData.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Enter a valid email";
    if (!formData.password) errs.password = "Password is required";
    else if (formData.password.length < 8) errs.password = "Minimum 8 characters";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    if (!validate()) return;
    try {
      await register(formData);
    } catch {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold font-heading text-stone-900 tracking-tight">Open your shop</h2>
        <p className="text-stone-500">The tools you need to grow your business.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Full Name"
            placeholder="John Miller"
            required
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
          <Input
            label="Business Name"
            placeholder="Miller Woodworks"
            required
            value={formData.businessname}
            onChange={(e) => setFormData({ ...formData, businessname: e.target.value })}
          />
        </div>



        <Input
          label="Email Address"
          type="email"
          placeholder="john@workshop.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Min. 8 characters"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <div className="bg-stone-100/50 p-3 rounded-lg">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500" required />
            <span className="text-xs text-stone-600 leading-normal">
              I agree to the <a href="#" className="underline font-semibold hover:text-amber-600">Terms of Service</a> and confirm I am over 18 years of age.
            </span>
          </label>
        </div>

        <Button type="submit" variant='primary' className="w-full" isLoading={isLoading}>
          Create Account
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-stone-200"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-stone-50 px-3 text-stone-400 font-medium tracking-wider">Or register with</span>
        </div>
      </div>



      <p className="text-center text-sm text-stone-600">
        Already a member?{' '}
        <button
          onClick={() => onSwitch('login')}
          className="font-bold text-amber-600 hover:text-amber-700 transition-colors underline decoration-stone-200 hover:decoration-amber-300"
        >
          Sign into your shop
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;

