const GroupAnagrams = (strs) => {
    const map = new Map()

    for (let str of strs) {
        // Sort the string to create a key
        const sorted = str.split('').sort().join('');
        
        // If key doesn't exist, create empty array
        if (!map.has(sorted)) {
            map.set(sorted, []);
        }
        
        // Add current string to its group
        map.get(sorted).push(str);
    }
    
    // Return all groups as array of arrays
    return Array.from(map.values());
    

}
