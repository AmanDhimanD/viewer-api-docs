
const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");

// Replace 'YOUR_CLOUD_NAME', 'YOUR_API_KEY', and 'YOUR_API_SECRET' with your Cloudinary credentials
cloudinary.config({
  cloud_name: "dwhyghwrs",
  api_key: "947966685595116",
  api_secret: "YAnmIjuIHtOzEaYQmwmy9R3JonU",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

// Route to handle image upload
app.post("/upload", (req, res) => {
  if (!req.files || !req.files.photo) {
    return res.status(400).json({ error: 'No image file provided.' });
  }

  const photo = req.files.photo;

  cloudinary.uploader.upload(photo.tempFilePath, (err, result) => {
    if (err) {
      console.error("Error uploading image:", err);
      return res.status(500).json({ error: 'Failed to upload the image.' });
    }

    const imageUrl = result.secure_url;
    return res.status(200).json({ imageUrl });
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

                            
