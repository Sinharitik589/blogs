export function getAllPostIds() {
  var id = [];
  for (let i = 0; i < 9; i++) {
    id.push({ id: i });
  }

  return {
    params: {
      id,
    },
  };
}
