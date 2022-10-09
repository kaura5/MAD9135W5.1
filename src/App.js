import AppHeader from './AppHeader';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import './App.css';
import NavBar from './NavBar';
import Project from './Project';
import ProjectList from './ProjectList';
import NotFound from './NotFound';
import { Routes, Route, useRoutes, Navigate } from 'react-router-dom';

function App() {

  const element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/projects",
      children: [
        { index: true, element: <Projects /> },
        { path: ":id", element: <Project /> }
      ]
    }
  ])

  return (
    <div className="App">
      <AppHeader />
      <NavBar />
      {/* {element} */}
      <aside>
      <Routes>
        <Route />
      </Routes>
      </aside>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Navigate to="/projects" />} />
        <Route path="/projects" element={<ProjectList />}>
          <Route index element={<Projects />} />
          <Route path=":x" element={<Project />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
