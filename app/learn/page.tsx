'use client';

import Link from 'next/link';
import { FaGamepad, FaSmile } from 'react-icons/fa';

export default function Learn() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen space-y-8 md:space-y-0 md:space-x-12">
      {/* Card 1: Playground */}
      <Link href="/learn/playground" passHref>
        <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-80 h-64 flex flex-col justify-center items-center">
          <FaGamepad className="text-6xl text-blue-500 mb-4" /> {/* Ikon Gamepad */}
          <h2 className="text-2xl font-bold mb-2">Playground</h2>
          <p>Explore and play around with cool stuff!</p>
        </div>
      </Link>

      {/* Card 2: Emotion */}
      <Link href="/learn/emotion" passHref>
        <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-80 h-64 flex flex-col justify-center items-center">
          <FaSmile className="text-6xl text-yellow-500 mb-4" /> {/* Ikon Smile */}
          <h2 className="text-2xl font-bold mb-2">Emotion</h2>
          <p>Discover different emotions and express yourself!</p>
        </div>
      </Link>
    </div>
  );
}
