import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='explore'>
      <ServicesH1>Explore Datasets</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Cell Types</ServicesH2>
          <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Organs</ServicesH2>
          <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Merscope</ServicesH2>
          <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
