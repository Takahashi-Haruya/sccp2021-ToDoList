const button = document.getElementById("button");
const input = document.getElementById("input");
const list = document.getElementById("list");
let num = 0;

function getTask(){
	const task = input.value;
	input.value = "";
  if(task == "" || num >= 10) return;
  num++;
  const listitem = document.createElement("li");
  const reButton = document.createElement("button");
  
  listitem.innerText = task;
  list.appendChild(listitem);
  
  reButton.innerText = "消去";
  reButton.onclick = function(){
  	const task2re = reButton.closest("li");
    list.removeChild(task2re);
    num--
  }
  listitem.append(reButton);
}

button.addEventListener("click", getTask);
