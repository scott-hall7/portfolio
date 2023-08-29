import ReactDOM from 'react-dom/client'
import App from './App';
import { HashRouter } from "react-router-dom";
import GlobalStyle from './GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <GlobalStyle />
    <App />
  </HashRouter>
)