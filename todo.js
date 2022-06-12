const inputBox = document.querySelector(".inputField input");

inputBox.onKeyUp = () => {
  let UserEnteredValue = inputBox.value;
  if (UserEnteredValue.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
  //display the updated list
};

const addBtn = document.querySelector(".inputField button");

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
  addBtn.classList.remove("active");
};

// const deleteBtn = document.querySelector(".deleteBtn");
// const deleteAllBtn = document.querySelector(".deleteAllBtn");

function deleteTask(index) {
  let todoLists = todoLists.getItem("New Todo");
  listArray = JSON.parse(todoLists);
  listArray.splice(index, 1);
  todoLists.setItem("New Todo", JSON.stringify(todoLists));
  //display the updated list
}

deleteAllBtn.onclick = () => {
  listArray = [];
  todoLists.setItem("New Todo", JSON.stringify(todoLists));
  //display the updated list
};
