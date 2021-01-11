import {useContext} from 'react';
import {TableHandlerService} from './useTableHandlerService';
import {Button} from 'antd';

export default function DeleteButton() {
    const tableHandlerService = useContext(TableHandlerService);
    return (
        <Button
            type='primary'
            onClick={tableHandlerService.deleteCurrentItem}
            danger>
            删除
        </Button>
    );

}
