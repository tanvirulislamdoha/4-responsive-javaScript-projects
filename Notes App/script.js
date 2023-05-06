const NotesContainer = document.querySelector(".notes-container");
const addBtn = document.querySelector(".add");

const notes = JSON.parse(localStorage.getItem("notes"));

if(notes){
    notes.forEach(note => {
        addNewNote(note);
    })
}

addBtn.addEventListener("click", ()=>{
    addNewNote();
})

function addNewNote(text = ''){
    const note = document.createElement("div");
    note.classList.add(".notes");
    note.innerHTML = `
            <div class="notes">
            <div class="tools">
            <button class="edit"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
            <button class="remove" ><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="main-text ${text ? "" : "hidden"}">
            
            </div>
            <textarea class="text-area ${text ? "hidden" : ""}"></textarea>
        </div>
    `

    const editBtn = note.querySelector(".edit");
    const removeBtn = note.querySelector(".remove");

    const mainEl = note.querySelector(".main-text");
    const textArea = note.querySelector(".text-area");

    textArea.value = text;
    mainEl.innerHTML = marked(text);

    editBtn.addEventListener("click", ()=>{
        mainEl.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })

    removeBtn.addEventListener("click", ()=>{
        note.remove();
        updateElements();
    })

    textArea.addEventListener("input", (e)=>{
        const {value} = e.target;
        const shower = marked(value);
        mainEl.innerHTML = shower;

        updateElements();
    });

    NotesContainer.append(note);
}

function updateElements(){
    const noteText = document.querySelectorAll(".text-area");

    const notes = [];

    noteText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}









{/* <div class="notes">
        <div class="tools">
          <button class="edit"><i class="fa-sharp fa-solid fa-pen-to-square"></i></button>
          <button class="remove" ><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="main-text hidden">
          
        </div>
        <textarea class="text-area"></textarea>
      </div> */}