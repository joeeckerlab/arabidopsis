import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import '../Dashboard/DashboardElements.css';
import { registerLicense } from '@syncfusion/ej2-base';
import {Sidebar, Navbar, ThemeSettings} from '../DashboardComponents';
import {Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers,
    Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line} from '../Dashboard/index';
import { useStateContext } from '../contexts/ContextProvider';

// Registering Syncfusion license key
registerLicense('ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkJhXX5XdXZRRGZVWEw=');

/*TODO: Remove currentMode and the dark mode.*/
const DashboardPage = () => {
    const {activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentMode} = useStateContext();

    return (
        <div className={currentMode==='Dark' ? 'dark'
            : ''}>
            {/*<Router>*/}
            <div className='flex relative dark:bg-main-dark-bg'>
                <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
                    <TooltipComponent content='Settings' position='Top'>
                        <button type="button"
                                className="text-3xl p-3
                                    hover:drop-shadow-xl
                                    hover:bg-light-gray
                                    text-white"
                                style={{background:"#01bf71", borderRadius:"50%"}}
                                onClick={() => setThemeSettings(true)}>
                            <FiSettings/>
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className="w-72 fixed sidebar
                        dark:bg-secondary-dark-bg
                        bg-white">
                        <Sidebar/>
                    </div>
                ) : (
                    <div className="w-0
                        dark:bg-secondary-dark-bg">
                        <Sidebar/>
                    </div>

                )}
                <div className={
                    `dark:bg-main-dark-bg bg-main-bg
                        min-h-screen w-full ${activeMenu ?
                        `md:ml-72` : `flex-2`}`
                }>
                    <div className="fixed md:static
                        bg-main-bg dark:bg-main-dark-bg
                        navbar w-full">
                        <Navbar/>
                    </div>


                    {/*TODO: 1. Modify the links to match the atlas needs. 2. Maybe change this part to be connected with the genome browser.*/}
                    <div>
                        {themeSettings && (<ThemeSettings />)}

                        <Routes>
                            {/* dashboard  */}
                            {/*<Route path="/" element={(<Ecommerce />)} />*/}
                            <Route path="/genes" element={(<Ecommerce />)} />
                            <Route path="/organs" element={<Ecommerce />} />
                            <Route path="/merscope" element={<Ecommerce />} />


                            {/* pages  */}
                            <Route path="/annotations" element={<Orders />} />
                            <Route path="/contribute" element={<Employees />} />
                            <Route path="/customers" element={<Customers />} />

                            {/*/!* apps  *!/*/}
                            {/*<Route path="/kanban" element={<Kanban />} />*/}
                            {/*<Route path="/editor" element={<Editor />} />*/}
                            {/*<Route path="/calendar" element={<Calendar />} />*/}
                            {/*<Route path="/color-picker" element={<ColorPicker />} />*/}

                            {/*/!* charts  *!/*/}
                            {/*<Route path="/line" element={<Line />} />*/}
                            {/*<Route path="/area" element={<Area />} />*/}
                            {/*<Route path="/bar" element={<Bar />} />*/}
                            {/*<Route path="/pie" element={<Pie />} />*/}
                            {/*<Route path="/financial" element={<Financial />} />*/}
                            {/*<Route path="/color-mapping" element={<ColorMapping />} />*/}
                            {/*<Route path="/pyramid" element={<Pyramid />} />*/}
                            {/*<Route path="/stacked" element={<Stacked />} />*/}

                        </Routes>

                    </div>
                </div>

            </div>
            {/*</Router>*/}
        </div>
    )
}

export default DashboardPage;