import './App.css';

import {Routes, Route, useNavigate} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contacts');
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  };

  return (
    <div>
      <div>
        <button onClick={navigateHome}>Home</button>
        <hr />
        <button onClick={navigateToContacts}>Contacts</button>

        <Routes>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Contacts() {
  return <h2>Contacts</h2>;
}
