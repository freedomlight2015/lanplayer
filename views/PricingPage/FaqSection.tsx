import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';
import Container from 'components/Container';

export default function FaqSection() {
  const { t } = useTranslation('common');
  return (
    <Wrapper>
      <Container>
        <SectionTitle>{t('faq.title')}</SectionTitle>
        <div style={{ height: '3rem' }}></div>
        <Accordion title={t('faq.serial_number.question')}>
          {t('faq.serial_number.answer')}
        </Accordion>
        <Accordion title={t('faq.video_formats.question')}>
          {t('faq.video_formats.answer')}
        </Accordion>
        <Accordion title={t('faq.free_trial.question')}>
          {t('faq.free_trial.answer')}
        </Accordion>
        <Accordion title={t('faq.installation.question')}>
          {t('faq.installation.answer')}
        </Accordion>
        <Accordion title={t('faq.security.question')}>
          {t('faq.security.answer')}
        </Accordion>
        <Accordion title={t('faq.quality.question')}>
          {t('faq.quality.answer')}
        </Accordion>
        <Accordion title={t('faq.video_size.question')}>
          {t('faq.video_size.answer')}
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
