'use strict';

let Html = function (tag) {
  let el = document.createElement(tag);

  return {
    get node() {
      return el;
    },

    appendChild: function (node) {
      el.appendChild(node);

      return this;
    },

    setAttribute: function (attribute, value) {
      el[attribute] = value;

      return this;
    },

    setClass: function (cls) {
      el.className = cls;

      return this;
    },
  };
};

window.addEventListener('load', () => {
  console.log("drafting.js loaded");

  let siteTitle = Html('h1')
    .setAttribute('innerHTML', 'Drafting');

  let siteSubtitle = Html('h3')
    .setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');

  let siteBanner = Html('header')
    .setClass('site-banner')
    .appendChild(siteTitle.node)
    .appendChild(siteSubtitle.node);

  let siteStatus = Html('header')
    .setClass('site-status')
    .setAttribute(
      'innerHTML',
      '<span>x:<span id="cursor-x">0</span>y:<span id="cursor-y">0</span>'
    );

  let siteBody = Html('article')
    .setClass('site-body')
    .appendChild(siteStatus.node);

  let copyright = Html('small')
    .setClass('float-right')
    .setAttribute(
      'innerHTML',
      '&copy; Copyright 2020，佛光大學資訊應用學系'
    );

  let siteFooter = Html('footer')
    .setClass('site-footer')
    .appendChild(copyright.node);

  let siteContainer = Html('div')
    .setClass('site-container')
    .appendChild(siteBanner.node)
    .appendChild(siteBody.node)
    .appendChild(siteFooter.node);

  document.body.appendChild(siteContainer.node);

  // 準備承載 *網頁標題* (title) 的 HTML 元素
  let cardTitle = Html('span')
    .setAttribute('textContent', 'Drafting!');

  // 準備承載 *網頁版頭* (header) 的 HTML 元素
  let cardHeader = Html('header')
    .setClass('card-header')
    .appendChild(cardTitle.node); // 將 *網頁標題* 放上 *網頁版頭*

  let control1 = Html('p')
    .setClass('control')
    .setAttribute(
      'innerHTML',
      '<input class="input" placeholder="王大錘" id="name" type="text" />'
    );
  
  let controlLabel1 = Html('label')
    .setClass('control-label')
    .setAttribute(
      'innerHTML',
      '<label class="control-label" for="name">姓名</label>'
    );
  
  let hField1 = Html('div')
    .setClass('h-field')
    .appendChild(controlLabel1.node)
    .appendChild(control1.node);

  let control2 = Html('p')
    .setClass('control')
    .setAttribute(
      'innerHTML',
      '<input class="input" placeholder="10" id="hp" type="number">'
    );
  
  let controlLabel2 = Html('label')
    .setClass('control-label')
    .setAttribute(
      'innerHTML',
      '<label class="control-label" for="hp">血量 (hp)</label>'
    );
  
  let hField2 = Html('div')
    .setClass('h-field')
    .appendChild(controlLabel2.node)
    .appendChild(control2.node);

  let control3 = Html('p')
    .setClass('control')
    .setAttribute(
      'innerHTML',
      '<input class="input" placeholder="1" id="ap" type="number">'
    );
  
  let controlLabel3 = Html('label')
    .setClass('control-label')
    .setAttribute(
      'innerHTML',
      '<label class="control-label" for="ap">攻擊力 (ap)</label>'
    );
  
  let hField3 = Html('div')
    .setClass('h-field')
    .appendChild(controlLabel3.node)
    .appendChild(control3.node);

  let control4 = Html('p')
    .setClass('control')
    .setAttribute(
      'innerHTML',
      '<input class="input" placeholder="0" id="dp" type="number" />'
    );
  
  let controlLabel4 = Html('label')
    .setClass('control-label')
    .setAttribute(
      'innerHTML',
      '<label class="control-label" for="dp">防禦力 (dp)</label>'
    );
  
  let hField4 = Html('div')
    .setClass('h-field')
    .appendChild(controlLabel4.node)
    .appendChild(control4.node);

  let pane = Html('div')
    .setClass('pane')
    .appendChild(hField1.node)
    .appendChild(hField2.node)
    .appendChild(hField3.node)
    .appendChild(hField4.node);

  // 準備承載 *網頁內容* 的 HTML 元素
  let cardContent = Html('article')
    .setClass('card-content')
    .appendChild(pane.node);

  // 準備 *網頁桌面* 的 HTML 元素
  let cardDesktop = Html('section')
    .setClass('card')
    .appendChild(cardHeader.node)   // 將 *網頁版頭* 放上 *網頁桌面*
    .appendChild(cardContent.node); // 將 *網頁內容* 放上 *網頁桌面*

  // 將 *網頁桌面* 放上 *網頁*
  let desktop = document
    .querySelector('.site-body')
    .appendChild(cardDesktop.node);

  /**
   * 滑鼠游標移動追踪
   *
   * @callback
   * @param 'mousemove' : DOM 事件名
   * @param e : DOM event 物件
   * @returns {undefined}
   */
  desktop.addEventListener('mousemove', (e) => {
    document.getElementById('cursor-x').textContent = e.clientX;
    document.getElementById('cursor-y').textContent = e.clientY;
  });
});
