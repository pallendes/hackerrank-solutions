/* https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem */
function organizingContainers(container) {
    let containersCapacity = new Array(container.length);
    let ballsPerType = new Array(container[0].length);
    
    if (containersCapacity.length !== ballsPerType.length) {
        return 'Impossible'
    }
    
    for (let i = 0; i < container[0].length; i ++) {
        let colSum = 0;
        
        for (let j = 0; j < container.length; j ++) {
            colSum += container[j][i];           
        }
        
         ballsPerType[i] = colSum;
    }
    
    for (let i = 0; i < container[0].length; i ++) {
        containersCapacity[i] = container[i].reduce((a, b) => a + b);
    }
    
    containersCapacity.sort()
    ballsPerType.sort()
    
    for (let i = 0; i < container[0].length; i ++) {
        if (containersCapacity[i] !== ballsPerType[i]) {
            return 'Impossible'
        }
    }
    
    return 'Possible'
}

console.log(organizingContainers([[0, 2], [1, 1]]))