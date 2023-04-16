
const test =  document.getElementById()
     
function interval() {
    console.log(test.innerHTML);
}


function interval1() {
    console.log(test.innerHTML);
 }


function interval2() {
    console.log(test.innerHTML);
 }
 

 function interval3() {
     console.log(test.innerHTML);
}


function interval4() {
     console.log(test.innerHTML);
 }


 function interval5() {
     console.log(test.innerHTML);
 }


 function interval6() {
     console.log(test.innerHTML);
 }


 function interval7() {
     console.log(test.innerHTML);
 }


 function interval8() {
    console.log(test.innerHTML);
 }


 function interval9() {
     console.log(test.innerHTML);
 }

 function interval10() {
     console.log(test.innerHTML);
}

 function interval11() {
     console.log(test.innerHTML);
}
function interval12() {
    console.log(test.innerHTML);
}

function interval13() {
    console.log(test.innerHTML);
}

function interval14() {
    console.log(test.innerHTML);
}

function interval15() {
    console.log(test.innerHTML);
}

function interval16() {
    console.log(test.innerHTML);
}


  function Lights(){
    let text = document.getElementById('ChristmasLights');
    let red = Math.floor(Math.random(255) *256);
    let blue = Math.floor(Math.random(255) *256);
    let green = Math.floor(Math.random(255) * 256);
    a = document.getElementById('rgbcolor').innerText = `RGB(${red}, ${blue},${green})`;
    text.style.color = `rgb(${red}, ${blue},${green})`;

  }

  function start (){
    start_color = setInterval(Lights, 200,
        setTimeout(interval, 1000),
        setTimeout(interval1, 2000),
        setTimeout(interval2, 3000),
        setTimeout(interval3, 4000),
        setTimeout(interval4, 5000),
        setTimeout(interval5, 6000),
        setTimeout(interval6, 7000),
        setTimeout(interval7, 8000),
        setTimeout(interval8, 9000),
        setTimeout(interval9, 10000),
        setTimeout(interval10, 11000),
        setTimeout(interval11, 12000),
        setTimeout(interval12, 13000),
        setTimeout(interval13, 14000),
        setTimeout(interval14, 15000),
        setTimeout(interval15, 16000),
        setTimeout(interval16, 17000),);
        }

  function stop(){
    clearInterval(start_color);
  }