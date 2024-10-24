
//Relógio Digital - Dionízio
function myWatch(){
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    let clockSecond = document.getElementById('seconds')
    let clockMinute = document.getElementById('minutes')
    let clockHour = document.getElementById('hours')

    second = ('00' + second).slice(-2)
    minute = ('00' + minute).slice(-2)
    hour = ('00' + hour).slice(-2)

    clockSecond.innerText = second
    clockMinute.innerText = minute
    clockHour.innerText = hour
}

setInterval(myWatch, 1000)


