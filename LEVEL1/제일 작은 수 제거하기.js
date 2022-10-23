function solution(arr) {
    var min = Math.min(...arr)
    
    for ( var i = 0; i < arr.length; i++){
        if(min === arr[i]){
            arr.splice(i,1);
        }
    }

    return (arr.length > 0)? arr : [-1];
}
