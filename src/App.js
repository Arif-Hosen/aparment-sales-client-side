import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MoreApartments from './pages/MoreApartments/MoreApartments';
import PlaceBooking from './pages/PlaceBooking/PlaceBooking';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

// color: #005E9E
// font-family:Playfair Display, Sans-serif
// background: '#abb8c3',,,#abb8c31a
// footer background: #D1D2D4

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/HOME'>
              <Home></Home>
            </Route>
            <Route path='/APARTMENTS'>
              <MoreApartments></MoreApartments>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/placebooking/:id'>
              <PlaceBooking></PlaceBooking>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
