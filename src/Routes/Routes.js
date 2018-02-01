import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import StandardLayout from 'layouts/StandardLayout'
import Home from 'views/Home'
import DetailedView from 'views/DetailedView'

function Routes() {
  return (
    <StandardLayout>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/favourites' exact component={DetailedView}/>
        <Route path='/gem/:gemName' exact component={DetailedView}/>
        <Redirect to="/"/>
      </Switch>
    </StandardLayout>
  )
}

export default Routes