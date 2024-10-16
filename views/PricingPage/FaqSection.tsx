import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';
import Container from 'components/Container';

export default function FaqSection() {
  return (
    <Wrapper>
      <Container>
      <SectionTitle>Frequently asked question</SectionTitle>
      <div style={{ height: '3rem' }}></div>
      <Accordion title="Do I need to purchase a separate serial number for each device?">
      You only need to buy one to register all your devices, and you can check the specific number of supported devices on the pricing page.
      </Accordion>
      <Accordion title="Why can’t the web browser support all video formats?">
      The HTML5 standard supports only common media formats and codecs. MP4 is the most widely supported format by browsers, and most videos today are in this format.
      </Accordion>
      <Accordion title="Is it free to use?">
      You can try it for free for 7 days. After that, a purchase is required, but don’t worry, the price is very affordable, and future updates are provided for free.
      </Accordion>
      <Accordion title="Do I need to install the software on all devices?">
      Only the device sharing the videos needs to install the software. Other devices can watch via their built-in browser without any installation.
      </Accordion>
      <Accordion title="How secure is it?">
      The software allows you to set an Access Password, ensuring your privacy is protected.
      </Accordion>
      <Accordion title="What is the video quality like?">
      We guarantee the playback quality will be the same as the original video, with no reduction in output quality.
      </Accordion>
      <Accordion title="What size videos can it play?">
      Playing 1080p and 4K videos in a local area network is generally not an issue.
      </Accordion>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
