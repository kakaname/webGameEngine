import './css/App.css';
import SidebarLeft from './UI/Sidebar/SidebarLeft';
import init, { barker } from './rust/main/levels/levels';

function App() {
  document.body.style.overflow = "hidden";
  init().then(() => {
  

  });
    return (
      <div className="App">
          <SidebarLeft />
      </div>
    );

}

export default App;
