const lengthOfTheLongestSubstring = require('../app')

test('Find the longest substring in a string with the same word',()=>{
    
    const string = 'www'

    const result = lengthOfTheLongestSubstring(string);
    
    expect(result).toStrictEqual(1)
});

test('Find the longest substring in a string with one word',()=>{
    
    const string = 'w'

    const result = lengthOfTheLongestSubstring(string);
    
    expect(result).toStrictEqual(1)
});

test('Find the longest substring in a string',()=>{
    
    const string = 'pwwkew'

    const result = lengthOfTheLongestSubstring(string);
    
    expect(result).toStrictEqual(3)
});