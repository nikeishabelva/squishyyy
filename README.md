# Squishyy — Squishy Shop

Website toko squishy dengan tema pink & putih, dibuat untuk langsung di-upload ke GitHub Pages.

## Fitur
- Desain responsive pink & cute
- Filter produk (Semua / Kecil / Besar)
- Keranjang belanja + checkout via WhatsApp
- **Support Open Graph (og:image)** → thumbnail otomatis muncul saat dibagikan ke WhatsApp, Instagram, Facebook, Twitter/X, dll.

## Isi file
- `index.html` — struktur website + meta Open Graph & Twitter Card
- `style.css` — desain responsive
- `script.js` — filter produk, keranjang, dan checkout WhatsApp
- `og-image.png` — gambar thumbnail 1200×630 untuk share (WA / sosmed)

## Cara upload ke GitHub Pages
1. Buka repository kamu di GitHub.
2. Upload **semua file** di folder ini (index.html, style.css, script.js, og-image.png, README.md).
3. Pastikan file `og-image.png` ada di root repository (sama level dengan index.html).
4. Buka **Settings → Pages**.
5. Source pilih branch `main` (atau branch yang kamu pakai).
6. Simpan dan tunggu beberapa menit sampai GitHub Pages aktif.

## Cek thumbnail
Setelah live, test link-mu di:
- https://www.opengraph.xyz/
- https://developers.facebook.com/tools/debug/
- Atau langsung share ke WhatsApp / Telegram

Link website: https://nikeishabelva.github.io/squishyyy/

## Catatan
Checkout WhatsApp menggunakan link umum `wa.me`.  
Ganti bagian `https://wa.me/?text=` di `script.js` dengan nomor WhatsApp toko jika ingin langsung menuju nomor tertentu, contoh:

```js
window.open("https://wa.me/62812XXXXXXX?text=" + encodeURIComponent("Halo Squishyy! Aku mau order: " + text), "_blank");
```
