// make a search to DnD 5e api
// http://www.dnd5eapi.co/
export const searchDnDAPI = (query) => {
  return fetch(`https://www.dnd5eapi.co/api/spells/${query}`);
};

export const searchALL = () => {
  return fetch(`https://www.dnd5eapi.co/api/spells/`);
};
