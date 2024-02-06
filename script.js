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

    updateHeader("Backlog", backlogHeader, backlogColumn);
    updateHeader("Ready", readyHeader, readyColumn);
    updateHeader("In Progress", inProgressHeader, inProgressColumn);
    updateHeader("In Review", inReviewHeader, inReviewColumn);
}

// Function : Update Header
const updateHeader = (title, header, column) => {
    const taskCount = column.children.length;
    const taskCondition = taskCount > 1 ? "Tasks" : "Task";
    header.innerHTML = `${title} (<span style="color: #FF9A23">${taskCount} ${taskCondition}</span>)`;
}

updateTasksCount();