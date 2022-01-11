import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';

import * as Theme from '../../styles/themes';
import * as Global from '../../styles/global';

const screen = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export const Input = styled.TextInput`
  text-align: center;
  margin-left: 45px;
  width: 80%;
  height: 50px;
  font-size: ${Global.default.fontSizes._20};
  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          color: ${Theme.Ligth.colors.red2};
        `
      : css`
          color: ${Theme.Dark.colors.white};
        `}
`;

export const SearchButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
`;

export const SearchView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-width: 0.8px;
  border-radius: 15px;
  width: ${screen.width - 50}px;
  margin-bottom: 8px;

  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          border-color: ${Theme.Ligth.colors.black};
        `
      : css`
          border-color: ${Theme.Dark.colors.black};
          background-color: ${Theme.Dark.colors.red2};
        `}
  font-size: ${Global.default.fontSizes._20};
`;
