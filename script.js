// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");


// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    //Block for individually deleting item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function loadJSONlist(){

    var list = "{\"messages\": [{\"message\": \"Lorem ipsum dolor\"},{\"message\": \"sit amet\"},{\"message\": \"consectetur adipiscing elit\"}]}";
    var listJSON = JSON.parse(list);

        //TODO: Use for loop here: BUG - i increments by 2 so cannot use for loop
        newListItem(listJSON.messages[0]["message"]);
        newListItem(listJSON.messages[1]["message"]);
        newListItem(listJSON.messages[2]["message"]);
}

function newListItem(listItem){
    var li = document.createElement("li");
    var t = document.createTextNode(listItem);
    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";

    //Creating close element
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    //called when clicking close
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function clearForm(){
    document.getElementById("myInput").value = "";
}

function clearMessages() {
    document.getElementById("myUL").innerHTML = null;
}