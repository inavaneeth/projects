const addBtn = document.getElementById("addBtn");
const taskinput = document.getElementById("taskinput");
const list = document.getElementById("list");

function addTask() {
    const taskText = taskinput.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const delBtn = document.createElement("delBtn");
    delBtn.textContent = "X";
    delBtn.classList.add("delete-btn")

    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    delBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);

    taskinput.value = "";
}
addBtn.addEventListener("click", addTask);

taskinput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});