import React from 'react';
import ReactDOM from 'react-dom';
import UserProfile from './components/UserProfile';
import './index.html';
import '../storage/data.json';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';
import './styles/-oldMain.css';

ReactDOM.render(<UserProfile />, document.querySelector('#app'));
