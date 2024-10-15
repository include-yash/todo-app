// src/App.jsx
import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Footer from './components/Footer'; // Import Footer
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root" className="min-h-screen bg-gray-900 p-6 flex flex-col">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-10">
        Todo Application
      </h1>
      
      <AddTodo />
      <div className="flex-grow"> {/* Allow Todos to expand */}
        <Todos />
      </div>
      <Footer /> 
    </div>
  );
}

export default App;
