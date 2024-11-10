const fs = require('fs/promises')

async function parseData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const parsedData = data.map((i) => ({
      id: i.id,
      name: i.name,
      username: i.username,
      email: i.email,
    }));
    await fs.writeFile('users.json', JSON.stringify(parsedData))
  } catch (e) {
    console.log(e, "Error");
  }
}
parseData();
