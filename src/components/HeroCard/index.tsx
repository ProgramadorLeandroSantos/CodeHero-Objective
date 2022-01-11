import React, {memo, useState} from 'react';

import {
  ButtonBody,
  Text,
  BgImage,
  ContainerName,
  TextModal,
  TextLabelModal,
} from './styles';
import Modal from '../../components/SettingsModal';
import {useTheme} from '../../hooks/theme';
import {CardProps} from '../../interfaces/HeroCard';
import {ScrollView} from 'react-native-gesture-handler';
// import {ItemsSummary} from '../../interfaces/HeroCard';

const HeroCard: React.FC<CardProps> = ({heroData}) => {
  const {theme} = useTheme();
  const imgURL = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`;
  const [isModal, setIsModal] = useState(false);

  return (
    <ButtonBody
      currentTheme={theme}
      onPress={() => {
        heroData.description.length;
        setIsModal(true);
      }}>
      <BgImage source={{uri: imgURL}}>
        <ContainerName>
          <Text>{heroData.name}</Text>
        </ContainerName>
      </BgImage>
      <Modal closeModal={setIsModal} isVisible={isModal}>
        <ScrollView>
          <TextLabelModal>Series</TextLabelModal>
          {heroData.series.items.map((item: {name: null | undefined}) => {
            return <TextModal key={item.name}>{item.name}</TextModal>;
          })}

          <TextLabelModal>Description</TextLabelModal>
          <TextModal>
            {heroData.description.length > 0
              ? heroData.description
              : 'Empity description'}
          </TextModal>
        </ScrollView>
      </Modal>
    </ButtonBody>
  );
};

export default memo(HeroCard);
