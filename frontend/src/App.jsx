import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import HostView from './pages/HostView';
import {Layout} from './Layout';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";
import Loading from './components/Loading'
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import AppContextProvider from './AppContextProvider';

function App() {

    const {isLoading} = useAuth0();
    const [currentTask, setCurrentTask] = useState({});
    
    if (isLoading) {
        return <Loading/>;
    }
    // const { getAccessTokenSilently } = useAuth0();
    // const getToken = async() => {
    //   const token = await getAccessTokenSilently();
    //   console.log(token);
    // }

    const HV = ()=>{
        return (
            <HostView currentTask={currentTask} setCurrentTask={setCurrentTask} />
        )

    }
    const DASH = ()=>{
        return(
            <Dashboard currentTask={currentTask} setCurrentTask={setCurrentTask} />
        )
    }
    
    return (
        <React.Fragment>
            <NavBar/>
            {/* <button onClick={getToken}>Gettoken</button> */}
            <Layout>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/Project-A' component={DASH}/>
                        <Route exact path='/delegate' component={HV}/>
                    </Switch>
                </Router>

            </Layout>
        </React.Fragment>

    );
}

export default withAuthenticationRequired(App, {
    onRedirecting: () => <Loading/>,
});
