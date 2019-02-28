console.log("Is this thing on? Hello?");


// targets all elements with string 'data-target'
const targetElements = document.querySelectorAll("[data-target]");




function respondToClick(event) {
    console.log("hello");
    console.log("How are you?");
    console.log("Im fine.");
    console.log("Thanks!");
    //add the .big class to intem clicked
    console.log(event.target.parentElement);
    event.target.parentElement.classList.add('big');
}



function attachClickHandler(oneElement) {
    // this is how we handle 1 at a time in index [0]
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler);



