

const maxSubArray = () => {

// Initialize with first element
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    // Start from second element
    for (let i = 1; i < nums.length; i++) {
        // Decide: extend current subarray or start fresh?
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        // Update global maximum
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;

}