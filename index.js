function checkStatusAPI() {
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
                if (responseTime >= 0 && responseTime < 1000) {
                    statusElement.textContent = "Operational";
                    statusElement.classList.remove("degraded", "outage");
                    statusElement.classList.add("operational");
                    responseTimeElement.textContent = responseTime + " ms";
                } else if (responseTime >= 1000) {
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

checkStatusAPI();

function checkStatusRBLX() {
    const url = "https://nouhi.dev/roblox-horrorlist/";
    const statusElement = document.querySelector(".status-rblx");
    const responseTimeElement = document.querySelector(".response-time-rblx");

    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    const startTime = new Date().getTime();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            const endTime = new Date().getTime();
            const responseTime = endTime - startTime;

            if (xhr.status === 200) {
                if (responseTime >= 0 && responseTime < 1000) {
                    statusElement.textContent = "Operational";
                    statusElement.classList.remove("degraded", "outage");
                    statusElement.classList.add("operational");
                    responseTimeElement.textContent = responseTime + " ms";
                } else if (responseTime >= 1000) {
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

checkStatusRBLX();

setInterval(checkStatusAPI, 1000);
setInterval(checkStatusRBLX, 1000);
