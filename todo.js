// const inputBox = document.querySelector(".inputField input");
// const addBtn = document.querySelector(".inputField button");
// const todoList = document.querySelector(".todoList");
// const deleteAllBtn = document.querySelector(".footer button");
// const pendingTasks = document.querySelector(".pendingTasks");

// inputBox.onKeyUp = () => {
//   let insertedValue = inputBox.value;
//   if (insertedValue.trim() != 0) {
//     addBtn.classList.add("active");
//   } else {
//     addBtn.classList.remove("active");
//   }
// };

// showTasks();

// addBtn.onclick = () => {
//   let insertedValue = inputBox.value;

//   let getLocalStorageData = localStorage.getItem("New Todo");
//   if (getLocalStorageData == null) {
//     listArray = [];
//   } else {
//     listArray = JSON.parse(getLocalStorageData);
//   }

//   listArray.push(insertedValue);
//   localStorage.setItem("New Todo", JSON.stringify(listArray));
//   showTasks();
//   addBtn.classList.remove("active");
// };

// function showTasks() {
//   let getLocalStorageData = localStorage.getItem("New Todo");
//   if (getLocalStorageData == null) {
//     listArray = [];
//   } else {
//     listArray = JSON.parse(getLocalStorageData);
//   }

//   let newLiTag = "";
//   listArray.forEach((element, index) => {
//     newTagLi += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
//   });
//   todoList.innerHTML = newLiTag;
//   inputBox.value;
// }

// function deleteTask() {
//   let getLocalStorageData = localStorage.getItem("New Todo");
//   listArray = JSON.parse(getLocalStorageData);
//   listArray.splice(index, 1);
//   localStorage.setItem("New Todo", JSON.stringify(listArray));
//   showTasks();
// }

// deleteAllBtn.onclick = () => {
//   listArray = [];
//   localStorage.setItem("New Todo", JSON.stringify(listArray));
//   showTasks();
// };
