import {HtmlWrapper,Text,Notes,NotesList,NotesText,OneNotes,NotesTitle,NotesDiv,SearchNotes,AddNotes,List,Delete,OneNotesTitle} from "../../styles/Main";
import { useState, useEffect } from "react";


function Main() {
  const el_title = document.getElementById("title") as HTMLTextAreaElement;//титл записки
  const el_text = document.getElementById("text") as HTMLTextAreaElement;//текст записки
    
  const [items, setItems] = useState<{ title: string, text: string, date: string }[]>([]);//массив записок

  //для контроля массива записок
  useEffect(() => {
    const itemsString = localStorage.getItem("notes");
    const parsedItems = itemsString != null ? JSON.parse(itemsString) : [];
    setItems(parsedItems);
  }, []);

  //получаем сегодняшнюю дату
  function getDate(): string {
    const now = new Date();
    return now.toLocaleDateString("en-GB");
  }

  //сохраняем записи в локалсторедж
  function saveToLocalStorage() {
    var title = "";
    var text = "";
    if (el_title && el_text) {
        title = el_title.value;//титл
        text = el_text.value;//текст
    }
    const formattedDate = getDate();//дата
    //одна записка
    const newItem = {
        title: title,
        text: text,
        date: formattedDate
    };
    //массив записок из локалстореджа
    let itemsmass: { title: string, text: string, date: string }[] = JSON.parse(localStorage.getItem("notes") || "[]");
    itemsmass.push(newItem);//добавляем новую
    localStorage.setItem("notes", JSON.stringify(itemsmass));//меняем локалсторедж 
    setItems(itemsmass);//меняем состояние
  }

  //получаем отдельно титл записки
  function getFromLocalStorageNoteTitle(idx:number) {
    el_title.value=items[idx].title;
  }
  //получаем отдельно текст записки
  function getFromLocalStorageNoteText(idx:number) {
    el_text.value=items[idx].text;
  }

  //обнуляем текст и титл записки
  function getNull() {
    el_title.value="";
    el_text.value="";
  }

  //удаляем из локалстореджа записку
  function removeFromLocalStorage(idx: number) {
    const itemsString = localStorage.getItem("notes");
    if (itemsString) {
      const itemsmass = JSON.parse(itemsString);
      itemsmass.splice(idx, 1);
      localStorage.setItem("notes", JSON.stringify(itemsmass));
      setItems(itemsmass);
    }      
  }  

  const [searchValue, setSearchValue] = useState("");//состояние поиска записки

  //при поиске запускается функция поиска через 1 секунду после изменения значения searchValue
  useEffect(() => {
    const delay = setTimeout(() => {
      Search();
    }, 1000);
    return () => clearTimeout(delay);
  }, [searchValue]);

  //поиск записки по титлу
  function Search() {
    const el_search = document.getElementById("search") as HTMLTextAreaElement;
    const itemsString = localStorage.getItem("notes");
    let mass = []
    //если поиск пуст, отображаем весь массив записок из локалстореджа
    if(el_search.value==""){
        if (itemsString) {
            const itemsmass = JSON.parse(itemsString);
            setItems(itemsmass);
        }
    }
    //если в поиске есть символы, отображаем те титлы, которые включают в себя символы поиска
    else {
        if (itemsString) {
            const itemsmass = JSON.parse(itemsString);
            for(let i=0;i<itemsmass.length;i++){
              if(itemsmass[i].title.includes(el_search.value)){
                  mass.push(itemsmass[i])
              }
            }
            setItems(mass);
        }
    }  
  } 

  return (
    <HtmlWrapper>
        <Text>Notes</Text>
        <Notes>
            <NotesList>        
                <AddNotes onClick={()=> {saveToLocalStorage();getNull()}}>Add Notes</AddNotes>     
                <SearchNotes onChange={(e) => setSearchValue(e.target.value)} maxLength={25} id="search" placeholder="Search"></SearchNotes>            
                <List>      
                    {
                        items.map((el:any,idx:number)=>(
                        <OneNotes>
                            <OneNotesTitle key={idx} onClick={() => {getFromLocalStorageNoteTitle(idx); getFromLocalStorageNoteText(idx)}}>{idx+1 + " - " + el.title + " - " + getDate()}</OneNotesTitle>
                            <Delete onClick={() => {removeFromLocalStorage(idx);getNull()}}>Delete</Delete>
                        </OneNotes>))
                    }
                </List>
            </NotesList>
            <NotesDiv>
                <NotesTitle maxLength={100} id="title" placeholder="Note Title: "></NotesTitle>
                <NotesText maxLength={1200} id="text" placeholder="Text: "></NotesText>
            </NotesDiv>
        </Notes>
    </HtmlWrapper>
  );
}

export default Main;
