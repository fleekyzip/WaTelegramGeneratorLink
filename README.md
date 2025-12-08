# Wa-TelegramGeneratorLink

Proyek sederhana berbasis web untuk mempermudah pembuatan tautan (link) cepat ke **WhatsApp** dan **Telegram** yang sudah dilengkapi dengan nomor tujuan dan pesan yang telah dikustomisasi.

[![Deploy with Vercel](https://vercel.com/button)](https://wa-telegram-generator-link.vercel.app/)

Anda dapat mencoba versi demo aplikasi ini secara langsung di sini: [Demo Langsung Aplikasi](https://wa-telegram-generator-link.vercel.app/)

<br>

## ⚙️ Fitur Utama

Aplikasi ini menawarkan kemudahan dalam menghasilkan tautan instan tanpa perlu mengingat format URL tertentu.

* **Generator Tautan WhatsApp:** Membuat tautan `wa.me/` yang dapat langsung diklik, opsional dengan pesan yang sudah terisi (`text=`).
* **Generator Tautan Telegram:** Membuat tautan `t.me/` atau `telegram.me/` berdasarkan username.
* **Dukungan Kode Negara (Country Code):** Integrasi data negara (`countries.json`) untuk memudahkan penambahan kode telepon internasional pada tautan WhatsApp.
* **Antarmuka Pengguna yang Bersih:** Dibuat menggunakan HTML, CSS, dan JavaScript murni.

<br>

## 🛠️ Teknologi yang Digunakan

Proyek ini adalah aplikasi web statis *pure frontend* dan tidak memerlukan *server side* (backend) untuk dijalankan.

* **HTML5:** Untuk struktur dasar antarmuka pengguna.
* **CSS3:** Untuk styling dan tata letak aplikasi.
* **JavaScript (Vanilla JS):** Untuk fungsionalitas utama logika generator tautan.
* **`choices.js`:** Digunakan untuk *styling* dan fungsionalitas dropdown (misalnya, pemilihan kode negara).

<br>

## 🔑 Prasyarat Instalasi

Anda hanya memerlukan peramban web modern untuk menjalankan aplikasi ini. Untuk modifikasi atau pengembangan lokal, Anda membutuhkan:

1.  **Git:** Untuk mengkloning repositori.
2.  **Peramban Web (Browser):** Chrome, Firefox, Edge, atau Safari.
3.  **Code Editor:** VS Code, Sublime Text, atau lainnya.

<br>

## 🚀 Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan proyek secara lokal:

1.  **Kloning Repositori:**
    ```bash
    git clone [https://github.com/fleekyzip/WaTelegramGeneratorLink.git](https://github.com/fleekyzip/WaTelegramGeneratorLink.git)
    ```

2.  **Masuk ke Direktori Proyek:**
    ```bash
    cd WaTelegramGeneratorLink
    ```

3.  **Jalankan Aplikasi:**
    Buka file `index.html` langsung di peramban web Anda.

    ```bash
    # (Opsional) Jika Anda ingin menggunakan server lokal:
    # Buka index.html melalui server lokal (misalnya, Live Server di VS Code)
    ```

<br>

## 📂 Susunan Project

Struktur utama proyek ini terdiri dari file-file berikut:
```
WaTelegramGeneratorLink/
├── .gitattributes
├── index.html # File utama (Antarmuka Pengguna).
├── script.js # Logika JavaScript untuk generator tautan.
├── style.css # Styling kustom untuk aplikasi.
├── choices.css # Styling tambahan untuk komponen dropdown.
└── countries.json # Data JSON yang berisi daftar kode negara.
```
<br>

## 💡 Contoh Penggunaan

Setelah Anda membuka `index.html` di peramban Anda, ikuti langkah-langkah ini:

1.  **Pilih Tipe Tautan:** Pilih antara **WhatsApp** atau **Telegram**.
2.  **Masukkan Detail:**
    * **Untuk WhatsApp:** Pilih Kode Negara, masukkan Nomor Telepon, dan tulis Pesan (opsional).
    * **Untuk Telegram:** Masukkan Username Telegram (tanpa simbol `@`).
3.  **Hasilkan Tautan:** Setelah semua data terisi, tautan akan otomatis dihasilkan dan ditampilkan di area hasil.
4.  **Salin dan Bagikan:** Anda dapat menyalin tautan yang dihasilkan dan membagikannya ke mana saja.

<br>

## 🤝 Kontribusi

Kontribusi sangat dihargai! Jika Anda memiliki ide untuk fitur baru, perbaikan *bug*, atau peningkatan kode, silakan ikuti langkah-langkah berikut:

1.  *Fork* repositori ini.
2.  Buat cabang baru untuk fitur Anda (`git checkout -b feature/nama-fitur-baru`).
3.  Lakukan *commit* perubahan Anda (`git commit -m 'feat: Tambahkan fitur baru X'`).
4.  *Push* ke cabang Anda (`git push origin feature/nama-fitur-baru`).
5.  Buka *Pull Request* baru.

<br>

## 📜 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**. Lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.
