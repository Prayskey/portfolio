import fs from "fs";
import path from "path";
import sharp from "sharp";

const dirs = ["src/assets", "src/assets/img"];

for (const dir of dirs) {
  for (const file of fs.readdirSync(dir)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;

    const input = path.join(dir, file);
    const output = path.join(dir, file.replace(/\.(png|jpe?g)$/i, ".webp"));

    await sharp(input)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(output);

    const before = (fs.statSync(input).size / 1024).toFixed(0);
    const after = (fs.statSync(output).size / 1024).toFixed(0);
    console.log(`${input}: ${before}KB → ${after}KB`);
  }
}
