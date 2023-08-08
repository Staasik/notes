import styled from "styled-components";

export const HtmlWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-self:center;
`
export const Text = styled.div`
    width:auto;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-family: cursive;
`
export const Notes = styled.div`    
    width:90%;
    display:grid;
    border: 1px solid black;
    grid-template-columns: 1fr 2fr;
`
export const NotesList = styled.div`    
    display:grid;
    border: 1px solid black;
    gap: 22px;
    grid-auto-rows: 39px 38px 600px;
`
export const List = styled.div`    
    display: grid;
    grid-template-rows: repeat(6, 1fr); 
    overflow-y: auto;
    max-height: 600px;
    border: 1px solid black;
`
export const NotesDiv = styled.div`    
    display:grid;
    border: 1px solid black;
    grid-auto-rows: 100px 600px;
    gap: 22px;
    background-color:#FAFAD2;
`
export const NotesText = styled.textarea`    
    border: 1px solid black;
    padding: 10px;
    font-family: cursive;
    font-size: 20px;
    background-color:#FAFAD2;
`
export const NotesTitle = styled.textarea`  
    height: 100px;    
    border: 1px solid black;
    padding: 10px;
    font-family: cursive;
    font-size: 24px;
    background-color:#FFE4B5;
`
export const OneNotes = styled.div` 
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 120px;
    border: 1px solid black;
    align-items: center;
    background-color:#FFDAB9;
    padding: 10px;
`
export const OneNotesTitle = styled.div` 
    height: 60px;
    padding: 10px;
    font-family: cursive;
    font-size: 20px;
    cursor: pointer;
    align-items: center;
    width: 100%;
`
export const AddNotes = styled.div`    
    height: 40px;
    border: 1px solid black;
    padding: 10px;
    font-family: cursive;
    font-size: 24px;
    cursor: pointer;
    background-color:#FFE4B5;
`
export const SearchNotes = styled.textarea`    
    height: 40px;
    border: 1px solid black;
    padding: 10px;
    font-family: cursive;
    font-size: 20px;
    cursor: pointer;
    background-color:#FFE4B5;
`
export const Delete = styled.div`    
    height: 20px;
    border: 1px solid black;
    padding: 10px;
    font-family: cursive;
    font-size: 16px;
    cursor: pointer;
    background-color:#FFE4B5;
    text-align:center;
    width: 340px;
    width: 95%;
`
