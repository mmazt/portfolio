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
        return
      })

      return arr
  }
  //Função para criar nuvens
//   function criarNuvem(nomeDiv, c1, c2) {
//       var w = $("." + nomeDiv).width()
//       var h = $("." + nomeDiv).height()
//       var count1 = c1;
//       var count2 = c2;

//       for (i = 0; i < count1; i++) {
//           var size = 10,
//               x = Math.min(randomIntBetween(1, w), w - size - 5),
//               y = Math.min(randomIntBetween(1, h), h - size - 5),
//               elem1 = $("<div class='nuvem1'></div>");

//           elem1.css({
//               "top": y,
//               "left": x,
//               "width": size,
//               "height": size
//           });
//           elem1.addClass("s" + randomIntBetween(1, count1));
//           $("." + nomeDiv).append(elem1);
//       }
//       for (i = 0; i < count2; i++) {
//           var size = 10,
//               x = Math.min(randomIntBetween(1, w), w - size - 5),
//               y = Math.min(randomIntBetween(1, h), h - size - 5),
//               elem2 = $("<div class='nuvem2'></div>");

//           elem2.css({
//               "top": y,
//               "left": x,
//               "width": size,
//               "height": size
//           });
//           elem2.addClass("s" + randomIntBetween(1, count2));
//           $("." + nomeDiv).append(elem2);
//       }
//   }

//   //Chamada das funções de estrelas e nuvens
//   criarEstrelas("espaco", 200);
//   criarEstrelas("ceu", 50);
//   criarEstrelas("ceu2", 20);
//   criarNuvem("ceu3", 1, 2);
//   criarNuvem("ceu4", 1, 2);
// });
