import * as React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  height?: number; // Optional height in pixels
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, height = 100, style, ...props }, ref) => {
    const combinedStyle: React.CSSProperties = {
      width: '100%',
      height: `${height}px`,
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      resize: 'none',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      outline: 'none',
      ...style,
    };

    return (
      <div style={{ width: '100%', marginBottom: '1rem' }}>
        {label && <label style={{ marginBottom: '4px', display: 'block', fontWeight: 500 }}>{label}</label>}
        <textarea ref={ref} style={combinedStyle} {...props} />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
