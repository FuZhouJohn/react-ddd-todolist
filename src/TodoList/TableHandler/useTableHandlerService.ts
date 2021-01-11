import {useCallback, useMemo} from 'react';
import {useContext, useState} from 'react';
import {TodoListService} from '../useTodoListService';
import getServiceToken from '../../Tools/getServiceToken';

export const TableHandlerService = getServiceToken(useTableHandlerService)

export default function useTableHandlerService() {
    const [title, setTitle] = useState('');
    const todoListService = useContext(TodoListService);
    const currentItem = useMemo(
        () =>
            todoListService.todoList.find(el => el.title === title) || {
                title: '',
                description: ''
            },
        [title, todoListService]
    );
    const setCurrentItemWithDescription = useCallback(
        (description: string) => {
            todoListService.setTodoList(data => {
                return data.map(el => {
                    if (el.title === title) {
                        return {...el, description};
                    }
                    return el;
                });
            });
        },
        [todoListService, title]
    );
    const deleteCurrentItem = useCallback(() => {
        todoListService.setTodoList(data => data.filter(el => el.title !== title));
    }, [title, todoListService]);
    return {
        title,
        setTitle,
        currentItem,
        setCurrentItemWithDescription,
        deleteCurrentItem
    };
}
