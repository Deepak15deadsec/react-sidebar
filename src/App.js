import React from 'react';
import * as s from './App.styles';
import * as Palette from './colors'

// Components
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'


const App = () => {
  // const backgroundImage = 'images/cwall.jpg';
  
  const sidebarHeader = {
    fullName: 'title',
    shortName: 'title'
  };
  const menuItems = [
    {name: 'Welcome', to: '/', icon: '/icons/home.svg', subMenuItems: [] },
    {name: 'Employee', to: '/Employee', icon: '/icons/about.svg', subMenuItems: [] },
    {name: 'Admin', to: '/Admin', icon: '/icons/contacts.svg', 
      subMenuItems: [
        { name: 'Merchant', to: '/Merchant'}
      ] },
    {name: 'Orders', to: '/blog', icon: '/icons/blog.svg', subMenuItems: [] },
    
  ];

  const fonts = {
    header: 'ZCOOL KuaiLe',
    menu: 'Poppins'
  }

  return (
    <s.App>
      <Sidebar
        // backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.swampy}
      />
      <MainView />
    </s.App>
  );
}

export default App;
