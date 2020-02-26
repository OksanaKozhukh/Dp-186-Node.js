function reconstructTree (inorder, preorder) {
    let result = [];

    function findRootElement (arr) {
        return arr[Math.floor(arr.length/2)];
    }

    function buildTree (arr) {
       let root = result[0] = findRootElement (arr);
       let left = result[1] = arr.slice(0, arr.indexOf(root));
       let rigth = result[2] = arr.slice(arr.indexOf(root+1));
       
       return result;
    }
    
    result = buildTree (inorder); 

    let result2 = [];

    for (let i = 1; i < result.length; i++) {
        result2.push(result[0]);
        if (result[i].length > 1) {
            result2.push(buildTree(result[i]));
        }
    }

    
    
    return result2;
    
};

console.log(reconstructTree([1,2,3,4,5,6], [4,2,1,3,6,5]));

[4,[2,[1,[],[]],[3,[],[]]],[6,[5,[],[]],[]]]

// let left = result[1] = inorder.slice(0, inorder.indexOf(preorder[0]));
// let right = result[2] = inorder.slice(inorder.indexOf(preorder[0]+1));
// let firstRootElement = findRootElement (inorder);
// let rootLeftElement = findRootElement (result[1]);
// let rootRightElement = findRootElement (result[2]);