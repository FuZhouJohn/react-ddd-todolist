import {PropsWithoutRef, useEffect} from 'react';
import useTableHandlerService, {TableHandlerService} from './useTableHandlerService';
import {Space} from 'antd';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

export default function TableHandler(props: PropsWithoutRef<{ title: string }>) {
    const tableHandlerService = useTableHandlerService();
    useEffect(() => {
        tableHandlerService.setTitle(props.title);
    }, [props, tableHandlerService]);
    return (
        <TableHandlerService.Provider value={tableHandlerService}>
            <Space>
                <DeleteButton/>
                <EditButton/>
            </Space>
        </TableHandlerService.Provider>
    );

}

