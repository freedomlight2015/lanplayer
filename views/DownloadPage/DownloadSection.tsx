import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import DownloadCard from 'components/DownloadCard';
import { useTranslation } from 'next-i18next';
import SectionTitle from 'components/SectionTitle';
import Accordion from 'components/Accordion';

export default function PricingTablesSection() {
  const { t } = useTranslation('common');
  return (
    <Wrapper>
      <SectionTitle>{t('download.sectionTitle')}</SectionTitle>
      <AutofitGrid>
        <DownloadCard
          title="Windows"
          requirements={['Windows 10 (64-bit) or higher']}
          btns={[
            {
              label: 'Download .Exe',
              url: "https://github.com/freedomlight2015/lanplayer/releases/download/lanplayer-v1.0.0/Lanplayer-v1.0.0-windows.exe",
            },
            {
              label: 'Protable .zip',
              url: "https://github.com/freedomlight2015/lanplayer/releases/download/lanplayer-v1.0.0/LanPlayer-v1.0.0-windows-protable.zip",
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
              url: "https://github.com/freedomlight2015/lanplayer/releases/download/lanplayer-v1.0.0/Lanplayer-v1.0.0-android.apk",
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
              url: "https://github.com/freedomlight2015/lanplayer/releases/download/lanplayer-v1.0.0/lanplayer-v1.0.0-macos.dmg",
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
                label: 'Protable .zip',
                url: "https://github.com/freedomlight2015/lanplayer/releases/download/lanplayer-v1.0.0/lanplayer-v1.0.0-linux-protable.zip",
              },
          ]}
        >
        </DownloadCard>
        
        <DownloadCard
          title="Ios"
          requirements={[
            'Not supported now',
          ]}
          btns={[]}
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
