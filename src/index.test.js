import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

jest.mock('react-dom', () => ({ createRoot: jest.fn(), render: jest.fn() }));
jest.mock('./reportWebVitals');

describe('Index', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('./index.js');
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(div);
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      div
    );
  });

  it('calls reportWebVitals', () => {
    require('./index.js');
    expect(reportWebVitals).toHaveBeenCalled();
  });
});