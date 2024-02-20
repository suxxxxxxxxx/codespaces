# map + parseInt 经典题

-我在解决这道题目的时候去看了MDN文档
    map callback返回值是由callback的每一项组成的新数组
    callback会接受到item当前项 index下标 array数组本身

    parseInt就是当前的callback item，可选的参数radix？进制表达
    默认 10进制
    0无效，使用10   1
    1进制 item为2， NaN
    2进制 item为3， NaN