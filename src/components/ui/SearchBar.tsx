'use client';

import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import React, { useState } from 'react';

export interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  type?: string;
  showIcon?: boolean;
  onSearch?: (value: string) => void;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

export function SearchBar({
  placeholder = 'Course, topic, creator',
  buttonText = 'Search',
  type = 'text',
  showIcon = true,
  onSearch,
  className,
  inputClassName,
  buttonClassName,
  value: controlledValue,
  onChange: controlledOnChange,
  name,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState('');

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(currentValue);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (controlledOnChange) {
      controlledOnChange(e);
    }
    if (!isControlled) {
      setInternalValue(e.target.value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex w-full max-w-[580px] items-center gap-2 rounded-full bg-white p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-200 focus-within:ring-4 focus-within:ring-white/20',
        className
      )}
    >
      <div className="flex flex-1 items-center gap-3 pl-4 sm:pl-5">
        {showIcon && <Search className="h-5 w-5 shrink-0 text-[#82868E]" />}
        <input
          type={type}
          name={name}
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={cn(
            'w-full bg-transparent font-sans text-sm text-neutral-900 outline-none placeholder:text-[#82868E] sm:text-base',
            inputClassName
          )}
        />
      </div>
      <button
        type="submit"
        className={cn(
          'shrink-0 rounded-full bg-[#D4FB20] px-6 py-2.5 font-sans text-sm font-semibold text-[#242528] transition-all duration-200 hover:bg-[#c3e813] active:scale-95 sm:px-7 sm:py-3 sm:text-base',
          buttonClassName
        )}
      >
        {buttonText}
      </button>
    </form>
  );
}

export default SearchBar;
