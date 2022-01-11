import {Linking} from 'react-native';

export const oppenLink = async (url: string) => {
  try {
    await Linking.openURL(url);
  } catch (error) {
    console.log(error);
  }
};
