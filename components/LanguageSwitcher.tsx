import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { useEffect,useRef, useState } from 'react'
import { media } from 'utils/media'

const languages = [
    { code: 'en', label: 'EN', fullLabel: 'English' },
    { code: 'zh', label: '简', fullLabel: '简体中文' },
    { code: 'ja', label: '日', fullLabel: '日本語' },
    { code: 'ko', label: '한', fullLabel: '한국어' },
    { code: 'ar', label: 'ع', fullLabel: 'العربية' },
    { code: 'vi', label: 'VI', fullLabel: 'Tiếng Việt' },
    { code: 'ru', label: 'RU', fullLabel: 'Русский' },
    { code: 'fr', label: 'FR', fullLabel: 'Français' },
  ]

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale } = router
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (languageCode: string) => {
    router.push(router.pathname, router.pathname, { locale: languageCode })
    setIsOpen(false)
  }

  return (
    <SwitcherContainer ref={dropdownRef}>
      <CurrentLanguage onClick={() => setIsOpen(!isOpen)}>
        {currentLanguage.label}
        <ArrowIcon isOpen={isOpen}>▾</ArrowIcon>
      </CurrentLanguage>

      {isOpen && (
        <LanguageList>
          {languages.map((language) => (
            <LanguageItem 
              key={language.code} 
              active={locale === language.code}
              onClick={() => handleLanguageChange(language.code)}
            >
              <LanguageContent>
                <LanguageCode>{language.label}</LanguageCode>
                <LanguageFullLabel>{language.fullLabel}</LanguageFullLabel>
              </LanguageContent>
            </LanguageItem>
          ))}
        </LanguageList>
      )}
    </SwitcherContainer>
  )
}

const LanguageItem = styled.div<{ active: boolean }>`
  background: ${({ active }) => active ? 'rgba(var(--primary), 0.1)' : 'transparent'};
  cursor: pointer;
  padding: 1rem 1.5rem;

  &:first-child {
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
  }

  &:hover {
    background: rgba(var(--primary), 0.1);
  }
`

const LanguageContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const LanguageCode = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  margin-right: 1rem;
`

const LanguageFullLabel = styled.span`
  font-size: 1.4rem;
  opacity: 0.8;
`

const SwitcherContainer = styled.div`
  position: relative;
  display: inline-block;
  user-select: none;
  margin: 0 1rem;

  ${media('<desktop')} {
    margin: 0;
  }
`

const CurrentLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  color: rgb(var(--text));
  border-radius: 0.6rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(var(--text), 0.1);
  }

  ${media('<desktop')} {
    padding: 0.7rem 1.2rem;
    font-size: 1.6rem;
  }
`


const ArrowIcon = styled.span<{ isOpen: boolean }>`
  display: inline-block;
  transition: transform 0.2s ease;
  transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  font-size: 1.2rem;
`

const LanguageList = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: rgb(var(--cardBackground));
  border-radius: 0.6rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 1000;
  animation: dropDown 0.2s ease;

  @keyframes dropDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  ${media('<desktop')} {
    position: static;
    box-shadow: none;
    animation: none;
    background: transparent;
  }
`


const LanguageLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: rgb(var(--text));
  transition: all 0.2s ease;
  width: 100%;
`