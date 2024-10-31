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
            theme: 'dark',
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
        >
          $0<span>/week</span>
        </PricingCard>
        <PricingCard
          title="1 year"
          benefits={['1 serial number', 'register 50 devices','No limit']}
          isOutlined
          paddle={paddle}
        >
          $10<span>/1 year</span>
        </PricingCard>
        <PricingCard
          title="3 year"
          benefits={['1 serial number', 'register 100 devices','No limit']}
          paddle={paddle}
        >
          $20<span>/3 year</span>
        </PricingCard>
        <PricingCard
          title="Permanent"
          benefits={['1 serial number', 'register 200 devices','No limit']}
          paddle={paddle}
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
