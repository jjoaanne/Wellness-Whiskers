var mood = [
    'Stinky Chicken! Good choice!', 
    'Cool Chicken! Its very cool!', 
]

var reasons = [
    'This chicken is very juicy.', 
    'This is some really awesome chicken.', 
    'This chicken is very yummy!', 
    'This is some delicious chicken!', 
    'THIS IS SO JOJO!!! BEST CHICKEN EVER!'
]

function handleClick() {
    const radioButtons1 = document.querySelectorAll('input[name="mood-selection"]');
    var selectedValue; 
    
   
    const radioButtons2 = document.querySelectorAll('input[name="reason-selection"]');
    var selectedValue2;

    for (const rb of radioButtons1) {
        if (rb.checked) {
        selectedValue = rb.value;
        break; 
        }
    }
    for (const rb of radioButtons2) {
        if (rb.checked) {
        selectedValue2 = rb.value;
        break;
        }
    }
    
    if(selectedValue && selectedValue2) {
        document.getElementById('response').innerHTML = mood[selectedValue] + " " + reasons[selectedValue2];
    } 

    else if (selectedValue === undefined && selectedValue2 === undefined) {
        alert("Please Select a Mood and Reason!");
    } 
    else if (selectedValue === undefined) {
        alert("Please Select a Mood!")
    } 
    else if (selectedValue2 === undefined) {
        alert("Please Select a Reason!")
    } 
}