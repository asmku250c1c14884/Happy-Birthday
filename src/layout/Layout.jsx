import React from 'react'
import { Outlet } from 'react-router'
import HeartTransition from '../components/HeartTransition'
import MusicPlayer from '../components/MusicPlayer'
import ClickHeartEffect from '../components/ClickHeartEffect'
import NavigationDock from '../components/NavigationDock'

const Layout = () => {
  return (
    <>
        <ClickHeartEffect />
        <MusicPlayer />
        <HeartTransition />
        <Outlet />
        <NavigationDock />
    </>
  )
}

export default Layout