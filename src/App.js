import React, { useEffect, useState } from 'react';
import Message from './Message';
import './style.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    console.log(`the new state of email is ${email}`);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    setIsUserLoggedIn(false);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <p>{email}</p>
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="elon@spacex.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {isUserLoggedIn == false ? (
          <input type="submit" value="submit" onSubmit={handleSubmit} />
        ) : null}
      </form>
      {isUserLoggedIn == true ? (
        <button onClick={handleLogout}>Lougout</button>
      ) : (
        <button>Log in</button>
      )}
      {isUserLoggedIn == true ? <Message /> : null}
    </div>
  );
}
