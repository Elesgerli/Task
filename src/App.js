
import './App.scss';
import { DataContextProvider } from './context/context';
import ROUTER from './routes/index.routes';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const routes = createBrowserRouter(ROUTER)
  return (
    <div className="App">
      <DataContextProvider>

        {/* <Helmet>
          <link rel="shortcut icon" href={icon} type="image/x-icon" />
        </Helmet> */}
        <RouterProvider router={routes} />

        <Toaster toastOptions={{
          style: {
            zIndex: '10000000000000000000'
          }
        }} position='bottom-left' reverseOrder={false} />
      </DataContextProvider>
    </div>
  );
}

export default App;
