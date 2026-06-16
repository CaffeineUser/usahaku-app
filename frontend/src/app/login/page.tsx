"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, AlertCircle, ArrowRight, BrainCircuit } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Skema validasi menggunakan Zod
const loginSchema = z.object({
  email: z.string().min(1, "Email wajib diisi").email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    // Simulasi API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login submitted:", data);
      // Di MVP, redirect ke dashboard atau onboarding
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Panel - Illustration / Branding */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-slate-50 p-12 relative overflow-hidden border-r border-slate-100">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100/50" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-16 inline-flex">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-2xl shadow-sm">
              U+
            </div>
            <span className="font-bold text-2xl tracking-tight text-slate-800">UsahaKu<span className="text-emerald-600">+</span></span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200 text-emerald-700 text-sm font-medium mb-6">
              <BrainCircuit className="w-4 h-4" />
              AI-Powered Business Copilot
            </div>
            <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
              Pantau kesehatan bisnismu lebih mudah dan cerdas.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dapatkan wawasan berharga dari data operasional harian Anda, deteksi risiko lebih awal, dan kembangkan UMKM Anda dengan aman.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl max-w-md">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt={`User ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-slate-800">1,250+ UMKM</p>
              <p className="text-slate-500">Telah bergabung bersama kami.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 xl:px-32 relative">
        {/* Mobile Header */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
              U+
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">UsahaKu<span className="text-emerald-600">+</span></span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="text-center lg:text-left mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Selamat Datang Kembali!</h2>
            <p className="text-slate-500">Silakan masukkan detail akun Anda untuk melanjutkan.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email address</label>
                <div className="relative">
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                        : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                    }`}
                    placeholder="nama@email.com"
                  />
                  {errors.email && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                  )}
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-700">Password</label>
                  <Link href="/forgot-password" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                    Lupa password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className={`w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 transition-all pr-12 ${
                      errors.password 
                        ? "border-red-300 focus:border-red-500 focus:ring-red-500/20" 
                        : "border-slate-200 focus:border-emerald-500 focus:ring-emerald-500/20"
                    }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3.5 rounded-xl font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-900/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Masuk ke Dashboard
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-slate-600">
            Belum punya akun?{" "}
            <Link href="/register" className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              Daftar sekarang
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
