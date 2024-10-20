'use client';
import { useState } from "react";
import Image from "next/image"; // Import komponen Image dari Next.js

export default function EmotionGame() {
  const emosiList = [
    {
      name: "Bahagia",
      desc: "Perasaan senang dan bahagia.",
      color: "bg-yellow-500",
      emoji: "😊",
      image: "/images/senang.png",
    },
    {
      name: "Sedih",
      desc: "Perasaan sedih dan melankolis.",
      color: "bg-blue-500",
      emoji: "😢",
      image: "/images/sedih.png",
    },
    {
      name: "Marah",
      desc: "Perasaan Kesal dan geram.",
      color: "bg-red-500",
      emoji: "😡",
      image: "/images/marah.png",
    },
    {
      name: "Kaget",
      desc: "Perasaan terkejut dan kaget.",
      color: "bg-white-500",
      emoji: "😱",
      image: "/images/kaget.png",
    },
    {
      name: "Jijik",
      desc: "Perasaan Jijik dan Mual.",
      color: "bg-green-500",
      emoji: "🤮",
      image: "/images/jijik.png",
    },
    {
      name: "Takut",
      desc: "Perasaan Takut dan gelisah.",
      color: "bg-purple-500",
      emoji: "😰",
      image: "/images/takut.png",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState({ index: Math.floor(Math.random() * 6), count: 1 });
const [score, setScore] = useState(0);
const [showResult, setShowResult] = useState(false);

const handleAnswer = (emoji: string) => {
  if (emoji === emosiList[currentQuestion.index].emoji) {
    setScore(score + 1); // Tambah poin jika jawabannya benar
  }

  if (currentQuestion.count < 5) {
    // Gunakan setter React dengan fungsi callback untuk memperbarui state berdasarkan nilai sebelumnya
    setCurrentQuestion(prevState => ({
      index: Math.floor(Math.random() * 6), // Pilih pertanyaan acak lagi
      count: prevState.count + 1, // Tambah jumlah pertanyaan yang sudah dijawab
    }));
  } else {
    setShowResult(true); // Tampilkan hasil setelah 5 pertanyaan selesai
  }
};

const resetGame = () => {
  setCurrentQuestion({ index: Math.floor(Math.random() * 6), count: 1 }); // Reset index dan count
  setScore(0);
  setShowResult(false);
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-primary flex flex-col items-center p-8">
      <h1 className="text-4xl font-extrabold text-primary mb-6">Game Mengenal Emosi</h1>
      {!showResult ? (
        <div className="w-full max-w-xl bg-white shadow-xl rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Gambar ini menunjukkan emosi apa?
          </h2>

          {/* Tampilkan gambar soal */}
          <Image
            src={emosiList[currentQuestion.index].image}
            alt={`Soal emosi ${emosiList[currentQuestion.index].name}`}
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <div className="grid grid-cols-2 gap-4">
            {emosiList.map((emosi) => (
              <button
                key={emosi.name}
                className="text-center bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition"
                onClick={() => handleAnswer(emosi.emoji)}
              >
                <div className={`rounded-full w-16 h-16 flex items-center justify-center text-5xl ${emosi.color}`}>{emosi.emoji}</div>
                <p className="mt-2 font-bold">{emosi.name}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Hasil</h2>
          <p className="text-xl mb-6">Skor Anda: {score} dari {5}</p>
          <button className="btn btn-primary" onClick={resetGame}>
            Main Lagi
          </button>
        </div>
      )}
    </div>
  );
}
