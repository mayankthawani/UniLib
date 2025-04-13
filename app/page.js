"use client";
import dynamic from 'next/dynamic';

const SplashScreen = dynamic(() => import('@/components/SplashScreen'), {
  ssr: false,
});

export default function Home() {
  return <SplashScreen />;
}
