console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById('node1') method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this"
let node2 = document.getElementsByClassName("node2")[0];
node2.textContent =
  "I used the getElementsByClassName('node2') method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these"
let allh3s = document.getElementsByTagName("h3");
for (let element of allh3s) {
  element.textContent =
    "I used the getElementsByTagName('h3') method to access all of these";
}

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let newPara = document.createElement("p");
newPara.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector("#parent");
parent.appendChild(newPara);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let link = document.createElement("a");
link.textContent = "google link";
link.href = "https://google.com";
link.target = "_blank";
// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

parent.insertBefore(link, newPara);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let exercise3Container = document.querySelector("#exercise-container3");
let oldChild = document.querySelector("#N1");
let newChildNode = document.createElement("p");
newChildNode.textContent = "Child node that replaced old child";
exercise3Container.replaceChild(newChildNode, oldChild);
// TODO: Remove the "New Child Node"
setTimeout(() => {
  exercise3Container.removeChild(newChildNode);
}, 5000);
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});

document.querySelector("#container").appendChild(ul);
/*----------- Exercise #5: DOM EVENTS --------------*/

function show() {
  let modalContainer = document.createElement("div");
  let modalCard = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let closeButton = document.createElement("button");

  h2.textContent = "Modal header";
  p.textContent = "random text msg";

  p.textContent = "text content";
  closeButton.textContent = "close";

  closeButton.addEventListener("click", () => {
    document.body.removeChild(modalContainer);
  });
  modalCard.append(h2, p, closeButton);
  modalCard.classList.add("modal-card");

  modalContainer.id = "modal";
  modalContainer.appendChild(modalCard);

  document.body.appendChild(modalContainer);
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);
