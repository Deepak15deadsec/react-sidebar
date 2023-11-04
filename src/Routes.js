import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from './components/MainView/Home/Home';
import Employee from './components/MainView/Employee/Employee';
import Admin from './components/MainView/Destinations/Admin';
import Country from './components/MainView/Destinations/Subs/Subs'
import Blog from './components/MainView/Blog/Blog';
import Services from './components/MainView/Services/Services';
import Contacts from './components/MainView/Contacts/Contacts';
import Subs from './components/MainView/Destinations/Subs/Subs';
import Merchant from './components/MainView/Destinations/Subs/Merchant/Merchant';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Employee' component={Employee} />
      <Route exact path='/Admin/Merchant' component={Merchant} />
      
      <Route exact path='/blog' component={Blog} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/contacts' component={Contacts} />
    </Switch>
  )
}

export default Routes