const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

// for(let i=0; i<marqueeElementsDisplayed; i++) {
// //    debugger; console.log(1,i)
// //   marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
// var clonedNode = marqueeContent.children[i].cloneNode(true);
// // /
// // Add a class to the cloned node
// // if(i %2 == 0){clonedNode.setAttribute('class','moving-divm-down');}
// // else{clonedNode.setAttribute('class','moving-divm-up');}
// // Append the cloned node with the new class
// marqueeContent.appendChild(clonedNode);
// }// Clone 
// Get the div element
var divElement = document.querySelector('.marquee-content');

// Loop through the child elements
for (var i = 0; i < divElement.children.length; i++) {
    var child = divElement.children[i];
    
    // Check if the index is divisible by 2
    if (i % 2 === 0) {
        // Add class for even index
        child.setAttribute('class','moving-divm-down');
    } else {
        // Add class for odd index
        child.setAttribute('class','moving-divm-up');
    }
}


