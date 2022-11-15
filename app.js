const lengthOfTheLongestSubstring = function(string){
    let maxLength=0;
    let startIndex=0;
    const wordsInSubstring={}

    for(let finishIndex=1;finishIndex<=string.length;finishIndex++){
    
        let lastWord =string.substring(finishIndex-1,finishIndex);
        
        if(wordsInSubstring.hasOwnProperty(lastWord)&&wordsInSubstring[lastWord]>=startIndex){
            startIndex=wordsInSubstring[lastWord]+1
            wordsInSubstring[lastWord]=finishIndex-1
        }else{
        
            let substring= string.substring(startIndex,finishIndex);
            
            if(!wordsInSubstring.hasOwnProperty(lastWord)){
                wordsInSubstring[lastWord]=finishIndex-1
            }
            
            if(maxLength<substring.length){
                maxLength=substring.length;
            }
        }
    
        
    }
    return maxLength;

}

const main = () =>{
    console.log(lengthOfTheLongestSubstring('pwwkew'))
}

main()

module.exports=lengthOfTheLongestSubstring;