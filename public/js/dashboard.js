const newName = (event) => {
  event.preventDefault();
  const name = document.querySelector("#newPokehomeName").value;
  const description = document.querySelector("#newPokehomeDescription").value;
  console.log(name, description);
  createZoo(name, description);
};

const createZoo = async (name, description) => {
  console.log(description);
  req = `[{"name": "${name}", "description" : "${description}"}]`;
  const response = await fetch("/api/dashboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: req,
  });
  if (response.ok) {
    const res = async (response) => {
      const data = await response.json();
      console.log(data);
      console.log(data.id);
      const id = data.id;
      document.location.assign("/api/builder/" + id);
    };
    res(response);
  } else {
    alert(response.statusText);
  }
};

const pokehomecards = document.querySelectorAll(".pokehomecard");

pokehomecards.forEach(function (pokehomecard) {
  pokehomecard.addEventListener("click", function (event) {
    event.preventDefault();
    const zooName = pokehomecard.querySelector("#title").innerText;
    console.log(zooName);
  });
});

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#createbtn").addEventListener("click", newName);
document.querySelector("#logoutbtn").addEventListener("click", logout);
