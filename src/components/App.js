import Navbar from './Navbar';
import Stories from './Stories';
import Post from './Post';
import Sidebar from './Sidebar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="corpo">
        <div className="esquerda">
          <Stories />
            <Post />
        </div>
        <Sidebar />

      </div>
    </div>
  );
}

export default App;
