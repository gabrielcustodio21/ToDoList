function addTask () {
    var input = document.getElementById("TextInput");
    var newTask = input.value;
    if (newTask != "") {
      var item = document.createElement("li");
      item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' + 
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + 
      '<input type="button" class="important" onclick="important(this.parentNode)" value="!"/>' +
      newTask;
      document.getElementById("tasks").appendChild(item);  
      
      input.value = "";
      input.placeholder = "What else should you do?"
    }
}
  
  
function markDone (item) { 
    if (item.className == 'finished'){
        item.className = 'li'
    }
    else{
      item.className = 'finished'
    }
}
  
function remove (item) {
    if (item.className == 'finished'){ 
        item.remove();
    }
    else{
        alert("You didn't mark this task as done.")
    }
}
  
function important (item) {
    if (item.className == 'important'){
        item.className = 'li';
    }
    else{
        item.className = 'important';
    }
}

function doAbout() {
  var author = document.getElementById("divabout");
  author.innerHTML = "Made by Gabriel Custodio.";
  author.className = "yellowbackground";    
} 
  
function clearAbout() {
  var about = document.getElementById("divabout");
  about.innerHTML = '<input type="button" onclick="doAbout()" value="About"></input>';
  about.className = "normalbackground";
}   