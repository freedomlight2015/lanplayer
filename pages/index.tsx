import { InferGetStaticPropsType } from 'next';
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

  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="keywords" content="LanPlayer, LAN video sharing, LAN media player, LAN media sharing app, Local video server" />
        <meta
          name="description"
          content="LanPlayer is a powerful software designed for seamless video sharing and playback across local area networks (LAN).It supports almost all popular video formats on almost all devices."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <SectionTitle>Features</SectionTitle>
          <BasicSection imageUrl="/support_all_device.svg" title="Support multiple devices">
            <p>
            Easily share and play videos/movies within the local network (LAN) using Lanplayer , it supports almost all devices.
            <ul>
              <li>Devices:<strong>Windows,Android, Linux, MacOS, iOS</strong></li>
              <li>Formart:<strong>MP4, AVI, MKV, FLV, WMV, RMVB, MOV…</strong></li>
            </ul>
            </p>
          </BasicSection>
          <BasicSection imageUrl="/watch_on_bed.png" title="Easy to use" reversed>
            <p>
            Many times, we download movies from the internet to our computers and want to watch them on our phones while lying in bed. However, it&apos;s too troublesome, and the phone&apos;s storage space isn&apos;t enough.The Lanplayer can help.
            </p>
            <ul>
              <li>Easy management with bulk video import and deletion.</li>
              <li>Supports playback history, automatically resumes from the last played position.</li>
              <li>With the Access Pwssword, you can keep your video files safe.</li>
              <li>Multi-language support for easier operation.</li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl="/web-video-demo.png" title="Watch on webbrowser">
            <p>
            We also support watching directly on the webbrowser without the need to download any software on the phone (attension: the webpage only supports playing common video formats like MP4, but that is sufficient for many videos).
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Testimonials />
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

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
