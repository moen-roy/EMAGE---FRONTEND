import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const checkboxClasses = cva(
  'appearance-none border-2 rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'border-orange-500 text-orange-500 focus:ring-orange-500 checked:bg-orange-500 checked:border-orange-500',
        secondary: 'border-gray-400 text-gray-600 focus:ring-gray-500 checked:bg-gray-600 checked:border-gray-600',
      },
      size: {
        small: 'w-4 h-4',
        medium: 'w-5 h-5',
        large: 'w-6 h-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const CheckBox = ({
  // Optional parameters (no defaults)
  layout_width,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  checked,
  onChange,
  name,
  id,
  label,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Handle checkbox change
  const handleChange = (event) => {
    const newChecked = event?.target?.checked;
    setIsChecked(newChecked);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  const checkboxElement = (
    <input
      type="checkbox"
      name={name}
      id={id}
      disabled={disabled}
      checked={checked !== undefined ? checked : isChecked}
      onChange={handleChange}
      className={twMerge(
        checkboxClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );

  if (label) {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        {checkboxElement}
        <span className="text-sm font-medium text-gray-700 select-none">
          {label}
        </span>
      </label>
    );
  }

  return checkboxElement;
};

export default CheckBox;