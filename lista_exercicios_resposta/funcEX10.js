function divisivelPor3(check) {
    if (check % 3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(divisivelPor3(3))
console.log(divisivelPor3(0))
console.log(divisivelPor3(-1))
console.log(divisivelPor3(665))