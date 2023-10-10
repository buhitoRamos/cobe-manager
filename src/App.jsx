import React, {useState, useCallback, useMemo} from 'react'
import Login from "./pages/login";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App=() => {
  const [user, setUser] = useState({})

  const onSetUser = useCallback( (userData)=> {
    setUser(user => ( {...user, ...userData}) )

},[setUser])

  const data =  useMemo(()=> (
    {
        user
    }
  ), [user])

  const actions = useMemo(()=> (
  {
      onSetUser
  }
  ), [onSetUser])


  return (
    <Router>
    <Switch>
        <Route exact path="/">
           <Login data={data} actions={actions}/>
        </Route>
    </Switch>
</Router>
  );
}

export default App;
