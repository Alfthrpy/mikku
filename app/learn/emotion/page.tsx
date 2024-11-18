'use client'
import Image from 'next/image'; // Untuk gambar yang diambil dari folder public atau dari URL
import { useState } from 'react';

export default function Learn() {
  const emosiList = [
    {
      name: "Bahagia",
      desc: "Perasaan senang dan bahagia.",
      color: "bg-yellow-500",
      emoji: "😊",
      image: "/images/senang.png", // Tambahkan path gambar
    },
    {
      name: "Sedih",
      desc: "Perasaan sedih dan melankolis.",
      color: "bg-blue-500",
      emoji: "😢",
      image: "/images/sedih.png", // Tambahkan path gambar
    },
    {
        name: "Marah",
        desc: "Perasaan Kesal dan geram.",
        color: "bg-red-500",
        emoji: "😡",
        image: "/images/marah.png", // Tambahkan path gambar
      },
      {
        name: "Kaget",
        desc: "Perasaan terkejut dan kaget.",
        color: "bg-white-500",
        emoji: "😱",
        image: "/images/kaget.png", // Tambahkan path gambar
      },
      {
        name: "Jijik",
        desc: "Perasaan Jijik dan Mual.",
        color: "bg-green-500",
        emoji: "🤮",
        image: "/images/jijik.png ", // Tambahkan path gambar
      },
      {
        name: "Takut",
        desc: "Perasaan Takut dan gelisah.",
        color: "bg-purple-500",
        emoji: "😰",
        image: "/images/takut.png", // Tambahkan path gambar
      },
  ];

  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const handleOpenModal = (name: string) => {
    setSelectedEmotion(name);
  };

  const handleCloseModal = () => {
    setSelectedEmotion(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-primary flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold text-neutral mb-6">Mengenal Emosi</h1>
      <p className="text-xl mb-8 text-gray-700">
        Mari kita belajar mengenali berbagai emosi dengan cara yang menyenangkan!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {emosiList.map((emosi) => (
          <div key={emosi.name} className="card w-full bg-white shadow-xl p-4">
            {/* Tambahkan gambar di atas deskripsi */}
            <Image
              src={emosi.image} // Path ke gambar
              alt={`Gambar emosi ${emosi.name}`}
              width={400}
              height={300}
              className="rounded-lg mb-4"
            />
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
}
