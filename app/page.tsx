import Footer from "@/components/footer";

export default function Home() {
  return (
    <>


    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Mikku</h1>
                <p className="py-6">Bantu anak Anda belajar mengenali dan mengelola emosi dengan cara yang menyenangkan!</p>
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
                        <img src="/api/placeholder/100/100" alt="Permainan Interaktif" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Permainan Interaktif</h2>
                        <p>Belajar emosi melalui permainan seru dan menarik</p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/api/placeholder/100/100" alt="Visual Menarik" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Visual Menarik</h2>
                        <p>Ilustrasi dan animasi yang ramah anak</p>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="/api/placeholder/100/100" alt="Panduan Orang Tua" className="rounded-xl" />
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
            <p className="text-center max-w-2xl mx-auto">Taman Emosi Kita adalah aplikasi edukatif yang dirancang khusus untuk membantu anak-anak usia 5-7 tahun dalam mengenali dan mengelola emosi mereka. Dibuat oleh tim ahli psikologi anak dan pengembang aplikasi, kami berkomitmen untuk menciptakan pengalaman belajar yang menyenangkan dan bermanfaat.</p>
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
                            <input type="email" placeholder="email@example.com" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pesan</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Tulis pesan Anda di sini"></textarea>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</>
  );
}
