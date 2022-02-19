const results = document.querySelector("#results");

async function asyncFetch(value) {
  const res = await fetch(`https://www.swapi.tech/api/${value}/`);
  const data = await res.json();
  displayResults(data, value);
}

function displayResults(data, value) {
  let output = "";
  if (value === "films") {
    localStorage.setItem("films", JSON.stringify(data.result));
    var films = localStorage.getItem("films");
    var films_parse = JSON.parse(films);
    films_parse.forEach((item) => {
      output += `<div class="card p-3 m-3" style =" opacity:.8">
          <h4 class="card-title text-center">${item.properties.title}</h4>
      </div>`;
    });
  }

  if (value === "people") {
    localStorage.setItem("people", JSON.stringify(data.results));
    var people = localStorage.getItem("people");
    var people_parse = JSON.parse(people);
    people_parse.forEach((item) => {
      output += `<div class="card p-3 m-3" style =" opacity:.8">
          <h4 class="card-title text-center">${item.name}</h4>
      </div>`;
    });
  }

  if (value === "vehicles") {
    localStorage.setItem("vehicles", JSON.stringify(data.results));
    var vehicles = localStorage.getItem("vehicles");
    var vehicles_parse = JSON.parse(vehicles);
    vehicles_parse.forEach((item) => {
      output += `<div class="card p-3 m-3" style =" opacity:.8">
          <h4 class="card-title text-center">${item.name}</h4>
      </div>`;
    });
  }
  results.innerHTML = output;
}

//Event listener for buttons
document.querySelector("#buttons").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
});
