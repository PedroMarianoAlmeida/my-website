const getRandomIndexInArray = (arr) => {
    const randomIndex = Math.floor( Math.random()* arr.length );
    return randomIndex;
}
 
export default getRandomIndexInArray;