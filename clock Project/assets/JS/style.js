
// this piece of code is used for clock rotating niddles

let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();
     // getting hour, min , sec from date
     let hh = date.getHours();
     let mm = date.getMinutes();
     let ss = date.getSeconds();

    //  Now for rotation in clock by calcuting degree or other simple things
    let hRotation = 30*hh + mm/2 ;
    let mRotation = 6*mm ;
    let sRotation = 6*ss ;

    // Now to show the above clock degree 
     
    hr.style.transform = `rotate(${hRotation}deg )`;
    min.style.transform = `rotate(${mRotation}deg )`;
    sec.style.transform = `rotate(${sRotation}deg )`;

}

setInterval(displayTime , 1000);
