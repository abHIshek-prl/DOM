const btn = document.getElementById("click");
let count = 0;
btn.addEventListener("click", function abc() {
    count++;
    if (count == 1) {
        btn.style.backgroundColor = "red";
        btn.style.border = "0";
    }
    else{
        btn.style.backgroundColor = "blue";
        btn.style.border = "0";
    }
});
