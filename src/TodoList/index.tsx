import CounterInput from './CounterInput';
import useTodoListService, {TodoListService, TodoDate} from './useTodoListService';
import {Table} from 'antd';
import TableHandler from './TableHandler';

export default function TodoList() {
    const todoListService = useTodoListService();
    return (
        <TodoListService.Provider value={todoListService}>
            <CounterInput></CounterInput>
            <Table
                dataSource={todoListService.todoList}
                columns={[
                    {title: '标题', dataIndex: 'title'},
                    {title: '详情', dataIndex: 'description'},
                    {
                        title: '操作', render: (res: TodoDate) => {
                            return <TableHandler title={res.title}/>
                        }
                    }
                ]}
                rowKey='title'
            />
        </TodoListService.Provider>
    );
}
