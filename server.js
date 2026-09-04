const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Sirve todos los archivos de tu carpeta actual (index.html, css, js, img)
app.use(express.static(__dirname));

// Carpeta donde se guardarán las fotos permanentemente
const uploadDir = path.join(__dirname, 'img', 'galeria');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración para recibir y guardar los archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '-'));
  }
});
const upload = multer({ storage });

// API: Subir fotos
app.post('/api/upload', upload.array('fotos'), (req, res) => {
  res.json({ message: 'Fotos guardadas exitosamente' });
});

// API: Leer fotos
app.get('/api/fotos', (req, res) => {
  if (!fs.existsSync(uploadDir)) return res.json([]);
  const files = fs.readdirSync(uploadDir);
  res.json(files);
});

// API: Eliminar fotos
app.delete('/api/fotos/:name', (req, res) => {
  const filePath = path.join(uploadDir, req.params.name);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.json({ message: 'Foto eliminada' });
  } else {
    res.status(404).json({ error: 'Foto no encontrada' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor activo. Entra a: http://localhost:${PORT}`);
});
