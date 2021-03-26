import { Switch,Route  } from 'react-router-dom';
import Signup from '../pages/signup';
import Signin from '../pages/signin';


function AppRoute() {

    return(
      <Switch>
        <Route exact path="/" component={Signin}/>
        <Route exact path="/Signup" component={Signup}/>
      </Switch>

    )
    
}
export default AppRoute;