function countVowelConsonant(str) {
    const vowels = 'aeiou'
    return (str.split("")
            .map( letter => vowels.includes(letter) ? letter = 1 : letter = 2 )
            .reduce( (total, count) => total + count ))
}



/**
 * Test Suite 
 */
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
        const value = 'abcde';
        
          // act
        const result = countVowelConsonant(value);

          // log
        console.log("result: ", result);
        
          // assert
        expect(result).toBe(8);
    });
});