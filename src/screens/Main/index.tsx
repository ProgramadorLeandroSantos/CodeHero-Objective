/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {FlatList, View} from 'react-native';
import {Header, HeroCard} from '../../components';
import {Container, LoadingContainer, Text} from './styles';
import {useTheme} from '../../hooks/theme';
import {useList} from '../../hooks/charactersList';
import {ActivityIndicator} from 'react-native';

const Main: React.FC = () => {
  const {theme} = useTheme();
  const {
    isLoading,
    initialList,
    isLoadingMoreItens,
    getInitialList,
    getMoreDataOnEndReached,
  } = useList();

  const renderFooter = useMemo(() => {
    if (!isLoadingMoreItens) {
      return null;
    }
    return (
      <View
        style={{
          margin: 10,
        }}>
        <ActivityIndicator
          color={theme === 'light' ? 'red' : 'white'}
          size="large"
        />
      </View>
    );
  }, [isLoadingMoreItens, theme]);

  return (
    <Container currentTheme={theme}>
      <Header />
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator
            size="large"
            color={theme === 'light' ? 'red' : 'white'}
          />
        </LoadingContainer>
      ) : (
        <FlatList
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          refreshing={isLoading}
          onRefresh={getInitialList}
          ListFooterComponent={renderFooter}
          onEndReached={getMoreDataOnEndReached}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          data={initialList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <HeroCard heroData={item} />}
        />
      )}

      {!isLoading && initialList.length === 0 && (
        <LoadingContainer>
          <Text currentTheme={theme}>No result</Text>
        </LoadingContainer>
      )}
    </Container>
  );
};
export default Main;
