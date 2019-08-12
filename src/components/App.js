import React from 'react';
import Layout from './layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../global.css'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>

          {/* <Route exact path = ''component={}/> */}

        </Switch>

      </Layout>
    </BrowserRouter>
  )

}
export default App;