import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import reactifyWc from 'reactify-wc';

const Textfield = reactifyWc('app-textfield');
const Button = reactifyWc('app-button');

function App() {
    const [title, setTitle] = useState();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-wcs">
                    <h3>{title || 'Will show when you type'}</h3>
                    <Textfield
                        placeholder="Type something"
                        onInput={({ originalTarget: { value } }) => setTitle(value)}
                    />
                    <Button
                        data={{
                            label: 'Show me',
                            action: () => alert('Hello from React')
                        }}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
