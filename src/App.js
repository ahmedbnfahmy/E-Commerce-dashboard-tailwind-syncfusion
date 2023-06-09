import React, {useEffect,} from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import{FiSettings} from 'react-icons/fi'
import{TooltipComponent} from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../src/context/contextProvider'
import './app.css'
import {Navbar,Footer,Sidebar,ThemeSetings} from './components'
import {Ecommerce,Order,Calender,Employees,Editor,Kanban,Customer,ColorPicker,Area,Bar,Finencial,ColorMapping,Line,Pie,Pyramid,Stacked} from './pages'

const App = () => {
// const activeMenu=true;
const {activeMenu, themeSetings,setthemeSetings,currentColor ,currentMode}=useStateContext()

  return (
    <div className={currentMode === 'Dark'? 'dark':''}>
        <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
            <div className='fixed right-4 bottom-4 ' style={{zIndex:'1000'}}>
            <TooltipComponent content='settings' position='Top'>
                <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
                style={{background:currentColor,borderRadius:'50%'}} 
                onClick={()=>setthemeSetings(true)}
                >
                    <FiSettings/>
                </button>
            </TooltipComponent>
            </div>
{activeMenu ? (
    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
        <Sidebar/>
</div>
):(
    <div className='w-0 dark:bg-secondary-dark-bg '>
        <Sidebar/>
    </div>
    )}
    <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
    ${activeMenu ?
    'md:ml-72':'flex-2'}`}>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
    <Navbar/>
        </div>
    


<div>
        {themeSetings && <ThemeSetings/>} 
        {/* means comp appear when themeSetings is true */}
    <Routes>
        {/* DashBoard */}
        <Route path='/' element={<Ecommerce />}/>
        <Route path='/ecommerce' element={<Ecommerce />}/>
        {/* pages */}
        <Route path='/orders' element={<Order />}/>
        <Route path='/employees' element={<Employees />}/>
        <Route path='/customers' element={<Customer />}/>
        {/* apps */}
        <Route path='/kanban' element={<Kanban />}/>
        <Route path='/editor' element={<Editor />}/>
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/color-picker' element={<ColorPicker />}/>
        {/* charts*/}
        <Route path='/line' element={<Line />}/>
        <Route path='/Area' element={<Area />}/>
        <Route path='/bar' element={<Bar />}/>
        <Route path='/pie' element={<Pie />}/>
        <Route path='/finencial' element={<Finencial />}/>
        <Route path='/color-mapping' element={<Color-mapping />}/>
        <Route path='/pyramid' element={<Pyramid />}/>
        <Route path='/stacked' element={<Stacked />}/>



    </Routes>
</div>


 </div>
       
 </div>
       
        </BrowserRouter>
    </div>
  )
}

export default App