import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Page from 'components/Page';
import NextImage from 'next/image';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  const { t } = useTranslation('common');
  return (
    <Page title={t('contact.title')} description={t('contact.description')}>
      <ContactContainer>
        <InformationSection />
      </ContactContainer>
    </Page>
  );
}

const ContactContainer = styled.div`

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};