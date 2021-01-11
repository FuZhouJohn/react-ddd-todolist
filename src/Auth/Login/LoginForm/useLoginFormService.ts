import {useCallback, useContext} from 'react';
import {AuthService} from '../../useAuthServiec';
import {useHistory} from 'react-router-dom';
import {Form, message} from 'antd';
import {useRequest} from 'ahooks';
import {mockRequestData} from '../../../Tools/mockRequest';

export default function useLoginFormService() {
    // 注入
    const authService = useContext(AuthService);
    const history = useHistory();
    // 表单
    const [form] = Form.useForm();
    // 请求
    const requestLogin = useRequest(
        (formData) =>
            mockRequestData({
                token: 'this is token',
                userInfo: {name: 'zhuang', formData}
            }),
        {
            manual: true,
            debounceInterval: 300,
            onSuccess: (response) => {
                message.success('登录成功');
                authService.setToken(response.token);
                authService.setUserInfo(response.userInfo);
                history.push('/dash/home');
            }
        }
    );
    // 约束依赖，request 是以 data 为变更标识，run 则不会
    const runRequestLogin = requestLogin.run;
    // 发送请求
    const handleSubmit = useCallback(
        (formData)=>{
            runRequestLogin(formData)
        },
        [runRequestLogin]
    )
    return {
        form,
        loading:requestLogin.loading,
        handleSubmit
    }
}
