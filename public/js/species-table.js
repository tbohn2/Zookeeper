const images = [
  document.querySelector("#slot1"),
  document.querySelector("#slot2"),
  document.querySelector("#slot3"),
  document.querySelector("#slot4"),
  document.querySelector("#slot5"),
  document.querySelector("#slot6"),
];

let speciesSlot = [1, 2, 3, 4, 5, 6];
updateImages();
function nextSpecies() {
  speciesSlot = speciesSlot.map((speciesNumber) => {
    speciesNumber += 6;
    if (speciesNumber > 151) {
      speciesNumber %= 151;
    }
    return speciesNumber;
  });
  updateImages();
}
function prevSpecies() {
  speciesSlot = speciesSlot.map((speciesNumber) => {
    speciesNumber -= 6;
    if (speciesNumber < 1) {
      speciesNumber += 151;
    }
    return speciesNumber;
  });
  updateImages();
}
function updateImages() {
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute(
      "src",
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${speciesSlot[i]}.png`
    );
  }
}

const createNewPokemon = async (event) => {
  const button = event.target;
  const name = document.querySelector("#pokemonName").value;
  if (button.className !== "species" || name === "") return;
  const image = button.getAttribute("src");
  let num = image.split("/");
  num = num[num.length - 1].split(".")[0];
  let newPokemon = {
    name: name,
    species_id: num,
    pokehome_id: home_id,
  };
  const response = await fetch("/api/pokemon", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPokemon),
  });
  if (response.ok) {
    document.location.reload();
  } else {
  }
};

document.querySelector("#prev").addEventListener("click", prevSpecies);
document.querySelector("#next").addEventListener("click", nextSpecies);
document
  .querySelector("#table-row")
  .addEventListener("click", createNewPokemon);
