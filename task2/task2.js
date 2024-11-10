const fs = require("fs/promises");

const arr = process.argv;

async function main() {
  let cars = [];

  const fileContent = await fs.readFile("cars.json", "utf-8").catch(() => "[]");

  if (fileContent) {
    cars = JSON.parse(fileContent);
  }

  const car = {
    id: cars.length + 1,
    carModel: arr[2],
    carReleaseDate: arr[3],
    carColor: arr[4],
  };

  cars.push(car);

  await fs.writeFile("cars.json", JSON.stringify(cars));
  console.log(car);
}

main();
