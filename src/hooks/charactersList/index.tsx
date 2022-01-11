import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import {CharacterProps} from '../../interfaces/HeroCard';
import api from '../../services/api';

interface HeroProviderContext {
  searchHero: (name: string) => any;
  getInitialList: () => any;
  getMoreDataOnEndReached: () => any;
  initialList: Array<CharacterProps>;
  isLoading: boolean;
  isLoadingMoreItens: boolean;
}

const ListConText = createContext<HeroProviderContext>(
  {} as HeroProviderContext,
);

export const ListProvider: React.FC = ({children}) => {
  const [initialList, setInitialList] = useState<Array<CharacterProps>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMoreItens, setIsLoadingMoreItens] = useState(false);

  const getInitialList = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get('characters?limit=4&orderBy=name');
      setInitialList(response.data.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getMoreDataOnEndReached = useCallback(async () => {
    try {
      setIsLoadingMoreItens(true);
      const response = await api.get('characters?limit=4&orderBy=name', {
        params: {offset: initialList.length},
      });
      setInitialList([...initialList, ...response.data.data.results]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingMoreItens(false);
    }
  }, [initialList]);

  const searchHero = useCallback(
    async (name: string) => {
      try {
        if (name === '' || name === undefined) {
          getInitialList();
        }
        setIsLoading(true);
        const response = await api.get(
          `characters?limit=4&orderBy=name&nameStartsWith=${name}`,
        );
        setInitialList(response.data.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    [getInitialList],
  );

  useEffect(() => {
    getInitialList();
  }, [getInitialList]);

  return (
    <ListConText.Provider
      value={{
        getInitialList,
        searchHero,
        getMoreDataOnEndReached,
        initialList,
        isLoading,
        isLoadingMoreItens,
      }}>
      {children}
    </ListConText.Provider>
  );
};

export function useList(): HeroProviderContext {
  const context = useContext(ListConText);
  return context;
}
