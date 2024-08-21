function handleGengar() {
    const pokemon = "https://pokeapi.co/api/v2/pokemon/druddigon"

    fetch(pokemon)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("container").innerHTML = 

        `<div style="display: flex; 
                    flex-direction: column; 
                    align-items: center; 
                    justify-content: center;
                    border: 1px solid black">
            <p>${data.name}</p>
            <img src=${data.sprites.front_default} alt="gengar img">
        </div>`
    })
    .catch((error) => console.error("Pokemon não encontrado", error))
}

handleGengar()