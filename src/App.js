import { Switch,Route  } from 'react-router-dom';
// import Signup from './pages/signup';
// import Signin from './pages/signin';
import AppRoute from "./routes/approute";

function App() {
  return (
    <div className="App">
      {/* {state.apploading && <h4>application loading.....</h4>}
      {state.initializeapp && */}
        <AppRoute/>

      
      {/* <Signin/>
      <Signup/> */}
      
    </div>
  );
}

export default App;
