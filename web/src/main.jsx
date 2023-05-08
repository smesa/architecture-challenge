import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./infrastructure/ui/containers/App";
import rootReducer from "./infrastructure/store/reducers/rootReducers";
import FileDataApi from "./infrastructure/api/FileDataApi";
import FileDataService from "./application/services/FileDataServices";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ fileDataService: new FileDataService(new FileDataApi()) }))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


