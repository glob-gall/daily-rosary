function first(items: string[]) {
  return items[0]
}

test('First', () => {
  const result = first(['um','dois','tres','quatro'])
  expect(result).toEqual('um')
})