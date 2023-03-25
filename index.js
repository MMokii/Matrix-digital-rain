const canvas = document.getElementById("Matrix Digital Rain");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const brojevi = "0123456789";

const velicinaBrojeva = 40;
const col = canvas.width / velicinaBrojeva;

const pBrojevi = [];

x = 0;
function rekurzija(col, x) {
  pBrojevi[x] = 0;
  if (col == 0) {
    return 0;
  }
  return rekurzija(col - 1, x + 1);
}
rekurzija(col, x);

function nacrtaj() {
  context.fillStyle = "rgba(0, 0, 0, 0.05)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#7CFC00";
  context.font = velicinaBrojeva + "px arial";

  i = 0;
  function rekurzija2(varijabla, i) {
    const text = brojevi.charAt(Math.floor(Math.random() * brojevi.length));
    context.fillText(text, i * velicinaBrojeva, pBrojevi[i] * velicinaBrojeva);

    if (
      pBrojevi[i] * velicinaBrojeva > canvas.height &&
      Math.random() > 0.975
    ) {
      pBrojevi[i] = 0;
    }
    pBrojevi[i]++;
    return rekurzija2(varijabla, i + 1);
  }
  rekurzija2(pBrojevi.length, i);
}

setInterval(nacrtaj, 30);
