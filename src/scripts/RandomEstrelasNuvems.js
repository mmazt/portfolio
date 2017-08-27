//Função para gerar números aleatórios (estrelas e nuvens)
  function randomIntBetween(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
  }


//Função para criar estrelas
export const criarEstrelas = (count) => {
      let w = window.innerWidth
      let h = window.innerHeight * 0.46
      let arr = [...Array(count)].map(item => {
        return {size: '', x: '', y: ''}
      })

      arr.map(item => {
        let size = randomIntBetween(1, 10)
        item.size = size
        item.x = Math.min(randomIntBetween(1, w), w - size - 5)
        item.y = Math.min(randomIntBetween(1, h), h - size - 5)
        return {}
      })

      return arr
  }
  export const criarNuvem = (count1, count2) => {
    let w = window.innerWidth
    let h = window.innerHeight * 0.25
    let arr1 = [...Array(count1)].map(item => {
      return {size: '', x: '', y: ''}
    })
    let arr2 = [...Array(count2)].map(item => {
      return {size: '', x: '', y: ''}
    })

    arr1.map(item => {
      let size = 10
      item.size = size
      item.x = Math.min(randomIntBetween(1, w), w - size - 5)
      item.y = Math.min(randomIntBetween(1, h), h - size - 5)
      return {}
    })
    arr2.map(item => {
      let size = 10
      item.size = size
      item.x = Math.min(randomIntBetween(1, w), w - size - 5)
      item.y = Math.min(randomIntBetween(1, h), h - size - 5)
      return {}
    })

    return {nuvem_pequena: arr1, nuvem_grande: arr2}
}
