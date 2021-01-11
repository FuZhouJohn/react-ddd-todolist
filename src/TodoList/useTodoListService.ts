import { useLocalStorageState, useMount } from "ahooks";
import { useEffect, useState } from "react";
import getServiceToken from "../Tools/getServiceToken";

export const TodoListService = getServiceToken(useTodoListService)

export interface TodoDate {
    title: string
    description: string
}

export default function useTodoListService() {
    const [todoList, setTodoList] = useState<TodoDate[]>([])
    const [stored, setStored] = useLocalStorageState<TodoDate[]>("todoList", [])
    useMount(() => {
        if (stored) {
            setTodoList(stored)
        }
    })
    useEffect(()=>{
        if(todoList!==stored){
            setStored(todoList)
        }
    },[todoList,setStored,stored])
    return {
        todoList,
        setTodoList
    }
}
