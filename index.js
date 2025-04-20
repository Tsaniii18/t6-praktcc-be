import express from "express";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

// Endpoint root dengan format teks sederhana
app.get('/', (req, res) => {
  res.send(`
    🚀 Backend is running!

    Available Endpoints:
    - GET     /note          -> Ambil semua catatan
    - GET     /note/:id      -> Ambil catatan berdasarkan ID
    - POST    /note          -> Buat catatan baru
    - PATCH   /note/:id      -> Perbarui catatan berdasarkan ID
    - DELETE  /note/:id      -> Hapus catatan berdasarkan ID
  `);
});

app.listen(5000, '0.0.0.0', () => console.log('Server up and running....'));
