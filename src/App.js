
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
   
   <div className='d-flex align-item-center justify-conent-center w-100 flex-column' style={{height:'100vh'}}>
    <div   className='d-flex align-item-center justify-conent-center p-5 roundrd flex-column' style={{backgroundColor:'black'}}>
      <Counter/>
    </div>
   </div>

   
  );
}

export default App;
