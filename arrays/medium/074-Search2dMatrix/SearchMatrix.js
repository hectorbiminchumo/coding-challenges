const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]



const SearchMatrix = (matrix, target) => {

// Get dimensions
    const m = matrix.length;        // number of rows
    const n = matrix[0].length;     // number of columns
    
    // Binary search on "virtual" 1D array
    let left = 0;
    let right = m * n - 1;  // total elements - 1
    
    while (left <= right) {
        // Calculate middle index
        let mid = Math.floor((left + right) / 2);
        
        // Convert 1D index to 2D coordinates
        let row = Math.floor(mid / n);
        let col = mid % n;
        let midValue = matrix[row][col];
        
        // Binary search logic
        if (midValue === target) {
            return true;  // Found it!
        } else if (midValue < target) {
            left = mid + 1;  // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }
    
    return false;  // Not found



}

console.log(SearchMatrix(matrix,5))