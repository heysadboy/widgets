import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers.'
    },
    {
        title: 'How do use React?',
        content: 'You use React by creating components.'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);

    let textStyle = {
        color: selected.value
    }

    return (
        <div>
            <Header />
            <div className="ui container">
                <Route path='/'>
                    <Accordion items={items} />
                </Route>
                <Route path='/list'>
                    <Search />
                </Route>
                <Route path='/dropdown'>
                    <Dropdown
                        label="Select a color"
                        options={options}
                        selected={selected}
                        onSelectedChange={setSelected}
                    />
                    <br />
                    <p style={textStyle}>{selected.value}</p>
                </Route>
                <Route path='/translate'>
                    <Translate />
                </Route>
            </div>
        </div>
    );
};