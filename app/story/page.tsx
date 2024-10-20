'use client';

import Link from 'next/link';
import {FaBook,FaCrown } from 'react-icons/fa';

export default function Story() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen space-y-8 md:space-y-0 md:space-x-12">
      {/* Card 1: Playground */}
      <Link href="/story/kisah-nabi" passHref>
        <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-80 h-64 flex flex-col justify-center items-center">
          <FaBook className="text-6xl text-blue-500 mb-4" /> {/* Ikon Gamepad */}
          <h2 className="text-2xl font-bold mb-2">Kisah Nabi</h2>
          <p>Ayo Mendengarkan Kisah Para Nabi</p>
        </div>
      </Link>

      {/* Card 2: Emotion */}
      <Link href="/story/kisah-muslimah" passHref>
        <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 cursor-pointer w-80 h-64 flex flex-col justify-center items-center">
          <FaCrown className="text-6xl text-yellow-500 mb-4" /> {/* Ikon Smile */}
          <h2 className="text-2xl font-bold mb-2">Kisah Muslimah</h2>
          <p>Ayo Mendengarkan Kisah Para Muslimah</p>
        </div>
      </Link>
    </div>
  );
}
