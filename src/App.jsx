// Components Importing
import { Header, SideBar } from './components';

// // Contexts Importing
// import { SideBarContext } from './contexts/sideBarContext';


// Pages Importing
import { Home, Shorts } from './pages';

// Dependencies Importing
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App () {

  function detectOverflow () {
    document.querySelectorAll('*').forEach(function (el) {
      if (el.scrollWidth > el.clientWidth) {
        console.log('Overflowing element:', el);
      }
    });
  }
  detectOverflow();

  const [ isSidebarCollapsed, setIsSidebarCollapsed ] = useState(false);

  const isSmallScreen = () => {
    if (window.innerWidth <= 1230) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const handler = () => {
      if (isSmallScreen()) {
        return setIsSidebarCollapsed(true);
      } else {
        if (isSidebarCollapsed) return setIsSidebarCollapsed(true);
        setIsSidebarCollapsed(false);
      }
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [ isSidebarCollapsed ]);

  // const windowResizeEventListener = window.addEventListener('resize', () => {
  // });
  // window.removeEventListener('resize', windowResizeEventListener);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <main className={ `max-w-screen grid grid-rows-[54px_1fr] grid-cols-[${isSidebarCollapsed ? '240' : '72'}px_1fr] max-[792px]:grid-cols-1 font-normal font-Roboto` } style={ { scrollbarGutter: 'stable' } }>

      <div className="row-span-1 col-span-2 sticky top-0 z-10 max-w-screen" >
        <Header toggleSidebar={ toggleSidebar } />
      </div>

      <div className={ `row-span-2 col-span-1 sticky sidebar-height top-[54px] left-0 box-borders max-[792px]:hidden` }>
        <SideBar isSidebarCollapsed={ isSidebarCollapsed } />
      </div>

      <div className="col-start-2 col-end-2 max-[792px]:col-start-1 row-start-2 row-end-2 max-[792px]:w-[90%] max-[792px]:mx-auto max-[792px]:max-w-screen">
        <Routes>
          <Route element={ <Home /> } path="/"></Route>
          <Route element={ <Shorts /> } path="/shorts"></Route>
        </Routes>
      </div>

    </main>
  );
};

export default App;


