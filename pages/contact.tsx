import styled from 'styled-components';
import Page from 'components/Page';
import NextImage from 'next/image';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <Page title="Contact" description="Have feedback for us? you can reach us anytime by email or github issues.">
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
