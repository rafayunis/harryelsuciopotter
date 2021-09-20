import { API_URL } from '../config/envVariables';

export const booksEndpoint = `${API_URL}books/all`;
export const charactersEndPoint = `${API_URL}characters/all`;

export const bookDetailEndpoint = (id: number) => `${API_URL}books/${id}`;

export const characterDetailEndpoint = (id: number) => `${API_URL}characters/${id}`;

