function focus() {

    var x = document.getElementById("dice").focus();

}
window.addEventListener('load', function () {
    focus();
});

function execute(number) {
    let n = parseInt(number);
    if (checkValues(n)) {

        let dice = generateDice(n);
        showDice(dice);
        showNumbers(dice);
        showTotal(dice);
    }
}

function checkValues(number) {
    document.getElementById("este").innerHTML = "";
    if (number == null) {
        focus();
        document.getElementById("este").innerHTML = "Please enter a number ";
        return false;
    } else if (number < 0) {
        focus();
        document.getElementById("este").innerHTML = "Please enter a number bigger than 0";
        return false;
    }

    return true;
}

function generateDice(number) {
    let dice = [];
    for (let index = 0; index < number; index++) {
        dice[index] = Math.floor(Math.random() * 6);
    }
    return dice;
}

function showDice(dice) {

    let element = document.getElementById("results");

    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }

    for (let index = 0; index < dice.length; index++) {
        let value = dice[index];
        let newImg = document.createElement("img");
        switch (value) {
            case 0:
                newImg.setAttribute("src", "../ASSSETS/IMG/Cara1.JPG");
                break;
            case 1:
                newImg.setAttribute("src", "../ASSSETS/IMG/Cara2.JPG");
                break;
            case 2:
                newImg.setAttribute("src", "../ASSSETS/IMG/Cara3.JPG");
                break;
            case 3:
                newImg.setAttribute("src", "../ASSSETS/IMG/Cara4.JPG");
                break;
            case 4:
                newImg.setAttribute("src", "../ASSSETS/IMG/Cara5.JPG");
                break;
            case 5:
                newImg.setAttribute("src", "../ASSSETS/IMG/Cara6.JPG");
                break;
            default:
                break;
        }
        element.appendChild(newImg);
    }
}

function showNumbers(dice) {

    let h2 = document.createElement("h2");
    
    let nodeText = document.createTextNode("Results");
    let p = document.createElement("p");
    
    p.innerHTML="The values are:";
    for (let index = 0; index < dice.length; index++) {
        p.innerHTML+=dice[index];
    }
    h2.appendChild(nodeText);
    let element = document.getElementById("results");
    element.appendChild(h2);
    element.appendChild(p);
    }     
        
function showTotal(dice) {
    let total=0;
    for (let index = 0; index < dice.length; index++) {
        total=total+dice[index];
    }
    let show = document.createElement("p");
    show.innerHTML+="Total: "+total;
    let element = document.getElementById("results");
    element.appendChild(show);
}
