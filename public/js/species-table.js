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
document.querySelector("#prev").addEventListener("click", prevSpecies);
document.querySelector("#next").addEventListener("click", nextSpecies);
