const a = document.getElementById("inc");
const b = document.getElementById("re");
const c = document.getElementById("dec");
const d = document.getElementById("para");

let count = 0;

a.addEventListener("click", function () {
  let x=count++;
  d.innerHTML = x;
});

b.addEventListener("click", function () {
  let y=count = 0;
  d.innerHTML = y;
});

c.addEventListener("click", function () {
  let z=count--;
  d.innerHTML = z;
});
