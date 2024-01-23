let slideNumber = 0;

function slide() {
 if(slideNumber < 200) {
    slideNumber += 100;
    document.querySelector('#box1').style = `margin-left: -${slideNumber}%`;
 }else {
    slideNumber = 0;
    document.querySelector('#box1').style = `margin-left: -${slideNumber}%`;
 } 
}


setInterval(()=> {
    slide();
}, 6000)

function about() {
   window.location.href = 'about.html';
}
function back() {
   window.location.href = 'land.html';
}