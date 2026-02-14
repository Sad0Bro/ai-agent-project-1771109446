import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Welcome to my personal website</h1>
          <p>This is a brief introduction to my website.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Personal Website</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));