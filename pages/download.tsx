import React from 'react';
import styled from 'styled-components';
import Page from 'components/Page';
import Link from 'next/link';
import Container from 'components/Container';
import DownloadSection from 'views/DownloadPage/DownloadSection';
import SectionTitle from 'components/SectionTitle';
import Accordion from 'components/Accordion';
import Spacer from 'components/Spacer';
import Separator from 'components/Separator';

const DownloadPage = () => {
  return (
    <Page title="Download" description="Download the Lanplayer for Windows, macOS, Linux, Android, and iOS.">
    <Wrapper>
        <DownloadSection />
        <SectionTitle>Installtion instructions</SectionTitle>
        <Accordion title="Windows" isOpen={true}>
            <p>Windows has two distributions, one is a portable version, and the other is an installer version. </p>
            <p><strong>1.Installer version. </strong>Download the .exe file, and the installation process is the same as other software.</p>
            <p><strong>2.Portable version. </strong>This version does not need to be installed, just unzip it and run it.</p>
        </Accordion>

        <Accordion title="Android" isOpen={true}>
            <p>The Android version provides a <code>.apk</code> file, which can be downloaded and installed directly, and supports all CPU architectures.</p>
        </Accordion>

        <Accordion title="macOS" isOpen={true}>
            <p>The Macos version provides a .dmg file,Download the file ,drag the app to the Applications folder to install it</p>
            <p><strong>Tip:</strong>if install failed,open Terminal and run the command like a real hacker <code>sudo xattr -rd com.apple.quarantine /Applications/LanPlayer.app </code></p>
        </Accordion>

        <Accordion title="Linux" isOpen={true}>
            <p>The Linux version provides a <code>.deb</code> and <code>.tar.gz</code> file, which can be downloaded and installed as needed.</p>
        </Accordion>

        <Accordion title="iOS" isOpen={true}>
            <p>Currently, only the .ipa file is provided for the iOS platform, which needs to be signed and installed by itself. It is recommended to use TrollStore for installation.</p>
            <p style={{color:'gray'}}>Why is it not listed on the App Store? <br></br>Because there is no money! the apple store is very expensive.</p>
        </Accordion>
        <Separator />
        <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Do I need to install the software on all devices?" isOpen={true}>
      Only the device sharing the videos needs to install the software. Other devices can watch via their built-in browser without any installation.
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

export default DownloadPage;
