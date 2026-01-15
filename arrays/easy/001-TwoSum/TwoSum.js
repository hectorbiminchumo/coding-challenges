
const TwoSum = (nums, target) => {
let left = 0
let right = nums.length - 1

while(left<right){
    const sum = nums[left] + nums[right]
    if(sum > target){
        right--;
    } else if (sum < target) {
        left++;
    } else {
        return [left, right]
    }
}
return []

}
