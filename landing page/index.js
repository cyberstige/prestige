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
}, 4000)