// Components Importing
import { Header, HeaderLeftSide, LargeSidebar, SideBar } from './components';

// Pages Importing
import { Home, Shorts } from './pages';

// Dependencies Importing
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App () {

  const [ isSmallScreenOpened, setIsSmallScreenOpened ] = useState(false);
  const [ isLargeScreenOpened, setIsLargeScreenOpened ] = useState(true);

  const toggle = () => {
    if (isSmallScreen()) {
      setIsSmallScreenOpened(s => !s);
      console.log(`SmallScreenState: ${isSmallScreenOpened}`);
    } else {
      setIsLargeScreenOpened(l => !l);
      console.log(`LargeScreenState: ${isLargeScreenOpened}`);
    }
  };

  const close = () => {
    if (isSmallScreen()) {
      setIsSmallScreenOpened(false);
    } else {
      setIsLargeScreenOpened(false);
    }
  };

  const isSmallScreen = () => {
    if (window.innerWidth < 1024) return true;
    return false;
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isSmallScreen()) {
        setIsSmallScreenOpened(false);
        console.log('closed');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener(handleResize);
    };
  }, []);

  return (
    <main className={ `relative max-w-screen grid grid-rows-[54px_1fr] ${isLargeScreenOpened ? 'largeSidebarActivedPageGrid' : 'smallSidebarActivedPageGrid'} max-[792px]:grid-cols-1 font-normal font-Roboto smallscreen-sidebar-opened` } style={ { scrollbarGutter: 'stable' } }>

      <div className="row-span-1 col-span-2 sticky top-0 z-10 max-w-screen " >
        <Header toggle={ toggle } />
      </div>

      <div>
        {/* Overlay and Sidebar */ }
        <div
          className={ `fixed w-screen h-screen top-0 left-0 z-50 transition-opacity duration-300 ${isSmallScreenOpened ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }` }
        >
          {/* Sidebar */ }
          <div
            className={ `bg-[#0f0f0f] max-w-[240px] z-50 transition-transform duration-300 transform ${isSmallScreenOpened ? 'translate-x-0' : '-translate-x-full'
              }` }
          >
            <div className="w-[240px] flex px-4 items-center max-h-[54px]">
              <HeaderLeftSide />
            </div>
            <LargeSidebar />
          </div>

          {/* Background Overlay */ }
          <div
            className="bg-black/50 w-screen h-screen fixed top-0 -z-10"
            onClick={ () => close() }
          />
        </div>

        {/* Persistent Sidebar (For larger screens) */ }
        <div
          className={ `col-span-1 sticky sidebar-height top-[54px] left-0 box-borders max-[792px]:hidden bg-[#0f0f0f]` }
        >
          <SideBar isLargeScreenOpened={ isLargeScreenOpened } />
        </div>
      </div>



      <div className="col-start-2 col-end-2 max-[792px]:col-start-1 row-start-2 row-end-2 max-[792px]:max-w-screen" style={ { scrollbarGutter: "stable" } }>
        <Routes>
          <Route element={ <Home /> } path="/"></Route>
          <Route element={ <Shorts /> } path="/shorts"></Route>
        </Routes>
      </div>

    </main >
  );
};

export default App;


