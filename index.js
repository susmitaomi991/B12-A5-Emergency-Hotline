const loveCount = document.getElementById("love-count");
let count = 0;


const loveButtons = document.querySelectorAll(".love-btn");

loveButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    count++;
    loveCount.textContent = count;
  });
});






  



