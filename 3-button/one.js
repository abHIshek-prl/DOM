const yes=document.getElementById("click1")
const no=document.getElementById("click2")
const maybe=document.getElementById("click3")


yes.addEventListener("click" ,function one() {
    yes.style.backgroundColor = "green";
  });
no.addEventListener("click" ,function two() {
    no.style.backgroundColor = "red";
  });;
maybe.addEventListener("click" ,function three() {
    maybe.style.backgroundColor = "red";
  });