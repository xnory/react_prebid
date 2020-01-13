import React from 'react';
import './App.css';
import config from './config';
import { AdvertisingProvider, AdvertisingSlot } from 'react-prebid';

function App() {
  return (
    <div className="App">
      <AdvertisingProvider config={config}>
        <header className="App-header">
          <img src="./react-logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Prebid</h1>
        </header>
        <p>
          This demo shows how to integrate advertising into your React
          application using Google Publisher Tags and Prebid.
        </p>
        <p>
          For more information, see the{' '}
          <a href="https://github.com/technology-ebay-de/react-prebid">
            react-prebid
          </a>{' '}
          readme on GitHub.
        </p>
        <h2>Slot 1</h2>
        <AdvertisingSlot id="div-gpt-ad-1460505748561-0" />
        <p>
          <strong>Please note:</strong> If you don't see an ad above 👆🏻, try
          opening the demo in a new window by clicking this button:
        </p>
        <img
          src="./open-in-new-window-button.png"
          alt="Open in new window button"
        />
      </AdvertisingProvider>
    </div>
  );
}

export default App;
