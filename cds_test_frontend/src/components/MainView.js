/**
 * Main view, updates constantly to display different sections of pages
 * CSS by Boostrap 5.0
 * Author: Ruize Li
 */
 import React from "react";
 import Homepage from "./pages/Homepage";
 import Resources from "./pages/Resources";
 import Database from "./pages/Database";
 import About from "./pages/About";
 import Admin from "./Admin";
 import Shmh_1928_000 from "./pages/shang_hai_man_hua/1928_000";
 import Shmh_1928_001 from "./pages/shang_hai_man_hua/1928_001";
 import Shmh_1928_002 from "./pages/shang_hai_man_hua/1928_002";
 import Shmh_1928_003 from "./pages/shang_hai_man_hua/1928_003";
 import Shmh_1928_004 from "./pages/shang_hai_man_hua/1928_004";
 import Shmh_1929_049 from "./pages/shang_hai_man_hua/1929_049";
 import Min_zu from "./pages/min_zu";
 import Xin_hun from "./pages/xin_hun";
 import Shang_hai_man_hua from "./pages/shang_hai_man_hua";
 import { TeachingResearch } from "./pages/TeachingResearch";
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
 import './pages/004.pdf'
 import HTMLFlipBook from "react-pageflip";

class MainView extends React.Component {


    render() {
        // determine the current page
        
        return(
            <Router>
                <div className="container">

                <Switch>
                    <Route exact path = '/'>                    <Homepage/>             </Route>
                    <Route exact path = '/resources'>           <Resources/>            </Route>
                    <Route exact path = '/teachingresearch'>    <TeachingResearch/>     </Route>
                    <Route exact path = '/database'>            <Database/>             </Route>
                    <Route exact path = '/about'>               <About/>                </Route>
                    <Route exact path = '/admin'>               <Admin/>                </Route>
                    <Route exact path = '/shang_hai_man_hua'>    <Shang_hai_man_hua/>     </Route>
                    <Route exact path = '/shmh_1928_000'>           <Shmh_1928_000/>            </Route>
                    <Route exact path = '/shmh_1928_001'>           <Shmh_1928_001/>            </Route>
                    <Route exact path = '/shmh_1928_002'>           <Shmh_1928_002/>            </Route>
                    <Route exact path = '/shmh_1928_003'>           <Shmh_1928_003/>            </Route>
                    <Route exact path = '/shmh_1928_004'>           <Shmh_1928_004/>            </Route>
                    <Route exact path = '/shmh_1929_049'>           <Shmh_1929_049/>            </Route>
                    <Route exact path = '/min_zu'>           <Min_zu/>                  </Route>
                    <Route exact path = '/xin_hun'>           <Xin_hun/>                </Route>
                </Switch>
                    {/*<HTMLFlipBook width={450} height={680}>*/}
                    {/*    <div className="demoPage">Page 1 <div><img src={require('../img/small/1.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 2<div><img src={require('../img/small/2.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 3<div><img src={require('../img/small/3.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 4<div><img src={require('../img/small/4.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 5 <div><img src={require('../img/small/5.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 6<div><img src={require('../img/small/6.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 7<div><img src={require('../img/small/7.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 8<div><img src={require('../img/small/8.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 9 <div><img src={require('../img/small/9.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 10<div><img src={require('../img/small/10.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 11<div><img src={require('../img/small/11.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*    <div className="demoPage">Page 12<div><img src={require('../img/small/12.jpg')} width={450} height={"auto"}/></div></div>*/}
                    {/*</HTMLFlipBook>*/}
                </div>
            </Router>
            
        );
    }
}



export default MainView;