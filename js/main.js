const dataUrl = `../data.json`;

async function fetchText() {
  let response = await fetch(dataUrl);
  let data = await response.text();
  console.log(data);
}

fetchText();
