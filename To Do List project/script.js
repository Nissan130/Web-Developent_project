const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
     if(inputBox.value == '')
        {
            alert("You must write something");
        }
        else{
            //add new list element after input
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            //displaying a cross icon 
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = "";
        saveData();
}

//check a item 
listContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN")
            {
                e.target.parentElement.remove();
                saveData();
            }

}, false);

//save the data in local storage
function saveData(){

    localStorage.setItem("data", listContainer.innerHTML);
}


// display all the tasks after reopen the website
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
