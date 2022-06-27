let screen = document.getElementById("screen");

let buttons = Array.from(document.getElementsByClassName("button"));//convert from htmlCollection to array

let calculate = (num) => {
    if (screen.innerText == 0) {
        screen.innerText = '';
        screen.innerText += num;
    }
    else {
        screen.innerText += num;
    }

}

let equal = () => {

    try {
        screen.innerText = eval(screen.innerText);
    } catch (error) {
        screen.innerText = "ERROR";
    }

}

let del = () => {
    screen.innerText = screen.innerText.slice(0,-1);
}

let clr = () => {
    screen.innerText = 0;
}
let sqrt = () =>{
    screen.innerText=Math.sqrt(screen.innerText);
}
let power = () =>{
    screen.innerText=Math.pow(screen.innerText,2);
 
}
// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {

//         switch (e.target.innerText) {
//             case 'C':
//             case 'CE':
//                 screen.innerText = 0;
//                 break;
//             case 'del':
//                screen.innerText = screen.innerText.slice(0,-1);
//                 break;
//             case '=':
//                 try {
//                     screen.innerText=eval(screen.innerText);
//                 } catch (error) {
//                     screen.innerText="ERROR";
//                 }

//                 break;
//             default:
//                 if (screen.innerText == 0) {
//                     screen.innerText = '';
//                     screen.innerText += e.target.innerText;
//                 }
//                 else {
//                     screen.innerText += e.target.innerText;
//                 }


//         }

//     })
// }

// );