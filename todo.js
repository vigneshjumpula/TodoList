// let todoItemsContainer = document.getElementById("todoItemsContainer");
// let addTodoButton = document.getElementById("addTodoButton");
// let saveTodoButton = document.getElementById("saveTodoButton");

// function getTodoListFromLocalStorage() {
//   let stringifiedTodoList = localStorage.getItem("todoList");
//   let parsedTodoList = JSON.parse(stringifiedTodoList);
//   if (parsedTodoList === null) {
//     return [];
//   } else {
//     return parsedTodoList;
//   }
// }

// let todoList = getTodoListFromLocalStorage();
// let todosCount = todoList.length;

// saveTodoButton.onclick = function() {
//   localStorage.setItem("todoList", JSON.stringify(todoList));
// };

// function onAddTodo() {
//   let userInputElement = document.getElementById("todoUserInput");
//   let userInputValue = userInputElement.value;

//   if (userInputValue === "") {
//     alert("Enter Valid Text");
//     return;
//   }

//   todosCount = todosCount + 1;

//   let newTodo = {
//     text: userInputValue,
//     uniqueNo: todosCount,
//     isChecked: false
//   };
//   todoList.push(newTodo);
//   createAndAppendTodo(newTodo);
//   userInputElement.value = "";
// }

// addTodoButton.onclick = function() {
//   onAddTodo();
// };

// function onTodoStatusChange(checkboxId, labelId, todoId) {
//   let checkboxElement = document.getElementById(checkboxId);
//   let labelElement = document.getElementById(labelId);
//   labelElement.classList.toggle("checked");

//   let todoObjectIndex = todoList.findIndex(function(eachTodo) {
//     let eachTodoId = "todo" + eachTodo.uniqueNo;

//     if (eachTodoId === todoId) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   let todoObject = todoList[todoObjectIndex];

//   if(todoObject.isChecked === true){
//     todoObject.isChecked = false;
//   } else {
//     todoObject.isChecked = true;
//   }

// }    

// function onDeleteTodo(todoId) {
//   let todoElement = document.getElementById(todoId);
//   todoItemsContainer.removeChild(todoElement);

//   let deleteElementIndex = todoList.findIndex(function(eachTodo) {
//     let eachTodoId = "todo" + eachTodo.uniqueNo;
//     if (eachTodoId === todoId) {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   todoList.splice(deleteElementIndex, 1);
// }

// function createAndAppendTodo(todo) {
//   let todoId = "todo" + todo.uniqueNo;
//   let checkboxId = "checkbox" + todo.uniqueNo;
//   let labelId = "label" + todo.uniqueNo;

//   let todoElement = document.createElement("li");
//   todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
//   todoElement.id = todoId;
//   todoItemsContainer.appendChild(todoElement);

//   let inputElement = document.createElement("input");
//   inputElement.type = "checkbox";
//   inputElement.id = checkboxId;
//   inputElement.checked = todo.isChecked;

//   inputElement.onclick = function () {
//     onTodoStatusChange(checkboxId, labelId, todoId);
//   };

//   inputElement.classList.add("checkbox-input");
//   todoElement.appendChild(inputElement);

//   let labelContainer = document.createElement("div");
//   labelContainer.classList.add("label-container", "d-flex", "flex-row");
//   todoElement.appendChild(labelContainer);

//   let labelElement = document.createElement("label");
//   labelElement.setAttribute("for", checkboxId);
//   labelElement.id = labelId;
//   labelElement.classList.add("checkbox-label");
//   labelElement.textContent = todo.text;
//   if (todo.isChecked === true) {
//     labelElement.classList.add("checked");
//   }
//   labelContainer.appendChild(labelElement);

//   let deleteIconContainer = document.createElement("div");
//   deleteIconContainer.classList.add("delete-icon-container");
//   labelContainer.appendChild(deleteIconContainer);

//   let deleteIcon = document.createElement("i");
//   deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

//   deleteIcon.onclick = function () {
//     onDeleteTodo(todoId);
//   };

//   deleteIconContainer.appendChild(deleteIcon);
// }

// for (let todo of todoList) {
//   createAndAppendTodo(todo);
// }




let todoItemsContainer1 =document.getElementById("todoItemsContainer");
let addTodoButton=document.getElementById("addTodoButton");
let saveTodoButton=document.getElementById("saveTodoButton");
let count=0;


function getTodoListFromLocalStorage() {
    let stringifiedTodoList = localStorage.getItem("todolist");
    let parsedTodoList = JSON.parse(stringifiedTodoList);
    if (parsedTodoList === null) {
        return [];
    } else {
        return parsedTodoList;
    }
}
let todolist= getTodoListFromLocalStorage();
let todocount=todolist.length;



saveTodoButton.onclick = function() {
  localStorage.setItem("todolist", JSON.stringify(todolist));
}

function onTodoStatusChange(inputId,labelId,todoId){
    console.log("hi");
    let inputELementId=document.getElementById(inputId);
    let labelElementId=document.getElementById(labelId);
    console.log(labelElementId.isChecked);
    labelElementId.classList.toggle("checked");

    let todoindex=todolist.findIndex(function(todo){
        return todoId==="todo"+todo.uniqueId;
    });
    
    if(todolist[todoindex].isChecked===true){
        todolist[todoindex].isChecked==false;
    }
    else{
        todolist[todoindex].isChecked=true;
    }

}

function onDeleteTodo(todoId){
    let todoElementId=document.getElementById(todoId);
    todoItemsContainer1.removeChild(todoElementId);
    let index=todolist.findIndex(function(eachtodo){
        return  todoId==="todo"+eachtodo.uniqueId;
    });
    todolist.splice(index,1);


}



function createAndAppendTodo(todo){
    let inputId="input"+todo.uniqueId;
    let labelId="label"+todo.uniqueId;
    let  todoId="todo"+todo.uniqueId;
    let todoElement=document.createElement("li");
    todoElement.classList.add("todo-item-container","d-flex","flex-row");
    todoElement.id=todoId;
    todoItemsContainer.appendChild(todoElement);

    let inputElement=document.createElement("input");
    inputElement.type="checkbox";
    inputElement.id=inputId;
    inputElement.classList.add("checkbox-input","d-flex" ,"flex-row");
    inputElement.checked = todo.isChecked;
    inputElement.onclick=function(){
        onTodoStatusChange(inputId,labelId,todoId);
    };
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement=document.createElement("label");
    labelElement.id=labelId;
    labelElement.setAttribute("for",inputId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent=todo.text;
    if (todo.isChecked === true) {
            labelElement.classList.add("checked");
          }
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    // let deleteIcon = document.createElement("i");
    // deleteIcon.classList.add("far","fa-trash-alt","delete-icon");
    // deleteIcon.onclick = function() {
    //     onDeleteTodo(todoId);
    // };
    // deleteIconContainer.appendChild(deleteIcon);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteIcon.onclick = function() {
        onDeleteTodo(todoId);
    };

    deleteIconContainer.appendChild(deleteIcon);
    
}

addTodoButton.onclick=function(){
    let userinput=document.getElementById("todoUserInput");
    let userinputvalue=userinput.value;
    console.log(userinputvalue);
    if(userinputvalue==""){
        alert("Enter Valid Text");
        return;
    }
    todocount=todocount+1;
    let todo={
        text :userinputvalue,
        uniqueId : todocount,
        isChecked :false,
    }
    todolist.push(todo);
    createAndAppendTodo(todo);
    userinput.value="";
}

for(let todo of todolist){
    createAndAppendTodo(todo);
}
