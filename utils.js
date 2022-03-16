function includeHTMLModule(module) {
    let htmlFileToInclude;
    let xhttp;
    let dataElements = document.querySelectorAll("header[data-header], footer[data-footer]");
    for (let element of dataElements) {
        htmlFileToInclude = element.getAttribute(module);
        if (htmlFileToInclude) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) { element.innerHTML = this.responseText; }
                    if (this.status == 404) { element.innerHTML = "Page not found."; }
                    element.removeAttribute(module);
                }
            }
            xhttp.open("GET", htmlFileToInclude, true);
            xhttp.send();
            return;
        }
    }
}

// api urls
let api_normal_url = "https://jumpyduke.com/node-test/normal/";
let api_easy_url = "https://jumpyduke.com/node-test/easy/";
let api_hard_url = "https://jumpyduke.com/node-test/hard/";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}

window.addEventListener('load', () => {
    // Calling that async function
    getapi(api_normal_url);
    swapScore();
    document.getElementById("show-normal").addEventListener("click", () => {
        getapi(api_normal_url);
        document.getElementById("game-mode").innerHTML = "normal";
    });
    document.getElementById("show-hard").addEventListener("click", () => {
        getapi(api_hard_url);
        document.getElementById("game-mode").innerHTML = "hard";
    });

    function swapScore() {
        document.getElementById("show-easy").addEventListener("click", () => {
            getapi(api_easy_url);
            document.getElementById("game-mode").innerHTML = "easy";
        });
    }
});

function show(data) {
    let ul =
        `<li class="game-box-body-title">high score</li>
        <li class="game-box-body-item">-------</li>`;

    // Loop to access all rows 
    data
        .forEach(element => {
            ul += `<li class="game-box-body-item">${element.userName} - ${element.lastScore}</li>
       `
        });
    // Setting innerHTML as ul variable
    document.getElementById("data-test").innerHTML = ul;
}