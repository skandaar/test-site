const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/web-developer-skills.jpg") {
        myImage.setAttribute("src", "images/web-developer-day.jpg");
    } else {
        myImage.setAttribute("src", "images/web-developer-skills.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.getElementById("user_greeting");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Web programming is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Web programming is cool, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};