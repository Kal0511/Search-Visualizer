var arr = [];
for(let i=0;i<100;i++){
    arr.push(i);
}
arr.forEach(index =>  document.getElementById('array').innerHTML += '<div class="grid-item" id="arr '+index+'">'+index+'</div>');

var comparisons;

function binarySearch(){
    comparisons = 0;
    document.getElementById('array').innerHTML = "";
    arr.forEach(index =>  document.getElementById('array').innerHTML += '<div class="grid-item" id="arr '+index+'">'+index+'</div>');
    let target = document.getElementById('target').value;
    binarySearchRecursive(target, 0, arr.length-1);
}

async function binarySearchRecursive(target, low, high){
    if(high<low){
        document.getElementById('binaryComparison').innerHTML = comparisons;
        return -1;
    }
    let mid = Math.floor(low + (high-low) / 2);
    if(arr[mid]==target){
        document.getElementById("arr "+mid).style.backgroundColor = "green";
        document.getElementById('binaryComparison').innerHTML = comparisons;
        return mid;
    }else if(target < arr[mid]){
        comparisons++;
        document.getElementById("arr "+mid).innerHTML = "<";
        document.getElementById("arr "+mid).style.backgroundColor = "yellow";
        await sleep(250);
        binarySearchRecursive(target, low, mid-1);
    } else{
        comparisons++;
        document.getElementById("arr "+mid).innerHTML = ">";
        document.getElementById("arr "+mid).style.backgroundColor = "red";
        await sleep(250);
        binarySearchRecursive(target, mid+1, high);
    }
}

async function linearSearch(){
    comparisons = 0;
    document.getElementById('array').innerHTML = "";
    arr.forEach(index =>  document.getElementById('array').innerHTML += '<div class="grid-item" id="arr '+index+'">'+index+'</div>');
    let target = document.getElementById('target').value;
    for(let i=0;i<100;i++){
        document.getElementById('linearComparison').innerHTML = comparisons;
        if(arr[i]==target){
            document.getElementById("arr "+i).style.backgroundColor = "green";
            return i;
        }else{
            comparisons++;
            await sleep(250);
            document.getElementById("arr "+i).style.backgroundColor = "red";
        }
    }
    return -1;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }