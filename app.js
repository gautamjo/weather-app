// init weather class/object
const weather = new Weather();

// init UI class/object
const ui = new UI();

// GET weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
    // get country
    const country = document.getElementById("country").value;
    //console.log(country);
    // get city
    const city = document.getElementById("city").value;
    //console.log(city);
    // changeLocation
    weather.changeLocation(country, city);
    // get and display weather
    getWeather();
    // close modal
    $("#locModal").modal("hide");
});

// animate icon
function fadeInUp() {
    $("#icon-card").hide();
    setTimeout(() => {
        $("#icon-card").show();
        $('#icon-card').addClass('animated fadeInUp');
    }, 500);
}

// create function getWeather
function getWeather() {
    weather.getInternationalWeather()
        .then(data => {
            ui.paint(data);
            console.log(data);
        })
        .catch(err => console.log(err));
    // begin animation
    fadeInUp();
}