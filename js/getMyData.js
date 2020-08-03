function getMyData(dataFile, callback) {
    const URL = 'https://front-end-by-rimantas.github.io/16-grupe-facebook/' + dataFile;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const myData = JSON.parse(this.responseText);
            callback(myData);
        }
    };

    xmlhttp.open("GET", URL, true);
    xmlhttp.send();
}

export default getMyData;