import React from 'react';
import Layout from './layout';
import Home from '../pages/HomePages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>

     <Route exact path = '/'component={Home}/> 

        </Switch>

      </Layout>
    </BrowserRouter>
  )

}
export default App;