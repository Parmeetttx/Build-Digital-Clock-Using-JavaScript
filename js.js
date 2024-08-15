const currentTime = () => {
    let hours = document.querySelector('.span-1');
    let minutes = document.querySelector('.span-2');
    let seconds = document.querySelector('.span-3');
    let meridiem = document.querySelector('.span-4');
    let D_M_Y = document.querySelector('.span-5');

    let Time = new Date();

    // console.log(Time);

    let hr = Time.getHours();
    let min = Time.getMinutes();
    let sec = Time.getSeconds();
    let date = Time.getDate();
    let month = Time.getMonth() + 1;
    // Javascript contains month from 0  //
    let year = Time.getFullYear();

    // console.log(month);

    let merid = hr > 12 ? "PM" : "AM";
    // console.log(merid);

    // if time run in 0 -12 hours ... you can use this otherwise you can skip this line of code
    hr = hr >= 12 ? hr -12 : hr

    // console.log(hr);

    let currenthr = hr > 9 ?  hr : `0${hr}`;
    let currentmin = min > 9 ?  min : `0${min}`;
    let currentsec = sec > 9 ?  sec : `0${sec}`;
    let D = date > 9 ?  date : `0${date}`;
    let M = month > 9 ?  month : `0${month}`;

    hours.textContent = currenthr;
    minutes.textContent = currentmin;
    seconds.textContent = currentsec;
    meridiem.textContent = merid;
    D_M_Y.textContent = `${D} / ${M} / ${year}`;
    
}

setInterval(currentTime , 1000)