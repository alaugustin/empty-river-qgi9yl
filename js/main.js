const dataUrl = `../data.json`;

async function fetchCardData() {
  let response = await fetch(dataUrl);
  let data = await response.text();
  console.log(data);
}

fetchCardData();
