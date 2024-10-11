import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import DownloadCard from 'components/DownloadCard';
import SectionTitle from 'components/SectionTitle';
import Accordion from 'components/Accordion';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Select the system to be installed</SectionTitle>
      <AutofitGrid>
        <DownloadCard
          title="Windows"
          requirements={['Windows 10 (64-bit) or higher']}
          btns={[
            {
              label: 'Download .Exe',
              url: "https://github.com/vercel/next.js/releases/tag/11.0.0",
            },
            {
              label: 'Protable .zip',
              url: "https://github.com/vercel/next.js/releases/tag/11.0.0",
            },
          ]}
        >
        </DownloadCard>
        <DownloadCard
          title="Android"
          requirements={[
            'Android 21 or higher',
          ]}
          btns={[
            {
              label: 'Download .Apk',
              url: "https://github.com/vercel/next.js/releases/tag/11.0.0",
            },
          ]}
        >
        </DownloadCard>
        <DownloadCard
          title="MacOS"
          requirements={['macOS 10.13 or higher']}
          btns={[
            {
              label: 'Download .Dmg',
              url: "https://github.com/vercel/next.js/releases/tag/11.0.0",
            },
          ]}
        >
        </DownloadCard>
        <DownloadCard
          title="Linux"
          requirements={[
            'Ubuntu 18.04 or higher',
            'Debian 10 or higher',
            'CentOS 7 or higher',
            'Fedora 31 or higher',
          ]}
          btns={[
            {
              label: 'Download .deb',
              url: "https://github.com/vercel/next.js/releases/tag/11.0.0",
            },
            {
                label: 'Protable .tar.gz',
                url: "https://github.com/vercel/next.js/releases/tag/11.0.0",
              },
          ]}
        >
        </DownloadCard>
        
        <DownloadCard
          title="Ios"
          requirements={[
            'Ios 10 or higher',
          ]}
          btns={[
            {
              label: 'Download .ipa',
              url: "https://github.com/vercel/next.js/releases/tag/11.0.0",
            },
          ]}
        >
        </DownloadCard>
      </AutofitGrid>
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
