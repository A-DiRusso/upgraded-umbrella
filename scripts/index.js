console.log("Is this thing on? Hello?");


// targets all elements with string 'data-target'
const targetElements = document.querySelectorAll("[data-target]");




function respondToClick() {
    console.log("hello");
    console.log("How are you?");
    console.log("Im fine.");
    console.log("Thanks!");
}

targetElements[0].addEventListener("click", respondToClick);