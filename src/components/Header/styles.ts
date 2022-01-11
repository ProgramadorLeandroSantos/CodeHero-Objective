import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

import * as Theme from '../../styles/themes';
import * as Global from '../../styles/global';

const screen = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 3,
  elevation: 5,
})`
  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          background-color: ${Theme.Ligth.colors.background};
          border-bottom-width: 1px;
          border-bottom-color: ${Theme.Ligth.colors.black};
        `
      : css`
          background-color: ${Theme.Dark.colors.grayDark};
          border-bottom-width: 2px;
          border-bottom-color: ${Theme.Ligth.colors.red2};
        `}
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: ${screen.width}px;
  height: 230px;
`;

export const Text = styled.Text`
  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          color: ${Theme.Ligth.colors.black};
        `
      : css`
          color: ${Theme.Dark.colors.white};
        `}
  font-size: ${Global.default.fontSizes._20};
`;

// code hero logo
export const TextCode = styled.Text`
  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          color: ${Theme.Ligth.colors.black};
        `
      : css`
          color: ${Theme.Dark.colors.white};
        `}
  font-size: ${Global.default.fontSizes._38};
`;
export const TextHero = styled.Text`
  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          color: ${Theme.Ligth.colors.red};
        `
      : css`
          color: ${Theme.Dark.colors.red};
        `}
  font-size: ${Global.default.fontSizes._38};
`;

export const ViewCodeHero = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const WrapperLogo = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
`;

export const SettingsButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 50px;
  right: 40px;
`;

// modal text
export const ModalTextLabel = styled.Text`
  font-size: ${Global.default.fontSizes._28};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ModalButtonOption = styled.TouchableOpacity``;

export const ModalTextOption = styled.Text`
  font-size: ${Global.default.fontSizes._23};
  margin-top: 10px;
  ${(props: {currentTheme: string; currentValue: string}) =>
    props.currentTheme === props.currentValue
      ? css`
          color: ${Theme.Ligth.colors.black};
        `
      : css`
          color: ${Theme.Ligth.colors.gray};
        `}
`;

export const ModalTextOptionGit = styled.Text`
  font-size: ${Global.default.fontSizes._23};
`;

export const CandidateButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 50px;
`;
