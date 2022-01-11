export interface EventSummary {
  resourceURI: string;
  name: string;
}

export interface EventList {
  items: Array<EventSummary>;
}

export interface ItemsSummary {
  name: string;
}

export interface SeriesSummary {
  items: Array<EventSummary>;
}

export interface ComicsSumaryProps {
  resourceURI: string;
  name: string;
}

export interface ComicsProps {
  available: number;
  collectionURI: string;
  items: Array<ComicsSumaryProps>;
}

export interface ThumbNailData {
  path: string;
  extension: string;
}

export interface CharacterProps {
  id: Number;
  name: string;
  description: string;
  thumbnail: ThumbNailData;
  comics: Array<ComicsProps>;
  events: Array<EventList>;
  series: Array<SeriesSummary>;
}

export interface CardProps {
  heroData: CharacterProps;
}
