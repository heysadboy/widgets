import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
};