/**
 * Homepage
 * CSS by Boostrap 5.0
 * Author: Ruize Li
 */
 import $ from "jquery";
 import Turn from "../Turn";
 import './turn.js';
 import style from "./style.css"


// @todo: 
//         use thumbnails for magazine-like display
//         on click event: switch to load original / high res page
// const DemoMagazine = () => {
//     const options = {
//         width: 900,
//         height: 650,
//         autoCenter: true,
//         display: "double",
//         acceleration: true,
//         elevation: 50,
//         gradients: !$.isTouch,
//         when: {
//           turned: function(e, page) {
//             console.log("Current view: ", $(this).turn("view"));
//           }
//         }
//       };
//
//       const pages = [
//         'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/001.jpg',
//         'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/002.jpg',
//         'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/003.jpg',
//         'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/004.jpg',
//         'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/005.jpg',
//         'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/006.jpg',
//         'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/007.jpg',
//         'https://raw.githubusercontent.com/ruize-li/colby_digital_studies_storage/master/images/shanghaisketch_48/008.jpg'
//       ];
//
//
//     return (
//              <Turn options={options} className="magazine">
//             {pages.map((page, index) => (
//                 <div key={index} className="page">
//                 <img src={page} alt="" width={450} height={"auto"}/>
//                 </div>
//             ))}
//             </Turn>
//     )
// }



const Homepage = () => {
    
    function handleDemoClick(e) {
        window.open("Database", "_blank")
    }

    return(
        <div className="row">
            <h4>Welcome to Colby Digital Humanities Database for China Studies</h4>
            <button type="button" class="btn btn-info" onClick = {handleDemoClick}>示范：搜索</button>
            {/*<a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>EXAMPLE</a>*/}
            <div className="subrow">
                <div className="column">
                    <h4>人民画报 (China Pictorial) </h4>
                    <h4>1950-1966</h4>
                    <a href='ren_min_hua_bao'>
                        <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/ren_min_hua_bao/rmhb_07_1950/1.jpg' width={250} height={"auto"}/>
                    </a>
                </div>
                <div className="column">
                    <h4>民族画报 (Nationality Pictorial)</h4>
                    <h4>1955-1966</h4>
                    <a href='min_zu'>
                        <img src= 'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/mzhb_02_1955/1.jpg' width={250} height={"auto"}/>
                    </a>
                </div>
                <div className="column">
                    <h4>漫画月刊 (Manhua Cartoons)</h4>
                    <h4>1950-1960</h4>
                    <a href='xin_hun'>
                        <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/man_hua_yue_kan/mhyk_03_1950/1.jpg' width={250} height={"auto"}/>
                    </a>
                </div>
            </div>
            <div className='subrow'>
                <div className="column">
                    <h4>新婚姻法图解(1951 华东版)</h4>
                    <a href='xin_hun'>
                        <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/2.jpg' width={250} height={"auto"}/>
                    </a>
                </div>
                <div className="column">
                    <h4>上海漫画 (1928-1930)</h4>
                    <a href='shang_hai_man_hua'>
                        <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/1.jpg' width={250} height={"auto"}/>
                    </a>
                </div>
                <div className="column">
                    <h4>时代漫画 (1934-1937)</h4>
                    <a href='min_zu'>
                        <img src= 'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shi_dai_man_hua/sdmh_1934_01/1.jpg' width={250} height={"auto"}/>
                    </a>
                </div>
            </div>
            <div className="subrow">
                <div className="column">
                    <h4>新婚姻法图解(1951 华南版)</h4>
                    <a href='xin_hun'>
                        <img src='https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa_hua_nan/book_view/1.jpg' width={250} height={"auto"}/>
                    </a>
                </div>
            </div>
            {/*<DemoMagazine />*/}
        </div>
    );
}



export default Homepage;