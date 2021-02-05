import React from 'react';
import { Contract, Header } from './components'
import { Switch, Route } from 'react-router-dom'
import { Home, Login } from './pages'
import { useSelector } from 'react-redux';
import { IRootReducer } from './interface/interface';
function App() {

  const dataMain = useSelector(({ data }: IRootReducer) => data)
  return (
    <div className="App">
      <Header />
      <div className="inner">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contract' render={() => <Contract dataMain={dataMain.contractualData} dataType={'contractualData'} valueType={'contractual'} />} />
          <Route path='/onetime' render={() => <Contract dataMain={dataMain.oneTimeData} dataType={'oneTimeData'} valueType={'oneTime'} />} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
