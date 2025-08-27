

 
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
