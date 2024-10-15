import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold mb-2">About This App</h2>
        <p className="mb-4 text-justify">
          This Todo application is built using Redux Toolkit, which helps manage state efficiently. 
          The main components include:
        </p>
        <ul className="list-disc list-inside mb-4 text-justify">
          <li>Store: Centralized storage for all the application state.</li>
          <li>Reducers: Functions that determine how the state should change in response to actions.</li>
          <li>useSelector: A hook to read data from the Redux store state.</li>
          <li>useDispatch: A hook to dispatch actions to the Redux store.</li>
        </ul>
        <p className="text-justify">
          By using these features, the app provides a seamless experience for managing tasks.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
