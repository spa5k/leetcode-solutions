/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    for(i=0;i<=word.length;i++) {
        word.charAt(i).toUpperCase()
    }
    return word
};