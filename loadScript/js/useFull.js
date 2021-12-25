
loadScript('js/a.js', () => {
  var a = 11;
  console.log('from useFull ', a)

  loadScript('js/b.js', () => {
    console.log('result summ 7: ', a + b)
  })
});