

 
const heartButtons = document.getElementsByClassName('heart-btn');

for (let btn of heartButtons) {
  btn.addEventListener('click', function () {
   
    let count = parseInt(document.getElementById('heart-count').innerText);
    count++
    document.getElementById('heart-count').innerText = count;
    
    console.log( count);
  }); 
}

// ---------------- ******for copy count************------------
const  copyes  = document.getElementsByClassName('copy-count');

for (let copy  of copyes) {
  copy.addEventListener('click', function () {
   
    let count = parseInt(document.getElementById('copy-btn').innerText);
    count++
    document.getElementById('copy-btn').innerText = count;

    console.log( count);
  });
}
 
// -----------------*********** for call buttom ***********----------
 

 
const callButtons = document.getElementsByClassName("call-number");

 
const historyContainer = document.getElementsByClassName("histori-container")[0];
 
for (let callButton of callButtons) {
  callButton.addEventListener("click", function () {
     
    let card = callButton.closest(".bg-white");
 
    let serviceName = card.getElementsByTagName("h2")[0].innerText;
 
    let serviceNumber = card.getElementsByTagName("h2")[1].innerText;
 
    let now = new Date().toLocaleTimeString();
    
    let div = document.createElement("div");
    div.className =
      "history-containar flex justify-between items-center m-3 p-3 bg-[#D9D9D9] rounded-lg";
    div.innerHTML = `
      <div class="name-container">
        <h2 class="font-bold">${serviceName}</h2>
        <p>${serviceNumber}</p>
      </div>
      <div class="time">
        <p>${now}</p>
      </div>
    `;
 
    historyContainer.appendChild(div);
  });
}
