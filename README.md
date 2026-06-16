# PRD — UsahaKu+

> **Versi:** 2.0 — Implementation-Ready
> **Terakhir diperbarui:** 16 Juni 2026
> **Tim:** 3 orang (Front-End, Back-End, AI & Analytics)
> **Target kompetisi:** GEMASTIK

---

## Daftar Isi

1. [Ringkasan Produk](#1-ringkasan-produk)
2. [Tujuan Produk](#2-tujuan-produk)
3. [Target Pengguna](#3-target-pengguna)
4. [Masalah Utama](#4-masalah-utama)
5. [Solusi Produk](#5-solusi-produk)
6. [Value Proposition](#6-value-proposition)
7. [Ruang Lingkup MVP](#7-ruang-lingkup-mvp)
8. [Rancangan Front-End](#8-rancangan-front-end)
9. [Sitemap & Routing](#9-sitemap--routing)
10. [Core Features Detail](#10-core-features-detail)
11. [Tech Stack](#11-tech-stack)
12. [Arsitektur Sistem](#12-arsitektur-sistem)
13. [Komponen Back-End (Services)](#13-komponen-back-end-services)
14. [Database Schema](#14-database-schema)
15. [REST API Specification](#15-rest-api-specification)
16. [Authentication & Security](#16-authentication--security)
17. [Error Handling Standard](#17-error-handling-standard)
18. [Frontend Architecture](#18-frontend-architecture)
19. [Workflow Pengguna](#19-workflow-pengguna)
20. [Workflow Sistem](#20-workflow-sistem)
21. [Seed Data untuk Demo](#21-seed-data-untuk-demo)
22. [Prioritas Pengembangan Tim](#22-prioritas-pengembangan-tim)
23. [Roadmap Pengembangan](#23-roadmap-pengembangan)
24. [Kriteria Keberhasilan MVP](#24-kriteria-keberhasilan-mvp)
25. [Catatan Produk](#25-catatan-produk)

---

## 1. Ringkasan Produk

**UsahaKu+** adalah platform web desktop berbasis AI untuk membantu UMKM memantau kesehatan bisnis, mendeteksi risiko lebih awal, memahami penyebab penurunan performa, dan mendapatkan rekomendasi tindakan yang praktis.

Produk ini tidak hanya mencatat transaksi, tetapi berperan sebagai **Business Health Copilot**: sistem yang mengubah data operasional sederhana menjadi insight bisnis yang dapat ditindaklanjuti.

**Asumsi MVP:**

* Mata uang: **IDR** (Rupiah) saja.
* Satu user = satu bisnis (tanpa multi-business).
* AI Model: **Gemini 2.0 Flash** (hemat biaya, cepat).
* Bahasa UI: **Bahasa Indonesia**.
* Target platform: **Desktop web browser** (responsive ke tablet, bukan mobile-first).

---

## 2. Tujuan Produk

1. Membantu pemilik usaha memahami kondisi bisnis secara cepat dan jelas.
2. Memberikan peringatan dini terhadap risiko usaha.
3. Menyediakan analisis bisnis yang mudah dipahami oleh pengguna non-teknis.
4. Menjadi aplikasi yang realistis dibangun oleh tim kecil dan tetap memiliki potensi berkembang.

---

## 3. Target Pengguna

| Segmen | Karakteristik | Kebutuhan Utama |
|--------|---------------|-----------------|
| Pemilik toko retail | Omzet Rp 5–50 juta/bulan, 1–5 karyawan | Pantau stok, profit margin |
| Usaha kuliner | Penjualan harian, bahan baku cepat habis | Cashflow harian, biaya bahan |
| Usaha dagang | Transaksi besar tapi jarang | Trend penjualan, piutang |
| Koperasi kecil | Multi-anggota, laporan rutin | Ringkasan keuangan, laporan |
| Pendamping UMKM | Mendampingi banyak UMKM | Overview cepat kesehatan usaha |

**Persona Utama:** Budi, pemilik toko kelontong di Bandung. Omzet Rp 15 juta/bulan, mengelola sendiri tanpa pembukuan digital. Ingin tahu apakah bisnisnya sehat dan apa yang harus diperbaiki.

---

## 4. Masalah Utama

### 4.1 UMKM sulit melihat kondisi kesehatan bisnis secara menyeluruh

Pemilik usaha sering hanya melihat omzet, tanpa tahu apakah laba, cashflow, dan stok berjalan sehat.

### 4.2 Risiko bisnis terlambat disadari

Penurunan penjualan, biaya yang membesar, atau stok yang menumpuk sering baru diketahui saat masalah sudah besar.

### 4.3 Aplikasi yang ada biasanya hanya pencatatan

Banyak produk hanya mencatat transaksi, tetapi tidak memberikan analisis dan rekomendasi.

### 4.4 UMKM butuh solusi yang sederhana

Sistem yang terlalu kompleks akan sulit dipakai secara konsisten.

---

## 5. Solusi Produk

UsahaKu+ menyediakan:

* pencatatan transaksi (pemasukan & pengeluaran) dalam satu sistem,
* manajemen inventaris sederhana,
* skor kesehatan bisnis dengan formula transparan,
* deteksi risiko awal dengan threshold yang jelas,
* AI Copilot untuk analisis dan rekomendasi berbasis data.

---

## 6. Value Proposition

**UsahaKu+ membantu pemilik usaha mengetahui kondisi bisnis, risiko utama, dan langkah perbaikan dalam satu dashboard.**

Nilai utama:

* cepat dipahami (skor 0–100 dan warna indikator),
* berbasis data (bukan opini),
* memberi rekomendasi aksi (bukan hanya informasi),
* cocok untuk tim kecil (low maintenance),
* layak untuk MVP kompetisi dan berkembang menjadi produk berkelanjutan.

---

## 7. Ruang Lingkup MVP

### Termasuk dalam MVP

* Login dan registrasi (email + password)
* Setup profil usaha (onboarding)
* Dashboard utama dengan health score
* Pencatatan pemasukan dan pengeluaran (unified transactions)
* Manajemen inventaris sederhana
* Business Health Score (4 dimensi)
* Early Warning System (rule-based alerts)
* AI Copilot chat (Gemini 2.0 Flash)
* Halaman ringkasan insight & risk alerts

### Tidak termasuk pada MVP

* Integrasi bank / payment gateway
* Integrasi marketplace (Tokopedia, Shopee)
* Machine learning training sendiri
* Multi-cabang / multi-business
* Payroll / penggajian
* Akuntansi lengkap (jurnal, neraca, dll.)
* Mobile app (hanya web)
* Export laporan PDF (opsional jika waktu cukup)

---

## 8. Rancangan Front-End

### 8.1 Halaman yang Dibangun

#### 1) Landing Page

**Route:** `/`
**Tujuan:** memperkenalkan produk dan mengarahkan pengguna masuk ke aplikasi.
**Auth:** Tidak perlu login.

**Core Features:**

* hero section dengan tagline dan ilustrasi
* penjelasan singkat manfaat produk (3 poin utama)
* showcase fitur utama dengan ikon/visual
* social proof / statistik dampak (bisa dummy untuk MVP)
* section SDG 8 impact (Pekerjaan Layak dan Pertumbuhan Ekonomi)
* call to action → login / register

**UI States:**

* Default state
* Scroll animations (fade in sections)

---

#### 2) Login / Register Page

**Route:** `/login`, `/register`
**Tujuan:** autentikasi pengguna.
**Auth:** Tidak perlu login (redirect ke dashboard jika sudah login).

**Core Features:**

* form login: email + password
* form register: nama lengkap + email + password + konfirmasi password
* validasi input real-time (email format, password min 8 karakter)
* toggle antara login ↔ register
* tombol show/hide password
* error message per field

**UI States:**

* Default (form kosong)
* Validating (loading spinner di tombol)
* Error (field highlight merah + pesan error)
* Success (redirect ke onboarding/dashboard)

**Validasi:**

| Field | Rules |
|-------|-------|
| Nama | Wajib, min 2 karakter, max 100 karakter |
| Email | Wajib, format email valid, unique |
| Password | Wajib, min 8 karakter, harus ada huruf dan angka |
| Konfirmasi Password | Wajib, harus sama dengan password |

---

#### 3) Onboarding / Setup Business Page

**Route:** `/onboarding`
**Tujuan:** konfigurasi awal usaha setelah registrasi.
**Auth:** Wajib login. Hanya muncul jika user belum punya business profile.

**Core Features:**

* form multi-step (3 langkah):
  * **Step 1:** nama usaha + jenis usaha (dropdown)
  * **Step 2:** skala usaha (dropdown) + alamat (opsional)
  * **Step 3:** target omzet bulanan (Rp) + target laba bulanan (Rp)
* progress indicator (step 1/2/3)
* tombol "Kembali" dan "Lanjut"
* tombol "Selesai" di step terakhir

**Dropdown Options:**

Jenis usaha:
* Retail / Toko
* Kuliner / F&B
* Jasa
* Dagang / Grosir
* Lainnya

Skala usaha:
* Mikro (omzet < Rp 300 juta/tahun)
* Kecil (omzet Rp 300 juta – Rp 2.5 miliar/tahun)
* Menengah (omzet > Rp 2.5 miliar/tahun)

**UI States:**

* Step active (current step highlighted)
* Validating
* Error per field
* Complete (redirect ke dashboard)

---

#### 4) Dashboard Page

**Route:** `/dashboard`
**Tujuan:** menampilkan ringkasan kondisi bisnis.
**Auth:** Wajib login + business profile.

**Core Features:**

* **Business Health Score** — gauge/donut chart besar (0–100) dengan warna:
  * 🟢 Sehat (75–100): hijau
  * 🟡 Waspada (50–74): kuning
  * 🔴 Kritis (0–49): merah
* **Summary Cards** (4 kartu):
  * Total Pemasukan (bulan ini vs bulan lalu, % perubahan)
  * Total Pengeluaran (bulan ini vs bulan lalu, % perubahan)
  * Laba Bersih (bulan ini vs bulan lalu, % perubahan)
  * Jumlah Transaksi (bulan ini)
* **Risk Alert Cards** — maks 3 alert terbaru, severity badge (low/medium/high)
* **Grafik Tren Pendapatan** — line chart 30 hari terakhir (Recharts)
* **Grafik Tren Cashflow** — bar chart pendapatan vs pengeluaran per minggu
* **AI Insight Summary** — 2-3 kalimat insight dari AI tentang kondisi bisnis terkini
* **Quick Actions** — tombol cepat: "+ Transaksi", "Lihat Stok", "Tanya AI"

**Period Selector:** Dropdown filter periode (7 hari / 30 hari / 3 bulan)

**UI States:**

* Loading (skeleton cards)
* Data tersedia (normal view)
* Data kosong / belum ada transaksi (empty state dengan CTA)
* Error fetching data

---

#### 5) Transactions Page

**Route:** `/transactions`
**Tujuan:** mencatat dan mengelola pemasukan dan pengeluaran.
**Auth:** Wajib login + business profile.

**Core Features:**

* **Tabs:** "Semua" | "Pemasukan" | "Pengeluaran"
* **Tombol "+ Tambah Transaksi"** → membuka modal form
* **Form Tambah Transaksi:**
  * Tipe: Pemasukan / Pengeluaran (toggle)
  * Jumlah (Rp) — input angka dengan format ribuan otomatis
  * Kategori (dropdown, tergantung tipe)
  * Deskripsi (opsional, max 200 karakter)
  * Tanggal (date picker, default hari ini)
* **Tabel Riwayat Transaksi:**
  * Kolom: Tanggal | Tipe | Kategori | Deskripsi | Jumlah
  * Pagination (20 item per halaman)
  * Sort: berdasarkan tanggal (default terbaru) atau jumlah
* **Filter:**
  * Tanggal: date range picker
  * Kategori: multi-select dropdown
  * Tipe: pemasukan / pengeluaran / semua
* **Aksi per baris:** Edit (modal) | Hapus (konfirmasi dialog)

**Kategori Pemasukan:**
* Penjualan Produk
* Penjualan Jasa
* Pendapatan Lainnya

**Kategori Pengeluaran:**
* Bahan Baku / Stok
* Operasional (sewa, listrik, air)
* Gaji / Tenaga Kerja
* Marketing / Promosi
* Transportasi / Pengiriman
* Lainnya

**UI States:**

* Loading (skeleton table)
* Data tersedia (tabel terisi)
* Data kosong (empty state: "Belum ada transaksi. Mulai catat sekarang!")
* Modal open (tambah/edit transaksi)
* Delete confirmation dialog
* Error state

---

#### 6) Inventory Page

**Route:** `/inventory`
**Tujuan:** memantau stok barang.
**Auth:** Wajib login + business profile.

**Core Features:**

* **Tombol "+ Tambah Produk"** → modal form
* **Form Produk:**
  * Nama produk (wajib)
  * SKU (opsional, auto-generate jika kosong)
  * Harga beli satuan (Rp)
  * Harga jual satuan (Rp)
  * Stok saat ini (angka)
  * Stok minimum (angka, default 5)
  * Satuan (pcs, kg, liter, pack, dll.)
* **Tabel Inventaris:**
  * Kolom: Nama | SKU | Stok | Min Stok | Harga Beli | Harga Jual | Status
  * Status badges:
    * 🟢 Normal (stok > min × 2)
    * 🟡 Rendah (stok ≤ min × 2 dan stok > min)
    * 🔴 Kritis (stok ≤ min)
    * ⚪ Habis (stok = 0)
  * Sort: nama, stok, status
  * Search: cari berdasarkan nama/SKU
* **Quick Stock Adjustment:** tombol +/- di setiap baris untuk update stok cepat
* **Aksi per baris:** Edit (modal) | Hapus (konfirmasi)

**UI States:**

* Loading, Data tersedia, Data kosong, Modal open, Delete confirmation

---

#### 7) Business Health Page

**Route:** `/health`
**Tujuan:** menjelaskan kondisi kesehatan bisnis secara detail.
**Auth:** Wajib login + business profile.

**Core Features:**

* **Overall Health Score** — gauge besar (0–100) dengan kategori dan warna
* **4 Dimensi Score Cards:**
  * Revenue Health (0–100) — tren pendapatan vs target
  * Cashflow Health (0–100) — rasio pemasukan vs pengeluaran
  * Profitability Health (0–100) — margin laba
  * Inventory Health (0–100) — kondisi stok
* **Detail Breakdown per dimensi:**
  * Penjelasan skor dalam bahasa sederhana
  * Indikator yang mempengaruhi skor
  * Rekomendasi perbaikan
* **Riwayat Skor** — line chart health score 30 hari terakhir (per hari)
* **Period Selector:** 7 hari / 30 hari / 3 bulan

**UI States:**

* Loading, Data tersedia, Data tidak cukup (< 7 hari data), Error

---

#### 8) Risk & Alerts Page

**Route:** `/alerts`
**Tujuan:** pusat notifikasi risiko usaha.
**Auth:** Wajib login + business profile.

**Core Features:**

* **Filter tabs:** "Semua" | "Belum Dibaca" | "High" | "Medium" | "Low"
* **Daftar Alert Cards:**
  * Severity badge (🔴 High / 🟡 Medium / 🟢 Low)
  * Judul alert
  * Deskripsi penjelasan
  * Rekomendasi tindakan
  * Timestamp
  * Status: read / unread (bold jika unread)
* **Aksi:** Tandai dibaca | Tandai semua dibaca
* **Auto-refresh:** polling setiap 5 menit atau saat kembali ke halaman

**UI States:**

* Loading, Ada alert, Tidak ada alert ("Tidak ada peringatan. Bisnis Anda berjalan baik! 🎉")

---

#### 9) AI Copilot Page

**Route:** `/copilot`
**Tujuan:** memberi analisis dan rekomendasi berbasis percakapan.
**Auth:** Wajib login + business profile.

**Core Features:**

* **Chat Interface:**
  * Bubble chat style (user kanan, AI kiri)
  * Input text area di bawah + tombol kirim
  * Loading indicator saat AI sedang memproses (typing animation)
  * Markdown rendering untuk respons AI (bold, list, dll.)
* **Suggested Questions** (muncul di awal atau saat chat kosong):
  * "Bagaimana kondisi bisnis saya bulan ini?"
  * "Apa risiko terbesar yang perlu saya perhatikan?"
  * "Bagaimana cara meningkatkan laba saya?"
  * "Produk mana yang paling laku?"
  * "Apakah pengeluaran saya terlalu besar?"
* **Chat History:** tampilkan percakapan sebelumnya (per sesi)
* **New Chat:** tombol untuk memulai percakapan baru
* **Rate Limiting UI:** tampilkan info sisa kuota harian (misal: "15/20 pertanyaan tersisa hari ini")

**UI States:**

* Empty state (welcome + suggested questions)
* Chatting (bubbles + input active)
* AI thinking (typing indicator)
* Error (gagal generate, tampilkan retry button)
* Quota habis (tampilkan pesan + waktu reset)

---

#### 10) Settings / Business Profile Page

**Route:** `/settings`
**Tujuan:** pengaturan akun dan usaha.
**Auth:** Wajib login.

**Core Features:**

* **Section Profil Usaha:**
  * Edit nama usaha, jenis, skala, alamat
* **Section Target Bisnis:**
  * Edit target omzet bulanan
  * Edit target laba bulanan
* **Section Akun:**
  * Ubah nama pengguna
  * Ubah password (password lama + password baru + konfirmasi)
* **Tombol Logout**
* **Danger Zone:** Hapus akun (dengan konfirmasi ganda)

**UI States:**

* View mode (informasi read-only)
* Edit mode (form editable)
* Saving (loading)
* Success (toast notification)
* Error

---

## 9. Sitemap & Routing

```text
/                          Landing Page            [PUBLIC]
/login                     Login Page              [PUBLIC]
/register                  Register Page           [PUBLIC]
/onboarding                Setup Business          [AUTH, no business]
/dashboard                 Dashboard               [AUTH + BUSINESS]
/transactions              Transactions            [AUTH + BUSINESS]
/inventory                 Inventory               [AUTH + BUSINESS]
/health                    Business Health          [AUTH + BUSINESS]
/alerts                    Risk & Alerts            [AUTH + BUSINESS]
/copilot                   AI Copilot               [AUTH + BUSINESS]
/settings                  Settings                 [AUTH]
```

**Route Guards:**

* `[PUBLIC]` — accessible tanpa login. Jika sudah login, redirect ke `/dashboard`.
* `[AUTH]` — memerlukan JWT valid. Jika tidak, redirect ke `/login`.
* `[AUTH + BUSINESS]` — memerlukan JWT valid + business profile. Jika belum setup, redirect ke `/onboarding`.

---

## 10. Core Features Detail

### 10.1 Business Health Score

**Tujuan:** memberi gambaran cepat kondisi usaha dalam satu angka (0–100).

**Input:** transaksi 30 hari terakhir, data inventaris, target bisnis.

**Output:** skor 0–100, kategori (Sehat/Waspada/Kritis), breakdown 4 dimensi.

#### Formula Perhitungan

**Overall Score = (Revenue × 0.30) + (Cashflow × 0.25) + (Profitability × 0.25) + (Inventory × 0.20)**

#### Dimensi 1: Revenue Health (Bobot 30%)

```
Jika target_omzet > 0:
    revenue_ratio = total_pemasukan_bulan_ini / target_omzet
    revenue_trend = (pemasukan_minggu_ini - pemasukan_minggu_lalu) / pemasukan_minggu_lalu

    base_score = min(revenue_ratio × 100, 100)
    trend_bonus = revenue_trend × 20  (cap: -20 sampai +20)

    Revenue Score = clamp(base_score + trend_bonus, 0, 100)

Jika target_omzet = 0 atau belum diset:
    Revenue Score = 50 (netral)
```

#### Dimensi 2: Cashflow Health (Bobot 25%)

```
cashflow_ratio = total_pemasukan / total_pengeluaran  (30 hari terakhir)

Jika cashflow_ratio >= 1.5  → Cashflow Score = 100
Jika cashflow_ratio >= 1.2  → Cashflow Score = 85
Jika cashflow_ratio >= 1.0  → Cashflow Score = 70
Jika cashflow_ratio >= 0.8  → Cashflow Score = 45
Jika cashflow_ratio < 0.8   → Cashflow Score = 20

Jika tidak ada pengeluaran  → Cashflow Score = 100
Jika tidak ada pemasukan    → Cashflow Score = 0
```

#### Dimensi 3: Profitability Health (Bobot 25%)

```
laba = total_pemasukan - total_pengeluaran  (30 hari terakhir)
margin = laba / total_pemasukan × 100

Jika margin >= 30%  → Profitability Score = 100
Jika margin >= 20%  → Profitability Score = 85
Jika margin >= 10%  → Profitability Score = 70
Jika margin >= 0%   → Profitability Score = 50
Jika margin < 0%    → Profitability Score = max(0, 50 + margin)

Jika tidak ada pemasukan → Profitability Score = 0
```

#### Dimensi 4: Inventory Health (Bobot 20%)

```
total_produk = jumlah produk di inventaris
produk_normal = produk dengan stok > stok_minimum
produk_rendah = produk dengan stok <= stok_minimum dan stok > 0
produk_habis = produk dengan stok = 0

Jika total_produk > 0:
    inventory_ratio = produk_normal / total_produk
    Inventory Score = inventory_ratio × 100
    Penalty: -10 per produk habis (minimum score: 0)

Jika total_produk = 0:
    Inventory Score = 75 (netral, tidak ada inventaris yang dikelola)
```

#### Kategori Score

| Range | Kategori | Warna | Emoji |
|-------|----------|-------|-------|
| 75–100 | Sehat | Hijau (#22C55E) | 🟢 |
| 50–74 | Waspada | Kuning (#F59E0B) | 🟡 |
| 0–49 | Kritis | Merah (#EF4444) | 🔴 |

#### Frekuensi Perhitungan

* **Real-time:** dihitung ulang setiap kali user membuka dashboard atau halaman health.
* **Snapshot harian:** disimpan ke tabel `health_scores` setiap hari pukul 00:00 WIB (via cron job atau triggered saat ada transaksi baru).

---

### 10.2 Early Warning System

**Tujuan:** mendeteksi tanda awal masalah dan memberikan peringatan.

**Input:** transaksi, inventaris, health score, data historis.

**Output:** alert dengan severity level dan rekomendasi tindakan.

#### Daftar Rules

| ID | Rule | Kondisi Trigger | Severity | Rekomendasi |
|----|------|-----------------|----------|-------------|
| `EWS-001` | Revenue Drop | Pemasukan 7 hari terakhir turun > 30% vs 7 hari sebelumnya | 🔴 HIGH | "Pemasukan turun drastis. Periksa apakah ada perubahan pasar, kompetisi, atau masalah operasional." |
| `EWS-002` | Revenue Decline | Pemasukan 7 hari terakhir turun 15–30% vs 7 hari sebelumnya | 🟡 MEDIUM | "Pemasukan menunjukkan tren penurunan. Pertimbangkan strategi promosi atau evaluasi produk." |
| `EWS-003` | Expense Spike | Pengeluaran 7 hari terakhir naik > 40% vs 7 hari sebelumnya | 🔴 HIGH | "Pengeluaran melonjak signifikan. Review biaya operasional dan identifikasi sumber kenaikan." |
| `EWS-004` | High Expense Ratio | Total pengeluaran > 85% dari total pemasukan (30 hari) | 🟡 MEDIUM | "Rasio pengeluaran terhadap pemasukan terlalu tinggi. Margin laba Anda sangat tipis." |
| `EWS-005` | Negative Cashflow | Total pengeluaran > total pemasukan (30 hari) | 🔴 HIGH | "Bisnis Anda mengalami cashflow negatif. Segera evaluasi pengeluaran dan cari sumber pendapatan tambahan." |
| `EWS-006` | Stock Critical | Ada produk dengan stok ≤ stok minimum | 🟡 MEDIUM | "Stok [nama_produk] hampir habis. Segera lakukan restok." |
| `EWS-007` | Stock Empty | Ada produk dengan stok = 0 | 🔴 HIGH | "Stok [nama_produk] habis! Anda kehilangan potensi penjualan." |
| `EWS-008` | Slow Moving Stock | Ada produk yang stoknya tidak berubah selama 14 hari | 🟢 LOW | "Stok [nama_produk] tidak bergerak selama 2 minggu. Pertimbangkan promo atau diskon." |
| `EWS-009` | No Transactions | Tidak ada transaksi dalam 7 hari terakhir | 🟡 MEDIUM | "Tidak ada transaksi tercatat selama 7 hari. Pastikan semua transaksi tercatat." |
| `EWS-010` | Health Score Drop | Health score turun > 15 poin dalam 7 hari | 🔴 HIGH | "Skor kesehatan bisnis turun signifikan. Buka halaman Health untuk detail." |
| `EWS-011` | Target Miss | Sudah melewati hari ke-20 bulan ini dan pemasukan < 60% target | 🟡 MEDIUM | "Target omzet bulan ini kemungkinan tidak tercapai. Anda baru mencapai [x]%." |

#### Mekanisme Alert

* **Trigger:** Alert dicek setiap kali user membuka dashboard, atau saat ada transaksi baru.
* **Cooldown:** Alert yang sama (rule_id yang sama) tidak boleh muncul lagi dalam 24 jam setelah di-trigger.
* **Auto-resolve:** Alert otomatis ditandai "resolved" jika kondisi trigger sudah tidak terpenuhi pada pengecekan berikutnya.
* **Retensi:** Alert disimpan selama 90 hari, setelah itu dihapus otomatis.

---

### 10.3 AI Copilot

**Tujuan:** menjelaskan kondisi bisnis dengan bahasa yang mudah dipahami dan memberikan rekomendasi aksi.

**Model:** Gemini 2.0 Flash via Gemini API.

**Input:** data bisnis (diambil otomatis) + pertanyaan pengguna.

**Output:** analisis, penjelasan sebab masalah, dan rekomendasi tindakan.

#### System Prompt Template

```
Kamu adalah "UsahaKu+ Copilot", asisten bisnis AI untuk pemilik UMKM di Indonesia.

PERAN:
- Kamu membantu pemilik usaha memahami kondisi bisnisnya.
- Kamu memberikan analisis yang berbasis data dan mudah dipahami.
- Kamu memberikan rekomendasi tindakan yang praktis dan bisa langsung dilakukan.

ATURAN:
1. Selalu gunakan Bahasa Indonesia yang sopan dan mudah dipahami.
2. Jangan menggunakan istilah teknis tanpa penjelasan.
3. Selalu dasarkan jawabanmu pada DATA BISNIS yang diberikan.
4. Jika data tidak cukup untuk menjawab, katakan dengan jujur.
5. Berikan rekomendasi yang ACTIONABLE (bisa langsung dilakukan).
6. Jangan memberikan saran investasi atau saran hukum.
7. Jawab dengan ringkas — maksimal 300 kata per respons.
8. Gunakan emoji secukupnya untuk membuat respons lebih ramah.
9. Jika ditanya di luar konteks bisnis, arahkan kembali ke topik bisnis.

FORMAT RESPONS:
- Gunakan bullet points untuk daftar.
- Gunakan bold untuk angka penting.
- Akhiri dengan 1-2 rekomendasi aksi konkret.
```

#### Context Injection Format

Setiap kali user mengirim pertanyaan, backend akan menyusun konteks data bisnis dan menambahkannya ke prompt:

```
DATA BISNIS PENGGUNA (per tanggal {tanggal_hari_ini}):

Nama Usaha: {nama_usaha}
Jenis Usaha: {jenis_usaha}

KEUANGAN (30 hari terakhir):
- Total Pemasukan: Rp {total_income}
- Total Pengeluaran: Rp {total_expense}
- Laba Bersih: Rp {net_profit}
- Margin Laba: {profit_margin}%
- Target Omzet Bulanan: Rp {target_revenue}
- Pencapaian Target: {target_achievement}%

TREN (7 hari terakhir vs 7 hari sebelumnya):
- Perubahan Pemasukan: {revenue_change}%
- Perubahan Pengeluaran: {expense_change}%

TOP 3 KATEGORI PENGELUARAN:
{top_expenses}

INVENTARIS:
- Total Produk: {total_products}
- Produk Stok Rendah: {low_stock_count}
- Produk Habis: {out_of_stock_count}

SKOR KESEHATAN BISNIS:
- Overall: {health_score}/100 ({health_category})
- Revenue: {revenue_score}/100
- Cashflow: {cashflow_score}/100
- Profitability: {profitability_score}/100
- Inventory: {inventory_score}/100

PERINGATAN AKTIF:
{active_alerts}

PERTANYAAN PENGGUNA:
{user_question}
```

#### Rate Limiting

* **MVP:** 20 pertanyaan per user per hari.
* **Penyimpanan:** setiap pertanyaan dan jawaban disimpan di tabel `ai_messages`.
* **Estimasi biaya:** ~$0.01–0.02 per pertanyaan (Gemini Flash pricing).

#### Suggested Questions

Ditampilkan saat chat kosong atau sebagai quick action:

1. "Bagaimana kondisi bisnis saya bulan ini?"
2. "Apa risiko terbesar yang perlu saya perhatikan?"
3. "Bagaimana cara meningkatkan laba saya?"
4. "Kategori pengeluaran mana yang paling besar?"
5. "Apakah stok saya dalam kondisi baik?"

---

## 11. Tech Stack

### Front-End

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| Next.js | 14+ (App Router) | Framework React untuk SSR/SSG |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 3+ | Utility-first CSS |
| shadcn/ui | latest | UI component library |
| Recharts | 2+ | Charting library (line, bar, gauge) |
| React Hook Form | 7+ | Form management |
| Zod | 3+ | Schema validation |
| Axios / Fetch | - | HTTP client |
| date-fns | 3+ | Date manipulation |

### Back-End

| Teknologi | Versi | Fungsi |
|-----------|-------|--------|
| Python | 3.11+ | Bahasa utama |
| FastAPI | 0.100+ | Web framework |
| SQLAlchemy | 2.0+ | ORM |
| Pydantic | 2+ | Data validation & serialization |
| Alembic | 1.12+ | Database migration |
| Uvicorn | 0.24+ | ASGI server |
| Passlib + bcrypt | - | Password hashing |
| python-jose | - | JWT token handling |
| google-generativeai | - | Gemini API client |
| APScheduler | 3+ | Scheduled jobs (health score snapshot) |

### Database

| Teknologi | Fungsi |
|-----------|--------|
| PostgreSQL 15+ | Primary database |

### Deployment

| Layer | Platform |
|-------|----------|
| Frontend | Vercel |
| Backend | Railway |
| Database | PostgreSQL di Railway |

---

## 12. Arsitektur Sistem

```text
┌──────────────────────────────────────────────────────┐
│                     FRONTEND                         │
│              Next.js + TypeScript                    │
│         (Vercel — usahaku.vercel.app)                │
└────────────────────┬─────────────────────────────────┘
                     │ HTTPS REST API
                     │ JWT Bearer Token
                     ▼
┌──────────────────────────────────────────────────────┐
│                     BACKEND                          │
│                FastAPI (Python)                      │
│          (Railway — api.usahaku.app)                 │
│                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │    Auth      │  │ Transaction │  │  Inventory   │  │
│  │   Service    │  │   Service   │  │   Service    │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │
│  │  Business    │  │  Analytics  │  │   Alert      │  │
│  │   Service    │  │   Engine    │  │   Service    │  │
│  └─────────────┘  └─────────────┘  └─────────────┘  │
│  ┌─────────────┐                                     │
│  │ AI Copilot   │──────── Gemini 2.0 Flash API       │
│  │   Service    │                                    │
│  └─────────────┘                                     │
└────────────────────┬─────────────────────────────────┘
                     │ SQLAlchemy ORM
                     ▼
┌──────────────────────────────────────────────────────┐
│                   DATABASE                           │
│              PostgreSQL 15+                          │
│          (Railway — managed)                         │
└──────────────────────────────────────────────────────┘
```

---

## 13. Komponen Back-End (Services)

### 13.1 Authentication Service

**File:** `app/services/auth_service.py`

| Fungsi | Deskripsi |
|--------|-----------|
| `register(name, email, password)` | Buat user baru, hash password, return JWT |
| `login(email, password)` | Validasi kredensial, return JWT access + refresh token |
| `refresh_token(refresh_token)` | Validasi refresh token, return JWT access baru |
| `logout()` | Hapus refresh token dari DB/blacklist |
| `get_current_user(token)` | Decode JWT, return user data (dependency injection) |
| `change_password(user_id, old_pass, new_pass)` | Validasi password lama, update password baru |

### 13.2 Business Service

**File:** `app/services/business_service.py`

| Fungsi | Deskripsi |
|--------|-----------|
| `create_business(user_id, data)` | Buat profil bisnis baru |
| `get_business(user_id)` | Ambil profil bisnis user |
| `update_business(business_id, data)` | Update profil bisnis |
| `set_targets(business_id, revenue_target, profit_target)` | Set/update target bisnis |
| `delete_business(business_id)` | Soft delete bisnis dan semua data terkait |

### 13.3 Transaction Service

**File:** `app/services/transaction_service.py`

| Fungsi | Deskripsi |
|--------|-----------|
| `create_transaction(business_id, data)` | Tambah transaksi (income/expense) |
| `get_transactions(business_id, filters, pagination)` | Ambil daftar transaksi + filter + paginasi |
| `get_transaction_by_id(transaction_id)` | Ambil detail satu transaksi |
| `update_transaction(transaction_id, data)` | Update transaksi |
| `delete_transaction(transaction_id)` | Soft delete transaksi |
| `get_summary(business_id, period)` | Hitung total income, expense, profit per periode |
| `get_category_breakdown(business_id, period)` | Breakdown per kategori |

### 13.4 Inventory Service

**File:** `app/services/inventory_service.py`

| Fungsi | Deskripsi |
|--------|-----------|
| `create_item(business_id, data)` | Tambah produk baru |
| `get_items(business_id, filters)` | Ambil daftar produk + filter |
| `get_item_by_id(item_id)` | Ambil detail satu produk |
| `update_item(item_id, data)` | Update info produk |
| `adjust_stock(item_id, quantity, adjustment_type)` | Tambah/kurangi stok |
| `delete_item(item_id)` | Soft delete produk |
| `get_low_stock_items(business_id)` | Ambil produk stok rendah/habis |
| `get_slow_moving_items(business_id, days=14)` | Ambil produk stok tidak bergerak |

### 13.5 Analytics Engine

**File:** `app/services/analytics_service.py`

| Fungsi | Deskripsi |
|--------|-----------|
| `calculate_health_score(business_id)` | Hitung overall health score (lihat formula di §10.1) |
| `calculate_revenue_health(business_id)` | Hitung skor revenue |
| `calculate_cashflow_health(business_id)` | Hitung skor cashflow |
| `calculate_profitability_health(business_id)` | Hitung skor profitability |
| `calculate_inventory_health(business_id)` | Hitung skor inventory |
| `save_daily_snapshot(business_id)` | Simpan snapshot skor harian |
| `get_score_history(business_id, period)` | Ambil riwayat skor |
| `get_revenue_trend(business_id, period)` | Ambil tren pendapatan harian |
| `get_cashflow_trend(business_id, period)` | Ambil tren cashflow per minggu |

### 13.6 Alert Service

**File:** `app/services/alert_service.py`

| Fungsi | Deskripsi |
|--------|-----------|
| `run_all_rules(business_id)` | Jalankan semua EWS rules (lihat §10.2) |
| `create_alert(business_id, rule_id, severity, data)` | Buat alert baru |
| `get_alerts(business_id, filters)` | Ambil daftar alert |
| `mark_as_read(alert_id)` | Tandai alert dibaca |
| `mark_all_as_read(business_id)` | Tandai semua alert dibaca |
| `check_cooldown(business_id, rule_id)` | Cek apakah rule dalam cooldown |
| `auto_resolve(business_id)` | Resolve alert yang kondisinya sudah normal |

### 13.7 AI Copilot Service

**File:** `app/services/copilot_service.py`

| Fungsi | Deskripsi |
|--------|-----------|
| `ask(business_id, user_id, question)` | Proses pertanyaan: kumpulkan konteks → kirim ke Gemini → simpan → return jawaban |
| `build_context(business_id)` | Kumpulkan semua data bisnis untuk context injection (lihat §10.3) |
| `get_conversations(user_id)` | Ambil daftar percakapan |
| `get_messages(conversation_id)` | Ambil pesan dalam percakapan |
| `create_conversation(user_id, business_id)` | Buat sesi percakapan baru |
| `check_daily_quota(user_id)` | Cek sisa kuota harian (max 20) |
| `generate_daily_insight(business_id)` | Generate insight singkat untuk dashboard (dipanggil otomatis) |

---

## 14. Database Schema

### 14.1 Entity Relationship Diagram

```text
users (1) ──── (1) businesses
                    │
        ┌───────────┼───────────────┬────────────────┐
        │           │               │                │
    (many)      (many)          (many)           (many)
 transactions  inventory_items  health_scores     alerts
                                                     
businesses (1) ──── (many) ai_conversations
                                │
                            (many)
                           ai_messages
```

### 14.2 Tabel Detail

#### Tabel: `users`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `name` | VARCHAR(100) | NOT NULL | Nama lengkap |
| `email` | VARCHAR(255) | NOT NULL, UNIQUE | Email login |
| `password_hash` | VARCHAR(255) | NOT NULL | Bcrypt hash |
| `is_active` | BOOLEAN | DEFAULT true | Status aktif |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu registrasi |
| `updated_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu update terakhir |

**Index:** `idx_users_email` on `email`

---

#### Tabel: `businesses`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `user_id` | UUID | FK → users.id, UNIQUE, NOT NULL | Pemilik (1:1 untuk MVP) |
| `name` | VARCHAR(200) | NOT NULL | Nama usaha |
| `type` | VARCHAR(50) | NOT NULL | Jenis usaha (enum) |
| `scale` | VARCHAR(20) | NOT NULL | Skala usaha (enum) |
| `address` | TEXT | NULLABLE | Alamat usaha |
| `monthly_revenue_target` | BIGINT | DEFAULT 0 | Target omzet bulanan (Rp) |
| `monthly_profit_target` | BIGINT | DEFAULT 0 | Target laba bulanan (Rp) |
| `is_active` | BOOLEAN | DEFAULT true | Soft delete flag |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu pembuatan |
| `updated_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu update terakhir |

**Index:** `idx_businesses_user_id` on `user_id`

**Enum `business_type`:** `retail`, `culinary`, `service`, `trading`, `other`
**Enum `business_scale`:** `micro`, `small`, `medium`

---

#### Tabel: `categories`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `name` | VARCHAR(100) | NOT NULL | Nama kategori |
| `type` | VARCHAR(10) | NOT NULL | `income` atau `expense` |
| `is_default` | BOOLEAN | DEFAULT false | Apakah kategori bawaan sistem |
| `business_id` | UUID | FK → businesses.id, NULLABLE | NULL jika default system |

**Index:** `idx_categories_type` on `type`
**Index:** `idx_categories_business_id` on `business_id`

**Seed data (kategori default):**

| Nama | Type |
|------|------|
| Penjualan Produk | income |
| Penjualan Jasa | income |
| Pendapatan Lainnya | income |
| Bahan Baku / Stok | expense |
| Operasional | expense |
| Gaji / Tenaga Kerja | expense |
| Marketing / Promosi | expense |
| Transportasi / Pengiriman | expense |
| Lainnya | expense |

---

#### Tabel: `transactions`

> **Catatan:** Tabel `expenses` dari PRD lama digabung ke sini. Gunakan field `type` untuk membedakan pemasukan dan pengeluaran.

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `business_id` | UUID | FK → businesses.id, NOT NULL | Bisnis pemilik |
| `type` | VARCHAR(10) | NOT NULL | `income` atau `expense` |
| `category_id` | UUID | FK → categories.id, NOT NULL | Kategori transaksi |
| `amount` | BIGINT | NOT NULL, CHECK > 0 | Jumlah (Rp), selalu positif |
| `description` | VARCHAR(200) | NULLABLE | Keterangan transaksi |
| `transaction_date` | DATE | NOT NULL, DEFAULT CURRENT_DATE | Tanggal transaksi |
| `is_deleted` | BOOLEAN | DEFAULT false | Soft delete flag |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu input |
| `updated_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu update terakhir |

**Index:** `idx_transactions_business_date` on `(business_id, transaction_date)`
**Index:** `idx_transactions_business_type` on `(business_id, type)`

---

#### Tabel: `inventory_items`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `business_id` | UUID | FK → businesses.id, NOT NULL | Bisnis pemilik |
| `name` | VARCHAR(200) | NOT NULL | Nama produk |
| `sku` | VARCHAR(50) | NULLABLE | Stock Keeping Unit |
| `buy_price` | BIGINT | DEFAULT 0 | Harga beli satuan (Rp) |
| `sell_price` | BIGINT | DEFAULT 0 | Harga jual satuan (Rp) |
| `current_stock` | INTEGER | NOT NULL, DEFAULT 0, CHECK >= 0 | Stok saat ini |
| `min_stock` | INTEGER | NOT NULL, DEFAULT 5 | Batas minimum stok |
| `unit` | VARCHAR(20) | DEFAULT 'pcs' | Satuan (pcs, kg, liter, dll.) |
| `last_stock_update` | TIMESTAMP WITH TZ | DEFAULT now() | Terakhir stok berubah |
| `is_deleted` | BOOLEAN | DEFAULT false | Soft delete flag |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu pembuatan |
| `updated_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu update terakhir |

**Index:** `idx_inventory_business_id` on `business_id`
**Index:** `idx_inventory_sku` on `(business_id, sku)` UNIQUE WHERE sku IS NOT NULL

---

#### Tabel: `health_scores`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `business_id` | UUID | FK → businesses.id, NOT NULL | Bisnis pemilik |
| `overall_score` | SMALLINT | NOT NULL, CHECK 0–100 | Skor keseluruhan |
| `revenue_score` | SMALLINT | NOT NULL, CHECK 0–100 | Skor revenue |
| `cashflow_score` | SMALLINT | NOT NULL, CHECK 0–100 | Skor cashflow |
| `profitability_score` | SMALLINT | NOT NULL, CHECK 0–100 | Skor profitability |
| `inventory_score` | SMALLINT | NOT NULL, CHECK 0–100 | Skor inventory |
| `category` | VARCHAR(10) | NOT NULL | `healthy`, `warning`, `critical` |
| `scored_at` | DATE | NOT NULL, DEFAULT CURRENT_DATE | Tanggal skor |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu pembuatan |

**Index:** `idx_health_scores_business_date` on `(business_id, scored_at)` UNIQUE

---

#### Tabel: `alerts`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `business_id` | UUID | FK → businesses.id, NOT NULL | Bisnis pemilik |
| `rule_id` | VARCHAR(10) | NOT NULL | Kode rule (EWS-001, dll.) |
| `severity` | VARCHAR(10) | NOT NULL | `high`, `medium`, `low` |
| `title` | VARCHAR(200) | NOT NULL | Judul alert |
| `description` | TEXT | NOT NULL | Penjelasan detail |
| `recommendation` | TEXT | NOT NULL | Rekomendasi tindakan |
| `is_read` | BOOLEAN | DEFAULT false | Sudah dibaca |
| `is_resolved` | BOOLEAN | DEFAULT false | Sudah resolved |
| `resolved_at` | TIMESTAMP WITH TZ | NULLABLE | Waktu resolved |
| `expires_at` | TIMESTAMP WITH TZ | NOT NULL | Waktu expired (created_at + 90 hari) |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu pembuatan |

**Index:** `idx_alerts_business_id` on `business_id`
**Index:** `idx_alerts_business_unread` on `(business_id, is_read)` WHERE `is_read = false`

---

#### Tabel: `ai_conversations`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `user_id` | UUID | FK → users.id, NOT NULL | Pemilik percakapan |
| `business_id` | UUID | FK → businesses.id, NOT NULL | Konteks bisnis |
| `title` | VARCHAR(200) | DEFAULT 'Percakapan Baru' | Judul percakapan |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu pembuatan |
| `updated_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu pesan terakhir |

**Index:** `idx_ai_conversations_user_id` on `user_id`

---

#### Tabel: `ai_messages`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `conversation_id` | UUID | FK → ai_conversations.id, NOT NULL | Percakapan terkait |
| `role` | VARCHAR(10) | NOT NULL | `user` atau `assistant` |
| `content` | TEXT | NOT NULL | Isi pesan |
| `tokens_used` | INTEGER | DEFAULT 0 | Jumlah token yang digunakan |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu pesan |

**Index:** `idx_ai_messages_conversation_id` on `conversation_id`

---

#### Tabel: `refresh_tokens`

| Kolom | Tipe | Constraint | Deskripsi |
|-------|------|------------|-----------|
| `id` | UUID | PK, DEFAULT gen_random_uuid() | Primary key |
| `user_id` | UUID | FK → users.id, NOT NULL | Pemilik token |
| `token` | VARCHAR(500) | NOT NULL, UNIQUE | Refresh token value |
| `expires_at` | TIMESTAMP WITH TZ | NOT NULL | Waktu expired |
| `is_revoked` | BOOLEAN | DEFAULT false | Apakah sudah direvoke |
| `created_at` | TIMESTAMP WITH TZ | DEFAULT now() | Waktu pembuatan |

**Index:** `idx_refresh_tokens_token` on `token`
**Index:** `idx_refresh_tokens_user_id` on `user_id`

---

## 15. REST API Specification

**Base URL:** `https://api.usahaku.app/api/v1`

**Standard Response Format:**

```json
// Success
{
  "success": true,
  "data": { ... },
  "message": "Operasi berhasil"
}

// Success with pagination
{
  "success": true,
  "data": [ ... ],
  "message": "Operasi berhasil",
  "pagination": {
    "page": 1,
    "per_page": 20,
    "total_items": 150,
    "total_pages": 8
  }
}

// Error
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email sudah terdaftar",
    "details": { ... }
  }
}
```

---

### 15.1 Authentication Endpoints

#### `POST /auth/register`

Registrasi akun baru.

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| name | string | Ya | Nama lengkap (2–100 karakter) |
| email | string | Ya | Email valid, unique |
| password | string | Ya | Min 8 karakter, huruf + angka |

**Response 201:**
```json
{
  "success": true,
  "data": {
    "user": { "id": "uuid", "name": "...", "email": "..." },
    "access_token": "jwt...",
    "refresh_token": "jwt...",
    "token_type": "Bearer",
    "expires_in": 900
  }
}
```

**Errors:** `400 VALIDATION_ERROR`, `409 EMAIL_ALREADY_EXISTS`

---

#### `POST /auth/login`

Login ke akun.

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| email | string | Ya | Email terdaftar |
| password | string | Ya | Password |

**Response 200:** (sama seperti register)

**Errors:** `401 INVALID_CREDENTIALS`

---

#### `POST /auth/refresh`

Refresh access token.

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| refresh_token | string | Ya | Refresh token yang valid |

**Response 200:**
```json
{
  "success": true,
  "data": {
    "access_token": "jwt...",
    "token_type": "Bearer",
    "expires_in": 900
  }
}
```

**Errors:** `401 INVALID_REFRESH_TOKEN`, `401 TOKEN_EXPIRED`

---

#### `POST /auth/logout`

Logout (revoke refresh token).

**Headers:** `Authorization: Bearer {access_token}`

**Response 200:** `{ "success": true, "message": "Logout berhasil" }`

---

#### `PUT /auth/change-password`

Ubah password.

**Headers:** `Authorization: Bearer {access_token}`

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| old_password | string | Ya | Password lama |
| new_password | string | Ya | Password baru (min 8 karakter) |

**Response 200:** `{ "success": true, "message": "Password berhasil diubah" }`

**Errors:** `401 INVALID_OLD_PASSWORD`, `400 VALIDATION_ERROR`

---

### 15.2 Business Endpoints

#### `POST /business`

Buat profil bisnis baru (onboarding).

**Headers:** `Authorization: Bearer {access_token}`

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| name | string | Ya | Nama usaha |
| type | string | Ya | Enum: retail, culinary, service, trading, other |
| scale | string | Ya | Enum: micro, small, medium |
| address | string | Tidak | Alamat usaha |
| monthly_revenue_target | integer | Tidak | Target omzet (Rp), default 0 |
| monthly_profit_target | integer | Tidak | Target laba (Rp), default 0 |

**Response 201:** `{ "success": true, "data": { business object } }`

**Errors:** `400 VALIDATION_ERROR`, `409 BUSINESS_ALREADY_EXISTS`

---

#### `GET /business`

Ambil profil bisnis user.

**Headers:** `Authorization: Bearer {access_token}`

**Response 200:** `{ "success": true, "data": { business object } }`

**Errors:** `404 BUSINESS_NOT_FOUND`

---

#### `PUT /business`

Update profil bisnis.

**Headers:** `Authorization: Bearer {access_token}`

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| name | string | Tidak | Nama usaha |
| type | string | Tidak | Jenis usaha |
| scale | string | Tidak | Skala usaha |
| address | string | Tidak | Alamat |
| monthly_revenue_target | integer | Tidak | Target omzet |
| monthly_profit_target | integer | Tidak | Target laba |

**Response 200:** `{ "success": true, "data": { updated business object } }`

---

### 15.3 Transaction Endpoints

#### `POST /transactions`

Tambah transaksi baru.

**Headers:** `Authorization: Bearer {access_token}`

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| type | string | Ya | `income` atau `expense` |
| category_id | string (UUID) | Ya | ID kategori |
| amount | integer | Ya | Jumlah (Rp), harus > 0 |
| description | string | Tidak | Keterangan (max 200 karakter) |
| transaction_date | string (date) | Tidak | Format: YYYY-MM-DD, default hari ini |

**Response 201:** `{ "success": true, "data": { transaction object } }`

---

#### `GET /transactions`

Ambil daftar transaksi.

**Headers:** `Authorization: Bearer {access_token}`

| Query Param | Tipe | Default | Deskripsi |
|-------------|------|---------|-----------|
| page | integer | 1 | Halaman |
| per_page | integer | 20 | Item per halaman (max 100) |
| type | string | - | Filter: `income`, `expense` |
| category_id | string | - | Filter kategori |
| date_from | string | - | Filter tanggal mulai (YYYY-MM-DD) |
| date_to | string | - | Filter tanggal akhir (YYYY-MM-DD) |
| sort_by | string | `transaction_date` | Sort: `transaction_date`, `amount` |
| sort_order | string | `desc` | Order: `asc`, `desc` |

**Response 200:** `{ "success": true, "data": [ ... ], "pagination": { ... } }`

---

#### `GET /transactions/:id`

Ambil detail satu transaksi.

**Response 200:** `{ "success": true, "data": { transaction object } }`

**Errors:** `404 TRANSACTION_NOT_FOUND`

---

#### `PUT /transactions/:id`

Update transaksi.

**Response 200:** `{ "success": true, "data": { updated transaction object } }`

**Errors:** `404 TRANSACTION_NOT_FOUND`

---

#### `DELETE /transactions/:id`

Hapus transaksi (soft delete).

**Response 200:** `{ "success": true, "message": "Transaksi berhasil dihapus" }`

---

#### `GET /transactions/summary`

Ambil ringkasan keuangan.

| Query Param | Tipe | Default | Deskripsi |
|-------------|------|---------|-----------|
| period | string | `30d` | Periode: `7d`, `30d`, `90d` |

**Response 200:**
```json
{
  "success": true,
  "data": {
    "total_income": 15000000,
    "total_expense": 8000000,
    "net_profit": 7000000,
    "profit_margin": 46.67,
    "transaction_count": 42,
    "income_change_percent": 12.5,
    "expense_change_percent": -3.2,
    "top_expense_categories": [
      { "category": "Bahan Baku", "amount": 4000000, "percent": 50 },
      { "category": "Operasional", "amount": 2000000, "percent": 25 },
      { "category": "Gaji", "amount": 1500000, "percent": 18.75 }
    ]
  }
}
```

---

### 15.4 Inventory Endpoints

#### `POST /inventory`

Tambah produk baru.

**Headers:** `Authorization: Bearer {access_token}`

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| name | string | Ya | Nama produk |
| sku | string | Tidak | Kode SKU |
| buy_price | integer | Tidak | Harga beli (Rp) |
| sell_price | integer | Tidak | Harga jual (Rp) |
| current_stock | integer | Ya | Stok awal |
| min_stock | integer | Tidak | Minimum stok, default 5 |
| unit | string | Tidak | Satuan, default "pcs" |

**Response 201:** `{ "success": true, "data": { inventory item object } }`

---

#### `GET /inventory`

Ambil daftar produk.

| Query Param | Tipe | Default | Deskripsi |
|-------------|------|---------|-----------|
| search | string | - | Cari nama/SKU |
| status | string | - | Filter: `normal`, `low`, `critical`, `empty` |
| sort_by | string | `name` | Sort: `name`, `current_stock`, `sell_price` |
| sort_order | string | `asc` | Order: `asc`, `desc` |

**Response 200:** `{ "success": true, "data": [ ... ] }`

---

#### `PUT /inventory/:id`

Update info produk.

---

#### `PATCH /inventory/:id/adjust-stock`

Adjustment stok cepat.

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| quantity | integer | Ya | Jumlah penyesuaian (positif = tambah, negatif = kurangi) |
| reason | string | Tidak | Alasan penyesuaian |

**Response 200:**
```json
{
  "success": true,
  "data": {
    "item_id": "uuid",
    "name": "Produk A",
    "previous_stock": 10,
    "adjustment": -3,
    "current_stock": 7
  }
}
```

---

#### `DELETE /inventory/:id`

Hapus produk (soft delete).

---

### 15.5 Health Score Endpoints

#### `GET /health/current`

Ambil health score terkini (dihitung real-time).

**Response 200:**
```json
{
  "success": true,
  "data": {
    "overall_score": 72,
    "category": "warning",
    "dimensions": {
      "revenue": { "score": 80, "label": "Baik", "details": "Pendapatan mencapai 80% dari target" },
      "cashflow": { "score": 70, "label": "Cukup", "details": "Rasio cashflow 1.2x — cukup sehat" },
      "profitability": { "score": 65, "label": "Waspada", "details": "Margin laba 15% — perlu ditingkatkan" },
      "inventory": { "score": 75, "label": "Baik", "details": "2 dari 10 produk stok rendah" }
    },
    "scored_at": "2026-06-16"
  }
}
```

---

#### `GET /health/history`

Ambil riwayat health score.

| Query Param | Tipe | Default | Deskripsi |
|-------------|------|---------|-----------|
| period | string | `30d` | Periode: `7d`, `30d`, `90d` |

**Response 200:**
```json
{
  "success": true,
  "data": [
    { "date": "2026-06-16", "overall": 72, "revenue": 80, "cashflow": 70, "profitability": 65, "inventory": 75 },
    { "date": "2026-06-15", "overall": 75, "revenue": 82, "cashflow": 72, "profitability": 68, "inventory": 75 }
  ]
}
```

---

### 15.6 Alert Endpoints

#### `GET /alerts`

Ambil daftar alert.

| Query Param | Tipe | Default | Deskripsi |
|-------------|------|---------|-----------|
| is_read | boolean | - | Filter: true/false |
| severity | string | - | Filter: `high`, `medium`, `low` |
| page | integer | 1 | Halaman |
| per_page | integer | 20 | Item per halaman |

**Response 200:** `{ "success": true, "data": [ ... ], "pagination": { ... } }`

---

#### `PATCH /alerts/:id/read`

Tandai alert sebagai dibaca.

**Response 200:** `{ "success": true }`

---

#### `PATCH /alerts/read-all`

Tandai semua alert sebagai dibaca.

**Response 200:** `{ "success": true, "data": { "updated_count": 5 } }`

---

### 15.7 AI Copilot Endpoints

#### `POST /copilot/conversations`

Buat percakapan baru.

**Response 201:** `{ "success": true, "data": { conversation object } }`

---

#### `GET /copilot/conversations`

Ambil daftar percakapan.

**Response 200:** `{ "success": true, "data": [ ... ] }`

---

#### `POST /copilot/conversations/:id/messages`

Kirim pertanyaan ke AI.

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|-------|-----------|
| content | string | Ya | Pertanyaan pengguna (max 500 karakter) |

**Response 200:**
```json
{
  "success": true,
  "data": {
    "user_message": { "id": "uuid", "role": "user", "content": "..." },
    "ai_message": { "id": "uuid", "role": "assistant", "content": "..." },
    "quota_remaining": 15
  }
}
```

**Errors:** `429 DAILY_QUOTA_EXCEEDED`

---

#### `GET /copilot/conversations/:id/messages`

Ambil pesan dalam percakapan.

---

#### `GET /copilot/quota`

Cek sisa kuota harian.

**Response 200:**
```json
{
  "success": true,
  "data": {
    "daily_limit": 20,
    "used_today": 5,
    "remaining": 15,
    "resets_at": "2026-06-17T00:00:00+07:00"
  }
}
```

---

### 15.8 Dashboard Endpoint

#### `GET /dashboard`

Ambil semua data dashboard dalam satu panggilan (composite endpoint).

| Query Param | Tipe | Default | Deskripsi |
|-------------|------|---------|-----------|
| period | string | `30d` | Periode: `7d`, `30d`, `90d` |

**Response 200:**
```json
{
  "success": true,
  "data": {
    "health_score": { ... },
    "financial_summary": { ... },
    "recent_alerts": [ ... ],
    "revenue_trend": [ ... ],
    "cashflow_trend": [ ... ],
    "ai_insight": "Bisnis Anda bulan ini menunjukkan tren positif..."
  }
}
```

---

### 15.9 Category Endpoints

#### `GET /categories`

Ambil daftar kategori.

| Query Param | Tipe | Default | Deskripsi |
|-------------|------|---------|-----------|
| type | string | - | Filter: `income`, `expense` |

**Response 200:** `{ "success": true, "data": [ ... ] }`

---

## 16. Authentication & Security

### 16.1 JWT Token Strategy

| Token | Lifetime | Storage | Tujuan |
|-------|----------|---------|--------|
| Access Token | 15 menit | Memory (React state) | Autentikasi setiap request |
| Refresh Token | 7 hari | HTTP-only secure cookie | Refresh access token |

#### Flow:

```text
1. Login/Register → dapat access_token + refresh_token
2. Setiap request API → kirim access_token di header Authorization
3. Jika access_token expired (401) → call POST /auth/refresh
4. Jika refresh_token expired → redirect ke /login
5. Logout → revoke refresh_token di backend
```

### 16.2 Password Security

* Hashing: **bcrypt** dengan cost factor 12
* Minimum: 8 karakter, harus mengandung huruf dan angka
* Tidak boleh sama dengan email

### 16.3 Rate Limiting

| Endpoint Group | Limit | Window |
|----------------|-------|--------|
| Auth (login/register) | 10 requests | per menit per IP |
| AI Copilot | 20 requests | per hari per user |
| General API | 100 requests | per menit per user |

### 16.4 Security Measures

* **CORS:** hanya izinkan origin frontend (`usahaku.vercel.app`, `localhost:3000`)
* **Input Validation:** semua input divalidasi via Pydantic schemas
* **SQL Injection:** dicegah via SQLAlchemy ORM (parameterized queries)
* **XSS:** Next.js melakukan escape otomatis; AI response di-sanitize sebelum render
* **HTTPS:** wajib di production

---

## 17. Error Handling Standard

### 17.1 Error Codes

| Code | HTTP Status | Deskripsi |
|------|-------------|-----------|
| `VALIDATION_ERROR` | 400 | Input tidak valid |
| `INVALID_CREDENTIALS` | 401 | Email/password salah |
| `TOKEN_EXPIRED` | 401 | JWT expired |
| `INVALID_REFRESH_TOKEN` | 401 | Refresh token tidak valid |
| `FORBIDDEN` | 403 | Tidak punya akses |
| `NOT_FOUND` | 404 | Resource tidak ditemukan |
| `EMAIL_ALREADY_EXISTS` | 409 | Email sudah terdaftar |
| `BUSINESS_ALREADY_EXISTS` | 409 | User sudah punya bisnis |
| `DAILY_QUOTA_EXCEEDED` | 429 | Kuota AI harian habis |
| `RATE_LIMIT_EXCEEDED` | 429 | Terlalu banyak request |
| `INTERNAL_ERROR` | 500 | Error server internal |
| `AI_SERVICE_ERROR` | 503 | Gemini API tidak tersedia |

### 17.2 Frontend Error Handling

* **Network error:** tampilkan toast "Gagal terhubung ke server. Periksa koneksi internet."
* **401 Unauthorized:** otomatis refresh token, jika gagal redirect ke login
* **404 Not Found:** tampilkan halaman 404
* **429 Rate Limited:** tampilkan pesan spesifik (kuota AI / terlalu banyak request)
* **500 Server Error:** tampilkan toast "Terjadi kesalahan. Silakan coba lagi."
* **Form validation error:** tampilkan error per field di bawah input

### 17.3 Backend Error Logging

* Semua error 500 dicatat ke log dengan stack trace
* Error 4xx dicatat sebagai warning
* Format log: `[timestamp] [level] [request_id] [user_id] [endpoint] [message]`

---

## 18. Frontend Architecture

### 18.1 State Management

| Layer | Teknologi | Fungsi |
|-------|-----------|--------|
| Server State | SWR atau React Query | Caching & fetching data dari API |
| Auth State | React Context | User session, token management |
| UI State | React useState/useReducer | Modal, form, local interactions |

### 18.2 Project Structure (Next.js App Router)

```text
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (main)/
│   │   ├── dashboard/page.tsx
│   │   ├── transactions/page.tsx
│   │   ├── inventory/page.tsx
│   │   ├── health/page.tsx
│   │   ├── alerts/page.tsx
│   │   ├── copilot/page.tsx
│   │   ├── settings/page.tsx
│   │   └── layout.tsx          ← sidebar + topbar
│   ├── onboarding/page.tsx
│   ├── page.tsx                ← landing page
│   └── layout.tsx              ← root layout
├── components/
│   ├── ui/                     ← shadcn/ui components
│   ├── charts/                 ← Recharts wrappers
│   ├── forms/                  ← form components
│   └── shared/                 ← shared components (Navbar, Sidebar, etc.)
├── lib/
│   ├── api.ts                  ← API client (axios instance)
│   ├── auth.ts                 ← auth helpers (token management)
│   └── utils.ts                ← utility functions (format currency, etc.)
├── hooks/
│   ├── useAuth.ts              ← auth hook
│   ├── useTransactions.ts      ← SWR hook for transactions
│   ├── useInventory.ts         ← SWR hook for inventory
│   ├── useHealthScore.ts       ← SWR hook for health score
│   └── useDashboard.ts         ← SWR hook for dashboard data
├── types/
│   └── index.ts                ← TypeScript type definitions
└── styles/
    └── globals.css             ← Tailwind base + custom styles
```

### 18.3 Backend Project Structure (FastAPI)

```text
app/
├── main.py                     ← FastAPI app initialization
├── config.py                   ← Environment config (Pydantic BaseSettings)
├── database.py                 ← Database connection & session
├── models/                     ← SQLAlchemy models
│   ├── user.py
│   ├── business.py
│   ├── transaction.py
│   ├── category.py
│   ├── inventory.py
│   ├── health_score.py
│   ├── alert.py
│   ├── ai_conversation.py
│   └── ai_message.py
├── schemas/                    ← Pydantic request/response schemas
│   ├── auth.py
│   ├── business.py
│   ├── transaction.py
│   ├── inventory.py
│   ├── health.py
│   ├── alert.py
│   └── copilot.py
├── routers/                    ← API route handlers
│   ├── auth.py
│   ├── business.py
│   ├── transactions.py
│   ├── inventory.py
│   ├── health.py
│   ├── alerts.py
│   ├── copilot.py
│   └── dashboard.py
├── services/                   ← Business logic
│   ├── auth_service.py
│   ├── business_service.py
│   ├── transaction_service.py
│   ├── inventory_service.py
│   ├── analytics_service.py
│   ├── alert_service.py
│   └── copilot_service.py
├── core/                       ← Core utilities
│   ├── security.py             ← JWT, hashing
│   ├── dependencies.py         ← FastAPI dependencies (get_current_user, etc.)
│   └── exceptions.py           ← Custom exception handlers
├── migrations/                 ← Alembic migrations
│   └── versions/
└── requirements.txt
```

### 18.4 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Desktop (primary) | ≥ 1280px | Layout utama |
| Tablet | ≥ 768px | Sidebar collapse, layout adjust |
| Mobile | < 768px | Tidak diprioritaskan untuk MVP, tapi tidak broken |

---

## 19. Workflow Pengguna

```text
┌──────────────┐
│   Landing    │ ← User baru mengunjungi website
│    Page      │
└──────┬───────┘
       ▼
┌──────────────┐     ┌──────────────┐
│   Register   │────▶│  Onboarding  │ ← Setup nama usaha, jenis, target
│              │     │  (3 steps)   │
└──────────────┘     └──────┬───────┘
                            ▼
┌──────────────────────────────────────────────────┐
│                   DASHBOARD                       │
│  Health Score | Summary Cards | Charts | Alerts  │
└───────┬──────────┬──────────┬──────────┬─────────┘
        ▼          ▼          ▼          ▼
   Transactions  Inventory  Health   AI Copilot
   (input data)  (kelola    (detail  (tanya
                  stok)     skor)    analisis)
```

**Loop Harian Pengguna:**

1. Login → buka Dashboard → lihat Health Score
2. Input transaksi hari ini (pemasukan & pengeluaran)
3. Cek alert jika ada peringatan baru
4. (Opsional) Tanya AI Copilot untuk insight
5. (Mingguan) Cek halaman Health untuk tren skor

---

## 20. Workflow Sistem

```text
┌─────────────────────────────────────────────────────────┐
│                      FRONTEND                           │
│  Next.js → SWR fetch → Render UI → User interaction     │
└────────────────────────┬────────────────────────────────┘
                         │ REST API (JSON)
                         │ Authorization: Bearer {JWT}
                         ▼
┌─────────────────────────────────────────────────────────┐
│                      BACKEND                            │
│                                                         │
│  Request ──▶ Router ──▶ Dependency (auth check)         │
│                              │                          │
│                              ▼                          │
│                         Service Layer                   │
│                              │                          │
│              ┌───────────────┼───────────────┐          │
│              ▼               ▼               ▼          │
│         Transaction     Analytics       AI Copilot      │
│          Service         Engine          Service         │
│              │               │               │          │
│              ▼               ▼               ▼          │
│         PostgreSQL      Health Score    Gemini API       │
│         (CRUD)          + Alert Rules   (external)      │
│                              │                          │
│                              ▼                          │
│                        Alert Service                    │
│                     (create/resolve)                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Trigger Flow:**

1. User input transaksi → `POST /transactions`
2. Backend menyimpan transaksi ke DB
3. Backend trigger `analytics_service.calculate_health_score()`
4. Backend trigger `alert_service.run_all_rules()`
5. Jika ada alert baru → simpan ke DB
6. Frontend re-fetch dashboard data (SWR revalidation)

---

## 21. Seed Data untuk Demo

Untuk demo kompetisi GEMASTIK, siapkan seed data berikut:

### Demo Business

* **Nama:** Toko Berkah Jaya
* **Jenis:** Retail / Toko
* **Skala:** Mikro
* **Target Omzet:** Rp 15.000.000/bulan
* **Target Laba:** Rp 5.000.000/bulan

### Demo Transactions (30 hari)

* ~60 transaksi pemasukan (penjualan harian Rp 300.000–800.000)
* ~25 transaksi pengeluaran (bahan baku, operasional, dll.)
* Total pemasukan: ~Rp 14.500.000
* Total pengeluaran: ~Rp 9.200.000
* Net profit: ~Rp 5.300.000
* Tren: minggu terakhir sedikit menurun (untuk trigger alert)

### Demo Inventory (10 produk)

| Produk | Stok | Min Stok | Status |
|--------|------|----------|--------|
| Beras 5kg | 15 | 5 | Normal |
| Minyak Goreng 1L | 3 | 5 | Kritis |
| Gula Pasir 1kg | 0 | 5 | Habis |
| Telur (butir) | 50 | 20 | Normal |
| Mie Instan (pack) | 100 | 30 | Normal |
| Sabun Cuci | 8 | 5 | Normal |
| Air Mineral (dus) | 4 | 5 | Kritis |
| Kopi Sachet | 200 | 50 | Normal |
| Rokok (pack) | 25 | 10 | Normal |
| Susu UHT | 2 | 5 | Kritis |

### Expected Demo Output

* **Health Score:** ~68 (Waspada) — karena ada stok bermasalah dan tren menurun
* **Active Alerts:** 3-4 alerts (stok habis, stok kritis, revenue decline)
* **AI Copilot:** bisa demo pertanyaan "Bagaimana kondisi bisnis saya?" dan dapat jawaban berbasis data

---

## 22. Prioritas Pengembangan Tim

### Orang 1 — Front-End Developer

**Minggu 1-2:**
* Setup Next.js + Tailwind + shadcn/ui
* Landing page
* Login / Register page
* Layout utama (Sidebar + Topbar)

**Minggu 3-4:**
* Dashboard page (dengan dummy data dulu)
* Transactions page + form + tabel
* Onboarding page

**Minggu 5-6:**
* Inventory page
* Business Health page
* Risk & Alerts page
* Integrasi API real (ganti dummy data)

**Minggu 7:**
* AI Copilot page (chat interface)
* Settings page

**Minggu 8:**
* Polish UI, responsive, bug fix, demo prep

---

### Orang 2 — Back-End Developer

**Minggu 1-2:**
* Setup FastAPI + SQLAlchemy + PostgreSQL
* Database migration (Alembic)
* Auth service (register, login, JWT)
* Business service (CRUD)

**Minggu 3-4:**
* Transaction service (CRUD, summary, trend)
* Inventory service (CRUD, stock adjustment)
* Category seed data

**Minggu 5-6:**
* Dashboard composite endpoint
* Rate limiting
* Error handling standard
* API testing

**Minggu 7:**
* Seed data script
* Deployment (Railway + Vercel)
* Environment config

**Minggu 8:**
* Bug fix, performance, demo prep

---

### Orang 3 — AI & Analytics Developer

**Minggu 1-2:**
* Riset formula Health Score
* Riset Early Warning rules
* Setup Gemini API
* Prototype prompt engineering

**Minggu 3-4:**
* Implementasi Analytics Engine (4 dimensi health score)
* Implementasi Health Score snapshot (daily cron)
* Unit test formula

**Minggu 5-6:**
* Implementasi Alert Service (11 rules)
* Implementasi AI Copilot Service
* System prompt + context injection
* Testing dengan berbagai skenario pertanyaan

**Minggu 7:**
* Fine-tune prompt untuk kualitas jawaban
* Edge case handling (data kosong, data sedikit)
* AI Copilot rate limiting

**Minggu 8:**
* Generate demo data, testing end-to-end, demo prep

---

## 23. Roadmap Pengembangan

```text
Minggu 1   ██░░░░░░░░░░░░░░  Setup & Foundation
Minggu 2   ████░░░░░░░░░░░░  Auth & Basic CRUD
Minggu 3   ██████░░░░░░░░░░  Transactions & Inventory
Minggu 4   ████████░░░░░░░░  Dashboard & Integration
Minggu 5   ██████████░░░░░░  Health Score & Analytics
Minggu 6   ████████████░░░░  EWS & AI Copilot
Minggu 7   ██████████████░░  Testing & Deployment
Minggu 8   ████████████████  Polish, Demo & Pitch
```

### Milestone Checkpoints

| Milestone | Minggu | Deliverable |
|-----------|--------|-------------|
| M1: Foundation | 2 | Auth works, DB ready, landing page done |
| M2: Core CRUD | 4 | Transaksi + inventaris bisa input/view |
| M3: Intelligence | 6 | Health score, alerts, AI Copilot berfungsi |
| M4: Production | 7 | Deployed, tested, seed data ready |
| M5: Demo Ready | 8 | Polished, pitch deck, demo script |

---

## 24. Kriteria Keberhasilan MVP

MVP dianggap berhasil jika:

### Fungsional

* ✅ Pengguna dapat register, login, dan logout
* ✅ Pengguna dapat setup profil usaha (onboarding)
* ✅ Pengguna dapat input transaksi pemasukan dan pengeluaran
* ✅ Pengguna dapat mengelola inventaris (CRUD + stock adjustment)
* ✅ Sistem menghasilkan health score (0-100) dengan 4 dimensi
* ✅ Sistem mengeluarkan alert risiko berdasarkan 11 rules
* ✅ AI Copilot dapat menjawab pertanyaan bisnis berdasarkan data nyata
* ✅ Dashboard menampilkan ringkasan komprehensif

### Non-Fungsional

* ✅ Response time API < 500ms (kecuali AI Copilot)
* ✅ AI Copilot response < 5 detik
* ✅ Tidak ada error 500 saat demo
* ✅ UI terlihat profesional dan layak untuk kompetisi
* ✅ Deployed dan bisa diakses via URL publik

### Demo

* ✅ Seed data sudah terisi dan menampilkan skenario realistis
* ✅ Demo script berjalan lancar (login → dashboard → transaksi → AI → insight)
* ✅ Pitch deck siap

---

## 25. Catatan Produk

UsahaKu+ harus diposisikan sebagai produk yang:

* **Sederhana dipakai** — UMKM bisa mulai dalam 5 menit
* **Cepat memberi insight** — bukan hanya data, tapi analisis + rekomendasi
* **Fokus pada pencegahan** — early warning, bukan post-mortem
* **AI-powered tapi practical** — AI menjelaskan, bukan menggantikan keputusan
* **Berkembang** — dari MVP kompetisi menjadi SaaS B2B untuk UMKM Indonesia

### Diferensiasi dari Kompetitor

| Aspek | Pencatatan Biasa (BukuKas, dll.) | UsahaKu+ |
|-------|----------------------------------|-----------|
| Catat transaksi | ✅ | ✅ |
| Laporan keuangan | ✅ Dasar | ✅ Dengan analisis |
| Health Score | ❌ | ✅ 4 dimensi |
| Early Warning | ❌ | ✅ 11 rules |
| AI Copilot | ❌ | ✅ Konsultan virtual |
| Rekomendasi aksi | ❌ | ✅ Actionable |

---

> **Dokumen ini siap digunakan sebagai panduan implementasi. Setiap developer dalam tim dapat langsung mulai berdasarkan spesifikasi di atas.**
