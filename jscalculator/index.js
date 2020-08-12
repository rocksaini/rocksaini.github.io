console.log("welcome to my calculator");
let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button')
let screenValue = Number('');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            console.log('buttn text',buttonText);
            screenValue += buttonText;
            screen.value = screenValue;

        }
        else if(buttonText=='C'){
            screenValue = ""
            screen.value = "";
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
            console.log('equal to',screen.Value)
        }
        
        else{
            screenValue += buttonText;
            screen.value = screenValue;
            console.log('value is',screenValue)

        }
    })
}