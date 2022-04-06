// Object "counter" creation

let counter = {
    currentValue : 0,
    increaseValue : function () {
        return this.currentValue++},
    decreaseValue : function () {
        if (this.currentValue == 0){
            let element = document.querySelector("#like-counter");
            element.classList.add("blinking-red");
            setTimeout (() => element.classList.remove("blinking-red"), 300);
            }
        else return this.currentValue--},
    updateValue: function (display) {
            display.textContent = this.currentValue;
        },
    resetValue : function (display) {
        let resetter = setInterval(()=>{
            if (this.currentValue == 0) {
                clearInterval(resetter);
            }
            else {
            this.currentValue--;
            this.updateValue(display);}
        },30)
    }, 
    refreshPhoto : function (display) {
        let resetter = setInterval(()=>{
            if (this.currentValue == 0) {
                clearInterval(resetter);
                let img = document.querySelector(".random-photo");
                img.src = img.src+"?t=";
            }
            else {
            this.currentValue--;
            this.updateValue(display);}
        },30)
    }
};

// Create the counter Display

let counterDisplay = document.createElement("span");
counterDisplay.setAttribute ("id", "like-counter");
counterDisplay.innerHTML = counter.currentValue;
document.querySelector(".counter-box").append(counterDisplay);

// Create the counter Handler

function counterHandler (eventData) {
    if (eventData.currentTarget.id == "increase") {
        counter.increaseValue();
        counter.updateValue(counterDisplay);
    }
    else if (eventData.currentTarget.id == "decrease") {
        counter.decreaseValue();
        counter.updateValue(counterDisplay);
    }
    else if (eventData.currentTarget.id == "reset" ) {
        counter.resetValue(counterDisplay);
    }
    else if (eventData.currentTarget.id == "refresh") {
        counter.refreshPhoto(counterDisplay);
                
    }
}

// Awesome Fonts Styler Function

function awesomeIt (item, type, classname){
    item.append(document.createElement(type));
    item.firstChild.setAttribute("class", classname);
}

// Button Injector Function

function buttonAdd (item, buttonid, divclass){
    item.setAttribute("id", buttonid);
    document.querySelector(divclass).append(item);
    item.addEventListener("click", counterHandler);
}

//Create Buttons

let buttonPlus = document.createElement("button");
let buttonMinus = document.createElement("button");
let buttonReset = document.createElement("span");
buttonReset.innerHTML = "Reset it!";
let buttonRefresh = document.createElement("div");
buttonRefresh.setAttribute("class", "refresh-button");

// Apply Awesome Fonts

awesomeIt (buttonPlus, "i", "fa-solid fa-thumbs-up");
awesomeIt (buttonMinus, "i", "fa-solid fa-thumbs-down");
awesomeIt (buttonRefresh, "i", "fa-solid fa-arrow-rotate-right");

// Button Activation

buttonAdd (buttonPlus, "increase", ".thumbs-up");
buttonAdd (buttonMinus, "decrease", ".thumbs-down");
buttonAdd (buttonReset, "reset", ".reset-bar");
buttonAdd (buttonRefresh, "refresh", ".random-photo-container");