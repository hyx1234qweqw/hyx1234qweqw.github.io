document.addEventListener("DOMContentLoaded", function(event) {  
     let targetImage = document.querySelector("#smart-image");
     targetImage.addEventListener("click", function() {
           
        targetImage.classList.add("small");
        targetImage.classList.remove("small");
    });
});
