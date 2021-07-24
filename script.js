const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const span = document.querySelector(".text h2 span");
const img = document.querySelector(".img");

color1.addEventListener("click", () => {
    span.style.color = "var(--btn-1-color)";
    img.style.backgroundColor = "var(--img-1-color)";
});

color2.addEventListener("click", () => {
    span.style.color = "var(--btn-2-color)";
    img.style.backgroundColor = "var(--img-2-color)";
});
color3.addEventListener("click", () => {
    span.style.color = "var(--btn-3-color)";
    img.style.backgroundColor = "var(--img-3-color)";
});
color4.addEventListener("click", () => {
    span.style.color = "var(--btn-4-color)";
    img.style.backgroundColor = "var(--img-4-color)";
});
