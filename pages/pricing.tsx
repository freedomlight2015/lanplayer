import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import Separator from 'components/Separator';
import { useEffect, useState } from 'react';

export default function PricingPage() {
  const { t } = useTranslation('common');
  return (
    <Page title={t('pricing.title')} description={t('pricing.description')}>
      <Wrapper>
        <PricingTablesSection />
        <Separator />
        <FaqSection />
      </Wrapper>

    </Page>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
