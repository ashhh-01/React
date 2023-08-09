import { useState,useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
const initialTodos=[
    {id:1,text:"Walk the dog", completed:false},
    {id:2,text:"Walk the cat", completed:true},
    {id:3,text:"Walk the cat1", completed:false},
    {id:4,text:"Walk the cat2", completed:false},
    {id:5,text:"Walk the cat3", completed:false},
    {id:6,text:"Walk the cat4", completed:false},
]


export default function TodoList(){
    const getInitialData=()=>{
        const data = JSON.parse(localStorage.getItem("todos"))
        if(!data) return []
       return data
       }
    const [todos,setTodos]=useState(getInitialData)
    useEffect(()=>{
        localStorage.setItem(
            "todos",
            JSON.stringify(todos)
        )
    },[todos])
    const removeTodo=(id)=>{
        setTodos((prevTodo)=>{
            return prevTodo.filter(t=>t.id!=id)
        })
    }
    
    const toggle=(id)=>{
        setTodos(prevtodo=>{
           return prevtodo.map(todo=>{
                if(todo.id===id){
                    return {...todo, completed:!todo.completed}
                }else{
                    return todo
                }
            })
        })
    }
    const addTodo=(text)=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{text:text,id:crypto.randomUUID(), completed:false}]
        })
    }
    return (
        <Box sx={{display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        m:3}}>
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
         Todos
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} remove={removeTodo} toggle={()=>toggle(todo.id)}/>
      })}
        <TodoForm addTodo={addTodo}/>
        </List>
        </Box>
    )

}
