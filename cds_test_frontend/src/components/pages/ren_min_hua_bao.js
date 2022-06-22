import $ from "jquery";
import Turn from "../Turn";
import './turn.js';
import style from "./style.css"

const Ren_min_hua_bao = () => {

    function handleDemoClick(e) {
        window.open("Database", "_blank")
    }

    return(
        <div className="row">
            <h1>人民画报 (China Pictorial)</h1>
            <h2>1950 - 1970</h2>
            {/*<button type="button" class="btn btn-info" onClick = {handleDemoClick}>示范：搜索</button>*/}
            <div className="column">
                <h4>Issue: 1950-07</h4>
                <a href='rmhb_1950_07'>
                    <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/ren_min_hua_bao/rmhb_07_1950/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1950_08</h4>
                <a href='rmhb_1950_08'>
                    <img src= 'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/ren_min_hua_bao/rmhb_08_1950/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1950-09</h4>
                <a href='rmhb_1950_09'>
                    <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/ren_min_hua_bao/rmhb_09_1950/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1950-10</h4>
                <a href='rmhb_1950_10'>
                    <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/ren_min_hua_bao/rmhb_10_1950/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1950-12</h4>
                <a href='rmhb_1950_12'>
                    <img src= 'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/ren_min_hua_bao/rmhb_12_1950/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            <div className="column">
                <h4>Issue: 1951-01</h4>
                <a href='rmhb_1951_01'>
                    <img src= 'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/ren_min_hua_bao/rmhb_01_1951/1.jpg' width={250} height={"auto"}/>
                </a>
            </div>
            {/*<DemoMagazine />*/}
        </div>
    );
}



export default Ren_min_hua_bao;