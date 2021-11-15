import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getGreeting } from './app/greetingsActions';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const getGreetingAction = bindActionCreators(getGreeting, dispatch);
  const greeting = useSelector((state) => state.greetingReducer);
  useEffect(() => {
    getGreetingAction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Greeting message={greeting.message} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
