import {PropsWithChildren} from 'react';
import {useHistory} from 'react-router-dom';
import {Layout, Menu} from 'antd';

export default function DashLayout(props: PropsWithChildren<{}>) {
    const history = useHistory();
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout.Header>
                <Menu
                    theme='dark'
                    mode='horizontal'
                    defaultSelectedKeys={['home']}
                    onClick={(e) => {
                        history.push(`/dash/${e.key}`);
                    }}>
                    <Menu.Item key='home'>首页</Menu.Item>
                    <Menu.Item key='test'>测试页面</Menu.Item>
                </Menu>
            </Layout.Header>
            <Layout.Content style={{padding: '1em'}}>
                {props.children}
            </Layout.Content>
        </Layout>
    );
}
