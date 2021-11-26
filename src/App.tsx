import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './components/Homepage';
const App = () => {

  return (

    <div>
      < BrowserRouter >
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter >
    </div >
  )

}
export default App;
