const fs = require("fs");
const path = require("path");

function generateSlug(length = 8) {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let slug = "";
  for (let i = 0; i < length; i++) {
    slug += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return slug;
}

const filename = `${generateSlug()}_blog-name.mdx`;

const filepath = path.join(__dirname, filename);

fs.writeFileSync(filepath, "", { flag: "wx" });

console.log(`File created: ${filename}`);
