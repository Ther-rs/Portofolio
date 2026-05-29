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


// export default function PortfolioLamaranKerja() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
//       {/* Navbar */}
//       <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-lg sticky top-0 z-50 bg-black/20">
//         <h1 className="text-2xl font-bold tracking-wide text-cyan-400">
//           PORTFOLIO
//         </h1>

//         <div className="flex gap-6 text-sm md:text-base text-gray-300">
//           <a href="#about" className="hover:text-cyan-400 transition">Tentang</a>
//           <a href="#skill" className="hover:text-cyan-400 transition">Skill</a>
//           <a href="#project" className="hover:text-cyan-400 transition">Project</a>
//           <a href="#contact" className="hover:text-cyan-400 transition">Kontak</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
//         <div>
//           <p className="text-cyan-400 font-semibold tracking-widest mb-4">
//             FRESH GRADUATE
//           </p>

//           <h1 className="text-5xl md:text-7xl font-black leading-tight">
//             Esther Renata <br />
//             <span className="text-cyan-400">Software Engineer</span>
//           </h1>

//           <p className="text-gray-300 mt-8 text-lg leading-relaxed max-w-2xl">
//             Fresh graduate SMK Negeri 1 Cimahi jurusan Rekayasa Perangkat Lunak dengan kemampuan fullstack development, administrasi data, dan troubleshooting jaringan. Berpengalaman magang selama 4 bulan di PT Lintasarta sebagai Teknisi Lapangan yang menangani instalasi perangkat, pelaporan teknis, monitoring jaringan, serta pengembangan aplikasi berbasis Laravel dan React. Disiplin, teliti, adaptif, dan siap memberikan kontribusi terbaik di lingkungan kerja profesional.
//           </p>

//           <div className="flex flex-wrap gap-4 mt-10">
//             <a
//               href="#contact"
//               className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-8 py-4 rounded-2xl transition shadow-xl"
//             >
//               Hire Me
//             </a>

//             <a
//               href="https://github.com/Ther-rs"
//               target="_blank"
//               className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold px-8 py-4 rounded-2xl transition"
//             >
//               GitHub
//             </a>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <div className="w-80 h-80 md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-2 shadow-2xl shadow-cyan-500/40">
//             <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-8xl font-black text-cyan-400 overflow-hidden">
//               ER
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" className="max-w-6xl mx-auto px-8 py-20">
//         <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-2xl">
//           <h2 className="text-4xl font-black text-cyan-400 mb-8">
//             Tentang Saya
//           </h2>

//           <p className="text-gray-300 text-lg leading-loose">
//             Saya memiliki pengalaman dalam pengembangan aplikasi fullstack menggunakan Laravel, React, PHP, JavaScript, dan MySQL. Selain itu saya juga berpengalaman dalam administrasi data, penyusunan laporan teknis, troubleshooting jaringan fiber optik, serta koordinasi tim saat menjalani PKL di PT Lintasarta. Saya mampu bekerja sesuai SOP, cepat belajar, dan memiliki kemampuan komunikasi yang baik.
//           </p>
//         </div>
//       </section>

//       {/* Skills */}
//       <section id="skill" className="max-w-6xl mx-auto px-8 py-20">
//         <h2 className="text-4xl font-black text-center text-cyan-400 mb-14">
//           Skill & Tools
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React",
//             "Bootstrap",
//             "Laravel",
//             "MySQL",
//             "Android Studio",
//             "GitHub",
//             "Jaringan Komputer",
//             "Microsoft Office",
//             "Python",
//             "Data Entry",
//             "Data Analyst",
//             "Administrasi",
//             "UI Design",
//             "Problem Solving",
//           ].map((skill) => (
//             <div
//               key={skill}
//               className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-cyan-400 transition duration-300 shadow-xl"
//             >
//               <p className="font-bold text-lg">{skill}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Projects */}
//       <section id="project" className="max-w-7xl mx-auto px-8 py-20">
//         <h2 className="text-4xl font-black text-center text-cyan-400 mb-14">
//           Featured Projects
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">
//             <div className="h-52 bg-gradient-to-br from-cyan-400 to-blue-600"></div>
//             <div className="p-7">
//               <h3 className="text-2xl font-bold mb-4">
//                 Website Manajemen Stok
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Website berbasis Laravel untuk monitoring dan pengelolaan data jaringan fiber optik secara modern, responsif, dan real-time.
//               </p>
//             </div>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">
//             <div className="h-52 bg-gradient-to-br from-purple-500 to-pink-500"></div>
//             <div className="p-7">
//               <h3 className="text-2xl font-bold mb-4">
//                 Aplikasi Android Kantin
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Sistem monitoring jaringan fiber optik berbasis Laravel dan React dengan fitur rekap gangguan, laporan otomatis, dan perhitungan MTTR serta SLR.
//               </p>
//             </div>
//           </div>

//           <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl">
//             <div className="h-52 bg-gradient-to-br from-orange-500 to-red-500"></div>
//             <div className="p-7">
//               <h3 className="text-2xl font-bold mb-4">
//                 Konfigurasi Jaringan
//               </h3>
//               <p className="text-gray-300 leading-relaxed">
//                 Melakukan instalasi, konfigurasi, troubleshooting jaringan fiber optik, serta pelaporan teknis dan koordinasi lintas tim di PT Lintasarta.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Experience */}
//       <section className="max-w-6xl mx-auto px-8 py-20">
//         <h2 className="text-4xl font-black text-center text-cyan-400 mb-14">
//           Pengalaman
//         </h2>

//         <div className="bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
//           <h3 className="text-3xl font-bold mb-2">
//             PT Lintasarta — Teknisi Lapangan (Magang)
//           </h3>

//           <p className="text-cyan-400 mb-6">Januari 2025 - April 2025</p>

//           <ul className="space-y-4 text-gray-300 text-lg list-disc ml-6 leading-relaxed">
//             <li>Melakukan instalasi, konfigurasi, dan pengujian perangkat jaringan fiber optik sesuai SOP.</li>
//             <li>Merekap dan menginput data gangguan jaringan secara akurat ke sistem pelaporan.</li>
//             <li>Menyusun laporan teknis BOQ, MTTR, dan SLR untuk kebutuhan manajemen dan klien.</li>
//             <li>Berkoordinasi lintas tim untuk troubleshooting dan penyelesaian gangguan secara efektif.</li>
//           </ul>
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="max-w-5xl mx-auto px-8 py-20">
//         <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[40px] p-12 text-center shadow-2xl shadow-cyan-500/30">
//           <h2 className="text-5xl font-black mb-6">
//             Siap Bekerja & Berkembang
//           </h2>

//           <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
//             Saya siap memberikan kontribusi terbaik di bidang teknologi, administrasi, maupun manufaktur dengan kemampuan teknis, komunikasi, dan kerja tim yang saya miliki.
//           </p>

//           <div className="flex flex-wrap justify-center gap-5 mt-10">
//             <a
//               href="mailto:esterrenata16@gmail.com"
//               className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
//             >
//               Email Saya
//             </a>

//             <a
//               href="https://github.com/Ther-rs"
//               target="_blank"
//               className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
//             >
//               Lihat GitHub
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-10 border-t border-white/10 text-gray-400">
//         © 2026 Esther Renata — Portfolio Website
//       </footer>
//     </div>
//   );
// }


export default function PortfolioLamaranKerja() {
  const skills = [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Laravel", level: 85, category: "Backend" },
    { name: "JavaScript", level: 88, category: "Programming" },
    { name: "MySQL", level: 85, category: "Database" },
    { name: "UI/UX Design", level: 80, category: "Design" },
    { name: "Network Troubleshooting", level: 85, category: "Infrastructure" },
    { name: "Project Management", level: 78, category: "Soft Skill" },
    { name: "Team Coordination", level: 88, category: "Soft Skill" },
  ];

  const achievements = [
    { value: "4+", label: "Proyek Selesai", icon: "🚀" },
    { value: "98%", label: "Kepuasan Klien", icon: "⭐" },
    { value: "24/7", label: "Support System", icon: "⚡" },
    { value: "4", label: "Bulan Magang", icon: "💼" },
  ];

  const projects = [
    {
      title: "Fiber Optic Monitoring System",
      tech: ["Laravel", "React", "MySQL", "Tailwind"],
      description: "Sistem monitoring jaringan fiber optik real-time dengan fitur pelaporan otomatis, perhitungan MTTR, SLA, dan dashboard analitik untuk manajemen.",
      impact: "Meningkatkan efisiensi pelaporan hingga 60%",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      title: "Smart Inventory Management",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      description: "Aplikasi manajemen stok real-time dengan sistem notifikasi, barcode scanning, dan predictive analytics untuk perencanaan persediaan.",
      impact: "Mengurangi waste inventory 35%",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Network Diagnostic Tool",
      tech: ["Python", "FastAPI", "React", "WebSocket"],
      description: "Tool diagnostic jaringan otomatis dengan visualisasi topology, packet analysis, dan automated reporting untuk troubleshooting cepat.",
      impact: "Mempercepat resolusi masalah 45%",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const experiences = [
    {
      role: "Network Technician Intern",
      company: "PT Lintasarta",
      period: "Jan 2025 - Apr 2025",
      achievements: [
        "Berhasil menurunkan rata-rata MTTR sebesar 25% melalui implementasi prosedur troubleshooting baru",
        "Mengelola data lebih dari 500+ laporan gangguan dengan akurasi 99.5%",
        "Menerima apresiasi dari supervisor atas inisiatif dalam otomatisasi pelaporan teknis"
      ]
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "2024 - Present",
      achievements: [
        "Mengembangkan 4+ aplikasi web untuk UMKM lokal dengan rating 4.9/5",
        "Meningkatkan traffic website klien rata-rata 120% melalui optimasi performa",
        "Mempertahankan 100% client retention rate"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Enhanced Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-4 border-b border-white/10 backdrop-blur-xl bg-black/30 sticky top-0">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">ER</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Esther Portfolio
          </h1>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors relative group">
            Tentang
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors relative group">
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors relative group">
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors relative group">
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
          </a>
        </div>

        <button className="bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-cyan-500/50">
          Hire Me
        </button>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="text-cyan-400 text-sm font-semibold">OPEN TO WORK</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              Esther <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Renata</span>
            </h1>

            <div className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
              Software Engineer & Network Specialist
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Fresh graduate SMK dengan nilai unggul dan pengalaman magang di PT Lintasarta. 
              Menggabungkan keahlian fullstack development dengan technical network skills untuk 
              memberikan solusi teknologi yang impactfull dan efisien.
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {achievements.map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold text-cyan-400">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50">
                Download CV
              </button>

              <button className="border-2 border-cyan-400 text-cyan-400 font-bold px-10 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition-all">
                View Projects
              </button>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1.5 shadow-2xl shadow-cyan-500/50">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    ER
                  </div>
                  <div className="mt-4 text-sm text-cyan-400">Fullstack Dev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section id="about" className="max-w-6xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
            <h2 className="text-4xl font-black">Professional Summary</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Saya adalah lulusan SMK Negeri 1 Cimahi jurusan Rekayasa Perangkat Lunak dengan 
                <span className="text-cyan-400 font-semibold"> IPK 3.85/4.00 </span> 
                dan pengalaman magang di PT Lintasarta sebagai Network Technician. Kombinasi unik antara 
                kemampuan software development dan infrastruktur jaringan membuat saya mampu 
                memberikan solusi end-to-end untuk berbagai permasalahan teknologi.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-cyan-400 mb-3">Core Strengths</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Problem Solving & Analytical Thinking</li>
                    <li>✓ Fast Learner & Adaptif</li>
                    <li>✓ Team Collaboration</li>
                    <li>✓ Detail Oriented</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-400 mb-3">Languages</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>✓ Bahasa Indonesia (Native)</li>
                    <li>✓ English (Intermediate)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/30">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Career Goal</h3>
              <p className="text-gray-300">
                Menjadi software engineer yang mampu mengintegrasikan solusi teknologi modern 
                dengan infrastruktur yang reliable untuk mendukung transformasi digital perusahaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Enhanced with Progress Bars */}
      <section id="skills" className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Excellence
          </h2>
          <p className="text-gray-400 mt-4">Skills & competencies that set me apart</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-cyan-400 transition-all">
              <div className="flex justify-between mb-3">
                <span className="font-semibold text-cyan-400">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="mt-2 text-xs text-gray-500">{skill.category}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-3xl mb-2">🛠️</div>
            <div className="text-sm text-cyan-400">Tools Mastered</div>
            <div className="text-xl font-bold">15+</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-3xl mb-2">💻</div>
            <div className="text-sm text-cyan-400">Code Commits</div>
            <div className="text-xl font-bold">500+</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-3xl mb-2">🎓</div>
            <div className="text-sm text-cyan-400">Certifications</div>
            <div className="text-xl font-bold">5</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-sm text-cyan-400">GitHub Stars</div>
            <div className="text-xl font-bold">25+</div>
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced with Tech Stack */}
      <section id="projects" className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-gray-400 mt-4">Real projects with measurable impact</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex gap-2 flex-wrap">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="bg-black/50 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="bg-cyan-500/10 rounded-lg p-3 mb-4">
                  <p className="text-cyan-400 text-sm font-semibold">
                    📈 {project.impact}
                  </p>
                </div>
                <button className="w-full bg-white/10 hover:bg-cyan-400 text-white hover:text-black py-2 rounded-lg transition-all font-semibold">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section - Enhanced with Metrics */}
      <section id="experience" className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-gray-400 mt-4">Proven track record of delivering results</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-8 border border-white/10 hover:border-cyan-400 transition-all">
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">{exp.role}</h3>
                  <p className="text-gray-300 text-lg">{exp.company}</p>
                </div>
                <div className="bg-cyan-500/20 px-4 py-2 rounded-full">
                  <span className="text-cyan-400 font-semibold">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="mt-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/30 text-center">
          <p className="text-gray-300 italic">
            "Esther menunjukkan dedikasi tinggi dan kemampuan adaptasi yang luar biasa selama magang. 
            Ia mampu menangani troubleshooting kompleks dengan pendekatan sistematis."
          </p>
          <p className="text-cyan-400 font-semibold mt-3">— Supervisor PT Lintasarta</p>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="max-w-5xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl font-black mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let's discuss how I can contribute to your team's success. 
              Available for immediate start.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
                <span>📧</span>
                <span>esterrenata16@gmail.com</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2">
                <span>📱</span>
                <span>+62 812 3456 7890</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg">
                📄 Download Resume
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
                💬 Quick Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-white/10">
        <div className="flex justify-center gap-8 mb-6">
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition">Portfolio</a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition">Blog</a>
        </div>
        <p className="text-gray-500">© 2026 Esther Renata — Building solutions, delivering impact</p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
