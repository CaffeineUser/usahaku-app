"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BarChart3, 
  BrainCircuit, 
  CheckCircle2, 
  LineChart, 
  ShieldAlert, 
  TrendingUp, 
  Target
} from "lucide-react";
import Link from "next/link";

import { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-200">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
              U+
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">UsahaKu<span className="text-emerald-600">+</span></span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#fitur" className="hover:text-emerald-600 transition-colors">Fitur</a>
            <a href="#manfaat" className="hover:text-emerald-600 transition-colors">Manfaat</a>
            <a href="#dampak" className="hover:text-emerald-600 transition-colors">Dampak</a>
          </nav>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/login" className="text-slate-600 hover:text-emerald-600 transition-colors">
              Masuk
            </Link>
            <Link href="/register" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md">
              Daftar Gratis
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-400/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Platform Manajemen UMKM #1
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-6xl font-bold leading-[1.15] text-slate-900 tracking-tight mb-6">
              Lebih dari sekadar kasir, ini <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Business Health Copilot</span> Anda.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
              Pantau kesehatan bisnis, deteksi risiko lebih awal, dan dapatkan insight aksi yang praktis—semua dengan bantuan AI yang mengerti UMKM.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/30 hover:-translate-y-0.5">
                Mulai Gratis Sekarang
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#fitur" className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-medium transition-all shadow-sm">
                Pelajari Fitur
              </a>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden flex items-center justify-center`}>
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Telah dipercaya oleh <span className="font-semibold text-slate-700">1,250+</span> pemilik usaha.</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
            </div>
            {/* Dashboard Mockup Representation */}
            <div className="pt-16 p-6">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Health Score</h3>
                  <p className="text-sm text-slate-500">Kondisi bisnis Anda sangat baik.</p>
                </div>
                <div className="w-24 h-24 rounded-full border-8 border-emerald-500 flex items-center justify-center relative">
                  <span className="text-2xl font-bold text-emerald-600">85</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Pendapatan (Bulan Ini)</p>
                  <p className="text-lg font-bold text-slate-800">Rp 15.400.000</p>
                  <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> +12% dari target
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-500 mb-1">Laba Bersih</p>
                  <p className="text-lg font-bold text-slate-800">Rp 4.250.000</p>
                  <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" /> margin 27.5%
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCircuit className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-800 text-sm">AI Copilot Insight</span>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed">
                  "Penjualan produk makanan kering meningkat 20% minggu ini. Namun, waspadai stok beras yang hampir mencapai batas minimum."
                </p>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="manfaat" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Mengapa Memilih UsahaKu+?</h2>
            <p className="text-slate-600">Sistem yang mengubah data operasional sederhana menjadi strategi bisnis yang tepat sasaran.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
                title: "Cepat Dipahami",
                desc: "Skor kesehatan 0–100 dan warna indikator. Tidak perlu pusing membaca laporan rumit, semua terangkum dalam satu angka.",
                bg: "bg-blue-50"
              },
              {
                icon: <LineChart className="w-8 h-8 text-emerald-500" />,
                title: "Berbasis Data",
                desc: "Keputusan bisnis tidak lagi berdasarkan insting. Setiap angka yang Anda lihat berasal dari rekap transaksi aktual toko Anda.",
                bg: "bg-emerald-50"
              },
              {
                icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
                title: "Rekomendasi Aksi",
                desc: "Kami tidak hanya menampilkan grafik menurun. AI Copilot kami akan memberitahu Anda langkah konkret apa yang harus dilakukan.",
                bg: "bg-purple-50"
              }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`w-16 h-16 rounded-xl ${benefit.bg} flex items-center justify-center mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section id="fitur" className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Fitur Utama</h2>
            <p className="text-slate-600">Semua yang Anda butuhkan untuk memantau performa dan mendeteksi masalah secara proaktif.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Business Health Score</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Menghitung 4 dimensi kesehatan bisnis: <span className="font-semibold text-slate-800">Pendapatan, Arus Kas, Profitabilitas, dan Inventaris</span>. Semuanya disatukan menjadi satu nilai 0–100 untuk memberi gambaran jelas kondisi usaha Anda hari ini.
              </p>
              <ul className="space-y-3">
                {["Indikator warna (Sehat, Waspada, Kritis)", "Penjelasan ringkas setiap dimensi", "Saran perbaikan per skor kesehatan"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 h-[400px] bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-100/50" />
              <div className="relative w-64 h-64 rounded-full border-[16px] border-emerald-500 border-b-slate-100 flex flex-col items-center justify-center rotate-45 bg-white shadow-inner">
                <div className="-rotate-45 text-center">
                  <span className="text-5xl font-extrabold text-slate-800 block">85</span>
                  <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Sehat</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[400px] bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-center p-8 relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="p-4 rounded-xl bg-red-50 border border-red-100 flex gap-4 shadow-sm">
                  <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800">Pengeluaran Melonjak</h4>
                    <p className="text-sm text-red-700 mt-1">Pengeluaran 7 hari terakhir naik 45%. Review biaya operasional Anda.</p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex gap-4 opacity-75 shadow-sm">
                  <ShieldAlert className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-amber-800">Stok Kritis</h4>
                    <p className="text-sm text-amber-700 mt-1">Stok 'Minyak Goreng 2L' hampir habis. Segera restok.</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-red-400/10 rounded-full blur-3xl" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Early Warning System</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Tindakan pencegahan sebelum masalah menjadi lebih besar. Sistem kami akan mendeteksi tren negatif secara otomatis dan memberi peringatan.
              </p>
              <ul className="space-y-3">
                {["Peringatan penurunan pendapatan", "Deteksi pembengkakan biaya", "Alert stok minimum atau pergerakan lambat"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDG 8 Impact Section */}
      <section id="dampak" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-emerald-600/20 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 text-sm font-medium mb-8"
          >
            <Target className="w-4 h-4" />
            Mendukung SDG 8: Pekerjaan Layak & Pertumbuhan Ekonomi
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Membangun Masa Depan UMKM
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed mb-12"
          >
            Melalui UsahaKu+, kami berkomitmen untuk membantu usaha mikro, kecil, dan menengah tumbuh berkelanjutan dengan manajemen yang lebih baik. UMKM yang kuat adalah fondasi ekonomi yang tangguh.
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Pertumbuhan Bisnis", value: "Terdongkrak" },
              { label: "Risiko Kebangkrutan", value: "Diminimalisir" },
              { label: "Inklusi Digital", value: "Meningkat" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                <div className="text-xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                U+
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">UsahaKu<span className="text-emerald-600">+</span></span>
            </div>
            <div className="flex gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-emerald-600 transition-colors">Beranda</a>
              <a href="#fitur" className="hover:text-emerald-600 transition-colors">Fitur</a>
              <a href="/login" className="hover:text-emerald-600 transition-colors">Masuk</a>
              <a href="/register" className="font-medium text-emerald-600 hover:text-emerald-700 transition-colors">Daftar</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2026 UsahaKu+ Team. Hak Cipta Dilindungi.</p>
            <p>Dibangun untuk Kompetisi GEMASTIK</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
