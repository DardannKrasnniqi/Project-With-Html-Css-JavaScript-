const hourE1 = document.getElementById('hour');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');

function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    if(h > 24){
        h = h - 24  ;
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h ;

    hourE1.innerHTML = h ;
    minutesE1.innerHTML = m ;
    secondsE1.innerHTML = s ;
    setTimeout(() => {
        updateclock()
    }, 1000);
}
updateclock()
