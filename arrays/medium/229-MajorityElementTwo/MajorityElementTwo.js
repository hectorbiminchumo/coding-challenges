const MajorityElementTwo = (nums) => {
    let candidateOne = null
    let candidateTwo = null
    let countOne = 0
    let countTwo = 0
    for(let num of nums) {
        if(num === candidateOne){
            countOne++
        }else if(num === candidateTwo){
            countTwo++
        }
        else if(countOne === 0) {
            candidateOne = num;
            countOne = 1
        }
        else if (countTwo === 0) {
            candidateTwo = num;
            countTwo = 1
        }
        else {
            countOne--
            countTwo--
        }
    }
    countOne = countTwo = 0;
    for(let num of nums) {
        if (num === candidateOne) countOne++
        else if (num === candidateTwo) countTwo++
    }
    const result = [];
    const threshold = Math.floor(nums.length / 3)
    if(countOne > threshold) result.push(candidateOne)
    if(countTwo > threshold) result.push(candidateTwo)

    return result
}