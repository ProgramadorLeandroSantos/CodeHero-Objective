import React, {memo, useState} from 'react';
import {MarvelLogo} from '../../assets';
import {useTheme} from '../../hooks/theme';
import SearchBar from '../SearchBar/';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsModal from '../../components/SettingsModal';
import {oppenLink} from '../../utils/openLinks';
import {
  Container,
  SettingsButton,
  TextCode,
  TextHero,
  ViewCodeHero,
  WrapperLogo,
  ModalTextLabel,
  ModalTextOption,
  CandidateButton,
  ModalTextOptionGit,
  ModalButtonOption,
} from './styles';

const Header: React.FC = () => {
  const {theme, changeTheme} = useTheme();
  const [isOppenModal, setIsOppenModal] = useState(false);

  return (
    <Container currentTheme={theme}>
      <WrapperLogo>
        <ViewCodeHero>
          <TextCode currentTheme={theme}>Code</TextCode>
          <TextHero currentTheme={theme}>Hero</TextHero>
        </ViewCodeHero>
        <MarvelLogo width={200} height={85} />
      </WrapperLogo>
      <SearchBar />

      <SettingsButton
        onPress={() => {
          setIsOppenModal(true);
        }}>
        <Icon
          name="settings"
          size={30}
          color={theme === 'light' ? 'black' : 'white'}
        />
      </SettingsButton>
      <SettingsModal
        isVisible={isOppenModal}
        closeModal={setIsOppenModal}
        theme={theme}>
        <ModalTextLabel>Change theme</ModalTextLabel>

        <ModalButtonOption
          onPress={() => {
            console.log('dark');
            changeTheme('dark');
          }}>
          <ModalTextOption currentValue="dark" currentTheme={theme}>
            Dark
          </ModalTextOption>
        </ModalButtonOption>

        <ModalButtonOption
          onPress={() => {
            console.log('light');
            changeTheme('light');
          }}>
          <ModalTextOption currentValue="light" currentTheme={theme}>
            Light
          </ModalTextOption>
        </ModalButtonOption>

        <CandidateButton
          onPress={() => {
            oppenLink('https://github.com/ProgramadorLeandroSantos');
            setIsOppenModal(false);
          }}>
          <ModalTextOptionGit>
            {' '}
            <Icon2 name="github" size={35} color={'black'} />
            Leandro Santos
          </ModalTextOptionGit>
        </CandidateButton>
      </SettingsModal>
    </Container>
  );
};

export default memo(Header);
