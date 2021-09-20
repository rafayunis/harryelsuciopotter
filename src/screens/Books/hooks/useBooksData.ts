import { useEffect, useState } from 'react';

import { getAllBooks } from '../../../services';

function useBooksData(refreshFlag: boolean) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);

  const getBooksData = async () => {
    setLoading(true);
    setErrorOccurred(false);
    try {
      const { success, data } = await getAllBooks();
      if (success) {
        setBooks(data);
      } else {
        setErrorOccurred(true);
      }
    } catch (error) {
      console.log('Error getting books on Home Screen', error);
      setErrorOccurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, [refreshFlag]);

  return { books, loading, errorOccurred };
}

export default useBooksData;
