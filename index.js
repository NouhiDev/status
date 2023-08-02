async function checkStatusAPI() {
    const url = "https://ndevapi.com";
    const statusElement = document.querySelector(".status");
    const responseTimeElement = document.querySelector(".response-time");

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    const startTime = new Date().getTime();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const endTime = new Date().getTime();
            const responseTime = endTime - startTime;

            if (xhr.status === 200) {
                if (responseTime >= 0 && responseTime < 60) {
                    statusElement.textContent = "Operational";
                    statusElement.classList.remove("degraded", "outage");
                    statusElement.classList.add("operational");
                    responseTimeElement.textContent = responseTime + " ms";
                } else if (responseTime >= 60) {
                    statusElement.textContent = "Degraded Performance";
                    statusElement.classList.remove("operational", "outage");
                    statusElement.classList.add("degraded");
                    responseTimeElement.textContent = responseTime + " ms";
                }
            } else {
                statusElement.textContent = "Major Outage";
                statusElement.classList.remove("operational", "degraded");
                statusElement.classList.add("outage");
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}



async function checkStatusGame() {
    const url = "https://ndevapi.com/game-info/1";
    const statusElement = document.querySelector(".status-game");
    const responseTimeElement = document.querySelector(".response-time-game");

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    const startTime = new Date().getTime();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const endTime = new Date().getTime();
            const responseTime = endTime - startTime;

            if (xhr.status === 200) {
                if (responseTime >= 0 && responseTime < 200) {
                    statusElement.textContent = "Operational";
                    statusElement.classList.remove("degraded", "outage");
                    statusElement.classList.add("operational");
                    responseTimeElement.textContent = responseTime + " ms";
                } else if (responseTime >= 200) {
                    statusElement.textContent = "Degraded Performance";
                    statusElement.classList.remove("operational", "outage");
                    statusElement.classList.add("degraded");
                    responseTimeElement.textContent = responseTime + " ms";
                }
            } else {
                statusElement.textContent = "Major Outage";
                statusElement.classList.remove("operational", "degraded");
                statusElement.classList.add("outage");
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}



async function checkStatusIcon() {
    const url = "https://ndevapi.com/game-icon/1";
    const statusElement = document.querySelector(".status-icon");
    const responseTimeElement = document.querySelector(".response-time-icon");

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    const startTime = new Date().getTime();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const endTime = new Date().getTime();
            const responseTime = endTime - startTime;

            if (xhr.status === 200) {
                if (responseTime >= 0 && responseTime < 200) {
                    statusElement.textContent = "Operational";
                    statusElement.classList.remove("degraded", "outage");
                    statusElement.classList.add("operational");
                    responseTimeElement.textContent = responseTime + " ms";
                } else if (responseTime >= 200) {
                    statusElement.textContent = "Degraded Performance";
                    statusElement.classList.remove("operational", "outage");
                    statusElement.classList.add("degraded");
                    responseTimeElement.textContent = responseTime + " ms";
                }
            } else {
                statusElement.textContent = "Major Outage";
                statusElement.classList.remove("operational", "degraded");
                statusElement.classList.add("outage");
            }
        }
    };

    xhr.open("GET", url, true);
    xhr.send();
}

function myFunction() {
    checkStatusAPI();
    checkStatusGame();
    checkStatusIcon();
    
    setTimeout(() => {
        checkStatusAPI();
        checkStatusGame();
        checkStatusIcon();
    }, 1000);
}

setInterval(checkStatusAPI, 60000);
setInterval(checkStatusGame, 60000);
setInterval(checkStatusIcon, 60000);