import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexible and affordable pricing for you</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="free"
          benefits={['7 days trial','No limit']}
        >
          $0<span>/week</span>
        </PricingCard>
        <PricingCard
          title="1 year"
          benefits={['1 serial number', 'register 50 devices','No limit']}
          isOutlined
        >
          $10<span>/1 year</span>
        </PricingCard>
        <PricingCard
          title="3 year"
          benefits={['1 serial number', 'register 100 devices','No limit']}
        >
          $20<span>/3 year</span>
        </PricingCard>
        <PricingCard
          title="Permanent"
          benefits={['1 serial number', 'register 200 devices','No limit']}
        >
          $50<span>/Permanent</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
