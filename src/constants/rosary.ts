import { agradecimentoDoTerco, aveMaria, credo, gloriaAoPai, oferecimentoTerco, oMeuJesus, paiNosso, salveRainha, sinalDaSantaCruz } from "./prays"


const introducaoAveMaria1 = `
O anjo do Senhor anunciou a Maria
e ela concebeu do Espírito Santo.
`
const introducaoAveMaria2 = `
Eis aqui a escrava do Senhor.
Faça-se em mim segundo a vossa palavra.
`
const introducaoAveMaria3 = `
E o verbo se fez carne
e habitou entre nós.
`

export const misteryIntroduction = {
  1: {
    title: 'Glória ao Pai',
    pray: gloriaAoPai,
  },
  2: {
    title: 'Ó meu Jesus',
    pray: oMeuJesus,
  },
}

export const rosaryInitialPart = {
  1: {
    title:'Sinal da cruz',
    pray: sinalDaSantaCruz,
  },
  2: {
    title: 'Oferecimento do Terço',
    pray: oferecimentoTerco,
  },
  3: {
    title: 'Oração do Credo',
    pray: credo,
  },
  4: {
    title: 'O primeiro Pai Nosso',
    pray: paiNosso,
  },
  5: {
    title: 'As 3 primeiras Ave-Marias',
    introductions: [introducaoAveMaria1, introducaoAveMaria2, introducaoAveMaria3],
    pray: aveMaria,
    times:3,
  },
}

export const rosaryFinalPart = {
  1: {
    title: 'Agradecimento do Terço',
    pray: agradecimentoDoTerco,
  },
  2: {
    title: 'Salve Rainha',
    pray: salveRainha,
  },
}

export const denario = {
  1: {
    title: 'Pai Nosso',
    pray: paiNosso
  },
  2: {
    title: '10 Ave Marias',
    pray: aveMaria,
    times: 10,
  }
}