import { rosaryInitialPart } from '@/constants/rosary'
import { Fragment } from 'react'
import { RosaryPray } from './rosary-pray'

export function RosaryIntroduction() {
  return (
    <Fragment>
      <RosaryPray 
        title={rosaryInitialPart[1].title}
        pray={rosaryInitialPart[1].pray}
      >
      </RosaryPray>
      
      <RosaryPray 
        title={rosaryInitialPart[2].title}
        pray={rosaryInitialPart[2].pray}
      >
      </RosaryPray>

      <RosaryPray 
        title={rosaryInitialPart[3].title}
        pray={rosaryInitialPart[3].pray}
      >
      </RosaryPray>

      <RosaryPray 
        title={rosaryInitialPart[4].title}
        pray={rosaryInitialPart[4].pray}
      >
      </RosaryPray>

      <RosaryPray 
        title={rosaryInitialPart[5].title}
        pray={rosaryInitialPart[5].pray}
      >
      </RosaryPray>
      
    </Fragment>
  )
}