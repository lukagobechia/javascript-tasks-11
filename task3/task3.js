const fs = require("fs/promises");

async function countVovles() {
  try {
    await fs.writeFile("text.txt", "Hello I am Luka", "utf-8");
    const text = await fs.readFile("text.txt", "utf-8");
    const vowelsCount = text.match(/[aeiou]/gi)?.length || 0
    console.log(vowelsCount);
  } catch (e) {
    console.log(e, "Error");
  }
}
countVovles();
