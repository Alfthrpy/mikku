import Footer from "@/components/footer";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200 relative">
        <Image
          src="/images/2.jpg" // Ganti dengan path gambar hero yang sesuai
          alt="Gambar Hero"
          layout="fill" // Mengisi seluruh area hero
          objectFit="cover" // Memastikan gambar tetap terpotong dengan baik
          className="rounded-lg" // Jika perlu, untuk efek rounded
        />
        <div className="hero-content text-center relative z-10">
          {" "}
          {/* Menambahkan z-index agar konten muncul di atas gambar */}
          <div className="max-w-lg">
            <h1 className="text-7xl font-bold">Mikku</h1>
            <p className="py-6 text-xl">
              Bantu anak Anda belajar mengenali dan mengelola emosi dengan cara
              yang menyenangkan!
            </p>
            <button className="btn btn-primary">Mulai Bermain</button>
          </div>
        </div>
      </div>

      <div id="fitur" className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <Link href={'/learn'}>
                <Image
                  src="/images/1_20241020_174932_0000.png" // Mengubah ukuran gambar
                  alt="Permainan Interaktif"
                  width={300} // Ukuran baru
                  height={250} // Ukuran baru
                  className="rounded-xl"
                />
                </Link>

              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Permainan Interaktif Sekaligus Belajar </h2>
                <p>Belajar emosi melalui permainan seru dan menarik</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <figure className="px-10 pt-10">
                <Link href={'/story'}>
                <Image
                  src="/images/2_20241020_174932_0001.png" // Mengubah ukuran gambar
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
                <Link href={'/tips'}>
                <Image
                  src="/images/3_20241020_174932_0002.png" // Mengubah ukuran gambar
                  alt="Panduan Orang Tua"
                  width={300} // Ukuran baru
                  height={250} // Ukuran baru
                  className="rounded-xl"
                /></Link>

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
          <p className="text-center max-w-2xl mx-auto">
            Taman Emosi Kita adalah aplikasi edukatif yang dirancang khusus
            untuk membantu anak-anak usia 5-7 tahun dalam mengenali dan
            mengelola emosi mereka. Dibuat oleh tim ahli psikologi anak dan
            pengembang aplikasi, kami berkomitmen untuk menciptakan pengalaman
            belajar yang menyenangkan dan bermanfaat.
          </p>
        </div>
      </div>

      <div id="kontak" className="py-12 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>
          <div className="flex justify-center">
            <div className="card w-96 bg-base-200 shadow-xl">
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
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Pesan</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Tulis pesan Anda di sini"
                  ></textarea>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Kirim</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
