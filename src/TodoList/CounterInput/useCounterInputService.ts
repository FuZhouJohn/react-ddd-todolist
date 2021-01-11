import { Form, message } from "antd";
import { useCallback, useContext } from "react";
import { TodoListService } from "../useTodoListService";

export default function useCounterInputService(){
    const [form] = Form.useForm()
    const todoListService = useContext(TodoListService)
    // 依赖约束
    const handleSubmit = useCallback(
        (formData)=>{
            const exist = todoListService.todoList.find(
                (el) => el.title === formData.title
            )
            if(exist) {
                message.warning("当前任务已存在")
                return
            }
            todoListService.setTodoList((data)=>[...data,formData])
            form.resetFields()
        },
        [todoListService,form]
    )
    return {
        form,
        handleSubmit
    }
}