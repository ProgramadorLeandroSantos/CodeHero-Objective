import styled, {css} from 'styled-components/native';
import * as Theme from '../../styles/themes';
import * as Global from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          background-color: ${Theme.Ligth.colors.background};
        `
      : css`
          background-color: ${Theme.Dark.colors.grayDark};
        `}
`;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 60%;
`;

export const Text = styled.Text`
  font-size: ${Global.default.fontSizes._23};
  ${(props: {currentTheme: string}) =>
    props.currentTheme === 'light'
      ? css`
          color: ${Theme.Ligth.colors.red};
        `
      : css`
          color: ${Theme.Ligth.colors.background};
        `}
`;
