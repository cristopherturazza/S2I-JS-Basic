let counter = {
    currentValue : 0,
    increaseValue : function () {
        return this.currentValue++},
    decreaseValue : function () {
        if (this.currentValue == 0){
            let element = document.querySelector("#like-counter");
            element.classList.add("blinking-red");
            setTimeout (() => element.classList.remove("blinking-red"), 200);
            }
        else return this.currentValue--},
    resetValue : function () {
        return this.currentValue = 0},
    updateValue: function (newvalue) {
        newvalue.textContent = this.currentValue;
    }
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
        counter.resetValue();
        counter.updateValue(counterDisplay);}
}

buttons.forEach((item) => item.addEventListener("click", counterHandler));

console.log (document.querySelector("#like-counter"))