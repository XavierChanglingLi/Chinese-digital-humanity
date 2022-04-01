import $ from "jquery";
import Turn from "../Turn";
import './turn.js';
import style from "./style.css"

const Shang_hai_man_hua = () => {

    function handleDemoClick(e) {
        window.open("Database", "_blank")
    }

    return(
        <div className="row">
            <h1>上海漫画</h1>
            {/*<button type="button" class="btn btn-info" onClick = {handleDemoClick}>示范：搜索</button>*/}
            <div className="column">
                <h4>Issue: 1928-000</h4>
                <a href='shmh_1928_000'>
                    <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_000_1928/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1928-001</h4>
                <a href='shmh_1928_001'>
                    <img src= 'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_001_1928/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1928-002</h4>
                <a href='shmh_1928_002'>
                    <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_002_1928/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1928-003</h4>
                <a href='shmh_1928_003'>
                    <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_003_1928/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1928-004</h4>
                <a href='shmh_1928_004'>
                    <img src= 'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_004_1928/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1928-005</h4>
                <a href='shmh_1928_004'>
                    <img src= 'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_005_1928/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1929-049</h4>
                <a href='shmh_1929_049'>
                    <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            {/*<DemoMagazine />*/}
        </div>
    );
}



export default Shang_hai_man_hua;