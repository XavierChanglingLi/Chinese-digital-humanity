import $ from "jquery";
import Turn from "../../Turn";
import '../turn.js';
import Homepage from "../Homepage";

const DemoMagazine = () => {
    const options = {
        width: 900,
        height: 650,
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
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/1.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/2.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/3.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/4.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/5.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/6.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/7.jpg',
        'https://raw.githubusercontent.com/XavierChanglingLi/colby_chinese_digital/master/shang_hai_man_hua/shmh_049_1929/8.jpg',
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

const Shmh_1929_049 = () => {

    function handleDemoClick(e) {
        window.open("004.pdf", "_blank")
    }

    return(
        <div className="container">
            <h4>上海漫画 Issue: 1929-049</h4>
            <DemoMagazine />
        </div>
    );
}

export default Shmh_1929_049;