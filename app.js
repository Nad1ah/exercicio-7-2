const bodyNode = document.querySelector("body");
const dropzoneNode = document.querySelector("#dropzone");

dropzoneNode.addEventListener("dragenter", () => {
  dropzoneNode.style.borderColor = "red";
});

dropzoneNode.addEventListener("dragleave", () => {
  dropzoneNode.style.borderColor = "black";
});

dropzoneNode.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropzoneNode.addEventListener("drop", (event) => {
  event.preventDefault();

  const file = event.dataTransfer.files.item(0);

  if (file.type.startsWith("text")) {
    processText(file);
  } else if (file.type.startsWith("image")) {
    processImage(file);
  } else {
    alert("Erro, não consigo processar esse ficheiro!");
  }
});

function processText(file) {
  const reader = new FileReader();

  reader.readAsText(file);

  reader.addEventListener("load", () => {
    const text = reader.result;

    const textNode = document.createElement("div");
    textNode.textContent = text;

    bodyNode.appendChild(textNode);
  });
}

function processImage(file) {
  const reader = new FileReader();

  reader.readAsDataURL(file);

  reader.addEventListener("load", () => {
    const image = reader.result;

    const imgNode = document.createElement("img");
    imgNode.src = image;

    bodyNode.appendChild(imgNode);
  });
}
