var reverseVowels = function(s) {
    let left = 0, right = s.length - 1;
    const vowels = 'aeiouAEIOU'; // 包括大写和小写的元音字母
    s = s.split(''); // 将字符串转换为数组
    while (left < right) {
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            [s[left], s[right]] = [s[right], s[left]];
            left++;
            right--;
        } else {
            // 如果左边不是元音字母，向右移动
            if (!vowels.includes(s[left])) {
                left++;
            }
            // 如果右边不是元音字母，向左移动
            if (!vowels.includes(s[right])) {
                right--;
            }
        }
    }
    return s.join('');
}