// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App



export default function PortfolioLamaranKerja() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-10">
          <h1 className="text-4xl font-bold">Nama Lengkap</h1>
          <p className="text-lg mt-2">Fresh Graduate | Software Engineer | Admin</p>
          <div className="mt-4 space-y-1 text-sm">
            <p>📞 08xxxxxxxxxx</p>
            <p>✉️ email@gmail.com</p>
            <p>📍 Cimahi, Jawa Barat</p>
          </div>
        </div>

        {/* Tentang Saya */}
        <section className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-gray-700 leading-relaxed">
            Saya adalah fresh graduate yang memiliki minat di bidang teknologi,
            administrasi, dan pengembangan software. Saya mampu bekerja secara
            individu maupun tim, cepat belajar, disiplin, dan bertanggung jawab.
          </p>
        </section>

        {/* Skill */}
        <section className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Skill</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "HTML",
              "CSS",
              "Bootstrap",
              "Laravel",
              "MySQL",
              "Android Studio",
              "Microsoft Office",
              "Jaringan Komputer",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-blue-100 text-blue-700 text-center py-3 rounded-2xl font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Pengalaman */}
        <section className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Pengalaman PKL / Kerja</h2>

          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg">PKL Teknisi Jaringan</h3>
            <p className="text-sm text-gray-500">2025 - 2026</p>
            <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-2">
              <li>Melakukan konfigurasi jaringan dan perangkat internet.</li>
              <li>Membantu troubleshooting jaringan pelanggan.</li>
              <li>Melakukan pelayanan dan komunikasi dengan pelanggan.</li>
            </ul>
          </div>
        </section>

        {/* Projek */}
        <section className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Projek</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg">Website Manajemen Stok</h3>
              <p className="text-gray-600 mt-2">
                Membuat website manajemen stok barang menggunakan Laravel dan
                Bootstrap.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
              <h3 className="font-bold text-lg">Aplikasi Android Kantin</h3>
              <p className="text-gray-600 mt-2">
                Membuat aplikasi pemesanan kantin menggunakan Android Studio dan
                MySQL.
              </p>
            </div>
          </div>
        </section>

        {/* Pendidikan */}
        <section className="p-8 border-b">
          <h2 className="text-2xl font-bold mb-4">Pendidikan</h2>

          <div className="bg-gray-50 p-5 rounded-2xl shadow-sm">
            <h3 className="font-bold text-lg">SMK</h3>
            <p className="text-gray-700">Jurusan Rekayasa Perangkat Lunak / TKJ</p>
            <p className="text-sm text-gray-500">2023 - 2026</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center p-6">
          <p>Terima kasih telah melihat portfolio saya.</p>
        </footer>
      </div>
    </div>
  );
}
