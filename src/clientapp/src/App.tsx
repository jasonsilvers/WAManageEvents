import React from 'react';
import {Redirect, Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import './App.css';
import {AppProvider} from "./context/AppContext";
import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import EventsList from "./components/EventsList";
import EventDetails from "./components/EventDetails";

const App: React.FC = () => {
    return (
            <AppProvider>
                <Router basename={process.env.PUBLIC_URL}>
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact={true}>
                            <Hello/>
                        </Route>
                        <Route path="/events" exact={true}>
                            <EventsList/>
                        </Route>
                        <Route path="/events/:id">
                            <EventDetails/>
                        </Route>
                    </Switch>
                </Router>

            </AppProvider>
    )
        ;
}

export default App;
