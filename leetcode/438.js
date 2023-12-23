var findAnagrams = function(s, p) {
    let res = []
    let map = new Map()
    for (let i = 0; i < p.length; i++) {
        map.set(p[i], map.has(p[i]) ? map.get(p[i]) + 1 : 1)
    }
    let left = 0, right = 0, count = p.length
    while (right < s.length) {
        if (map.has(s[right])) {
            if (map.get(s[right]) >= 1) {
                count--
            }
            map.set(s[right], map.get(s[right]) - 1)
        }
        right++
        if (count === 0) {
            res.push(left)
        }
        if (right - left === p.length) {
            if (map.has(s[left])) {
                if (map.get(s[left]) >= 0) {
                    count++
                }
                map.set(s[left], map.get(s[left]) + 1)
            }
            left++
        }
    }
    return res
}