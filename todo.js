const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoLists = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onKeyUp = () => {
  let UserEnteredValue = inputBox.value;
  if (UserEnteredValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
  //display the updated list
  showTasks();
};

addBtn.onclick = () => {
  let UserEnteredValue = inputBox.value;
  let todoLists = todoLists.getItem("New Todo");
  if (todoLists == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(todoLists);
  }
  listArray.push(UserEnteredValue);
  todoLists.setItem("New Todo", JSON.stringify(todoLists));
  //display the updated list
  showTasks();
  addBtn.classList.remove("active");
};

function showTasks() {
  let todoLists = todoLists.getItem("New Todo");
  if (todoLists == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(todoLists);
  }

  const pending = document.querySelector(".pending");
  pendingNum.textContent = listArray.length;
  if (listArray.length > 0) {
    deleteAllBtn.classList.add("active");
  } else {
    deleteAllBtn.classList.remove("active");
  }

  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });

  todoLists.innerHTML = newLiTag;
  inputBox.value = "";
}

// const deleteBtn = document.querySelector(".deleteBtn");
// const deleteAllBtn = document.querySelector(".deleteAllBtn");

function deleteTask(index) {
  let todoLists = todoLists.getItem("New Todo");
  listArray = JSON.parse(todoLists);
  listArray.splice(index, 1);
  todoLists.setItem("New Todo", JSON.stringify(todoLists));
  //display the updated list
  showTasks();
}

deleteAllBtn.onclick = () => {
  listArray = [];
  todoLists.setItem("New Todo", JSON.stringify(todoLists));
  //display the updated list
  showTasks();
};
