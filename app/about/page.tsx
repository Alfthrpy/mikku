'use client';
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center p-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4">
          Kami adalah tim kecil yang berdedikasi untuk menciptakan solusi kreatif dan inovatif.
        </p>
      </div>

      {/* Team Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Konseptor */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/images/upa2.jpg" // Ganti dengan path gambar yang sesuai
              alt="Konseptor"
              width={250}
              height={400}
              className="rounded-md"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-xl">Zulfa Mujahidah Sayuti</h3>
            <p className="text-gray-500">Konseptor</p>
            <div className="mt-4">
              <a href="https://instagram.com/mujahidahfaz" target="_blank" rel="noopener noreferrer" className="">
                Instagram
              </a>
              {" | "}
              <a href="https://linkedin.com/in/mujahidahfaz" target="_blank" rel="noopener noreferrer" className="">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Developer */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="/images/fathir.jpg" // Ganti dengan path gambar yang sesuai
              alt="Developer"
              width={250}
              height={400}
              className="rounded-md"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h3 className="card-title text-xl">Muhammad Rizki Al-Fathir</h3>
            <p className="text-gray-500">Developer</p>
            <div className="mt-4">
              <a href="https://instagram.com/alfthrpy" target="_blank" rel="noopener noreferrer" className="">
                Instagram
              </a>
              {" | "}
              <a href="https://github.com/alfthrpy" target="_blank" rel="noopener noreferrer" className="">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-12 w-full max-w-4xl">
        <div className="card bg-primary text-primary-content shadow-xl">
          <div className="card-body text-center">
            <h3 className="text-2xl font-bold">Visi dan Misi</h3>
            <p className="mt-4">
              Visi kami adalah menciptakan solusi yang memberikan dampak positif
              bagi masyarakat. Kami berkomitmen untuk terus belajar dan
              berinovasi dalam setiap langkah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
