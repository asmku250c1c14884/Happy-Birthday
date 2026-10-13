import React, { useEffect, useState } from 'react'
import './App.css'
import './LoveLetter.css'
import './BookCanvas.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './layout/Layout'
import Home from './pages/Home'
import LoveLetter from './pages/LoveLetter'
import BlowCandles from './pages/BlowCandles'
import MemoryVault from './pages/MemoryVault'
import SisterAwards from './pages/SisterAwards'
import FortuneJar from './pages/FortuneJar'
import Test from './pages/Test'
import OpeningAnimation from './components/OpeningAnimation'
import Gate from './components/Gate'

const App = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='love-letter' element={<LoveLetter />}></Route>
        <Route path='wish' element={<BlowCandles />}></Route>
        <Route path='memories' element={<MemoryVault />}></Route>
        <Route path='awards' element={<SisterAwards />}></Route>
        <Route path='fortune' element={<FortuneJar />}></Route>
        <Route path='test' element={<Test />}></Route>
      </Route>
    </Route>
  ))


  // ------------------Cake loader 
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [animateOut, setAnimateOut] = useState(false); // New state for animation

  useEffect(() => {
    if (isUnlocked) {
      // Start cake animation timers ONLY after unlocking
      const timer1 = setTimeout(() => setAnimateOut(true), 8400);
      const timer2 = setTimeout(() => setLoading(false), 9000);
      const timer3 = setTimeout(() => setShowContent(true), 8600);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isUnlocked]);

  return (
    <>
      {!isUnlocked ? (
        <Gate onUnlock={() => setIsUnlocked(true)} />
      ) : (
        <>
          {loading && <OpeningAnimation animateOut={animateOut} />}
          {showContent && <RouterProvider router={MyRoute} />}
        </>
      )}
    </>
  )
}

export default App