var mood = [
    'YAY! It is great that you are feeling happy!', 
    'Keep thinking postively and everything will be okay!', 
]

var reasons = [
    'Remember that communication and honesty is key! If prblems occur, try to communicate and compromise so that the both of you could agree on something.', 
    'If you are struggling in school, you can talk to your teachers, create a schedule, study with friends and most of all, have a postive mindset and take care of yourself mentaly and physically!', 
    'If you are struggling in work, you can talk to your boss or co-workers, stay punctual, organized, communicate well, and take care of yourself!',
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