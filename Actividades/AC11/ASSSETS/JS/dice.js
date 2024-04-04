function focus() {

    var x = document.getElementById("dice").focus();
    
  }
window.addEventListener('load', function() {
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
    document.getElementById("red").innerHTML="";
    if (number==null) {
        focus();
        document.getElementById("red").innerHTML="Please enter a number ";
    } else if(number<0){
        focus();
        document.getElementById("red").innerHTML="Please enter a number bigger than 0";
    }
}

function generateDice(number) {
    let dice = [];
    // Store values in array $dice randomnly
    return dice;
}

function showDice(dice) {

    // Get id "results"
   
    // Remove content
   
    // Create dice.length img elements with src, alt and width
   

}

function showNumbers(dice) {

    
     // Show numbers

   


}

function showTotal(dice) {

    // Show numbers



}
