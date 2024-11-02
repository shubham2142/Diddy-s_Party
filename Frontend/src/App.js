import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';
import Profile from './pages/Profile';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-4">
                    <Switch>
                        <Route path="/projects" component={Projects} />
                        <Route path="/tasks" component={Tasks} />
                        <Route path="/profile" component={Profile} />
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;
