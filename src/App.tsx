import React from 'react';
import { Contract, Header } from './components'
import { Switch, Route } from 'react-router-dom'
import { Home, Login, SignIn } from './pages'
import { useSelector } from 'react-redux';
import { RootReducer } from './redux/reducers/rootReducer';
function App() {

  const dataMain = useSelector(({ data }: RootReducer) => data)
  return (
    <div className="App">
      <Header />
      <div className="inner">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contract' render={() => <Contract dataMain={dataMain.contractualData} dataType={'contractualData'} valueType={'contractual'} />} />
          <Route path='/onetime' render={() => <Contract dataMain={dataMain.oneTimeData} dataType={'oneTimeData'} valueType={'oneTime'} />} />
          <Route path='/login' component={Login} />
          <Route path='/auth' component={SignIn} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
