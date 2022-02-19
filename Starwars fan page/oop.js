const results = document.querySelector("#results");

async function asyncFetch(value) {
  const res = await fetch(`https://www.swapi.tech/api/${value}/`);
  const data = await res.json();
  displayResults(data, value);
}

function displayResults(data, value) {
  let output = "";
  console.log(data);
  if (value === "films") {
    data.results.forEach((item) => {
      localStorage.setItem("Films",  item.results.title);
    });
  }

  if (value === "people") {
    data.results.forEach((item) => {
        localStorage.setItem("people",  item.name);
    });
  }

  if (value === "vehicles") {
    data.results.forEach((item) => {
        localStorage.setItem("vehicles",  item.name);
    });
  }
  
}

//Event listener for buttons
document.querySelector("#buttons").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});
