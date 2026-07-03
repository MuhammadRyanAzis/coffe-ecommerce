
import { useState } from 'react';
import './index.css';
import Home from './pages/Home';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <div style={{ animation: 'fadeIn 1s var(--transition-smooth) forwards' }}>
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
