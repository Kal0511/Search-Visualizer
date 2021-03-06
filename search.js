var arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i);
}
arr.forEach(index => document.getElementById('array').innerHTML += '<div class="grid-item" id="arr ' + index + '">' + index + '</div>');

function binarySearch() {
    const comparisons = 0;
    document.getElementById('array').innerHTML = "";
    arr.forEach(index => document.getElementById('array').innerHTML += '<div class="grid-item" id="arr ' + index + '">' + index + '</div>');
    let target = parseInt(document.getElementById('target').value) || 0;
    binarySearchRecursive(target, 0, arr.length - 1, comparisons);
}

async function binarySearchRecursive(target, low, high, comparisons) {
    document.getElementById('binaryComparison').innerHTML = comparisons;
    if (high < low) {
        return -1;
    }
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
        document.getElementById("arr " + mid).style.backgroundColor = "#60bd60";
        return mid;
    } else if (target < arr[mid]) {
        comparisons++;
        document.getElementById("arr " + mid).innerHTML = "<";
        document.getElementById("arr " + mid).style.backgroundColor = "#9DAAF2";
        await sleep(250);
        await binarySearchRecursive(target, low, mid - 1, comparisons);
    } else {
        comparisons++;
        document.getElementById("arr " + mid).innerHTML = ">";
        document.getElementById("arr " + mid).style.backgroundColor = "#FF6A3D";
        await sleep(250);
        await binarySearchRecursive(target, mid + 1, high, comparisons);
    }
}

async function linearSearch() {
    let comparisons = 0;
    document.getElementById('array').innerHTML = "";
    arr.forEach(index => document.getElementById('array').innerHTML += '<div class="grid-item" id="arr ' + index + '">' + index + '</div>');
    let target = parseInt(document.getElementById('target').value) || 0;
    for (let i = 0; i < 100; i++) {
        document.getElementById('linearComparison').innerHTML = comparisons;
        if (arr[i] === target) {
            document.getElementById("arr " + i).style.backgroundColor = "#60bd60";
            return i;
        } else {
            comparisons++;
            await sleep(250);
            document.getElementById("arr " + i).style.backgroundColor = "#FF6A3D";
        }
    }
    return -1;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}