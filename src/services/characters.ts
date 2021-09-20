import { characterDetailEndpoint, charactersEndPoint } from './endpoints';

export const getAllCharacters = async () => {
  try {
    let serviceResponse;

    const response = await fetch(charactersEndPoint);
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }

    return serviceResponse;
  } catch (error) {
    console.log('Error fetching all characters: ', error);
    return {
      success: false,
      data: error,
    };
  }
};

export const getCharactersById = async (id: number) => {
  try {
    let serviceResponse;

    const response = await fetch(characterDetailEndpoint(id));
    const parsedResponse = await response.json();

    if (response.status === 200) {
      serviceResponse = { success: true, data: parsedResponse };
    } else {
      serviceResponse = { success: false, data: parsedResponse };
    }

    return serviceResponse;
  } catch (error) {
    console.log(`Error fetching Character with id: ${id}`, error);
    return {
      success: false,
      data: error,
    };
  }
};
