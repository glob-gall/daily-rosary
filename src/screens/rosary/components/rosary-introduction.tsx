import { aveMaria, credo, oferecimentoTerco, paiNosso, sinalDaSantaCruz } from '@/constants/prays'
import { invocacao1, invocacao2, invocacao3 } from '@/constants/prays/ave-maria'
import { Fragment } from 'react'
import { RosaryPray } from './rosary-pray'


export function RosaryIntroduction() {
  return (
    <Fragment>
      <RosaryPray 
        title='Sinal da cruz'
        pray={sinalDaSantaCruz}
      />
      
      
      <RosaryPray 
        title='Oferecimento do Terço'
        pray={oferecimentoTerco}
      />
      

      <RosaryPray 
        title='Oração do Credo'
        pray={credo}
      />
      

      <RosaryPray 
        title='O primeiro Pai Nosso'
        pray={paiNosso}
      />
      

      <RosaryPray 
        title='Primeira invocação'
        pray={invocacao1}
      />
      <RosaryPray 
        title='Ave-Maria'
        pray={aveMaria}
      />
      
      <RosaryPray 
        title='Segunda invocação'
        pray={invocacao2}
      />
      <RosaryPray 
        title='Ave-Maria'
        pray={aveMaria}
      />
      
      <RosaryPray 
        title='Terceira invocação'
        pray={invocacao3}
      />
      <RosaryPray 
        title='Ave-Maria'
        pray={aveMaria}
      />
      
    </Fragment>
  )
}