import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputClasses = cva(
  'transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'focus:ring-orange-500',
        secondary: 'focus:ring-gray-500',
        outline: 'bg-transparent focus:ring-orange-500',
      },
      size: {
        small: 'text-sm px-3 py-1.5',
        medium: 'text-base px-4 py-2',
        large: 'text-lg px-6 py-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const EditText = ({
  // Required parameters with defaults
  placeholder = "Your email",
  text_font_size = "18",
  text_font_family = "Poppins",
  text_font_weight = "400",
  text_line_height = "27px",
  text_text_align = "center",
  text_color = "#ffffff",
  border_border = "1 solid #ffffff",
  border_border_radius = "34px 0px 34px 0px",
  
  // Optional parameters (no defaults)
  layout_width,
  padding,
  position,
  
  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  value,
  onChange,
  type = "text",
  name,
  id,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
  const hasValidPadding = padding && typeof padding === 'string' && padding?.trim() !== '';
  const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPadding ? `p-[${padding}]` : '',
    hasValidPosition ? position : '',
  ]?.filter(Boolean)?.join(' ');

  // Build inline styles for required parameters
  const inputStyles = {
    fontSize: text_font_size ? `${text_font_size}px` : '18px',
    fontFamily: text_font_family || 'Poppins',
    fontWeight: text_font_weight || '400',
    lineHeight: text_line_height || '27px',
    textAlign: text_text_align || 'center',
    color: text_color || '#ffffff',
    border: border_border || '1px solid #ffffff',
    borderRadius: border_border_radius || '34px 0px 34px 0px',
  };

  // Handle input change
  const handleChange = (event) => {
    const newValue = event?.target?.value;
    setInputValue(newValue);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      disabled={disabled}
      placeholder={placeholder}
      value={value !== undefined ? value : inputValue}
      onChange={handleChange}
      style={inputStyles}
      className={twMerge(
        inputClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    />
  );
};

export default EditText;