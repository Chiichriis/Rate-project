const rateValues = document.querySelectorAll(".rate");

rateValues.forEach((rate) => {
    rate.addEventListener("click", (e) =>{
        rateValues.forEach(rate => rate.classList.remove('active'));
        rate.classList.add('active');
        localStorage.setItem("rate", e.target.innerText);//This stores the value in my local chrome browser
    })
})

