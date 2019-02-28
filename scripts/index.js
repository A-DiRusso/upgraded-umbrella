console.log("Is this thing on? Hello?");


// targets all elements with string 'data-target'
const targetElements = document.querySelectorAll("[data-target]");




function respondToClick() {
    console.log("hello");
    console.log("How are you?");
    console.log("Im fine.");
    console.log("Thanks!");
}



function attachClickHandler(oneElement) {
    // this is how we handle 1 at a time in index [0]
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler);

