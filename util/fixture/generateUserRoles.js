module.exports = (count, userIdStartIndex) => (
  Array(count).fill(null).map((_n, index) => ({
    userId: userIdStartIndex + index,
    roleId: 'user',
  }))
);
