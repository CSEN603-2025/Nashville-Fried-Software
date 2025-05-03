import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

    const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>}
        <textarea
          ref={ref}
          className={`w-full border border-gray-300 rounded-md p-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
      </div>
    );
  }
);

export default Textarea
Textarea.displayName = 'Textarea';
