import { agradecimentoDoTerco, aveMaria, gloriaAoPai, oMeuJesus, paiNosso, salveRainha } from "./prays"


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