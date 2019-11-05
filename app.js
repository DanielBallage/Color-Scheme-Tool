const header = document.getElementById("header");
const body = document.getElementById("body");
const myButton = document.getElementById("myButton");
const reset = document.getElementById("reset");
const myTextInput1 = document.getElementById("myTextInput1");
const myTextInput2 = document.getElementById("myTextInput2");
const myTextInput3 = document.getElementById("myTextInput3");
const myTextInput4 = document.getElementById("myTextInput4");
const myTextInput5 = document.getElementById("myTextInput5");
const myTextInput6 = document.getElementById("myTextInput6");

myButton.addEventListener('click', () =>{
    header.style.backgroundColor = myTextInput1.value;  
    header.style.color = myTextInput2.value;
    body.style.backgroundColor = myTextInput3.value;
    body.style.color = myTextInput4.value;
    myButton.style.backgroundColor = myTextInput5.value;
    myButton.style.color = myTextInput6.value;
    reset.style.backgroundColor = myTextInput5.value;
    reset.style.color = myTextInput6.value;
 });

 reset.addEventListener('click', () =>{
    header.style.backgroundColor = "gray";  
    header.style.color = "white";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    myButton.style.backgroundColor = "gray";
    myButton.style.color = "white";
    reset.style.backgroundColor = "gray";
    reset.style.color = "white";
    myTextInput1.value = "";
    myTextInput2.value = "";
    myTextInput3.value = "";
    myTextInput4.value = "";
    myTextInput5.value = "";
    myTextInput6.value = "";
 });

 

