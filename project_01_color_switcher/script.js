const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click", function(e){
        console.log(e);
        console.log(e.target);
        
        switch (e.target.id) {
            case "white":
                body.style.background = e.target.id;
                break;
            case "red":
                 body.style.backgroundColor = e.target.id;
                 break;

          case "green":
                 body.style.backgroundColor = e.target.id;
                 break;
         case "yellow":
                body.style.backgroundColor = e.target.id;
                 break;
        case "blue":
            body.style.backgroundColor = e.target.id;
            break;        
            default:
                break;
        }
    })
    
})