
import Image from "next/image";

export default function KisahMuslimah() {
  const kisahMuslimah = [
    {
      name: "Fatimah binti Muhammad Saw",
      link: "https://youtu.be/ZEmEhlyLhV4?si=ZVxGEZnY5YwPHwiY",
      thumbnail: "https://img.youtube.com/vi/ZEmEhlyLhV4/0.jpg",
    },
    {
      name: "Nusaibah binti Ka'ab",
      link: "https://youtu.be/BPOBXybWzZw?si=0m1OdUQyuq8qkvmy",
      thumbnail: "https://img.youtube.com/vi/BPOBXybWzZw/0.jpg",
    },
    {
      name: "Shafiyyah binti Huyay",
      link: "https://youtu.be/DddX5Zx9l7w?si=tn34VfE8EpxgkmlS",
      thumbnail: "https://img.youtube.com/vi/DddX5Zx9l7w/0.jpg",
    },
    {
      name: "Ramlah binti Abu Suryan r.a",
      link: "https://youtu.be/qC6XZoWctLA?si=lbI9DEg9ZhOsgqNj",
      thumbnail: "https://img.youtube.com/vi/qC6XZoWctLA/0.jpg",
    },
    {
      name: "Juwairiyah binti Al-Harits r.a",
      link: "https://youtu.be/U0pPm3NWzcE?si=0ieLjzB-kcQGSOK5",
      thumbnail: "https://img.youtube.com/vi/U0pPm3NWzcE/0.jpg",
    },
    {
      name: "Zainab binti Jahsy r.a",
      link: "https://youtu.be/nuiMYqMrEf0?si=zVh1T-HxLLm-PXuA",
      thumbnail: "https://img.youtube.com/vi/nuiMYqMrEf0/0.jpg",
    },
    {
      name: "Ummu Salamah r.a",
      link: "https://youtu.be/dNg2tRP0Mgg?si=7uutIgE0CpzTv6l5",
      thumbnail: "https://img.youtube.com/vi/dNg2tRP0Mgg/0.jpg",
    },
    {
      name: "Zainab binti Khuzaimah",
      link: "https://youtu.be/A-mjNmSao-8?si=l-gWLzGfH9YYbGFH",
      thumbnail: "https://img.youtube.com/vi/A-mjNmSao-8/0.jpg",
    },
    {
      name: "Hafshah binti Umar r.a",
      link: "https://youtu.be/qWavk3stboY?si=eMhhWxKjdoyYpZEO",
      thumbnail: "https://img.youtube.com/vi/qWavk3stboY/0.jpg",
    },
    {
      name: "Aisyah binti Abu Bakar r.a",
      link: "https://youtu.be/5hOoEO5bGbI?si=Trx8RiQc8Dk3EVvY",
      thumbnail: "https://img.youtube.com/vi/5hOoEO5bGbI/0.jpg",
    },
    {
      name: "Ruqqayah binti Muhammad Saw",
      link: "https://youtu.be/zBVaGmpiRIs?si=BnKPgryZUvtPrwdf",
      thumbnail: "https://img.youtube.com/vi/zBVaGmpiRIs/0.jpg",
    },
    {
      name: "Zainab binti Muhammad Saw",
      link: "https://youtu.be/lxrbjcfKwHU?si=oM9UuVI5zwerrHGQ",
      thumbnail: "https://img.youtube.com/vi/lxrbjcfKwHU/0.jpg",
    },
    {
      name: "Asma' binti Umais r.a",
      link: "https://youtu.be/fgrKol0CZBQ?si=qqDDGi4sTs8PDIsJ",
      thumbnail: "https://img.youtube.com/vi/fgrKol0CZBQ/0.jpg",
    },
    {
      name: "Saudah binti Zam'ah",
      link: "https://youtu.be/xAs-RAGjB78?si=2A6HA-TisKLRCf8k",
      thumbnail: "https://img.youtube.com/vi/xAs-RAGjB78/0.jpg",
    },
    {
      name: "Sumayyah binti Khayyat r.a",
      link: "https://youtu.be/FqupdxLmkpo?si=lYTZg31sWhPCuQ2w",
      thumbnail: "https://img.youtube.com/vi/FqupdxLmkpo/0.jpg",
    },
    {
      name: "Hindun binti Utbah r.a",
      link: "https://youtu.be/G4ehu6YGB9s?si=PalZWzEV6IRs-TrJ",
      thumbnail: "https://img.youtube.com/vi/G4ehu6YGB9s/0.jpg",
    },
    {
      name: "Khadijah binti Khuwailid r.a",
      link: "https://youtu.be/9jWJrYwLirg?si=qx1LGY_3kC_eln6Y",
      thumbnail: "https://img.youtube.com/vi/9jWJrYwLirg/0.jpg",
    },
    {
      name: "Ummu Aiman r.a",
      link: "https://youtu.be/x-MK-kcV_ts?si=urUMjwDVv2kcXAMw",
      thumbnail: "https://img.youtube.com/vi/x-MK-kcV_ts/0.jpg",
    },
  ];

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-8 text-center">
        Kumpulan Kisah Muslimah
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {kisahMuslimah.map((muslimah) => (
          <a
            key={muslimah.name}
            href={muslimah.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={muslimah.thumbnail}
                alt={muslimah.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{muslimah.name}</h3>
              <p className="text-sm text-gray-500">Klik untuk menonton</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
