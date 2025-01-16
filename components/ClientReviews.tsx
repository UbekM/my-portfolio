'use client'

import React from 'react';
import dynamic from 'next/dynamic';

const Reviews = dynamic(() => import('./Reviews'), { ssr: false });

export default function ClientReviews() {
  return <Reviews />;
}

