
const arr=[2,1,1,5,2];

let i=0;
while (i<arr.length){
    //2
    //1
    if(arr[i]!=arr[arr[i]-1]){
        let t = arr[i];
        arr[i] = arr[t-1];
        arr[t-1]=t;
        console.log(arr[i]);
    }else {
        i++;
    }
}
for (let j = 0; j < arr.length; j++) {
    if(arr[j]!=j+1){
        console.log(`duplicate : ${arr[j]}`);
        console.log(`missing number : ${j + 1}`);
    }
}