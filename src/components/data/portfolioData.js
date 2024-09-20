import hangman from '../../assets/hangman.png';
import xoGame from '../../assets/xo.png';
import toDoList from '../../assets/to-do-list.jpg';

export const portfolioData = [
    {
        img: hangman,
        summary: 'One of my react projects, a hangman game, guessed words are in english.',
        property1: 'Has local storage',
        property2: 'Counts score, you have 6 lives and shows the word if you run out of lives',
        link: 'https://tomasban1.github.io/hangman-react/',
    },
    {
        img: xoGame,
        summary: 'A simple Tic-tac-toe game I made with object oriented programing, simple, but fun to play',
        property1: 'Has localstorage',
        property2: 'Counts result, still working on upgrading it when I have free time',
        link: 'https://tomasban1.github.io/tic-tac-toe/',
    },
    {
        img: toDoList,
        summary: 'A to do list project',
        property1: 'Adding new tasks, labeling them, sorting.',
        property2: 'Full CRUID functionality, add, update, delete',
        link: 'https://tomasban1.github.io/todo/',
    },
]