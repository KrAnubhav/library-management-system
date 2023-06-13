const menuBtn = document.querySelector(".menu-icon span");
         const searchBtn = document.querySelector(".search-icon");
         const cancelBtn = document.querySelector(".cancel-icon");
         const items = document.querySelector(".nav-items");
         const form = document.querySelector("form");
         menuBtn.onclick = ()=>{
           items.classList.add("active");
           menuBtn.classList.add("hide");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }
         cancelBtn.onclick = ()=>{
           items.classList.remove("active");
           menuBtn.classList.remove("hide");
           searchBtn.classList.remove("hide");
           cancelBtn.classList.remove("show");
           form.classList.remove("active");
           cancelBtn.style.color = "#ff3d00";
         }
         searchBtn.onclick = ()=>{
           form.classList.add("active");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }

/* featch data from josn lecture */
fetch("algorithm.json")
         .then(function(response){
            return response.json();
         })
         .then(function(alogorithm){
            let placeholder = document.querySelector("#data-output");
            let out = " ";
            for(let algorithm of algorithm){
               out += `
                 <a href='${algorithm.Column1}'target="_blank" class="lecture-box" id="data-output">
                 <h1 class="topbox"> ${algorithm.Column2} </h1>
                 <h2> lecture 1</h2>
                 </a>
               `;
            }
          
            placeholder.innerHTML = out;
         });