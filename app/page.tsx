"use client";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    if (res.ok) {
      toast.success("Pesan berhasil dikirim!");
      setLoading(false);
    } else {
      toast.error("Gagal mengirim pesan, coba lagi nanti");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-base-100 via-base-200 to-base-400 relative">
        <div className="hero-content text-center relative z-10">
          {/* Menambahkan z-index agar konten muncul di atas gambar */}
          <div className="max-w-lg">
            <h1 className="text-7xl font-bold">Mikku</h1>
            <p className="py-6 text-xl">
              Bantu anak Anda belajar mengenali dan mengelola emosi dengan cara
              yang menyenangkan!
            </p>
          </div>
        </div>
      </div>

      <div id="fitur" className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <Link href={"/learn"}>
                  <Image
                    src="/images/tebak_ekspresi.png" // Mengubah ukuran gambar
                    alt="Permainan Interaktif"
                    width={300} // Ukuran baru
                    height={250} // Ukuran baru
                    className="rounded-xl"
                  />
                </Link>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Permainan Interaktif Sekaligus Belajar{" "}
                </h2>
                <p>Belajar emosi melalui permainan seru dan menarik</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <Link href={"/story"}>
                  <Image
                    src="/images/dongeng.png" // Mengubah ukuran gambar
                    alt="Visual Menarik"
                    width={300} // Ukuran baru
                    height={250} // Ukuran baru
                    className="rounded-xl"
                  />
                </Link>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Kumpulan Dongeng</h2>
                <p>Cerita animasi yang ramah anak</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <Link href={"/tips"}>
                  <Image
                    src="/images/panduan_orang_tua.png" // Mengubah ukuran gambar
                    alt="Panduan Orang Tua"
                    width={300} // Ukuran baru
                    height={250} // Ukuran baru
                    className="rounded-xl"
                  />
                </Link>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Panduan Orang Tua</h2>
                <p>Tips dan trik untuk membantu anak mengelola emosi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tentang" className="py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Tentang Kami</h2>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <p>
              Selamat datang di <strong>MIKKU</strong>, aplikasi yang dirancang
              untuk mendukung perkembangan sosial emosional anak melalui
              pendekatan yang kreatif dan edukatif. MIKKU dibuat oleh kelompok
              mahasiswa jurusan Pendidikan Islam Anak Usia Dini yang bekerja
              sama dengan mahasiswa pengembang aplikasi.
            </p>
            <p>
              Tujuan utama kami adalah menghadirkan pembelajaran bermakna yang
              memperkuat keterampilan sosial dan emosional anak. Aplikasi ini
              dirancang khusus untuk anak usia 3-4 tahun, dengan konten yang
              sesuai perkembangan usia mereka.
            </p>
            <p>
              Di dalam aplikasi MIKKU, kami menggabungkan kisah inspiratif,
              ekspresi wajah, dan permainan interaktif untuk membantu anak-anak
              belajar nilai-nilai penting, seperti empati, kejujuran, dan kerja
              sama, dalam suasana yang menyenangkan dan aman.
            </p>
            <p>
              Terima kasih telah mempercayakan perjalanan belajar anak bersama
              MIKKU! Kami berharap aplikasi ini dapat menjadi teman belajar yang
              berharga bagi anak-anak Anda.
            </p>
          </div>
        </div>
      </div>

      <div id="kontak" className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>
          <div className="flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="card w-96 bg-base-200 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">Kirim Pesan</h2>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pesan</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Tulis pesan Anda di sini"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary">
                    {loading ? (
                      <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                      "Kirim"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
