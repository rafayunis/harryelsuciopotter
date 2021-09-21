import { useEffect, useState } from 'react';

import { getCharacterById } from '../../../services';

function useCharacterData(id:number, refreshFlag: boolean) {
  const [character, setCharacter] = useState<Character>(Object);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);

  const getCharacterData = async () => {
    setLoading(true);
    setErrorOccurred(false);
    try {
      const { success, data } = await getCharacterById(id);
      if (success) {
        setCharacter(data[0]);
      } else {
        setErrorOccurred(true);
      }
    } catch (error) {
      console.log('Error getting Characters on Home Screen', error);
      setErrorOccurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, [refreshFlag]);

  return { character, loading, errorOccurred };
}

export default useCharacterData;
