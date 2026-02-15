import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, icon, error, className = '', ...props }) => {
  return (
    <div className="space-y-1.5 w-full">
      <label className="text-sm font-semibold text-stone-700 block ml-1">
        {label}
      </label>
      <div className="relative group">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full bg-white border border-stone-200 text-stone-900 text-sm rounded-xl block p-3.5 outline-none
            transition-all duration-200 ring-0 hover:border-stone-300
            focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500
            ${icon ? 'pl-11' : 'pl-4'}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1 ml-1">{error}</p>}
    </div>
  );
};

export default Input;
