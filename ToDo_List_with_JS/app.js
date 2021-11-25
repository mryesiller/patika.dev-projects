//Variables
const noteForm = document.getElementById("form");
const noteInput = document.getElementById("todo_input");
const noteSubmit = document.getElementById("note-submit");
const notes = document.getElementById("myTodo");
const ul_list = document.querySelector('ul');
const element_success = document.getElementById("liveToast");
const element_danger = document.getElementById("liveToastdanger");
const Toast_success = new bootstrap.Toast(element_success);
const Toast_danger = new bootstrap.Toast(element_danger);

//Stoarage setup
let notesStorage = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

//Checked todos  
ul_list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//Toast button settings
const exit_success=()=>{
  Toast_success.hide()
}
const exit_danger=()=>{
  Toast_danger.hide()
}

//Eventlistener on form
noteForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if(noteInput.value==='' || check(noteInput.value)==false){
      Toast_danger.show()
    }
    else{
      notesStorage.push(noteInput.value);
      localStorage.setItem("notes", JSON.stringify(notesStorage));
      listBuilder(noteInput.value);
      Toast_success.show()
    }
    
    noteInput.value = "";    
});

//Create element function
const listBuilder = (text) => {
    const note = document.createElement("li");
    note.innerHTML = text + ' <span class="close" onclick="deleteNote(this)">x</span>';
    notes.appendChild(note);    
};

//Get list of todos from localstorage
const getNotes = JSON.parse(localStorage.getItem("notes"));
    getNotes.forEach((note) => {
    listBuilder(note);
});

//Delete todos
const deleteNote = (btn) => {
    let el = btn.parentNode;
    const index = [...el.parentElement.children].indexOf(el);
    notesStorage.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    el.remove();
}

//Space check function between strings
const check=(text)=>{
    return text.indexOf(' ')=== -1
}