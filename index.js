const loveCount = document.getElementById("love-count");
let count = 0;


const loveButtons = document.querySelectorAll(".love-btn");
loveButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    count++;
    loveCount.textContent = count;
  });
});




const copyNumber = document.querySelector(".copy-number");
const copyBtnDiv = document.querySelector(".copy-btn-div");
const copyCountP = document.querySelector(".copy-count");
let copyCount = 0;

copyBtnDiv.addEventListener("click", () => {

    const numberToCopy = copyNumber.textContent.trim();
    navigator.clipboard.writeText(numberToCopy);

    // 2. Increase counter
    copyCount++;
    copyCountP.textContent = `${copyCount} Copy`;
});





  



