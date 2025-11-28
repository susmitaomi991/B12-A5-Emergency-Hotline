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





const callDiv = document.querySelector(".call-btn-div");
  const rewardText = document.querySelector(".call-reward");
  const historyList = document.querySelector(".history-list");
  const clearBtn = document.querySelector(".clear-history");


  callDiv.addEventListener("click", () => {
    // Show alert
    alert("Calling National Emergency Service 999...");

    // Decrease reward
    let current = Number(rewardText.innerText);
    if (current > 0) {
      current = current - 20;
    }
    rewardText.innerText = current;

    // Add history item
    const time = new Date().toLocaleTimeString();
    const historyItem = document.createElement("p");
    historyItem.classList.add("call");

    historyItem.textContent = `Called 999 at ${time}`;

    historyList.appendChild(historyItem);
  });

  // When Clear button is clicked
  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = ""; 
  });




  



