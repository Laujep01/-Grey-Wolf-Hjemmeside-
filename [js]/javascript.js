/* async function fetch_header() {
    const XXX = await fetch("../header.html");
    const YYY = await XXX.then(yyy => yyy.text())
    YYY.then(zzz => console.log(zzz))
}

fetch_header(); */

/* header */

async function header() {
  let promise = new Promise((resolve, reject) => {
    fetch("header.html")
      .then((response) => response.text())
      .then((data) => {
        const header = document.getElementById("header");

        const nav = document.createElement("nav");
        nav.innerHTML = data;
 
        header.appendChild(nav);

        console.log(nav);

        const søgefelt = document.getElementById("søgefelt");
        søgefelt.style.display = "none";

        const burgermenu = document.getElementById("burgermenu"); 

        const burgermenu_X = document.getElementById("burgermenu_X"); /* skal pt ikke bruges til noget */ 
        burgermenu_X.style.display = "none";

        const navigation = document.getElementById("navigation");
        navigation.style.display = "flex";

        const dropdown_menu = document.getElementById("dropdown_menu");
        dropdown_menu.style.display = "none";
       

        const testbox_51 = document.getElementById("testbox_51");
        // testbox_51.style.display = "block";

        

        header.addEventListener("click", function(e){
          let target = e.target.closest("#søgning"); // target has id "søgning"
        
          if(target){ // do something when clicking element with id "søgning" (toggle visibility of "søgefelt" and "testbox_51")
            if (søgefelt.style.display === "none") {
              søgefelt.style.display = "block";
              søgefelt.focus();
              testbox_51.classList.remove("visible");

            } else {
              //testbox_51.style.display = "block";
              søgefelt.style.display = "none";
              testbox_51.classList.add("visible");
            }

         }
 


         target = e.target.closest("#burgermenu"); // target has id "burgermenu"
        
         if(target){ // do something when clicking element with id "burgermenu" (toggle visibility of "navigation" and "dropdown_menu")
       
          navigation.style.display = "none";
          dropdown_menu.style.display = "block";
           
        }




        target = e.target.closest("#dropdown_menu"); // target has id "burgermenu"
        
        if(target){ // do something when clicking element with id "burgermenu" (toggle visibility of "navigation" and "dropdown_menu")
      
         dropdown_menu.style.display = "none";
         navigation.style.display = "flex";
          
       }



          
        });

      });
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

header();

/* footer */

async function footer() {
  let promise = new Promise((resolve, reject) => {
    fetch("footer.html")
      .then((response) => response.text())
      .then((data) => {
        const footer = document.getElementById("footer");

        const section = document.createElement("section");
        section.innerHTML = data;

        footer.appendChild(section);

        console.log(section);
      });
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

footer();

 

 

/* 
addEventListener("DOMContentLoaded", (event) => {
  const søgefelt = document.getElementById("søgefelt");
  søgefelt.style.display = "none";
}); 
*/