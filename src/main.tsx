import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifAPP } from './GifApp';
import { TagComp } from './TagComp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GifAPP />
    <TagComp />
  </React.StrictMode>,
)
