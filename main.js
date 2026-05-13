// variable declaron
const u, p
u = "Adr1!"
p = "69822"

let upernameInput = document.getElementById("upername").value;
let paswordInput = document.getElementById("pasword").value;
let fb = document.getElementById("feedback");

    if (u === upernameInput && p === paswordInput) {
    fb.innerHTML = "Welcome!!!";
    fb.style.color = "green";

    }else (u === upernameInput && p === paswordInput) {
        fb.innerHTML = "Not Welcome!";
        fb.style.color = "red"; 
}
