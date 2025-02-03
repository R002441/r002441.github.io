document.addEventListener("DOMContentLoaded", () => {
    if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) && !sessionStorage.getItem("mobileAlertShown")) {
        alert("You are using a mobile device.\n\nFor the best experience, open this page on a computer.");
        sessionStorage.setItem("mobileAlertShown", "true");
    }
});