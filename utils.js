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