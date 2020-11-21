import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { persistor } from './redux/storeConfig/store'
import LoginContainer from './containers/login/LoginContainer'
import PostsContainer from './containers/posts/PostsContainer'
import PostDetailContainer from './containers/posts/PostDetailContainer'
import EditProfileContainer from './containers/profile/EditProfileContainer'
import { ProtectedRoute } from './utils/protected-route/ProtectedRoute'

import 'antd/dist/antd.css';


const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <ProtectedRoute path="/profile" component={EditProfileContainer} />
          <ProtectedRoute path="/posts/:postId" component={PostDetailContainer} />
          <ProtectedRoute path="/posts" component={PostsContainer} />
          <Route path="/" component={LoginContainer} />
        </Switch>
      </Router>
    </PersistGate>
  );
}

export default App;
