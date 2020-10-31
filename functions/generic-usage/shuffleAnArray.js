//Source: Medium- How to shuffle correctly shuffle an array in javascript by Nitin Patel

const shuffleArray = (arr) => {
    //With this I garantee that this funcition is a pure one
    const shuffledArray = [...arr];

    for( let i = shuffledArray.length -1; i > 0; i-- ){
        const j = Math.floor(Math.random() * i);
        const temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;        
    }    
    
    return shuffledArray;
}
 
export default shuffleArray;