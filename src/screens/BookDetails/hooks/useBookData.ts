import { useEffect, useState } from 'react';

import { getBookById } from '../../../services';

function useBookData(id:number, refreshFlag: boolean) {
  const [book, setBook] = useState<Book>(Object);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);

  const getBookData = async () => {
    setLoading(true);
    setErrorOccurred(false);
    try {
      const { success, data } = await getBookById(id);
      if (success) {
        setBook(data[0]);
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
    getBookData();
  }, [refreshFlag]);

  return { book, loading, errorOccurred };
}

export default useBookData;
