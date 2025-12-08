# WaTelegramGeneratorLink

Proyek sederhana berbasis web untuk mempermudah pembuatan tautan (link) cepat ke **WhatsApp** dan **Telegram** yang sudah dilengkapi dengan nomor tujuan.

![Netlify Status](https://api.netlify.com/api/v1/badges/82309c58-4700-42d8-91ab-c58dc20b3eb2/deploy-status)

Anda dapat mencoba versi demo aplikasi ini secara langsung di sini: [Demo Langsung Aplikasi](wa-telegram-generator.netlify.app)

<br>

## ⚙️ Fitur Utama

Aplikasi ini menawarkan kemudahan dalam menghasilkan tautan instan tanpa perlu mengingat format URL tertentu.

* **Generator Tautan WhatsApp:** Membuat tautan `wa.me/` disertai nomor tujuan yang dapat langsung diklik
* **Generator Tautan Telegram:** Membuat tautan `t.me/` disertai nomor tujuan yang dapat langsung diklik
* **Dukungan Kode Negara (Country Code):** Integrasi data negara (`countries.json`) untuk memudahkan penambahan kode telepon internasional pada tautan WhatsApp.
* **Antarmuka Pengguna yang Bersih:** Dibuat menggunakan HTML, CSS, dan JavaScript murni.

<br>

## 🛠️ Teknologi yang Digunakan

Proyek ini adalah aplikasi web statis *pure frontend* dan tidak memerlukan *server side* (backend) untuk dijalankan.

* **HTML5:** Untuk struktur dasar antarmuka pengguna.
* **CSS3:** Untuk styling dan tata letak aplikasi.
* **JavaScript (Vanilla JS):** Untuk fungsionalitas utama logika generator tautan.
* **[Choise.js:](https://github.com/Choices-js/Choices)** Digunakan untuk *styling* dan fungsionalitas dropdown (misalnya, pemilihan kode negara).  

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

1.  **Masukkan Detail:** Pilih Kode Negara dan masukkan Nomor Telepon.  
2.  **Hasilkan Tautan:** Setelah semua data terisi, tekan tombol **Generate Link** maka tautan akan otomatis dihasilkan dan ditampilkan di area hasil.
3.  **Pilih Tipe Tautan:** Pilih antara **WhatsApp** atau **Telegram**.


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
