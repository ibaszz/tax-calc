const getTaxReliefCode =  (maritalStatus, child) => {
    if (maritalStatus) {
        return `K${child}`
    } else {
        return "TK0"
    }
}

export { getTaxReliefCode };