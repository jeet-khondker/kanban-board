// Function : Task Drop Function
const drop = (event) => {
    event.preventDefault();
    let taskID = event.dataTransfer.getData("text");
    
    // Prevent Drop Event to trigger of a Task on another Task
    if (event.target.id.includes("task")) return;

    event.target.appendChild(document.getElementById(taskID));
    updateTasksCount();
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
    const inReviewColumn = document.getElementById("in-review");

    const backlogHeader = document.getElementById("backlog-header");
    const readyHeader = document.getElementById("ready-header");
    const inProgressHeader = document.getElementById("progress-header");
    const inReviewHeader = document.getElementById("review-header");

    const backlogTasksCount = backlogColumn.children.length;
    const backlogTaskCondition = backlogTasksCount > 1 ? "Tasks" : "Task";
    backlogHeader.innerText = `Backlog (${backlogTasksCount} ${backlogTaskCondition})`;

    const readyTasksCount = readyColumn.children.length;
    const readyTaskCondition = readyTasksCount > 1 ? "Tasks" : "Task";
    readyHeader.innerText = `Ready (${readyTasksCount} ${readyTaskCondition})`;

    const inProgressTasksCount = inProgressColumn.children.length;
    const inProgressTaskCondition = inProgressTasksCount > 1 ? "Tasks" : "Task";
    inProgressHeader.innerText = `In Progress (${inProgressTasksCount} ${inProgressTaskCondition})`;

    const inReviewTasksCount = inReviewColumn.children.length;
    const inReviewTaskCondition = inReviewTasksCount > 1 ? "Tasks" : "Task";
    inReviewHeader.innerText = `In Review (${inReviewTasksCount} ${inReviewTaskCondition})`;
}

updateTasksCount();