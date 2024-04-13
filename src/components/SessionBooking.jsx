import React from 'react';
import { useState } from 'react';
import { InlineWidget } from 'react-calendly';

export default function SessionBooking() {
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <InlineWidget
        styles={{ height: '100%', width: '100%' }}
        url="https://calendly.com/s22137/30min"
      />
    </div>
  );
}
