import { InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';
import SectionTitle from 'components/SectionTitle';
import FaqSection from 'views/PricingPage/FaqSection';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="keywords" content={t('meta.keywords')} />
        <meta
          name="description"
          content={t('meta.description')}
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <SectionTitle>{t('features')}</SectionTitle>
          <BasicSection imageUrl="/feature-1.png" title={t('mediaShare.title')}>
            <p>
              {t('mediaShare.description')}
              <ul>
                <li>{t('mediaShare.pcToPhone')}</li>
                <li>{t('mediaShare.phoneToPC')}</li>
              </ul>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/support_all_device.svg" title={t('multiDevice.title')} reversed>
            <p>
              {t('multiDevice.description')}
              <ul>
                <li>{t('multiDevice.devices')}<strong>{t('multiDevice.devicesList')}</strong></li>
                <li>{t('multiDevice.videoFormat')}<strong>{t('multiDevice.videoFormatList')}</strong></li>
                <li>{t('multiDevice.audioFormat')}<strong>{t('multiDevice.audioFormatList')}</strong></li>
              </ul>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/watch_on_bed.png" title={t('easyToUse.title')} >
            <p>
              {t('easyToUse.description')}
            </p>
            <ul>
              <li>{t('easyToUse.features.import')}</li>
              <li>{t('easyToUse.features.history')}</li>
              <li>{t('easyToUse.features.password')}</li>
              <li>{t('easyToUse.features.language')}</li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl="/web-video-demo.png" title={t('webBrowser.title')} reversed>
            <p>
              {t('webBrowser.description')}
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <FaqSection />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}


const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 8rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      posts: await getAllPosts(),
    },
  };
}