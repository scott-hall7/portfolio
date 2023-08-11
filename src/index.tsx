import ReactDOM from 'react-dom/client'
import App from './App';
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from './GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
)