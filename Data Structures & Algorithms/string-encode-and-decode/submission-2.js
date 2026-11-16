class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   encode(str) {
    return str.length ? str.join("#") : '';
  }
  decode(str) {
    return str.length ? str.split("#") : [''];
  }
}
