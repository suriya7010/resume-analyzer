const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const analyzeResume = require("./utils/analyzer");

const app = express();
app.use(cors());

// upload config
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    const filePath = req.file.path;

    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);

    // 👉 AI Analysis (basic)
    const result = analyzeResume(data.text);

    res.json({
      message: "Analysis Complete ✅",
      data: result
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Processing failed ❌" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});