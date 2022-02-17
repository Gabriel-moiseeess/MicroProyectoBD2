
const results = document.querySelector('#results');

async function asyncFetch(value) {
    
    const res = await fetch(`https://www.swapi.tech/api/${value}/`);
    const data = await res.json();
    displayResults(data, value);
}

 function displayResults(data, value){

    let output = "";
    console.log(data);
    if (value === 'films') {
        data.results.forEach(item => {
           output +=    
           `<div class="card p-3 m-3" style =" opacity:.8">
               <h4 class="card-title text-center">${item.result.title}</h4>
           </div>`
        });

    }

    if (value === 'people') {
        data.results.forEach(item => {
           output += 
           `<div class="card p-3 m-3" style =" opacity:.8">
               <h4 class="card-title text-center">${item.name}</h4>
           </div>`
        });

    }

        if (value === 'vehicles') {
            data.results.forEach(item => {
               output += 
               `<div class="card p-3 m-3" style =" opacity:.8">
                   <h4 class="card-title text-center">${item.name}</h4>
               </div>`
            });

    }
    results.innerHTML = output;
}

//Event listener for buttons
document.querySelector('#buttons').addEventListener('click', e=>{
    asyncFetch(e.target.textContent.trim().toLowerCase());
});