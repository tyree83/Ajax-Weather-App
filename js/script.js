console.log("It's working!")

function handleGetData(event) {
    event.preventDefault();
    // Load in the value of the search textbox:
    const searchText = $("#search").val()
    $.ajax({
            url: `http://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=imperial&appid=24fe1adb6758ce072509402a89689a18` 
        })
        .then(
            (data) => {
                console.log(data);
                $("#city").text(data.name)
                $("#temp").text(data.main.temp)
                $("#feels_like").text(data.main.feels_like)
                $("#weather").text(data.weather[0].description)
            },
            (error) => {
                console.log("bad request: ", error)
            }
        )
}
$('form').on("submit", handleGetData)

