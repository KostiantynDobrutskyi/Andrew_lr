const
    inputSelect = document.querySelector("#input"),
    outputSelect = document.querySelector("#output"),
    calculateBtn = document.querySelector("#calculate"),
    clearBtn = document.querySelector("#clear"),
    userNumber = document.querySelector("#user-number");


class CalcSystem {
    constructor(inputSys, outputSys, userNum) {
        this.inputSystem = inputSys || null;
        this.outputSystem = outputSys || null;
        this.userNumber = userNum || null;
    }

    showUsr() {
        return this
    }
}


calculateBtn.addEventListener('click', (e) => {

    let inputSystem = inputSelect.options[inputSelect.selectedIndex].value,
        outputSystem = outputSelect.options[outputSelect.selectedIndex].value;
    let calcObject = new CalcSystem(inputSystem, outputSystem, userNumber.value);
    console.log(calcObject.showUsr())
});

clearBtn.addEventListener('click', () => {
    userNumber.value = "";
});

