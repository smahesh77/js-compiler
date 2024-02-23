import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerSliceStateType {
    fullCode:{
        html:string,
        css:string,
        javascript:string,
    };
   
    currentLanguage:"html"|"css"|"javascript",
}

const initialState: CompilerSliceStateType  = {
    fullCode:{
        html:`<!DOCTYPE html>
<html lang="en">  
    <body>
        <div id="container">
          <h1>Todo List</h1>
          <input type="text" id="taskInput" placeholder="Enter task...">
          <button id="addTaskButton">Add Task</button>
          <ul id="taskList"></ul>
        </div>
        
        <script src="script.js"></script>
    </body>
</html>
        `,
        css:`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}
#container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
h1 {
    text-align: center;
}
          
input[type="text"] {
    width: calc(100% - 80px);
    padding: 10px;
    margin-bottom: 10px;
}
  
button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  li:last-child {
    border-bottom: none;
  }
          `,
        javascript:`document.getElementById('addTaskButton').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput');
            var taskText = taskInput.value.trim();
          
            if (taskText !== '') {
              var taskList = document.getElementById('taskList');
              var taskItem = document.createElement('li');
              taskItem.textContent = taskText;
              taskList.appendChild(taskItem);
              taskInput.value = '';
            } else {
              alert('Please enter a task!');
            }
          });
          `,
    },
    currentLanguage:"html",
}

const compilerSlice = createSlice({
    name:"compilerSlice",
    initialState,
    reducers:{
        updateCurrentLanguage:(state, action:PayloadAction<CompilerSliceStateType ["currentLanguage"]>) => {// this is to make sure only string is sent as payload
            state.currentLanguage = action.payload
        },
        updateCodeValue:(state, action:PayloadAction<string>) =>{
                // gets the code send ans assings it to the currentlang obj
            state.fullCode[state.currentLanguage] = action.payload
            // this step just sets the code passed by the payload to the corresponding langcode value in redux ig
        },
        
    }
})

export default compilerSlice.reducer;

export const {updateCurrentLanguage, updateCodeValue} = compilerSlice.actions