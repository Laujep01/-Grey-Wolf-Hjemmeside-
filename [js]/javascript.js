/* async function fetch_header() {
    const XXX = await fetch("../header.html");
    const YYY = await XXX.then(yyy => yyy.text())
    YYY.then(zzz => console.log(zzz))
}

fetch_header(); */


  async function header() {

    let promise = new Promise((resolve, reject) => {

        fetch("header.html")
        .then(response => response.text())
        .then(data => {

            const header = document.getElementById("header");

            const nav = document.createElement("nav");
            nav.innerHTML = data;

            header.appendChild(nav);

            console.log(nav);
        
        
        
        }) 

    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  header();


  async function footer() {

    let promise = new Promise((resolve, reject) => {

        fetch("footer.html")
        .then(response => response.text())
        .then(data => {

            const footer = document.getElementById("footer");

            const section = document.createElement("section");
            section.innerHTML = data;

            footer.appendChild(section);

            console.log(section);
        
        
        
        }) 

    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  footer();