

function scroller() {

    if(window.scrollY > 10) {
        document.querySelector("#head").style = "background-color: orange;"
    }else {
         document.querySelector("#head").style = "background-color: transparent;"

    }

    console.log(window.scrollY)
}
let  change = 0;

function countUp() {
    if(change < 1500) {
        change = change + 10;
        document.querySelector(".count").innerHTML = change;
    }else {
        if(change = 3000) {
            document.querySelector(".hide1").style = `opacity: 1;`
        }
    }
    
    
    
}

let  change2 = 0;


function countUp2() {
    if(change2 < 2000) {
        change2 = change2 + 15;
        document.querySelector("#count1").innerHTML = change2;
    }else{
        if(change2 = 5000) {
            document.querySelector(".hide2").style = `opacity: 1;`
        }
    }

}


function clicker() {
    setInterval(() => {
        countUp();
    }, 0.5);
    setInterval(()=> {
        countUp2()
    },0.01)
}
function drop() {
    document.querySelector(".menu").style = `display: flex;`
    document.querySelector(".drop").style = `display: none;`
    document.querySelector(".close").style = `display: flex;`
}
function leave() {
    document.querySelector(".menu").style = `display: none;`
    document.querySelector(".drop").style = `display: flex;`
    document.querySelector(".close").style = `display: none;`

    
}


