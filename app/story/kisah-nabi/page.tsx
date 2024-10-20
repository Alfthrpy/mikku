import React from 'react';

const kisahNabi = [
  { name: 'Nabi Adam as', link: 'https://youtu.be/Vc4UzsmVBP0?si=-TmiGImKaCJ6nX_q', thumbnail: 'https://img.youtube.com/vi/Vc4UzsmVBP0/0.jpg' },
  { name: 'Nabi Idris as', link: 'https://youtu.be/Cx331HenqnU?si=vi33nIW2KEKEdrbb', thumbnail: 'https://img.youtube.com/vi/Cx331HenqnU/0.jpg' },
  { name: 'Nabi Nuh as', link: 'https://youtu.be/fxy_WfEAAcE?si=Wj3Gv_A3W3HrD_BF', thumbnail: 'https://img.youtube.com/vi/fxy_WfEAAcE/0.jpg' },
  { name: 'Nabi Hud as', link: 'https://youtu.be/vfUlmt-foMk?si=Xfeim6j9quPNsBmj', thumbnail: 'https://img.youtube.com/vi/vfUlmt-foMk/0.jpg' },
  { name: 'Nabi Saleh as', link: 'https://youtu.be/IxTpukLlOkk?si=BXz_1DFnVoQiVpjf', thumbnail: 'https://img.youtube.com/vi/IxTpukLlOkk/0.jpg' },
  { name: 'Nabi Ibrahim as', link: 'https://youtu.be/yAAeIgYWk28?si=tF-LT4lFnchL7QQ8', thumbnail: 'https://img.youtube.com/vi/yAAeIgYWk28/0.jpg' },
  { name: 'Nabi Luth as', link: 'https://youtu.be/W9u-cROMZ9I?si=kg76UXv8GMZcDh7W', thumbnail: 'https://img.youtube.com/vi/W9u-cROMZ9I/0.jpg' },
  { name: 'Nabi Ismail as', link: 'https://youtu.be/oavy48Xf0sA?si=v7akL_UcsUbgwlvv', thumbnail: 'https://img.youtube.com/vi/oavy48Xf0sA/0.jpg' },
  { name: 'Nabi Ishaq as', link: 'https://youtu.be/Y71nCNy3BWg?si=4XdzvXooAJUys-1D', thumbnail: 'https://img.youtube.com/vi/Y71nCNy3BWg/0.jpg' },
  { name: 'Nabi Ya\'qub as', link: 'https://youtu.be/IctHcuLRxjM?si=4-084wSbnoYeKUun', thumbnail: 'https://img.youtube.com/vi/IctHcuLRxjM/0.jpg' },
  { name: 'Nabi Yusuf as', link: 'https://youtu.be/3M1Hiim7yT8?si=lsFgOuik2WmhLGm2', thumbnail: 'https://img.youtube.com/vi/3M1Hiim7yT8/0.jpg' },
  { name: 'Nabi Ayyub as', link: 'https://youtu.be/8r80WaIyCTg?si=REdx4k_jEfQI1Qzg', thumbnail: 'https://img.youtube.com/vi/8r80WaIyCTg/0.jpg' },
  { name: 'Nabi Dzulkilfi as', link: 'https://youtu.be/JqsRjBXLAts?si=5Ww4oKJDiw6bT3Ws', thumbnail: 'https://img.youtube.com/vi/JqsRjBXLAts/0.jpg' },
  { name: 'Nabi Syu\'aib as', link: 'https://youtu.be/GrWVZkcCgfg?si=nOG_7LcwfavXOoP2', thumbnail: 'https://img.youtube.com/vi/GrWVZkcCgfg/0.jpg' },
  { name: 'Nabi Musa as', link: 'https://youtu.be/tyheBcWOJLA?si=Ky19TB5ZFBih2TRE', thumbnail: 'https://img.youtube.com/vi/tyheBcWOJLA/0.jpg' },
  { name: 'Nabi Harun as', link: 'https://youtu.be/qYj1n5FRdus?si=bUik_v26Ib-NPq_E', thumbnail: 'https://img.youtube.com/vi/qYj1n5FRdus/0.jpg' },
  { name: 'Nabi Daud as', link: 'https://youtu.be/rINInNWg-Cg?si=frgd1GJIpgBkL6k8', thumbnail: 'https://img.youtube.com/vi/rINInNWg-Cg/0.jpg' },
  { name: 'Nabi Sulaiman as', link: 'https://youtu.be/cEaFB4KbCwc?si=kPrYyo2C2869yl-o', thumbnail: 'https://img.youtube.com/vi/cEaFB4KbCwc/0.jpg' },
  { name: 'Nabi Ilyas as', link: 'https://youtu.be/OcziTWFBWAg?si=wmOoa3tnMLVWa_A-', thumbnail: 'https://img.youtube.com/vi/OcziTWFBWAg/0.jpg' },
  { name: 'Nabi Ilyasa as', link: 'https://youtu.be/Skj5SRcNzaY?si=uD8g3WVwXqdaaX0M', thumbnail: 'https://img.youtube.com/vi/Skj5SRcNzaY/0.jpg' },
  { name: 'Nabi Yunus as', link: 'https://youtu.be/-7k9OMVVpMk?si=lightB43lHBZ43Jb', thumbnail: 'https://img.youtube.com/vi/-7k9OMVVpMk/0.jpg' },
  { name: 'Nabi Zakariya as', link: 'https://youtu.be/_hfOmHxrlj4?si=oeeLASheDedlapl9', thumbnail: 'https://img.youtube.com/vi/_hfOmHxrlj4/0.jpg' },
  { name: 'Nabi Yahya as', link: 'https://youtu.be/HV2an7-Z5sM?si=ecNMFQr1baTGLLdX', thumbnail: 'https://img.youtube.com/vi/HV2an7-Z5sM/0.jpg' },
  { name: 'Nabi Isa as', link: 'https://youtu.be/VaTKBU0hvds?si=VoLJaf4kFsq_HPNa', thumbnail: 'https://img.youtube.com/vi/VaTKBU0hvds/0.jpg' },
  { name: 'Nabi Muhammad Saw', link: 'https://youtu.be/DVY2rkHo-_Y?si=XvEu93alwWrHNAdr', thumbnail: 'https://img.youtube.com/vi/DVY2rkHo-_Y/0.jpg' },
];

const KisahNabiPage: React.FC = () => {
  return (
<div className="p-4 sm:p-8">
  <h1 className="text-xl sm:text-2xl font-bold mb-4">Kumpulan Kisah Nabi dan Rasul</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {kisahNabi.map((nabi) => (
      <div key={nabi.name} className="bg-gray-100 p-4 rounded-lg shadow-md">
        <a
          href={nabi.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline flex items-center"
        >
          <img 
            src={nabi.thumbnail} 
            alt={`Thumbnail for ${nabi.name}`} 
            loading="lazy" 
            className="w-24 sm:w-32 h-auto mr-4 rounded" 
          />
          <span className="text-sm sm:text-base">{nabi.name}</span>
        </a>
      </div>
    ))}
  </div>
</div>

  );
};

export default KisahNabiPage;
