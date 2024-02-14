var findMinArrowShots = function(points) {
    if (points.length === 0) {
        return 0;
    }
    points.sort((a, b) => a[1] - b[1]);
    let count = 1;
    let end = points[0][1];
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
        count++;
        end = points[i][1];
        }
    }
    return count;
    }