import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import { Environments, initializePaddle, Paddle } from '@paddle/paddle-js';
import Button from './Button';
import RichText from './RichText';

interface PricingCardProps {
  title: string;
  benefits: string[];
  isOutlined?: boolean;
  paddle: Paddle | null;
  priceid: string;
}

export default function PricingCard({ title, benefits, isOutlined, paddle, priceid, children }: PropsWithChildren<PricingCardProps>) {
  const isAnyBenefitPresent = benefits?.length;
  
  const onPayment = () => {
    console.log("paddle instance"+paddle);
          paddle?.Checkout.open({
            items: [{ priceId: priceid, quantity: 1 }],
          });
  }
  return (
    <Wrapper isOutlined={isOutlined}>
      <Title>{title}</Title>
      <PriceContainer>
        <Price>{children}</Price>
        {isAnyBenefitPresent && (
          <CustomRichText>
            <ul>
              {benefits.map((singleBenefit, idx) => (
                <li key={idx}>{singleBenefit}</li>
              ))}
            </ul>
          </CustomRichText>
        )}
      </PriceContainer>
      {priceid && (
      <CustomButton onClick={onPayment}>Get started</CustomButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOutlined?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: rgb(var(--cardBackground));
  box-shadow: ${(p) => (p.isOutlined ? 'var(--shadow-lg)' : 'var(--shadow-md)')};
  transform: ${(p) => (p.isOutlined ? 'scale(1.1)' : 'scale(1.0)')};
  text-align: center;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=desktop')} {
    box-shadow: var(--shadow-md);
    transform: none;
    order: ${(p) => (p.isOutlined ? -1 : 0)};
  }
`;

const Title = styled.h3`
  font-size: 4rem;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-size: 2.5rem;
`;

const PriceContainer = styled.div`
  margin: auto;

  & > *:not(:first-child) {
    margin-top: 2rem;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 4rem;
  line-height: 1;
  font-weight: bold;

  span {
    font-size: 2rem;
    font-weight: normal;
  }
`;

const CustomRichText = styled(RichText)`
  li {
    margin: auto;
    width: fit-content;
  }
`;

const CustomButton = styled(Button)`
  width: 100%;
`;
