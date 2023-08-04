console.log("This is my profile page");

const newh1 = document.createElement("h1");
newh1.textContent = "Monkey D. Luffy";
newh1.setAttribute("id", "myName");
document.body.appendChild(newh1);
newh1.classList.add("name");


const img = document.createElement("img");
img.src = "./img/luffypfp.png";
document.body.appendChild(img);

const listItems = [
    "I Love Meat!!!",
    "My Current Home Is Sunny!!!",
    "I Have Very Flexible Hands!!!",
    "I Love My Crew!!!",
    "Occupation: Pirate King!!!"
];

function createElements(tag, attributes = {}, textContent = ''){
    const element = document.createElement(tag);
    Object.assign(element, attributes);
    element.textContent = textContent;

    return element;
}

const newul = document.createElement("ul");

listItems.forEach((itemText)=>{
    const listItem = createElements("li", {className: "detail"}, itemText);
    newul.appendChild(listItem);
});

document.body.appendChild(newul);

newul.classList.add("my-details");
//li.classList.add("detail");


// const newul = document.createElement(“ul”);
// const newli1 = document.createElement(“li”);
// newli1.textContent = “I Love Meat!!! “;
// const newli2 = document.createElement(“li”);
// newli2.textContent = “I have very flexible hands!!!“;
// const newli3 = document.createElement(“li”);
// newli3.textContent = “I Love My Crew!!!“;
// const newli4 = document.createElement(“li”);
// newli4.textContent = “Occupation: Pirate King!!!“;
// newul.appendChild(newli1);
// newul.appendChild(newli2);
// newul.appendChild(newli3);
// newul.appendChild(newli4);
// document.body.appendChild(newul);
