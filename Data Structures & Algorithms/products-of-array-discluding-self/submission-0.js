class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
   productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);
    let prefix = 1, postfix = 1;

    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= postfix;
        postfix *= nums[i];
    }
    return result;
}
}
