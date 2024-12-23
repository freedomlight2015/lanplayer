import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Terms of Service">
      <TermsOfServiceContainer>
        <RichText>
          <h2>1. Terms</h2>
          <p>
          By accessing the website at https://lanplayer.app, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>
          <br/>
          <h2>2. Disclaimer</h2>
          <p>
          The materials on this website are provided on an &apos;as is&apos; basis. The website owner makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
          Further, the website owner does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the website or otherwise relating to such materials or on any sites linked to this site.
          </p>
          <br/>
          <h2>3. Limitations</h2>
          <p>
          In no event shall the website owner or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if the website owner or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
          </p>
          <br/>
          <h2>4. Accuracy of materials</h2>
          <p>
          The materials appearing on this website could include technical, typographical, or photographic errors. The website owner does not warrant that any of the materials on its website are accurate, complete, or current. The website owner may make changes to the materials contained on its website at any time without notice. However, the website owner does not make any commitment to update the materials.
          </p>
          <br/>
          <h2>5. Links</h2>
          <p>
          The website owner has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by the website owner of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
          <br/>
          <h2>6. Modifications</h2>
          <p>
          The website owner may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms of service.
          </p>
          <br/>
          <h2>7. Governing Law</h2>
          <p>
          These terms and conditions are governed by and construed in accordance with the laws of California, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
          <br />
          Last updated: 2024-10-10
        </RichText>
      </TermsOfServiceContainer>
    </Page>
  );
}

const TermsOfServiceContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
