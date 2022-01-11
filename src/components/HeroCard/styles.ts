import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

import * as Theme from '../../styles/themes';
import * as Global from '../../styles/global';

const screen = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export const ButtonBody = styled.TouchableOpacity`
  width: ${screen.width - 60}px;
  height: 500px;
  margin-bottom: 10px;

  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          border-color: ${Theme.Ligth.colors.black};
        `
      : css`
          border-color: ${Theme.Dark.colors.black};
        `}

  font-size: ${Global.default.fontSizes._20};
`;

export const Text = styled.Text`
  font-size: ${Global.default.fontSizes._50};
  color: ${Theme.Ligth.colors.background};
  font-weight: bold;
  margin-left: 15px;
`;

export const TextModal = styled.Text`
  font-size: ${Global.default.fontSizes._23};
  color: ${Theme.Ligth.colors.black};
`;

export const TextLabelModal = styled.Text`
  font-size: ${Global.default.fontSizes._28};
  color: ${Theme.Ligth.colors.black};
  font-weight: bold;
`;

export const BgImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ContainerName = styled.View`
  background-color: 'rgba(255, 0, 0, 0.7)';
  width: 90%;
`;
