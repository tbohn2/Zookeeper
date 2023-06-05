const imageButton = document.querySelector("#image-create");
const url = window.location.href.split("/");
const home_id = url[url.length - 1];
const createImage = async () => {
  const response = await fetch("/api/downloads/" + home_id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  document.location.assign("/downloads/image.png");
};
imageButton.addEventListener("click", createImage);
