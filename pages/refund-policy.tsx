import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Refund Policy">
      <PrivacyPolicyContainer>
        <RichText>
          <p>
          When use lanplayer, we offer a trial period to allow you to evaluate our software before making a purchase. During the trial, you can explore all the features and functionalities to ensure it meets your needs.
          </p>
          <br/>
          <h3>
          Refunds
          </h3>
          <p>
          Once the trial period has expired and a purchase is made, all sales are final. We do not offer refunds as the trial period serves as an opportunity to fully test the software before committing to a purchase.
          </p>
          <br/>
          <h3>
          Exceptions
          </h3>
          <p>
          Refunds may be granted under exceptional circumstances, such as:
          <br/>
          </p>
          <ul>
            <li>
            Technical issues that prevent the software from functioning as intended, and cannot be resolved by our support team.
            </li>
            <li>
            Duplicate purchases made in error.
            </li>
            </ul>
          <p>
          To request a refund under these conditions, please contact our support team within 14 days of your purchase.
          </p>
          <br/>
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
