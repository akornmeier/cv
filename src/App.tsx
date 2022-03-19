import SideBar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-screen-xl">
        <main
          id="wrapper"
          className="flex flex-col sm:flex-row my-0 mx-0 lg:my-6 lg:mx-8 shadow-2xl"
        >
          <SideBar />
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
