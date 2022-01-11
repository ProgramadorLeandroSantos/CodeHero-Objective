import React, {useState} from 'react';
import {Input, SearchButton, SearchView} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useList} from '../../hooks/charactersList';
import {useTheme} from '../../hooks/theme';

const SearchBar: React.FC = () => {
  const {theme} = useTheme();
  const {searchHero} = useList();
  const [name, setName] = useState('');

  return (
    <SearchView currentTheme={theme}>
      <Input
        placeholder="Character name"
        currentTheme={theme}
        placeholderTextColor={theme === 'light' ? 'red' : 'white'}
        onChangeText={txt => setName(txt)}
        onEndEditing={() => searchHero(name)}
      />
      <SearchButton onPress={() => searchHero(name)}>
        <Icon name="search" size={30} color={'black'} />
      </SearchButton>
    </SearchView>
  );
};

export default SearchBar;
