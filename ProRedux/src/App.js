import React from 'react'
import { Provider } from "react-redux";
import store from './store'
import Feed from './components/Feed/Index';

import Sidebar from './components/Sidebar'
import Video from './components/Video'
import CarShop from './components/CarShop/Index';

const App = () => {
  return (
    <div className="container">
      <Provider store={ store }>
            <Video />
           <Sidebar />
           <Feed />
           <CarShop />
      </Provider>
    </div>
  )
}

export default App
