export interface BookResultProps {
  id: string;
  saleInfo: {
    isEbook: boolean;
    retailPrice: {
      amount: number;
      currencyCode: string;
    } | null;
  };
  volumeInfo: {
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    previewLink: string;
    publishedDate: string;
    title: string;
  };
}
