import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactInfo from "./components/ContactInfo";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContactInfo
              fullname={'John Doe'}
              email={'john.doe@example.com'}
              phone={'+1 555 5555'}
              address={'692 Main St.\n' +
                  'Elyria, OH 44035'}
            />);