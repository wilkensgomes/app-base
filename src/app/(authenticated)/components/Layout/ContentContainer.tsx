import React, { useEffect, useRef, useState } from 'react';
import { useStoreContextNavigation } from './StoreContextNavigation';
import { cn } from '@/utils/cn';

export default function ContentContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { collapse } = useStoreContextNavigation();

  return (
    <div className={cn('mt-16 p-8', collapse ? 'pl-52' : null)}>{children}</div>
  );
}
