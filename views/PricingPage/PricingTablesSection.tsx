import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { Environments, initializePaddle, Paddle } from '@paddle/paddle-js';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  const { t } = useTranslation('common');
  const [paddle, setPaddle] = useState<Paddle | null>(null);

  const freeBenefits = [
    t('pricing.plans.free.benefits.0'),
    t('pricing.plans.free.benefits.1')
  ];

  const yearlyBenefits = [
    t('pricing.plans.yearly.benefits.0'),
    t('pricing.plans.yearly.benefits.1'),
    t('pricing.plans.yearly.benefits.2')
  ];

  const threeYearBenefits = [
    t('pricing.plans.threeYear.benefits.0'),
    t('pricing.plans.threeYear.benefits.1'),
    t('pricing.plans.threeYear.benefits.2')
  ];

  const permanentBenefits = [
    t('pricing.plans.permanent.benefits.0'),
    t('pricing.plans.permanent.benefits.1'),
    t('pricing.plans.permanent.benefits.2')
  ];

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
        eventCallback: function(data){
          //console.log(data);
          if (data.name == "checkout.completed" && data.data?.status == "completed"){
            var transaction_id = data.data?.transaction_id;
            //redirect to success page
            window.location.href = "/success?transaction_id=" + transaction_id;
          }
        }
      });

      if (paddleInstance) {
        //paddleInstance.Environment.set("sandbox"); // 设置环境
        setPaddle(paddleInstance);
      }
    };
    initPaddle();
  }, []);

  return (
    <Wrapper>
      <SectionTitle>{t('pricing.h1title')}</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title={t('pricing.plans.free.title')}
          benefits={freeBenefits}
          paddle={paddle}
          priceid=''
        >
          {t('pricing.plans.free.price')}<span>{t('pricing.plans.free.period')}</span>
        </PricingCard>
        <PricingCard
          title={t('pricing.plans.yearly.title')}
          benefits={yearlyBenefits}
          isOutlined
          paddle={paddle}
          priceid='pri_01jbg68y4c55th9pgctqba3dc5'
        >
          $10<span>{t('pricing.plans.yearly.period')}</span>
        </PricingCard>
        <PricingCard
           title={t('pricing.plans.threeYear.title')}
           benefits={threeYearBenefits}
          paddle={paddle}
          priceid='pri_01jbgr6kmb9neh3bmaktp3f4h3'
        >
          $20<span>{t('pricing.plans.threeYear.period')}</span>
        </PricingCard>
        <PricingCard
          title={t('pricing.plans.permanent.title')}
          benefits={permanentBenefits}
          paddle={paddle}
          priceid='pri_01jbgr7gskp89m4ahbs5qa62pb'
        >
          $30<span>{t('pricing.plans.permanent.period')}</span>
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
