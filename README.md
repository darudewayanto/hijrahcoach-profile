# Hijrah Coach — website

Astro static site, Bahasa Indonesia. Dev server: `hijrahcoach-website` (port 4325, `~/dev/.claude/launch.json`).

- **Konten**: semua teks di `src/data/site.ts` (sumber: *Hijrah Coach Profile 221026* dan tabel *Benefit of Associate Business Coach Program*).
- **Desain**: look & feel mengikuti referensi "Evora Style" (cream, abu, hitam + emas; wordmark raksasa dengan figur cut-out, strip kategori hitam, banner editorial membulat, grid ala produk). Warna & font dari *Hijrah Brand Manual*: Black `#414042`, Gold `#BB956E`, Abhaya Libre (pengganti Zahrah) + Mulish (pengganti Muli). Token di `src/styles/global.css`.
- **Foto**: `src/assets/photos/` = 19 foto kiriman Coach Daru (22 Okt 2026) + foto dari website Coach Daru. Ditampilkan monokrom hangat (`.mono`) agar backdrop acara yang warna-warni menyatu; warna asli muncul saat hover.
- **Hero cut-out**: `hero-daru-lean.png` = foto cut-out kiriman Coach Daru (22 Okt 2026, pose bersandar), aslinya hanya 326×623 px → diperbesar 2,5× (lanczos + sharpen) dan dibuat hitam-putih. Minta file resolusi asli agar lebih tajam.
- **Logo**: horizontal Gold/White dari Dropbox `Logo & Design/*Hijrah Logos*/*Logo Files` (1998px, tajam).
- **Review screenshot**: tambahkan `?static` pada URL untuk menampilkan semua section tanpa animasi.

## Halaman
`/` · `/associate-business-coach` · `/sertifikasi` · `/beasiswa-ahc` · `/group` · `/kontak` · menu **Master Coach** → coachdaru.belajaragile.com

## Tayang sementara (GitHub Pages)
`.github/workflows/deploy.yml` → repo publik `darudewayanto/hijrahcoach-profile` (noindex), live di https://darudewayanto.github.io/hijrahcoach-profile/ — push ke main = auto deploy.

**LIVE di https://hijrahcoach.belajaragile.com (27 Okt 2026):** situs Firebase `hijrahcoach-belajaragile` (project hade-community). Deploy: `npm run deploy:firebase` — TIDAK otomatis dari git push (push hanya update GitHub Pages).

## Checklist go-live
- [ ] Testimoni associate coach & alumni AHC (menyusul dari Coach Daru)
- [ ] Domain & hosting (kandidat hijrahcoach.co.id) — sementara di GitHub Pages (noindex)
- [x] AHC: 8 chapter, 13 kota (+Madinah, Sumedang, Cianjur), 30 batch — konfirmasi Coach Daru 23 Okt 2026
- [ ] Konfirmasi akreditasi PBHC (compro: "design by Hijrah Coach, accredited by MyBrain International" — posisi kalimat ambigu; saat ini ditulis "Didesain oleh Hijrah Coach")
- [x] Logo 8 chapter AHC tampil (dari Dropbox *AHC/Chapter, termasuk HSI AbdullahRoy)
- [ ] Link MyBrain diganti ke mybrain.id setelah domain aktif
