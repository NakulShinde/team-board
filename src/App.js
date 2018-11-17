import React, {Component} from 'react';

import TeamBoard from './components/TeamBoard'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">TestBirds</header>
                <TeamBoard></TeamBoard>
            </div>
        );
    }
}

export default App;
