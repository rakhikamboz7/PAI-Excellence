import React from 'react';

// Main dialog wrapper
const Dialog = ({ open, children }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {children}
        </div>
      )}
    </>
  );
};

// Trigger button
const DialogTrigger = ({ children, ...props }) => {
  return React.cloneElement(children, {
    ...props,
    onClick: (e) => {
      e.preventDefault();
      props.onClick?.();
    }
  });
};

// Overlay background
const DialogOverlay = ({ className, ...props }) => (
  <div
    className={`
      fixed inset-0 z-50 bg-black/80 backdrop-blur-sm 
      data-[state=open]:animate-in data-[state=closed]:animate-out 
      data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
      ${className}
    `}
    {...props}
  />
);

// Main dialog content
const DialogContent = ({ className, children, ...props }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <DialogOverlay onClick={props.onOpenChange} />
    <div
      className={`
        fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg 
        translate-x-[-50%] translate-y-[-50%] gap-4 border 
        border-gray-200 bg-white p-6 shadow-lg duration-200 
        dark:border-gray-800 dark:bg-gray-950
        data-[state=open]:animate-in data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
        sm:rounded-lg
        ${className}
      `}
      {...props}
    >
      {children}
      <button 
        className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
        onClick={props.onOpenChange}
      >
        <span className="sr-only">Close</span>
      </button>
    </div>
  </div>
);

// Dialog header
const DialogHeader = ({ className, children, ...props }) => (
  <div
    className={`
      flex flex-col space-y-1.5 text-center sm:text-left
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

// Dialog footer
const DialogFooter = ({ className, children, ...props }) => (
  <div
    className={`
      flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

// Dialog title
const DialogTitle = ({ className, children, ...props }) => (
  <h3
    className={`
      text-lg font-semibold leading-none tracking-tight
      ${className}
    `}
    {...props}
  >
    {children}
  </h3>
);

// Dialog description
const DialogDescription = ({ className, children, ...props }) => (
  <p
    className={`
      text-sm text-gray-500 dark:text-gray-400
      ${className}
    `}
    {...props}
  >
    {children}
  </p>
);

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
};

