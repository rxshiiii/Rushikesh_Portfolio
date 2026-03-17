'use client';

import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: '100%', minHeight: '100vh', background: 'var(--bg)' }} />
  }
);

export default function SplineComponent(props) {
  return <Spline {...props} />;
}
