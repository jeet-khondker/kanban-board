// Function : Task Drop Function
const drop = (event) => {
    event.preventDefault();
    let taskID = event.dataTransfer.getData("text");
}

// Function : Allow Task to Drop Function
const allowdrop = (event) => {
    event.preventDefault();
}

// Function : Task Drag Function
const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
}