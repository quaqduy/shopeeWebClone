const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let slideBox = $('.slide__box');
const labelCheckItem = $$('.label--check-item');
const slideImg = $$('.slide__img');
const nextprevBtn = $$('.next_prev-btn__item');
const nextBtn = $('.nextBtn');
const prevBtn = $('.prevBtn');
// console.log(radioBtnList)
const slideActive = {
    marginValue: 0,
    slideAuto: function() {
        setInterval(function() {
            labelCheckItem.forEach(function(item) {
                item.classList.remove('checked')
            });
            slideActive.marginValue += 100;
            if (slideActive.marginValue > 300) { slideActive.marginValue = 0 };
            slideBox.style.marginLeft = `-${slideActive.marginValue}%`;
            labelCheckItem[(slideActive.marginValue / 100)].classList.add('checked');
        }, 5000)
    },
    isClick: function() {
        let isClick = false;
        labelCheckItem.forEach((item) => {
            item.onclick = () => {
                isClick = true;
            };
        });
        return isClick;
    },
    radioBtnIsClick: function() {
        labelCheckItem.forEach((check, index) => {
            check.onclick = (e) => {
                labelCheckItem.forEach(function(item) {
                    item.classList.remove('checked')
                });
                e.target.classList.add('checked');
                slideBox.style.marginLeft = `${-100*index}%`;
                slideActive.marginValue = index * 100;
            }
        })
    },
    next_prevBtn: function() {
        nextBtn.onclick = (e) => {
            labelCheckItem.forEach(function(item) {
                item.classList.remove('checked')
            });
            slideActive.marginValue += 100;
            if (slideActive.marginValue > 300) { slideActive.marginValue = 0 }
            slideBox.style.marginLeft = `${-1*slideActive.marginValue}%`;
            labelCheckItem[(slideActive.marginValue / 100)].classList.add('checked');
            console.log(slideActive.marginValue)
        }
        prevBtn.onclick = (e) => {
            labelCheckItem.forEach(function(item) {
                item.classList.remove('checked')
            });
            slideActive.marginValue -= 100;
            if (slideActive.marginValue < 0) { slideActive.marginValue = 300 }
            let value;
            if (slideActive.marginValue == 0) {
                value = 0
            } else {
                value = -1 * slideActive.marginValue;
            };
            slideBox.style.marginLeft = `${value}%`;
            labelCheckItem[Math.abs(slideActive.marginValue) / 100].classList.add('checked');
            console.log(slideActive.marginValue)
        }

    },
    start: function() {
        this.slideAuto();
        this.radioBtnIsClick();
        this.next_prevBtn();
    }
}



const boxItemType = $('.container__selling-type--boxItems-top');
const rightBtn = $('.nextBtnOfSellingBox');
const leftBtn = $('.prevBtnOfSellingBox');
const sellingBoxItemsType = {
    itemInf: [{
            urlPic: 'https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn',
            infor: 'Máy Tính & Laptop'
        },
        {
            urlPic: 'https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn',
            infor: 'Máy Tính & Laptop'
        }
    ],
    renderBoxItemType: function() {
        let htmls = this.itemInf.map(function(item) {
            return `
                    <div class="container__selling-type--item ">
                        <img class='container__selling-type--picture' src="${item.urlPic}" alt="">
                        <div class="container__selling-type--infor">${item.infor}</div>
                    </div>
            `;
        })
        boxItemType.innerHTML = htmls;
    },
    leftRightBtnHandle: function() {
        rightBtn.onclick = (e) => {
            boxItemType.style.marginLeft = '-16%';
            rightBtn.classList.add('btnHidden');
            leftBtn.classList.remove('btnHidden');
        };


        leftBtn.onclick = (e) => {
            boxItemType.style.marginLeft = '0';
            rightBtn.classList.remove('btnHidden');
            leftBtn.classList.add('btnHidden');
        };
    },
    start: function() {
        this.renderBoxItemType();
        this.leftRightBtnHandle();
    }
}

const codeBox = $('.selling--code-box');
const sellingCode = {
    code: [{
            url: 'https://cf.shopee.vn/file/64b00db92b98948ceebb13c71a57006f'
        },
        {
            url: 'https://cf.shopee.vn/file/884eda2ec359f4ec19935735d185768a'
        },
        {
            url: 'https://cf.shopee.vn/file/8ec8b4bdf2b9958a6187493aeabfe6fa'
        }
    ],
    renderSellingCode: function() {
        let htmlsOfCodeItem = this.code.map((CODE) => {
            return `
                <a href=""><img src="${CODE.url}" alt="" class="selling__code-item"></a>
            `;
        })
        codeBox.innerHTML = htmlsOfCodeItem;
    },
    start: function() {
        this.renderSellingCode();
    }
}
const btnInSlide = $$('.btnInSlide');
const leftBtnOfShopMallSlide = $('.leftBtnOfShopMallSlide');
const rightBtnOfShopMallSlide = $('.rightBtnOfShopMallSlide');
const shopMallSlideBox = $('.shopMall__slideBox');
const shopMall = {
    marginNum: 0,
    isBtnInShopMallClick: false,
    renderSlide: function() {
        shopMallSlideBox.style.marginLeft = `${shopMall.marginNum*-1}%`;
    },
    autoSlide: function() {
        setInterval(() => {
            shopMall.onClick();
            if (shopMall.isBtnInShopMallClick == false) {
                shopMall.marginNum < 200 ? shopMall.marginNum += 100 : shopMall.marginNum = 0;
                shopMall.renderSlide();
            }
            shopMall.isBtnInShopMallClick = false;
        }, 3000)
    },
    onClick: function() {
        rightBtnOfShopMallSlide.onclick = function() {
            shopMall.marginNum < 200 ? shopMall.marginNum += 100 : shopMall.marginNum = 0;
            shopMall.renderSlide();
            shopMall.isBtnInShopMallClick = true;
        };

        leftBtnOfShopMallSlide.onclick = function() {
            shopMall.marginNum > 0 ? shopMall.marginNum -= 100 : shopMall.marginNum = 200;
            shopMall.renderSlide();
            shopMall.isBtnInShopMallClick = true;
        };
    },
    start: function() {
        this.autoSlide();

    }
};



const containerRightBtnRight = $('.floatRight');
const containerRightBtnLeft = $('.floatLeft');
const containerRightBoxItems = $$('.container__right-boxItems');
const containerRightTopBoxItems = $('.right__boxItems-top');
const containerRightBottomBoxItems = $('.right__boxItems-bottom');
const slideBrand = {
    topSlideBrand: [{
        urlPic: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2Fa0f36fbea78fbce052c9b7a118f5ff5a_xhdpi',
        content: 'Siêu sale tháng 9'
    }, {
        urlPic: 'https://cf.shopee.vn/file/5bb493c43083f7a10b84e58c525f97f4_xhdpi',
        content: 'Mua 1 tặng 1'
    }, {
        urlPic: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2F6ffbdbde101679bac36e1fe2082e0037_xhdpi',
        content: 'Mua là có quà'
    }, {
        urlPic: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2F56894d91ded178dbf07939f4ba59c66f_xhdpi',
        content: 'Mua Milo-săn quà...'
    }, {
        urlPic: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2F6469e30ffbf6ecf04efc183a7d8d0cd7_xhdpi',
        content: 'Ưa đãi đến 40%'
    }, {
        urlPic: 'https://cf.shopee.vn/file/624bcd9bddc58d8577d0a46b0a04cfdd_xhdpi',
        content: 'Mua 1 tặng 1'
    }, {
        urlPic: 'https://cf.shopee.vn/file/4f7d6c8ce695268fd8b5dfcc09b7c2f8_xhdpi',
        content: 'Siêu ưu đãi-mừng...'
    }, {
        urlPic: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2Fa04fa1753f820475db4f018659d4bab4_xhdpi',
        content: 'Mua 1 tặng 1'
    }],
    bottomSlideBrand: [{
        urlPic: 'https://cf.shopee.vn/file/455986bdfe3ed77eaaaaf5913dfc4053_xhdpi',
        content: 'Giảm đến 50%'
    }, {
        urlPic: 'https://cf.shopee.vn/file/https%3A%2F%2Fcf.shopee.vn%2Ffile%2F7d5ddd21cc10e484de60e12d6c58734e_xhdpi',
        content: 'Giảm đến 50%'
    }, {
        urlPic: 'https://cf.shopee.vn/file/aa241c19f17e804f729c12af90e3f5fb_xhdpi',
        content: 'Da khỏe sạch mụn'
    }, {
        urlPic: 'https://cf.shopee.vn/file/23925f71efede4e88932d1c447da8d05_xhdpi',
        content: 'Ưu đãi đến 50%'
    }, {
        urlPic: 'https://cf.shopee.vn/file/eb9db309c0d865f6c53175f0862b17b1_xhdpi',
        content: 'Mua là có quà'
    }, {
        urlPic: 'https://cf.shopee.vn/file/f2231415144f85d9f0de38a53b286ad2_xhdpi',
        content: 'Mua 2 tính 1'
    }, {
        urlPic: 'https://cf.shopee.vn/file/b84a14146429c2ffe7ddf17ee1e772a9_xhdpi',
        content: 'Chốt đơn 49k'
    }, {
        urlPic: '',
        content: 'Xem tất cả <i class=" fas fa-chevron-circle-right"></i>'
    }],
    renderItem: function() {
        let htmlsTop = this.topSlideBrand.map((item) => {
            return `
                <div class='container__right-item'>
                    <div class='container__right-item--brand' style="background: url('${item.urlPic}');background-repeat: no-repeat;background-size: cover;"></div>
                    <div class='container__right-item--content colorIcon cursor'>${item.content}</div>
                </div>
            `;
        });

        let htmlsBottom = this.bottomSlideBrand.map((item) => {
            return `
                <div class='container__right-item'>
                    <div class='container__right-item--brand' style="background: url('${item.urlPic}');background-repeat: no-repeat;background-size: cover;"></div>
                    <div class='container__right-item--content colorIcon cursor'>${item.content}</div>
                </div>
            `;
        });
        containerRightTopBoxItems.innerHTML = htmlsTop;
        containerRightBottomBoxItems.innerHTML = htmlsBottom;
    },
    slideBtnClick: function() {
        containerRightBtnRight.onclick = () => {
            containerRightBoxItems.forEach((boxItem) => {
                boxItem.style.marginLeft = '-760px'
            })
        };

        containerRightBtnLeft.onclick = () => {
            containerRightBoxItems.forEach((boxItem) => {
                boxItem.style.marginLeft = '0px'
            })
        };
    },
    start: function() {
        this.renderItem();
        this.slideBtnClick();
    }
}



const hoursFirstNum = $('.hours__firstNum');
const hoursSecondNum = $('.hours__secondNum');
const minutesFirstNum = $('.minutes__firstNum');
const minutesSecondNum = $('.minutes__secondNum');
const secFirstNum = $('.seconds__firstNum');
const secSecondNum = $('.seconds__secondNum');
const timeCount = {
    hour: '00',
    minute: '00',
    second: '00',
    renderTime: function(hour, minute, second) {
        if (hour != '00') {
            timeCount.hour = hour;
        } else {
            timeCount.hour = '00';
        };
        if (minute != '00') {
            timeCount.minute = minute;
        } else {
            timeCount.minute = '00';
        };
        if (second != '00') {
            timeCount.second = second;
        } else {
            timeCount.second = '00';
        };
        hoursFirstNum.style.paddingTop = `${this.hour[0] * 24}px`;
        hoursSecondNum.style.paddingTop = `${this.hour[1] * 24}px`;
        minutesFirstNum.style.paddingTop = `${this.minute[0] * 24}px`;
        minutesSecondNum.style.paddingTop = `${this.minute[1] * 24}px`;
        secFirstNum.style.paddingTop = `${this.second[0] * 24}px`;
        secSecondNum.style.paddingTop = `${this.second[1] * 24 }px`;
    },
    countDown: function(hour, minute, second) {
        let countMinute = 0;
        let countHour = 0;
        let minuteParseStr;
        let hourParseStr;
        let secondParseStr
        setInterval(() => {
            if (hour == 0 && minute == 0 && second == 0) {
                this.renderTime('00', '00', '00')
            } else {
                let firstSec = '0';
                secondParseStr = `${second}`;
                if (countMinute > minute) {
                    minute = 59;
                    countMinute = 0;
                };
                hourParseStr = `${hour - countHour}`;
                minuteParseStr = `${minute - countMinute}`;
                if (secondParseStr.length < 2) {
                    secondParseStr = firstSec.concat(secondParseStr);
                };
                if (minuteParseStr.length < 2) {
                    minuteParseStr = firstSec.concat(minuteParseStr);
                };
                if (hourParseStr.length < 2) {
                    hourParseStr = firstSec.concat(hourParseStr);
                };
                this.renderTime(hourParseStr, minuteParseStr, secondParseStr);
                second--;
                if (second == 0) {
                    countMinute++;
                };
                if (minute == 0 && hourParseStr != 0 && second == 0) {
                    countHour++;
                };
                if (second < 0) {
                    second = 59;
                };
            };
        }, 1000)
    },
    start() {
        this.countDown(2, 0, 5);
    }
};



const flashSaleLeftBtn = $('.flashSale__leftBtn');
const flashSaleRightBtn = $('.flashSale__rightBtn');
const flashSaleContainerSellingNumInRange = $$('.flashSale__container-sellingNum--inRange');
const flashSaleContainerBox = $('.flashSale__container-box');
const flashSale = {
    items: [{
        urlImg: 'https://cf.shopee.vn/file/8eed7c2d9984443026431f4d4c7dc57f_tn',
        sellingPrice: 200,
        sellOfPrice: 150,
        amountOfSellingItems: 100,
        amountOfItemsSold: 60,
    }, {
        urlImg: 'https://cf.shopee.vn/file/cef76ce7bb0eff3cde1409a7e6729663_tn',
        sellingPrice: 300,
        sellOfPrice: 200,
        amountOfSellingItems: 150,
        amountOfItemsSold: 100,
    }, {
        urlImg: 'https://cf.shopee.vn/file/8e56a7f7e75f9809554a083e8e367775_tn',
        sellingPrice: 400,
        sellOfPrice: 100,
        amountOfSellingItems: 320,
        amountOfItemsSold: 10,
    }, {
        urlImg: 'https://cf.shopee.vn/file/37b6e2565cec7a3cd222b608006b3c84_tn',
        sellingPrice: 500,
        sellOfPrice: 300,
        amountOfSellingItems: 100,
        amountOfItemsSold: 60,
    }, {
        urlImg: 'https://cf.shopee.vn/file/0c8e26b9d18e6dfd94c3bed76052c7b8_tn',
        sellingPrice: 1000,
        sellOfPrice: 500,
        amountOfSellingItems: 60,
        amountOfItemsSold: 50,
    }, {
        urlImg: 'https://cf.shopee.vn/file/c28f249e7a574e0c9c2702c18d1beb52_tn',
        sellingPrice: 2000,
        sellOfPrice: 300,
        amountOfSellingItems: 20,
        amountOfItemsSold: 5,
    }, {
        urlImg: 'https://cf.shopee.vn/file/a7ae96f70b6c312251535c844c61b356_tn',
        sellingPrice: 3000,
        sellOfPrice: 1999,
        amountOfSellingItems: 30,
        amountOfItemsSold: 25,
    }, {
        urlImg: 'https://cf.shopee.vn/file/772b9edf8dcd8412b80e00ff1ef1e7dc_tn',
        sellingPrice: 50,
        sellOfPrice: 9,
        amountOfSellingItems: 60,
        amountOfItemsSold: 10,
    }, {
        urlImg: 'https://cf.shopee.vn/file/e5d7990edbffba4fcc8ed964a72a39d1_tn',
        sellingPrice: 10,
        sellOfPrice: 5,
        amountOfSellingItems: 60,
        amountOfItemsSold: 16,
    }, {
        urlImg: 'https://cf.shopee.vn/file/b90ed6ce67f1a4876996bbd1500db1b3_tn',
        sellingPrice: 559,
        sellOfPrice: 299,
        amountOfSellingItems: 30,
        amountOfItemsSold: 25,
    }],
    renderItems() {
        let htmls = this.items.map((item) => {
            let percentSellOf = Math.floor((item.sellOfPrice / item.sellingPrice) * 100);
            let percentOfRangeItem = Math.floor(100 - ((item.amountOfItemsSold / item.amountOfSellingItems) * 100));
            return `
                <div class="flashSale__container-item">
                    <div class="borderBoxMaker"></div>
                    <div class="flashSale__container-item__sellPercent">
                        <div class="percent colorIcon">${percentSellOf}%</div>
                        <span class='colorIcon'>giảm</span>                       
                    </div>
                    <div class="flashSale__container-item__img" style='background: url("${item.urlImg}") no-repeat;background-size: cover;'>
                    </div>
                    <div class="flashSale__container-item__price colorIcon">
                        <div>đ</div> ${item.sellingPrice}.000 </div>
                    <div class="flashSale__container-sellingNum">
                        <div class="flashSale__container-sellingNum--inRange" style="width:${percentOfRangeItem}% !important;"></div>
                        <div class="flashSale__container-sellingNum--inNum">Đã bán ${item.amountOfItemsSold}</div>
                    </div>
                </div>
            `;
        });
        flashSaleContainerBox.innerHTML = htmls;
    },
    left_right_btn() {
        flashSaleLeftBtn.onclick = (e) => {
            flashSaleContainerBox.style.marginLeft = `${0}%`;
        };

        flashSaleRightBtn.onclick = (e) => {
            flashSaleContainerBox.style.marginLeft = `${-91}%`;
        };
    },
    start() {
        this.renderItems();
        this.left_right_btn();
    }
}


const topTrendingFindBoxItems = $(".topTrendingFind__boxItems");
const topTrendingFind = {
    topTrendingFindItem: [{
            url: 'https://cf.shopee.vn/file/fc161b3b8693420045314d260c5e26e4',
            title: 'Áo Nữ',
            inf: '6k+ sản phẩm'
        },
        {
            url: 'https://cf.shopee.vn/file/9776ab196ffa35b3dee0bdbac1da6057',
            title: 'Quần Đùi Nữ',
            inf: '6k+ sản phẩm'
        }, {
            url: 'https://cf.shopee.vn/file/dd7119a8b5a441981c2bfe7bb6b3cdd7',
            title: 'Tai nghe Blu..',
            inf: '6k+ sản phẩm'
        }, {
            url: 'https://cf.shopee.vn/file/b7a4f323f485d3f095d1e1c7de8a9fb4',
            title: 'Sandal Nữ',
            inf: '6k+ sản phẩm'
        }, {
            url: 'https://cf.shopee.vn/file/0bec63fcca9f0f9743b81ebb7b9cafb2',
            title: 'Dép Nam',
            inf: '6k+ sản phẩm'
        }
    ],
    renderItem() {
        let htmls = this.topTrendingFindItem.map((item) => {
            return `
            <div class="topTrendingFind__item">
                <div class="topTrendingFind__item-content">
                    <h1>${item.title}</h1>
                    <div>${item.inf}</div>
                </div>
                <div class="topTrendingFind__item-img">
                    <img src="${item.url}" alt="">
                </div>
            </div>
            `
        })
        topTrendingFindBoxItems.innerHTML = htmls;
    },
    start() {
        this.renderItem();
    }
}


const topFindingContent = $('.topFinding__container-box');
const topFindingPrevBtn = $('.topFinding__prevBtn');
const topFindingNextBtn = $('.topFinding__nextBtn');
const topFindingContainerBox = $('.topFinding__container-box');
const topFinding = {
    topFindingItems: [{
        url: 'https://cf.shopee.vn/file/d12aab828a40413ccb274521fc55eccd_tn',
        content: 'Ốp lưng Iphone'
    }, {
        url: 'https://cf.shopee.vn/file/8824e9807942671de4dde9c65c716579_tn',
        content: 'Bông Tẩy Trang 3 Lớp'
    }, {
        url: 'https://cf.shopee.vn/file/e2554cef6590565127bca9f0322945be_tn',
        content: 'Quần Lót nữ cotton'
    }, {
        url: 'https://cf.shopee.vn/file/18d5c5e9d7c3563a35c954c2c854988c_tn',
        content: 'Bút kẻ mắt chông nước'
    }, {
        url: 'https://cf.shopee.vn/file/0c50b02044d1851a20d0eea88a69146f_tn',
        content: 'Dây sạc Iphone'
    }, {
        url: 'https://cf.shopee.vn/file/dad7188a091cb2b10a3c133688dc7a4d_tn',
        content: 'Nước tẩy trang'
    }, {
        url: 'https://cf.shopee.vn/file/b1559595de94703af3094cc4d2a512e6_tn',
        content: 'Dây nhảy tập thể dục'
    }, {
        url: 'https://cf.shopee.vn/file/6f4485bbbb66d1967c19493417f760c9_tn',
        content: 'Serum giảm mụn'
    }, {
        url: 'https://cf.shopee.vn/file/46f4a1c42ce6c897c179817f956bea8f_tn',
        content: 'Quần Ống rộng nữ'
    }, {
        url: 'https://cf.shopee.vn/file/e75ede508e8ef1468768a98f1541ba4b_tn',
        content: 'Tai nghe'
    }],
    renderItem() {
        let htmls = this.topFindingItems.map((item) => {
            return `
            <div class="topFinding__container-item">
                <div class='tagTop__content'>TOP</div>
                <div class="tagTop">
                    <div class="borderMaker"></div>
                </div>
                <div class="topFinding__container-item--img">
                    <img src="${item.url}" alt="">
                </div>
                <div class="topFinding__container-item--content">${item.content}</div>
            </div>
            `
        })
        topFindingContainerBox.innerHTML = htmls;
    },
    next_prev__Btn() {
        topFindingPrevBtn.onclick = () => {
            topFindingPrevBtn.classList.add('btnHidden');
            topFindingNextBtn.classList.remove('btnHidden');
            topFindingContent.style.marginLeft = '0';
        }
        topFindingNextBtn.onclick = () => {
            topFindingPrevBtn.classList.remove('btnHidden');
            topFindingNextBtn.classList.add('btnHidden');
            topFindingContent.style.marginLeft = '-100%';
        }
    },
    start() {
        this.next_prev__Btn();
        this.renderItem();
    }
}



const giveIdeaItem = $('.giveIdea__item');
const giveItemSeeMoreBtn = $('.giveItem__seeMore-btn');
const giveIdeaBox = $('.giveIdea__box');
// console.log(giveIdeaBox)
const giveIdea = {
    giveIdeaBoxItem: [{
        urlImg: 'https://cf.shopee.vn/file/96e47e9098f360e5b413da1cd0e12b49_tn',
        sellingPrice: 200,
        sellOfPrice: 150,
        amountOfSellingItems: 100,
        amountOfItemsSold: 60,
        content: 'Sữa Tăng Chiều Cao'
    }, {
        urlImg: 'https://cf.shopee.vn/file/37c79cc033b0f81b7c16bcc6d057bfc3_tn',
        sellingPrice: 300,
        sellOfPrice: 200,
        amountOfSellingItems: 150,
        amountOfItemsSold: 100,
        content: 'Nike Jordan (Giày & Dép)'
    }, {
        urlImg: 'https://cf.shopee.vn/file/8dd11e3be64a019d495b5948043640b2_tn',
        sellingPrice: 400,
        sellOfPrice: 100,
        amountOfSellingItems: 320,
        amountOfItemsSold: 10,
        content: 'Tã Quần Bae'
    }, {
        urlImg: 'https://cf.shopee.vn/file/8be9654cdfe25c2947e741c6a1fe5a6b_tn',
        sellingPrice: 500,
        sellOfPrice: 300,
        amountOfSellingItems: 100,
        amountOfItemsSold: 60,
        content: 'Tủ lạnh'
    }, {
        urlImg: 'https://cf.shopee.vn/file/9b64cc2cecc4f31727ca995562f1f1a8_tn',
        sellingPrice: 1000,
        sellOfPrice: 500,
        amountOfSellingItems: 60,
        amountOfItemsSold: 50,
        content: 'Áo phông tay ngắn'
    }, {
        urlImg: 'https://cf.shopee.vn/file/647de45d00acf2a934f5f433c8b02096_tn',
        sellingPrice: 2000,
        sellOfPrice: 300,
        amountOfSellingItems: 20,
        amountOfItemsSold: 5,
        content: 'Áo Hoodie'
    }, {
        urlImg: 'https://cf.shopee.vn/file/86b3f153b23153781ce07b4434a9dbef_tn',
        sellingPrice: 3000,
        sellOfPrice: 1999 / 1000,
        amountOfSellingItems: 30,
        amountOfItemsSold: 25,
        content: 'Set đồ bộ Nữ'
    }, {
        urlImg: 'https://cf.shopee.vn/file/1ece75bd55b0fa798966b595303ef26e_tn',
        sellingPrice: 50,
        sellOfPrice: 9,
        amountOfSellingItems: 60,
        amountOfItemsSold: 10,
        content: 'Nước hoa'
    }, {
        urlImg: 'https://cf.shopee.vn/file/78ddad0e4cb69ad61889867147a34955_tn',
        sellingPrice: 10,
        sellOfPrice: 5,
        amountOfSellingItems: 60,
        amountOfItemsSold: 16,
        content: 'Nhà phao'
    }, {
        urlImg: 'https://cf.shopee.vn/file/7a3463b8357645e32f9ab9e825b7bd84_tn',
        sellingPrice: 559,
        sellOfPrice: 299,
        amountOfSellingItems: 30,
        amountOfItemsSold: 25,
        content: 'Giày Đinh'
    }, {
        urlImg: 'https://cf.shopee.vn/file/46491cc2a4b2873742318dd0fe7c6fd7_tn',
        sellingPrice: 559,
        sellOfPrice: 149,
        amountOfSellingItems: 30,
        amountOfItemsSold: 25,
        content: 'Áo Sweeter (Name & Nữ'
    }, {
        urlImg: 'https://cf.shopee.vn/file/bcdaa0d7f61890958ff72b271a04cb82_tn',
        sellingPrice: 559,
        sellOfPrice: 300,
        amountOfSellingItems: 30,
        amountOfItemsSold: 25,
        content: 'Tủ Đồ Mini'
    }],
    renderItem() {
        const htmls = this.giveIdeaBoxItem.map((item) => {
            let percentSellOf = 100 - (item.sellOfPrice / item.sellingPrice) * 100;
            return `
            <div class="giveIdea__item">
                <div class="giveIdea__item-img">
                    <div class="giveIdea__item--thePercentSellingOff ">${Math.floor(percentSellOf)}% giảm</div>
                    <div class="giveIdea__item--thePercentSellingOffFlow"></div>
                    <img width="invalid-value" height="invalid-value" class="giveIdea--itemImg" style="object-fit: contain" src="${item.urlImg}">
                </div>
                <div class="giveIdea__item-content">
                    ${item.content}
                </div>
                <div class="giveIdea__item-footer">
                    <div class="giveIdea__item-price colorIcon">${item.sellOfPrice}.000</div>
                    <div class="giveIdea__item-theAmount">Đã bán ${item.amountOfItemsSold}k</div>
                </div>
                <div class="findTheSame">
                    Tìm sản phẩm tương tự
                </div>
            </div>
            `
        });
        giveIdeaBox.innerHTML = htmls;
    },
    seeMoreIem() {
        giveItemSeeMoreBtn.onclick = (e) => {
            giveIdeaBox.style.height = 'auto';
        };
    },
    start() {
        this.renderItem();
        this.seeMoreIem();
    }
}



const modalClose = $('.modal__close');
const modal = $('.modal');
const openSignUpForm = $('#openSignUpForm');
const openSignInForm = $('#openSignInForm');
const signInForm = $('.modal__content-signIn')
const signUpForm = $('.modal__content-signUp');
const sinUpOfTable = $$('.signUpBtn');
const sinInOfTable = $$('.signInBtn');
console.log(signUpForm, signInForm)
const SignInUpTable = {
    closeModal() {
        modalClose.onclick = (e) => {
            modal.classList.add('displayNone');
        }
    },
    openForm() {
        openSignUpForm.onclick = (e) => {
            modal.classList.remove('displayNone');
            signUpForm.classList.remove('displayNone');
            signInForm.classList.add('displayNone');
        }

        openSignInForm.onclick = (e) => {
            modal.classList.remove('displayNone');
            signUpForm.classList.add('displayNone');
            signInForm.classList.remove('displayNone');
        }
    },
    signOnClick() {
        sinInOfTable.forEach((item) => {
            item.onclick = (e) => {
                signUpForm.classList.add('displayNone');
                signInForm.classList.remove('displayNone');
            }
        })
    },
    signUpOnClick() {
        sinUpOfTable.forEach((item) => {
            item.onclick = (e) => {
                signUpForm.classList.remove('displayNone');
                signInForm.classList.add('displayNone');
            }
        })
    },
    start() {
        this.openForm();
        this.signUpOnClick();
        this.signOnClick();
        this.closeModal();
    }
}



SignInUpTable.start();
giveIdea.start();
topFinding.start();
topTrendingFind.start();
flashSale.start();
timeCount.start();
slideBrand.start();
shopMall.start();
slideActive.start();
sellingBoxItemsType.start();
sellingCode.start();
sellingBoxItemsType.start();
sellingCode.start();
sellingBoxItemsType.start();
sellingCode.start();