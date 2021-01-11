import {PropsWithChildren} from 'react';
import styled from 'styled-components';
import {Card} from 'antd';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.08);
`

const Wrapper = styled(Card)`
  width: 400px;
  display: flex;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  .ant-card-body{
    width: 100%;
  }
`

export default function LoginWrapper(props:PropsWithChildren<{}>){
    return (
        <Container>
            <Wrapper>{props.children}</Wrapper>
        </Container>
    )
}
