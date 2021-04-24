import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// client side rendered app: react (cra)
    // -> connect to database which is Firebase
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