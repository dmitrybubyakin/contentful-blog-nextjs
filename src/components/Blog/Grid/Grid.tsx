import React from 'react';

interface ComponentProps {
  children: React.ReactNode;
}

export default function Grid({ children }: ComponentProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {children}
    </div>
  );
}
