// components/SplashScreen.jsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

export default function SplashScreen() {
  const router = useRouter();
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/animations/intro.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data));

    const timeout = setTimeout(() => {
      router.push('/Signup');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-emerald-950/80 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 animate-fadeIn mb-8">
        Welcome to UniLib
      </h1>
      <div className="flex items-center justify-center max-w-md">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-80"
          />
        )}
      </div>
    </div>
  );
}
