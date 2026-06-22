const express = require('express');
const path = require('path');

const app = express();

// ===== PORT AMAN (bisa pakai 3000 atau otomatis pindah) =====
const PORT = process.env.PORT || 3000;

// ===== SET FOLDER PUBLIC =====
app.use(express.static(path.join(__dirname, 'public')));

// ===== ROUTE UTAMA =====
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== HANDLE ERROR HALAMAN TIDAK DITEMUKAN =====
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== JALANKAN SERVER =====
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});