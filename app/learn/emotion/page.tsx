"use client";
import Image from "next/image"; // Untuk gambar yang diambil dari folder public atau dari URL
import { useState } from "react";

export default function Learn() {
  const emosiList = [
    {
      name: "Bahagia",
      desc: "Saat kamu mendapatkan mainan baru yang kamu inginkan!",
      color: "bg-white-500",
      emoji: "/images/Emoji_bahagia.png",
      image: "/images/senang.png",
    },
    {
      name: "Sedih",
      desc: "Saat es krim kesukaanmu terjatuh ke lantai...",
      color: "bg-white-500",
      emoji: "/images/Emoji_sedih.png",
      image: "/images/sedih.png",
    },
    {
      name: "Marah",
      desc: "Saat teman-temanmu terus mengganggu kamu dan tidak mau berhenti!",
      color: "bg-white-500",
      emoji: "/images/Emoji_marah.png",
      image: "/images/marah.png",
    },
    {
      name: "Kaget",
      desc: "Saat ada yang tiba-tiba muncul tanpa aba-aba, seperti balon yang meletus!",
      color: "bg-white-500",
      emoji: "/images/Emoji_kaget.png",
      image: "/images/kaget.png",
    },
    {
      name: "Jijik",
      desc: "Saat kamu melihat sampah busuk dengan belatung di dalamnya... eww!",
      color: "bg-white-500",
      emoji: "/images/Emoji_jijik.png",
      image: "/images/test.png",
    },
    {
      name: "Takut",
      desc: "Saat ada petir besar yang menyambar di malam hari... bum!",
      color: "bg-white-500",
      emoji: "/images/Emoji_takut.png",
      image: "/images/takut.png",
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
      <h1 className="text-4xl font-extrabold mb-6">
        Mengenal Emosi
      </h1>
      <p className="text-xl mb-8 text-gray-700">
        Mari kita belajar mengenali berbagai emosi dengan cara yang
        menyenangkan!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        {emosiList.map((emosi) => (
          <div key={emosi.name} className={`card w-full shadow-xl p-4 ${emosi.color}`}>
            {/* Tambahkan gambar di atas deskripsi */}
            <Image
              src={emosi.image} // Path ke gambar
              alt={`Gambar emosi ${emosi.name}`}
              width={400}
              height={300}
              onError={(e) => {
                e.currentTarget.src = "/images/jijik.png"; // Gambar fallback jika gagal dimuat
              }}
              className="rounded-lg mb-4"
            />
            <div
              className={`rounded-full w-20 h-20 flex items-center justify-center text-5xl ml-5`}
            >
              <Image
                src={emosi.emoji} // Path ke gambar
                alt={`Gambar emosi ${emosi.name}`}
                width={100}
                height={100}
                onError={(e) => {
                  e.currentTarget.src = "/images/jijik.png"; // Gambar fallback jika gagal dimuat
                }}
                className="rounded-full mt-3"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title text-2xl">{emosi.name}</h2>
              <p>{emosi.desc}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenModal(emosi.name)}
                >
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
