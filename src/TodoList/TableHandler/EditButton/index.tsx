import {useContext} from 'react';
import {TableHandlerService} from '../useTableHandlerService';
import {Button, Input, Modal} from 'antd';
import useEditButtonService from './useEditButtonService';

export default function EditButton() {
    const tableHandlerService = useContext(TableHandlerService);
    const editButtonService = useEditButtonService(tableHandlerService.currentItem.description);
    return (
        <Button
            type='primary'
            onClick={() => {
                Modal.confirm({
                    title: `编辑${tableHandlerService.title}`,
                    content: (
                        <Input
                            defaultValue={tableHandlerService.currentItem.description}
                            onInput={(e: any) => {
                                editButtonService.setDescription(e.target.value);
                            }}
                        />
                    ),
                    onOk: () => {
                        tableHandlerService.setCurrentItemWithDescription(editButtonService.description);
                    }
                });
            }}
        >
            编辑
        </Button>
    );
}
