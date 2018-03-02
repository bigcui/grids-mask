/**
 * @file 栅格ui浮层
 *
 * @author  cuihonglei
 * 2018年2月7日
 */

/* eslint-disable */


 function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    var search = window.location.href.split('?')[1];
    if (search) {
        var r = search.match(reg);
        if (r !== null) {
            return decodeURIComponent(r[2]);
        }
    }
    return '';
};
function aridsMask() {
    let poi = [
        ['position: fixed'],
        ['top: 0'],
        ['left: 0'],
        ['z-index: 9999'],
        ['right: 0'],
        ['bottom: 0'],
        [' background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABNoAAAACCAYAAACOqbEbAAAAY0lEQVRoge3RwQ1AQABEUUQVmnHmpDK1SCR0pAYHB03YjGzeK2AyyW/H9d6bShzDlr7we880Fd3vz7Pofg00yNMgT4M8DfI0yNMgT4M8DfI0yNMgb76W9IXPdOkDAAAAAFCDF7CfJnxdI10yAAAAAElFTkSuQmCC) repeat-y'],
        [' -webkit-background-size: 100% 100%'],
        [' background-size: 100%']
    ];
    let body = document.querySelector('body');
    let mask = document.createElement('div');
        mask.className = 'shange-mask';
        
    if(getQueryString('shange')){
        body.appendChild(mask);
        mask.style.cssText = poi.join(';');
    }
       
}
module.exports = {
    make:aridsMask
};