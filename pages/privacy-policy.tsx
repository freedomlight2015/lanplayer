import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Privacy policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
          We value your privacy and are committed to protecting your personal information. This privacy policy aims to explain how we collect, use, and protect your personal information.
          </p>
          <br/>
          <p>
          <strong>Information Collection:</strong> We may collect your personal information, such as your name, contact details, and email address. We only collect necessary information to provide you with the requested services or respond to your inquiries.
          </p>
          <br/>
          <p>
          <strong>Information Use: </strong>We will only use the personal information you provide to fulfill your requests, such as processing orders, sending important notifications, or responding to your queries. We will not use your personal information for any other purposes unless explicitly consented by you or required by law.
          </p>
          <br/>
          <p>
          <strong>Information Protection:</strong>We take reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. We ensure that your personal information is securely stored in our systems and only accessible to authorized personnel.
          </p>
          <br/>
          <p>
          <strong>Information Retention: </strong> We will take necessary measures to store your personal information on secure servers and retain it only for as long as necessary.
          </p>
          <br/>
          <p>
          <strong>Information Sharing: </strong>We do not sell, trade, or transfer your personal information to any third parties unless explicitly consented by you or required by law.
          </p>
          <br/>
          <p>
          <strong>Privacy Policy Updates:</strong>We reserve the right to update this privacy policy at any time. Any significant changes will be notified to you through our website or other appropriate means.
          </p>
          <br/>
          <p>
          If you have any questions or concerns regarding our privacy policy, please feel free to contact us. Thank you for trusting us with the protection of your personal information.
          </p>
          <br />
          Last updated: 2024-10-10
        </RichText>
      </PrivacyPolicyContainer>
    </Page>
  );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
