import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import Separator from 'components/Separator';
import { useEffect, useState } from 'react';

export default function PricingPage() {
  
  return (
    <Page title="Pricing" description="Big cheap for everyone.">
      <Wrapper>
        <PricingTablesSection />
        <Separator />
        <FaqSection />
      </Wrapper>

    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
