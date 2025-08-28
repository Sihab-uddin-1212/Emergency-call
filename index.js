

 
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

     let card = copy.closest('.card-about');

    // Get service name and number
    let serviceName = card.getElementsByTagName('h2')[0].innerText;
    let serviceNumber = card.getElementsByTagName('h2')[1].innerText;
    let textCopy =`${serviceName}  ${serviceNumber}`
   
    navigator.clipboard.writeText(serviceNumber ).then(() => {
      alert(` ${textCopy}`);
    })
   
    let count = parseInt(document.getElementById('copy-btn').innerText);
    count++
    document.getElementById('copy-btn').innerText = count;

   
  });
}
 
// -----------------*********** for call buttom ***********----------
 

 
const callButtons = document.getElementsByClassName("call-number");

 
// const historyContainer = document.getElementsByClassName("histori-container")[0];
const historyContainer = document.getElementsByClassName("histori-container")[0]; 

for (let callButton of callButtons) {
  callButton.addEventListener("click", function () {
     
    let card = callButton.closest(".bg-white")
 
    let serviceName = card.getElementsByTagName("h2")[0].innerText;
 
    let serviceNumber = card.getElementsByTagName("h2")[1].innerText;
 
    let now = new Date().toLocaleTimeString();
     let coins = parseInt(document.getElementById('coin-count').innerText)
    console.log(coins)
    let coinButton = document.getElementsByClassName('call-number')
    if(coins >= 20 ){
         coins -= 20
         alert('📞' +serviceName + serviceNumber+"...." )
         document.getElementById('coin-count').innerText = coins;
        }else{
          alert("❌ You don't have enough coins. you need 20 coin")
           return;
        }

 
    
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
 
document.getElementById('clear-btn')
.addEventListener('click',function(){
  let files = document.querySelectorAll('.history-containar')
  
  for(let file of files){
    
    file.remove(); 
  }
})