const toggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const favicon = document.getElementById("favicon");
const logo = document.getElementById("logo");
const icon = document.getElementById("theme-icon");

toggle.addEventListener("click",() => {
   const isLight = html.getAttribute("data-theme") === "light"; 

   if(isLight){
        html.removeAttribute("data-theme");
        favicon.href = "static/assets/Favicon2.svg";
        logo.src = "static/assets/Logo-branco.png";
        icon.src = "static/assets/Property 1=Light.png";

   } else{
        html.setAttribute("data-theme","light");
        favicon.href = "static/assets/Favicon1.svg";
        logo.src = "static/assets/Logo.png";
        icon.src = "static/assets/Property 1=Dark.png";
   }
});