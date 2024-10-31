import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';
import Separator from 'components/Separator';
import { useEffect } from 'react';

export default function PricingPage() {
  
  useEffect(() => {
    
    // 创建并插入脚本标签
    const script = document.createElement('script');
    script.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
    script.async = true;
    script.onload = () => {
      // 初始化 Paddle
      if (window.Paddle) {
        window.Paddle.Environment.set("sandbox");
        window.Paddle.Initialize({ 
          token: 'live_53e3768da938d28bd8793e14aa1'
        });
      }
    };
    document.body.appendChild(script);
    // 清理脚本
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Page title="Pricing" description="Big cheap for everyone.">
      <Wrapper>
        <PricingTablesSection />
        <Separator />
        <FaqSection />
      </Wrapper>

    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
