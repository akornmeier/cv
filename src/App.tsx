import { MailIcon } from '@heroicons/react/outline';
import SideBar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-screen-xl">
        <main
          id="wrapper"
          className="flex flex-col sm:flex-row sm:m-12 shadow-2xl"
        >
          <SideBar />
          <Content />
        </main>
      </div>
    </div>
  );
}

export default App;
