
const newYear = "1 Jan 2024";

const setDay = document.querySelector("#day");
const setMonth = document.querySelector("#month");
const setHour = document.querySelector("#hour");
const setMin = document.querySelector("#min");
const setSec = document.querySelector("#sec");

//  const countDown = 

const countDown = ()=>{
    const newYearDate = new Date(newYear);
    const currentDate = new Date();


    const second = Math.floor((newYearDate - currentDate) / 1000);
    const updatedSecond = Math.floor(second % 60);
    // console.log(updatedSecond);


    const minute = Math.floor(second / 60)% 60;
    const hour = Math.floor(second / 3600 ) % 24;
    const days = Math.floor(second / 3600 / 24);
    const month = Math.floor(second / 3600 / 24 /31) % 12;

    setMonth.textContent = month;
    setDay.textContent = days;
    setHour.textContent = hour;
    setMin.textContent = minute;
    setSec.textContent = updatedSecond;

    // console.log(days);
    // console.log(minute);
    // console.log(hour);
    // console.log(month);
 }

 countDown();

 setInterval(countDown, 1000);

