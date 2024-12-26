let input = document.getElementById("input");
let add = document.getElementById("add");
let tasks = document.getElementById("tasks");
let removeAll = document.getElementById("removeAll");

add.addEventListener("click", () => {
  let text = input.value;

  if (text.length > 0) {
    let task = document.createElement("div");
    task.classList.add("task");
    let span = document.createElement("span");
    span.innerHTML = text;
    task.appendChild(span);
    let actions = document.createElement("div");
    actions.classList.add("actions");
    let done = document.createElement("button");
    done.classList.add("done");
    done.innerHTML = "Done";
    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = "Remove";
    actions.appendChild(done);
    actions.appendChild(remove);
    task.appendChild(actions);
    tasks.appendChild(task);
    input.value = "";
    done.addEventListener("click", () => {
      span.style.textDecoration = "line-through";
    });
    remove.addEventListener("click", () => {
      tasks.removeChild(task);
    });
  } else {
    alert("Please enter a task");
  }
});
removeAll.addEventListener("click", () => {
  if (tasks.children.length === 0) {
    alert("No tasks to remove");
  } else {
    tasks.innerHTML = "";
  }
});
