import React from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Container from 'components/Container';
import DownloadSection from 'views/DownloadPage/DownloadSection';
import SectionTitle from 'components/SectionTitle';
import Accordion from 'components/Accordion';
import Spacer from 'components/Spacer';
import Separator from 'components/Separator';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

const DownloadPage = () => {
  const { t } = useTranslation('common');
  
  return (
    <Page title={t('download.title')} description={t('download.description')}>
      <Wrapper>
        <DownloadSection />
        <SectionTitle>{t('download.installation.title')}</SectionTitle>
        
        <Accordion title={t('download.installation.windows.title')} isOpen={true}>
          <p>{t('download.installation.windows.description')}</p>
          <p><strong>{t('download.installation.windows.installer')}</strong></p>
          <p><strong>{t('download.installation.windows.portable')}</strong></p>
        </Accordion>

        <Accordion title={t('download.installation.android.title')} isOpen={true}>
          <p>{t('download.installation.android.description')}</p>
        </Accordion>

        <Accordion title={t('download.installation.macos.title')} isOpen={true}>
          <p>{t('download.installation.macos.description')}</p>
          <p><strong>{t('download.installation.macos.tip')}</strong> <code>{t('download.installation.macos.command')}</code></p>
        </Accordion>

        <Accordion title={t('download.installation.linux.title')} isOpen={true}>
          <p>{t('download.installation.linux.description')}</p>
        </Accordion>

        <Separator />
        <SectionTitle>{t('download.faq.title')}</SectionTitle>
        <Accordion title={t('download.faq.installation.question')} isOpen={true}>
          {t('download.faq.installation.answer')}
        </Accordion>
      </Wrapper>
    </Page>
  );
};
const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};

export default DownloadPage;
