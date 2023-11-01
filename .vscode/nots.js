/* for(let i =0; i < 7; i++){
    console.log(i);
}
money = 100
while(money > 0)
    console.log("let it ride", money)
    money--; */
const numsArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];
function linearSearch(num, arr){
    let found;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num){
            found = arr[i];
            break;
        }   else {
            console.log("still looking")
        }
    }
    if(!found){
        console.log("sorry I couldn't find that")
    }
    console.log(found);
    return found;
}
linearSearch(100, numsArr)