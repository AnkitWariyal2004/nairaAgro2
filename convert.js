const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const folder = "D:/parvati-and-sons/naira-agro/nairaagro/public/Gallary/Farm_Life";

fs.readdirSync(folder).forEach((file) => {
  if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    const inputPath = path.join(folder, file);
    const outputPath = path.join(
      folder,
      file.replace(/\.(jpg|jpeg)$/i, ".webp")
    );

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        fs.unlinkSync(inputPath); // original jpg delete
        console.log("Converted and deleted:", file);
      })
      .catch((err) => console.error(err));
  }
});