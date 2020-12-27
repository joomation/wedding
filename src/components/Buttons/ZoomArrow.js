import React from 'react';

function ZoomArrow({ type, white = false }) {
  return (
    <svg width="70" height="70" x="0px" y="0px" viewBox="0 0 70 70">
      <path
        fill="#222222"
        stroke="#222222"
        strokeWidth={0.4}
        d="M31.9,37.3h-5.3c-0.3,0-0.6-0.2-0.6-0.6s0.2-0.6,0.6-0.6h6.7c0.3,0,0.6,0.2,0.6,0.6v6.7
	c0,0.3-0.2,0.6-0.6,0.6s-0.6-0.2-0.6-0.6v-5.3l-5.7,5.7c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8L31.9,37.3L31.9,37.3z
	 M38.1,32.7h5.3c0.3,0,0.6,0.2,0.6,0.6s-0.2,0.6-0.6,0.6h-6.7c-0.3,0-0.6-0.2-0.6-0.6v-6.7c0-0.3,0.2-0.6,0.6-0.6s0.6,0.2,0.6,0.6
	v5.3l5.7-5.7c0.2-0.2,0.6-0.2,0.8,0c0.2,0.2,0.2,0.6,0,0.8L38.1,32.7L38.1,32.7z"
      />
    </svg>
  );
}

export default ZoomArrow;