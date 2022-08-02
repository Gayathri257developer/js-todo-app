let block = document.querySelector("#block");
let title = document.querySelector("#title");
let boxes = document.querySelector(".task");
let next = document.querySelector("#nextpage");
let main = document.querySelector(".mainpage");
block.style.display="none";
next.style.display="none";

function added(){
  main.style.filter = 'blur(3px)';
  next.style.filter = 'blur(5px)';
  block.style.display = "block"; 
}

function closed(){
  block.style.display="none";
  main.style.filter = 'blur(0px)';
  next.style.filter = 'blur(0px)';
}

function uploadtask(){
  added();  
  block.innerHTML = `<div class="input One">
  <p>add new list</p>
  <input type="text" id="input1">
  <br>
  <button onclick="addtask()" id="btn2">Add</button>
  <button onclick="closed()" id="btn3">close</button>
  </div> `;
}

let count = 0;
function list() {  
    return count++;
}

function addtask(){
  title.style.display = 'none';
  closed();
  let id = list();
  const container = document.createElement('div');
  container.className = 'box';
  container.id = `boxId${id} ${id}`;
  boxes.appendChild(container);
  let value1 = document.querySelector("#input1").value;
  container.innerHTML = `
  <h5 id="title${id}"> ${value1} </h5>
  <hr>
  <ul type="none" id="myul${id}"> 
  </ul>
  <div class="footer">
  <i class="fa fas fa-trash" id="removebox${id}"></i>
  <i class="fa fas fa-plus-circle" id="addbox${id}"></i>
  </div>`;

  document.getElementById(`removebox${id}`).onclick = function(){
  container.remove();
  }

  document.getElementById(`addbox${id}`).onclick = function(){
    added();
      block.innerHTML = ` <div class="input One">
        <p>Add New Items</p>
        <input type="text" id="input2${id}">
        <br>
        <button id="btn2${id}" class="btn4">Add</button>
        <button onclick="closed()" id="btn3">close</button>
    </div>`;

    let countItems = 0;
function item() { 
  return countItems++;
}

  document.getElementById(`btn2${id}`).onclick = function () {
    let Items = item();
    closed();
    let value2 = document.getElementById(`input2${id}`).value; 
    const myli = document.createElement('li');
    myli.id = `item${Items}`;
    document.querySelector(`#myul${id}`).appendChild(myli);
    myli.innerHTML = `${value2} 
    <span id="mark${Items}"> Done </span>`
    const done = document.getElementById(`mark${Items}`);
    done.onclick = function(){
         const mdone = document.getElementById(`item${Items}`);
         mdone.className = "mark";
         done.style.display = 'none';
    }
  }
}

document.getElementById(`title${id}`).onclick = function () {
  next.style.display = 'block';
  main.style.display = 'none';
  next.style.display = 'block';
  document.querySelector('#selectedtrip').appendChild(container);
  document.querySelector('h2').innerText = value1;
  document.querySelector('#back').onclick = function () {
    next.style.display = 'none';
    main.style.display="block";
    boxes.insertBefore(container, boxes.children[id]);
  }
    const gotoHome = document.getElementById('goto');
      gotoHome.onclick = function () {
        boxes.insertBefore(container, boxes.children[id]); 
        added(); 
          block.innerHTML = `<div class="input One">
          <p>Add New List</p>
          <input type="text" name="addList"  id="input1"><br><br>
          <button onclick="addtask(), block1()" id="btn2">Add</button>
          <button onclick="closed()" id="btn3">close</button>
           </div>`;
      }
    }  
}

function block1(){
  main.style.display = 'block';
  next.style.display = 'none';
}