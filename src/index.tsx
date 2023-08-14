import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Router from './router';
import 'antd/dist/reset.css';

const App = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

export default App;
