function reconstructTree (inorder, preorder) {
    let result = [];
     
    function findRootElement (arr) {
        return arr[Math.floor(arr.length/2)];
    }

    function buildTree (arr) {
       let root = result[0] = findRootElement (arr);
       let left = result[1] = arr.slice(0, arr.indexOf(root));
       let right = result[2] = arr.slice(arr.indexOf(root+1));
       //if (left.length < 3) {left.push('')}
       //if (right.length < 3) {right.push('')}
                  
       return result;
    }
    
    result = buildTree (inorder); // [4, [1,2,3], [5,6, '']]

    result = buildTree(inorder).slice(1).map(item => buildTree(item));

    // for (let i = 1; i < result.length; i++) {
    //     result2.push(result[0]);
    //     if (result[i].length > 1) {
    //         result2.push(buildTree(result[i]));
            
    //     }
    // }

    
    
    return result;
    
};

console.log(reconstructTree([1,2,3,4,5,6], [4,2,1,3,6,5]));

[4,[2,[1,[],[]],[3,[],[]]],[6,[5,[],[]],[]]]