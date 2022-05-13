import logo from './logo.svg';
import  Navbar from './components/Navbar/Navbar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Search from './components/Search/Search';

function App() {
 
  return (
  <MuiThemeProvider>
    <div className="App">
    <Navbar/>

    <Search/>
    </div>

  </MuiThemeProvider> 
  
  );
}

export default App;
