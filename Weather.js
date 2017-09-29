$(document).ready(function() {
    $('form').submit(function() {
        var local=$("#location").val();
        var link="http://api.openweathermap.org/data/2.5/weather?q="+local+"&&APPID=fc0469dcb379777c1f32f35043dfe911";
        console.log(local);
        $.get(link, function(res) {
            var far=Math.trunc(res["main"]["temp"]*(9/5)-459.67);
            $("#place").html(res["name"]);
            $("#temp").html("Temperature: "+far);
        }, 'json');
        return false;
    });
});

