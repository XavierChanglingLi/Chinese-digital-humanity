import $ from "jquery";
import Turn from "../Turn";
import './turn.js';
import Homepage from "./Homepage";

const DemoMagazine = () => {
    const options = {
        width: 900,
        height: 620,
        autoCenter: true,
        display: "double",
        acceleration: true,
        elevation: 50,
        gradients: !$.isTouch,
        when: {
            turned: function(e, page) {
                console.log("Current view: ", $(this).turn("view"));
            }
        }
    };

    const pages = [
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/1.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/2.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/3.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/4.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/5.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/6.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/7.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/8.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/9.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/10.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/11.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/12.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/13.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/14.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/15.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/16.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/17.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/18.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/19.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/20.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/21.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/22.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/23.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/24.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/25.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/26.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/27.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/28.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/29.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/30.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/31.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/32.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/33.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/34.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/35.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/36.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/37.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/38.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/39.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/40.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/41.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/min_zu_hua_bao/book_view/42.jpg',

    ];


    return (
        <Turn options={options} className="magazine">
            {pages.map((page, index) => (
                <div key={index} className="page">
                    <img src={page} alt="" width={450} height={620}/>
                </div>
            ))}
        </Turn>
    )
}

const Min_zu = () => {

    function handleDemoClick(e) {
        window.open("004.pdf", "_blank")
    }

    return(
        <div className="container">
            <h4>人民画报 <p> <a href= "https://cs.colby.edu/yingli/民族画报_02test.pdf">PDF view</a></p></h4>
            <DemoMagazine />
            {/*<button type="button" class='btn btn-info' onClick={handleDemoClick}>示范：搜索</button>*/}
            {/*<p> <a href= "https://drive.google.com/file/d/1pgHsAwHZOiF01iNk98sZERW28uAfQGVP/view?usp=sharing">PDF view</a></p>*/}
        </div>
    );
}

export default Min_zu;