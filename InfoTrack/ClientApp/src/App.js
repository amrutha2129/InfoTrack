import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home';


export default class App extends React.Component {
    render() {
        return (
            <Home />

            );
    }
}
  

//<Route exact path='/' component={Home} />

    ////<Route path='/counter' component={Counter} />
    ////<Route path='/fetchdata/:startDateIndex?' component={FetchData} />