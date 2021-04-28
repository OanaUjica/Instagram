import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// client side rendered app: react (cra)
    // -> connect to database which is Firebase (cloud db)
    // -> external dependencies: react-loading-skeleton
    // -> styling: Tailwing

// architecture = client-side rendered application build on top of create-react-app

// seed file = will populate the db with users and links to images

// folder structure
    // src
        // -> components, 
        // -> constants,
        // -> context,
        // -> helpers, 
        // -> hooks,
        // -> pages,
        // -> lib (firebase is going to live in here), 
        // -> services (firebase functions in here) 
        // -> styles (tailwind's folder (app & tailwind))