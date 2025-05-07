import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VideoCall from './VideoCall.tsx';
import RecordedWorkshop from './RecordedWorkshop.tsx';
import LiveWorkshop from './LiveWorkshop.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LiveWorkshop />
);

