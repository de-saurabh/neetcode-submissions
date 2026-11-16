class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   encode(str) {
    return str.join("#");
  }
  decode(str) {
    return str.split("#");
  }
}
