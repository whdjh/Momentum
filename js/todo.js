const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = [];
// const를 사용하면 이전에 사용했던 todo들이 삭제되어서 let으로 바꿈
// toDos는 배열과 다름

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
	// JSON.stringify() 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환
}

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	// return이 true(기본값임. 변경가능)면 toDo를 반환
	// 따라서 li.id가 아니면 넘어가고 li.id면 삭제된다.
	saveToDos();
}

function paintToDo(newTodo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");

	li.id = newTodo.id;
	span.innerText = newTodo.text;
	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null) {
	//js가 사용할 수 있게 만들어줌
	const parsedToDos = JSON.parse(saveToDos);
	parsedToDos.forEach((item) => console.log("this is the turn of", item));
}