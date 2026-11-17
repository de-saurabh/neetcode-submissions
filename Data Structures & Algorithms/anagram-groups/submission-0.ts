class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap: Map<string, string[]> = new Map();
        strs.forEach((str) => {
            const charStr = str.split("").sort().join();
            if (!anagramMap.has(charStr)) anagramMap.set(charStr, []);
            anagramMap.get(charStr)?.push(str);
        });
        return Array.from(anagramMap.values());
    }
}
