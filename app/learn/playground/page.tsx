"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function EmotionGame() {
  const emosiList = [
    {
      name: "Bahagia",
      desc: "Perasaan senang dan bahagia.",
      color: "bg-yellow-500",
      emoji: "/images/Emoji_bahagia.png",
      image: "/images/senang.png",
    },
    {
      name: "Sedih",
      desc: "Perasaan sedih dan melankolis.",
      color: "bg-blue-500",
      emoji: "/images/Emoji_sedih.png",
      image: "/images/sedih.png",
    },
    {
      name: "Marah",
      desc: "Perasaan Kesal dan geram.",
      color: "bg-red-500",
      emoji: "/images/Emoji_marah.png",
      image: "/images/marah.png",
    },
    {
      name: "Kaget",
      desc: "Perasaan terkejut dan kaget.",
      color: "bg-white-500",
      emoji: "/images/Emoji_kaget.png",
      image: "/images/kaget.png",
    },
    {
      name: "Jijik",
      desc: "Perasaan Jijik dan Mual.",
      color: "bg-green-500",
      emoji: "/images/Emoji_jijik.png",
      image: "/images/test.png",
    },
    {
      name: "Takut",
      desc: "Perasaan Takut dan gelisah.",
      color: "bg-purple-500",
      emoji: "/images/Emoji_takut.png",
      image: "/images/takut.png",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState({
    index: Math.floor(Math.random() * 6),
    count: 1,
  });
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [feedbackColor, setFeedbackColor] = useState(""); // State untuk feedback warna
  const rightSound = useRef<HTMLAudioElement | null>(null);
  const wrongSound = useRef<HTMLAudioElement | null>(null);
  const endSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Inisialisasi audio di dalam useEffect
    rightSound.current = new Audio("/sound/right.mp3");
    wrongSound.current = new Audio("/sound/wrong.mp3");
    endSound.current = new Audio("/sound/end.mp3");
  }, []);

  const playSound = (
    audioRef: React.MutableRefObject<HTMLAudioElement | null>
  ) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset posisi pemutaran ke awal
      audioRef.current.play(); // Mainkan audio
    }
  };

  const playRightSound = () => playSound(rightSound);
  const playWrongSound = () => playSound(wrongSound);
  const playEndSound = () => playSound(endSound);

  const handleAnswer = (emoji: string) => {
    if (emoji === emosiList[currentQuestion.index].emoji) {
      setScore(score + 1); // Tambah poin jika jawabannya benar
      playRightSound(); // Mainkan sound effect benar
      setFeedbackColor("bg-green-500"); // Indikasi warna hijau untuk jawaban benar
    } else {
      playWrongSound(); // Mainkan sound effect salah
      setFeedbackColor("bg-red-500"); // Indikasi warna merah untuk jawaban salah
    }

    // Kembalikan warna ke default setelah 500ms
    setTimeout(() => setFeedbackColor(""), 1000);

    if (currentQuestion.count < 5) {
      setCurrentQuestion((prevState) => ({
        index: Math.floor(Math.random() * 6), // Pilih pertanyaan acak lagi
        count: prevState.count + 1, // Tambah jumlah pertanyaan yang sudah dijawab
      }));
    } else {
      setShowResult(true); // Tampilkan hasil setelah 5 pertanyaan selesai
      playEndSound(); // Mainkan sound effect akhir game
    }
  };

  const resetGame = () => {
    setCurrentQuestion({ index: Math.floor(Math.random() * 6), count: 1 }); // Reset index dan count
    setScore(0);
    setShowResult(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 bg-gradient-to-b from-base-100 to-primary flex flex-col items-center p-8`}
    >
      <h1 className="text-4xl font-extrabold mb-6">Game Mengenal Emosi</h1>
      {!showResult ? (
        <div
          className={`w-full max-w-xl ${
            feedbackColor || "bg-white"
          } shadow-xl rounded-lg p-6 text-center`}
        >
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
                className={`text-center rounded-lg p-4 hover:bg-gray-200 transition ${emosi.color}`}
                onClick={() => handleAnswer(emosi.emoji)}
              >
                <div
                  className={`rounded-full w-16 h-16 flex items-center justify-center text-5xl`}
                >
                  <Image
                    src={emosi.emoji}
                    alt={`emoji ${emosiList[currentQuestion.index].name}`}
                    width={80}
                    height={80}
                  />
                </div>
                <p className="mt-2 font-bold">{emosi.name}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            id="resultModal"
            className="modal-toggle"
            checked={showResult}
            readOnly
          />
          <div className="modal">
            <div
              className="modal-box w-11/12 max-w-md bg-gradient-to-r from-pink-300 to-yellow-300 
                       text-center rounded-3xl shadow-2xl border-4 border-white
                       mx-auto my-auto p-4 sm:p-6"
            >
              <div className="space-y-4">
                <h3
                  className="font-bold text-2xl sm:text-4xl mb-2 text-purple-800 
                           animate-bounce tracking-wide drop-shadow-lg"
                >
                  Selamat!
                </h3>

                <div
                  className="bg-white rounded-2xl p-3 sm:p-4 my-4 
                           flex items-center justify-center space-x-2 sm:space-x-3"
                >
                  <span className="text-3xl sm:text-5xl text-green-600">
                    ✨
                  </span>
                  <p className="text-xl sm:text-2xl font-black text-blue-700">
                    Skormu: {score} dari 5
                  </p>
                  <span className="text-3xl sm:text-5xl text-green-600">
                    ✨
                  </span>
                </div>

                <button
                  className="btn btn-lg w-full bg-purple-600 text-white 
                           hover:bg-purple-500 transition-all duration-300 
                           text-lg sm:text-2xl py-2 sm:py-3 rounded-full shadow-xl"
                  onClick={resetGame}
                >
                  Main Lagi
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
