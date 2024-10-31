import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Environments, initializePaddle, Paddle } from '@paddle/paddle-js';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  useEffect(() => {
    const initPaddle = async () => {
      const paddleInstance = await initializePaddle({
        token: 'live_53e3768da938d28bd8793e14aa1',
        checkout: {
          settings: {
            displayMode: 'overlay',
            theme: 'light',
            frameTarget: 'paddle-checkout-frame',
            frameInitialHeight: 450,
            frameStyle: 'width: 100%; background-color: transparent; border: none',
          },
        },
      });

      if (paddleInstance) {
        setPaddle(paddleInstance);
        paddleInstance.Environment.set("sandbox"); // 设置环境
      }
    };
    initPaddle();
  }, []);

  return (
    <Wrapper>
      <SectionTitle>Flexible and affordable pricing for you</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="free"
          benefits={['7 days trial','No limit']}
          paddle={paddle}
          priceid=''
        >
          $0<span>/week</span>
        </PricingCard>
        <PricingCard
          title="1 year"
          benefits={['1 serial number', 'register 10 devices','No limit']}
          isOutlined
          paddle={paddle}
          priceid='pri_01jbg68y4c55th9pgctqba3dc5'
        >
          $10<span>/1 year</span>
        </PricingCard>
        <PricingCard
          title="3 year"
          benefits={['1 serial number', 'register 30 devices','No limit']}
          paddle={paddle}
          priceid='pri_01jbgr6kmb9neh3bmaktp3f4h3'
        >
          $20<span>/3 year</span>
        </PricingCard>
        <PricingCard
          title="Permanent"
          benefits={['1 serial number', 'register 100 devices','No limit']}
          paddle={paddle}
          priceid='pri_01jbgr7gskp89m4ahbs5qa62pb'
        >
          $30<span>/Permanent</span>
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
