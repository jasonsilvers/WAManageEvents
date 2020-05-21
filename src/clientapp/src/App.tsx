import React from 'react';
import {Redirect, Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import {ThemeProvider, CSSReset} from "@chakra-ui/core"
import './App.css';
import {AppProvider} from "./context/AppContext";
import Hello from "./components/Hello";
import TeachersList from "./components/TeachersList";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
    return (
        <ThemeProvider>
            <CSSReset />
            <AppProvider>
                <Router basename={process.env.PUBLIC_URL}>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact={true} component={Hello}/>
                        <Route path="/teachers" exact={true} component={TeachersList}/>
                    </Switch>
                </Router>
            </AppProvider>
        </ThemeProvider>
    );
}

export default App;
