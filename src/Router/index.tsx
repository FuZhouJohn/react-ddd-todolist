import {Switch, Route, Redirect} from 'react-router-dom';
import DashRoutes from './DashRoutes';
import Login from '../Auth/Login';

export default function Router() {
    return (
        <Switch>
            <Route path='/' exact>
                <Redirect to={{pathname:'/dash/home'}}></Redirect>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path='/dash'>
                <DashRoutes/>
            </Route>
        </Switch>
    );
}
