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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-lg sticky top-0 z-50 bg-black/20">
        <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
          PORTFOLIO
        </h1>

        <div className="flex gap-6 text-sm md:text-base text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition">Tentang</a>
          <a href="#skill" className="hover:text-cyan-400 transition">Skill</a>
          <a href="#project" className="hover:text-cyan-400 transition">Project</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Kontak</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-cyan-400 font-semibold tracking-widest mb-4">
            FRESH GRADUATE
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Esther Renata <br />
            <span className="text-cyan-400">Software Engineer</span>
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-relaxed max-w-2xl">
            Fresh graduate SMK Negeri 1 Cimahi jurusan Rekayasa Perangkat Lunak dengan kemampuan fullstack development, administrasi data, dan troubleshooting jaringan. Berpengalaman magang selama 4 bulan di PT Lintasarta sebagai Teknisi Lapangan yang menangani instalasi perangkat, pelaporan teknis, monitoring jaringan, serta pengembangan aplikasi berbasis Laravel dan React. Disiplin, teliti, adaptif, dan siap memberikan kontribusi terbaik di lingkungan kerja profesional.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-2xl transition shadow-xl"
            >
              Hire Me
            </a>

            <a
              href="https://github.com/Ther-rs"
              target="_blank"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-8 py-4 rounded-2xl transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-2 shadow-2xl shadow-cyan-500/40">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-8xl font-black text-cyan-400 overflow-hidden">
              ER
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
          <h2 className="text-4xl font-black text-cyan-400 mb-8">
            Tentang Saya
          </h2>

          <p className="text-gray-300 text-lg leading-loose">
            Saya memiliki pengalaman dalam pengembangan aplikasi fullstack menggunakan Laravel, React, PHP, JavaScript, dan MySQL. Selain itu saya juga berpengalaman dalam administrasi data, penyusunan laporan teknis, troubleshooting jaringan fiber optik, serta koordinasi tim saat menjalani PKL di PT Lintasarta. Saya mampu bekerja sesuai SOP, cepat belajar, dan memiliki kemampuan komunikasi yang baik.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skill" className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-black text-center text-cyan-400 mb-14">
          Skill & Tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Bootstrap",
            "Laravel",
            "MySQL",
            "Android Studio",
            "GitHub",
            "Jaringan Komputer",
            "Microsoft Office",
            "Python",
            "Data Entry",
            "Data Analyst",
            "Administrasi",
            "UI Design",
            "Problem Solving",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-cyan-400 transition duration-300 shadow-xl"
            >
              <p className="font-bold text-lg">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="project" className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-black text-center text-cyan-400 mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">
            <div className="h-52 bg-gradient-to-br from-cyan-400 to-blue-600"></div>
            <div className="p-7">
              <h3 className="text-2xl font-bold mb-4">
                Website Manajemen Stok
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Website berbasis Laravel untuk monitoring dan pengelolaan data jaringan fiber optik secara modern, responsif, dan real-time.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">
            <div className="h-52 bg-gradient-to-br from-purple-500 to-pink-500"></div>
            <div className="p-7">
              <h3 className="text-2xl font-bold mb-4">
                Aplikasi Android Kantin
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sistem monitoring jaringan fiber optik berbasis Laravel dan React dengan fitur rekap gangguan, laporan otomatis, dan perhitungan MTTR serta SLR.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">
            <div className="h-52 bg-gradient-to-br from-orange-500 to-red-500"></div>
            <div className="p-7">
              <h3 className="text-2xl font-bold mb-4">
                Konfigurasi Jaringan
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Melakukan instalasi, konfigurasi, troubleshooting jaringan fiber optik, serta pelaporan teknis dan koordinasi lintas tim di PT Lintasarta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-black text-center text-cyan-400 mb-14">
          Pengalaman
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-3xl font-bold mb-2">
            PT Lintasarta — Teknisi Lapangan (Magang)
          </h3>

          <p className="text-cyan-400 mb-6">Januari 2025 - April 2025</p>

          <ul className="space-y-4 text-gray-300 text-lg list-disc ml-6 leading-relaxed">
            <li>Melakukan instalasi, konfigurasi, dan pengujian perangkat jaringan fiber optik sesuai SOP.</li>
            <li>Merekap dan menginput data gangguan jaringan secara akurat ke sistem pelaporan.</li>
            <li>Menyusun laporan teknis BOQ, MTTR, dan SLR untuk kebutuhan manajemen dan klien.</li>
            <li>Berkoordinasi lintas tim untuk troubleshooting dan penyelesaian gangguan secara efektif.</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] p-12 text-center shadow-2xl shadow-cyan-500/30">
          <h2 className="text-5xl font-black mb-6">
            Siap Bekerja & Berkembang
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Saya siap memberikan kontribusi terbaik di bidang teknologi, administrasi, maupun manufaktur dengan kemampuan teknis, komunikasi, dan kerja tim yang saya miliki.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <a
              href="mailto:esterrenata16@gmail.com"
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Email Saya
            </a>

            <a
              href="https://github.com/Ther-rs"
              target="_blank"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              Lihat GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-white/10 text-gray-400">
        © 2026 Esther Renata — Portfolio Website
      </footer>
    </div>
  );
}
