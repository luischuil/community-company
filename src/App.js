import { PersistGate } from 'redux-persist/integration/react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { persistor } from './redux/storeConfig/store'
import Login from './components/login/Login'
import Posts from './components/posts/Posts'
import PostDetail from './components/posts/PostDetail'
import EditProfile from './components/profile/EditProfile'
import { ProtectedRoute } from './utils/protected-route/ProtectedRoute';

import 'antd/dist/antd.css';


const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Switch>
          <ProtectedRoute path="/profile" component={EditProfile} />
          <ProtectedRoute path="/posts/:postId" component={PostDetail} />
          <ProtectedRoute path="/posts" component={Posts} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </PersistGate>
  );
}

export default App;
