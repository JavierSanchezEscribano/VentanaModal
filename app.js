// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modalOv = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click', function(){
    modalOv.classList.add("open-modal");
    //modalOv.style.visibility = "visible";
    //modalOv.style.zIndex = "0";
});

closeBtn.addEventListener('click', function(){
    console.log("holi");
    modalOv.classList.remove("open-modal");
    //modalOv.style.visibility = "hidden";
    //modalOv.style.zIndex = "-10";
});