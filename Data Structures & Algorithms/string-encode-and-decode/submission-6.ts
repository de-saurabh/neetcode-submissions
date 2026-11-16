class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    convertToEncodedString(str: string): string {
        return `${str.length}#${str}`;
    }

    encode(strs: string[]): string {
        return strs.map(str => this.convertToEncodedString(str)).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
   decode(str: string): string[] {
    const res: string[] = [];
    let strLen = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '#') {
            strLen += str[i];
        } else {
            const len = Number(strLen);
            res.push(str.slice(i + 1, i + 1 + len));
            i += len;
            strLen = '';
        }
    }
    return res;
}
}
