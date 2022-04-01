import $ from "jquery";
import Turn from "../Turn";
import './turn.js';
import Homepage from "./Homepage";

const DemoMagazine = () => {
    const options = {
        width: 900,
        height: 350,
        autoCenter: true,
        display: "double",
        acceleration: true,
        elevation: 20,
        gradients: !$.isTouch,
        when: {
            turned: function(e, page) {
                console.log("Current view: ", $(this).turn("view"));
            }
        }
    };

    const pages = [
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/2.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/1.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/4.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/5.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/6.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/7.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/8.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/9.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/10.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/11.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/12.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/13.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/14.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/15.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/16.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/17.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/18.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/19.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/20.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/21.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/22.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/23.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/24.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/25.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/26.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/27.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/28.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/29.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/30.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/31.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/32.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/33.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/34.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/35.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/36.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/37.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/38.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/39.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/40.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/41.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/42.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/43.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/44.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/45.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/46.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/47.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/xin_hun_yin_fa/book_view/48.jpg'
    ];


    return (
        <Turn options={options} className="magazine">
            {pages.map((page, index) => (
                <div key={index} className="page">
                    <img src={page} alt="" width={450} height={"auto"}/>
                </div>
            ))}
        </Turn>
    )
}

const Xin_hun = () => {

    function handleDemoClick(e) {
        window.open("004.pdf", "_blank")
    }

    return(
        <div className="container">
            <h4>新婚姻法图解</h4>
            <DemoMagazine />
        </div>
    );
}

export default Xin_hun;