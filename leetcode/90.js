var subsetsWithDup = function (nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let dfs = (index, path) => {
    res.push(path);
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) continue;
      dfs(i + 1, path.concat(nums[i]));
    }
  };
  dfs(0, []);
  return res;
};
