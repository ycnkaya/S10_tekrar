import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { myStore } from './redux/myStore';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const myClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={myClient}>
    <Provider store={myStore}>
      <App />
    </Provider>
    <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
);
