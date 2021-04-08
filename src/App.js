import AComponent from'./component/AComponent';
import { useUserAge} from './component/context';



function App() {
  const {user1, user2} = useUserAge();


  return (
    <>

      <AComponent />
      <button>hello</button>
     
    </>
  );
}

export default App;


