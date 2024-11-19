const usersList = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
]

// Решение через map и find (как указано в уроке)
const getUniqueUsersMapFind = (users) => {
    const usersIds = users.map(({ id }) => id)
    const usersUniqueIds = [...new Set(usersIds)]

    return usersUniqueIds.map((id) => (
        users.find((user) => user.id === id)
    ))
}

// Решение с O(n)
const getUniqueUsers = (users) => {
    const usersSet = new Set()

    return users.filter((user) => {
        if (usersSet.has(user.id)) {
            return false
        }

        usersSet.add(user.id)
        return true
    })
}

const uniqueUsersMapFind = getUniqueUsersMapFind(usersList)
const uniqueUsers = getUniqueUsers(usersList)
console.log(uniqueUsersMapFind)
console.log(uniqueUsers)