document.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.style.background = window.scrollY > 50 
    ? "rgba(0,0,0,0.8)" 
    : "rgba(0,0,0,0.3)";
});
