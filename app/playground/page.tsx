"use client";
import { useState } from "react";
export default function Playground() {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [emoji, setEmoji] = useState<string>("");

  const emosiList = [
    { name: "Happy", color: "bg-yellow-400", emoji: "😊", caption: "Enjoy!" },
    { name: "Sad", color: "bg-blue-400", emoji: "😢", caption: "Cry it out!" },
    { name: "Angry", color: "bg-red-400", emoji: "😡", caption: "Calm down!" },
    {
      name: "Scared",
      color: "bg-purple-400",
      emoji: "😨",
      caption: "Stay safe!",
    },
    {
      name: "Confused",
      color: "bg-green-400",
      emoji: "😕",
      caption: "Ask help!",
    },
  ];

  const handleEmotionClick = (emoji: string, emotion: string) => {
    setSelectedEmotion(emotion);
    setEmoji(emoji);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-base-100 to-base p-4">
      <p className="text-lg mb-4">Bagaimana perasaanmu hari ini?</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {emosiList.map((emosi) => (
          <button
            key={emosi.name}
            className={`btn btn-lg ${emosi.color} hover:text-2xl transition-all`}
            onClick={() => handleEmotionClick(emosi.emoji, emosi.name)}
          >
            {emosi.name}
          </button>
        ))}
      </div>

      {selectedEmotion && (
        <div className="mt-6 p-4 rounded-lg shadow-md bg-white w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Kamu merasa {selectedEmotion}
          </h2>
          <div className="text-6xl mb-2">{emoji}</div>
          <p className="text-md text-gray-700">
            {emosiList.find((e) => e.name === selectedEmotion)?.caption}
          </p>
        </div>
      )}
    </div>
  );
}
