// Function : Task Drop Function
const drop = (event) => {
    event.preventDefault();
    let taskID = event.dataTransfer.getData("text");
    
    // Prevent Drop Event to trigger of a Task on another Task
    if (event.target.id.includes("task")) return;

    event.target.appendChild(document.getElementById(taskID));
}

// Function : Allow Task to Drop Function
const allowdrop = (event) => {
    event.preventDefault();
}

// Function : Task Drag Function
const drag = (event) => {
    event.dataTransfer.setData("text", event.target.id);
}


// Function : Update Task(s) Count
const updateTasksCount = () => {
    const backlogColumn = document.getElementById("backlog");
    const readyColumn = document.getElementById("ready");
    const inProgressColumn = document.getElementById("in-progress");
    const inReviewedColumn = document.getElementById("in-review");

    const backlogHeader = document.getElementById("backlog-header");
    const readyHeader = document.getElementById("ready-header");
    const inProgressHeader = document.getElementById("progress-header");
    const inReviewedHeader = document.getElementById("review-header");

    backlogHeader.innerText = `${ backlogHeader.innerText.split(" ")[0]}${ backlogColumn.children.length } ${ backlogColumn.children.length > 1 ? "Tasks" : "Task" }`;
}

updateTasksCount();