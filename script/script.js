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
        if (this.currentValue == 0) return false;
        let resetter = setInterval(()=>{
            this.currentValue--;
            this.updateValue(display);
            if (this.currentValue == 0) {
                clearInterval(resetter);
            }
        },30)
    }, 
    refreshPhoto : function (display) {
        if (this.currentValue == 0) {
            let img = document.querySelector(".random-photo");
            img.src = img.src+"?t=";
        }
        else {
            let resetter = setInterval(()=>{
            this.currentValue--;
            this.updateValue(display);
            if (this.currentValue == 0) {
                clearInterval(resetter);
                let img = document.querySelector(".random-photo");
                img.src = img.src+"?t=";
            }}
        ,30)
    }}
};

let counterDisplay = document.querySelector("#like-counter");
let buttons = document.querySelectorAll(".btn");

function counterHandler (eventdata) {
    if (eventdata.currentTarget.id == "increase") {
        counter.increaseValue();
        counter.updateValue(counterDisplay);
    }
    else if (eventdata.currentTarget.id == "decrease") {
        counter.decreaseValue();
        counter.updateValue(counterDisplay);
    }
    else if (eventdata.currentTarget.id == "reset" ) {
        counter.resetValue(counterDisplay);
    }
    else if (eventdata.currentTarget.id == "refresh") {
        counter.refreshPhoto(counterDisplay);
    }
}

buttons.forEach((item) => item.addEventListener("click", counterHandler));
