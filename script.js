//Grab input value

document.querySelector("button").addEventListener("click", function () {
    input = document.querySelector("input").value;
    getInput(input);
})

document.querySelector(".js-userinput").addEventListener("keydown", function (e) {
    input = document.querySelector("input").value;
    if (e.which == 13) {
        getInput(input);
    }
})


//API shii
function getInput(item) {

    var query = item.split(' ').join('+');
    var url = "https://api.giphy.com/v1/gifs/search?api_key=CDIdDIzVF44fYTV9u48EghhunAUyl2Fs&q=" + query;
    console.log(url);
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener("load", function (e) {
        var data = e.target.response;
        PTD(data);
    });


//Output

function PTD(x) {


    let response = JSON.parse(x);
    var body = document.querySelector(".js-container");

    clear(body);

    var imgUrls = response.data;
    imgUrls.forEach(function (image) {
        var src = image.images.fixed_height.url;
        body.innerHTML += "<img src=\"" + src + "\" class=\"con-img\">";
    })

}

function clear(item){
    item.innerHTML = "";
}
}