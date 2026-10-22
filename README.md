# Hijrah Coach — website

Astro static site, Bahasa Indonesia. Dev server: `hijrahcoach-website` (port 4325, `~/dev/.claude/launch.json`).

- **Konten**: semua teks di `src/data/site.ts` (sumber: *Hijrah Coach Profile 221026* dan tabel *Benefit of Associate Business Coach Program*).
- **Desain**: look & feel mengikuti referensi "Evora Style" (cream, abu, hitam + emas; wordmark raksasa dengan figur cut-out, strip kategori hitam, banner editorial membulat, grid ala produk). Warna & font dari *Hijrah Brand Manual*: Black `#414042`, Gold `#BB956E`, Abhaya Libre (pengganti Zahrah) + Mulish (pengganti Muli). Token di `src/styles/global.css`.
- **Foto**: `src/assets/photos/` = 19 foto kiriman Coach Daru (22 Okt 2026) + foto dari website Coach Daru. Ditampilkan monokrom hangat (`.mono`) agar backdrop acara yang warna-warni menyatu; warna asli muncul saat hover.
- **Hero cut-out**: `hero-daru.png` dipotong otomatis (macOS Vision) dari `daru-speaking.jpg`, lalu dibuat hitam-putih. Skrip ulang: `node scripts/prepare-assets.mjs <scratch> <dropbox-logo-dir> <project>`.
- **Logo**: horizontal Gold/White dari Dropbox `Logo & Design/*Hijrah Logos*/*Logo Files` (1998px, tajam).
- **Review screenshot**: tambahkan `?static` pada URL untuk menampilkan semua section tanpa animasi.

## Halaman
`/` · `/associate-business-coach` · `/sertifikasi` · `/beasiswa-ahc` · `/group` · `/kontak` · menu **Master Coach** → coachdaru.belajaragile.com

## Checklist go-live
- [ ] Testimoni associate coach & alumni AHC (menyusul dari Coach Daru)
- [ ] Domain & hosting (kandidat hijrahcoach.co.id) — belum di-deploy ke mana pun
- [ ] Konfirmasi daftar kota AHC: compro menulis "9 Cities" tapi mencantumkan 10 nama kota
- [ ] Konfirmasi akreditasi PBHC (compro: "design by Hijrah Coach, accredited by MyBrain International" — posisi kalimat ambigu; saat ini ditulis "Didesain oleh Hijrah Coach")
- [ ] Mitra AHC (HSI AbdullahRoy, International Open University terlihat di backdrop foto) — tampilkan logo bila diizinkan
- [ ] Link MyBrain diganti ke mybrain.id setelah domain aktif
