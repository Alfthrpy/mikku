'use client'
import { useState } from "react";

const MengenalEmosi = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const emosiList = [
    { name: "Happy", color: "bg-yellow-400", emoji: "😊", desc: "Ketika kamu merasa sangat senang dan puas." },
    { name: "Sad", color: "bg-blue-400", emoji: "😢", desc: "Saat merasa sedih atau kecewa." },
    { name: "Angry", color: "bg-red-400", emoji: "😡", desc: "Ketika kamu merasa marah atau terganggu." },
    { name: "Scared", color: "bg-purple-400", emoji: "😨", desc: "Saat merasa takut atau cemas." },
    { name: "Confused", color: "bg-green-400", emoji: "😕", desc: "Ketika kamu bingung dan tidak yakin." },
  ];

  const handleOpenModal = (emotion: string) => {
    setSelectedEmotion(emotion);
  };

  const handleCloseModal = () => {
    setSelectedEmotion(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-primary flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold text-secondary mb-6">Mengenal Emosi</h1>
      <p className="text-xl mb-8 text-gray-700">Mari kita belajar mengenali berbagai emosi dengan cara yang menyenangkan!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {emosiList.map((emosi) => (
          <div key={emosi.name} className="card w-full bg-white shadow-xl p-4">
            <div className={`rounded-full w-16 h-16 flex items-center justify-center text-5xl ${emosi.color}`}>
              {emosi.emoji}
            </div>
            <div className="card-body">
              <h2 className="card-title text-2xl">{emosi.name}</h2>
              <p>{emosi.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={() => handleOpenModal(emosi.name)}>
                  Pelajari
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedEmotion && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Emosi: {selectedEmotion}</h3>
            <p className="py-4">
              {emosiList.find((e) => e.name === selectedEmotion)?.desc}
            </p>
            <div className="modal-action">
              <button className="btn" onClick={handleCloseModal}>
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MengenalEmosi;
