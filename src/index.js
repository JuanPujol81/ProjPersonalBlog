document.querySelectorAll(".modal-container img").forEach(el => {
    el.addEventListener("click",function(ev){
    this.parentNode.classList.add("active");
    console.log("click");
    })
});

document.querySelectorAll(".modal-container").forEach(el => {
    el.addEventListener("click",function(ev){
    this.parentNode.classList.remove("active");
    })
})