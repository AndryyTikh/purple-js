const users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

function getUniqueUsersList(users) {
  const ids = users.map((user) => user.id);
  const uniqueIds = Array.from(new Set(ids));

  return uniqueIds.map((id) => users.find((user) => user.id === id));
}

getUniqueUsersList(users);
