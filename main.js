let noteNumber = 0;
let globalNoteTitle;
let globalNoteText;

let addNewNote = function(){
    let getMainNoteSection = document.querySelector(".main-section");
    let getaddNewNoteSection = document.querySelector(".addNewNote");
    let newNoteBox = document.createElement("nav");
    newNoteBox.className = "notes notes" + noteNumber;

    newNoteBox.innerHTML = '<input type="checkbox" id="select'+ noteNumber +'" name="notesss">'
                            +'<nav class="box">'
                                +'<h1 onclick="openNote('+ noteNumber +')">empty note...</h1>'
                            +'</nav>';

    getMainNoteSection.insertBefore(newNoteBox, getaddNewNoteSection);
    

    let getNoteOpenSection = document.querySelector(".note-open-section");
    let newNoteSection = document.createElement("nav");
    newNoteSection.className = "open-notes openNotes" + noteNumber;
    
    newNoteSection.innerHTML = '<nav class="noteTitle">'
                                +'<input type="text" id="myNoteTitle'+ noteNumber +'" value="empty note...">'
                            +'</nav>'
                            +'<nav class="closeNote">'
                                +'<h2 onclick="cancel('+ noteNumber +')">cancel</h2>'
                            +'</nav>'
                            +'<nav class="text-box">'
                                +'<textarea  id="myNoteActualText'+ noteNumber +'" name="actual-notes">nothing to see here'
                            +'</textarea>'
                            +'</nav>'
                            +'<nav class="save-changes">'
                                +'<h2 onclick="save('+ noteNumber +')">save changes</h2>'
                            +'</nav>';
    getNoteOpenSection.appendChild(newNoteSection);
    ++noteNumber;
}

let openNote = function(noteNumToOpen){
    let getNoteOpenSection = document.querySelector(".note-open-section"); 
    let getNoteFromNoteSection = document.querySelector(".openNotes" + noteNumToOpen);

    getNoteOpenSection.style.visibility = "visible";
    getNoteFromNoteSection.style.visibility = "visible";
    globalNoteTitle = document.getElementById("myNoteTitle"+ noteNumToOpen).value;
    globalNoteText = document.getElementById("myNoteActualText" + noteNumToOpen).value;
}

let cancel = function(noteNumToClose){
    let getNoteOpenSection = document.querySelector(".note-open-section"); 
    let getNoteFromNoteSection = document.querySelector(".openNotes" + noteNumToClose);
    let tempNoteTitle = document.getElementById("myNoteTitle"+ noteNumToClose);
    let tempNoteText = document.getElementById("myNoteActualText" + noteNumToClose);

    getNoteOpenSection.style.visibility = "hidden";
    getNoteFromNoteSection.style.visibility = "hidden";
    tempNoteTitle.value = globalNoteTitle;
    tempNoteText.value = globalNoteText;
}

let save = function(noteNumToSave){
    let getNoteTitle = document.querySelector(".notes" + noteNumToSave+ " .box h1");
    let getNoteOpenSection = document.querySelector(".note-open-section"); 
    let getNoteFromNoteSection = document.querySelector(".openNotes" + noteNumToSave);

    getNoteTitle.innerHTML = document.getElementById("myNoteTitle"+ noteNumToSave).value;
    getNoteOpenSection.style.visibility = "hidden";
    getNoteFromNoteSection.style.visibility = "hidden";
}

let editNotes = function(){
    for(let i = 0; i <= noteNumber; ++i){
        let checkBox = document.getElementById("select" + i);
        checkBox.classList.toggle('active');
    }

    let getSearchButton = document.querySelector(".search");
    let getCancelSearchEditButton = document.querySelector(".cancel");
}