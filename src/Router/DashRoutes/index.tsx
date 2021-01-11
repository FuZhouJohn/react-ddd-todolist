import {useRouteMatch, Switch, Route} from 'react-router-dom';
import DashLayout from './DashLayout';
import {Space, Alert} from 'antd';
import TodoList from '../../TodoList';

export default function DashRoutes() {
    const {path} = useRouteMatch();
    return (
        <DashLayout>
            <Switch>
                <Route path={`${path}/home`}>
                    <Space direction='vertical' style={{width: '100%'}}>
                        <Alert message="来，我们演示一下怎么实现 TODO List"/>
                        <TodoList></TodoList>
                    </Space>
                </Route>
                <Route path={`${path}/test`}>
                    <Alert message="这是一个测试页面" type='warning'/>
                </Route>
            </Switch>
        </DashLayout>
    );
}
