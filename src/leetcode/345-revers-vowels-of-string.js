/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = {
        a: 1,
        A: 1,
        e: 1,
        E: 1,
        i: 1,
        I: 1,
        o: 1,
        O: 1,
        u: 1,
        U: 1,
    };

    let start = 0;
    let end = s.length - 1;
    let S = s.split('');

    while (start < end) {
        //find pairs of vowels
        while(start < end && vowels[S[start]] != 1) {
            start++;
        }

        while(start < end && vowels[S[end]] != 1) {
            end--;
        }

        //swap vowels
        let t = S[start];
        S[start] = S[end];
        S[end] = t;
        start++;
        end--;
    }

    return S.join('');
};