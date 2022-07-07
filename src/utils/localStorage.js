export const getsavedSpellIndexs = () => {
  const savedSpellIndexs = localStorage.getItem("saved_spells")
    ? JSON.parse(localStorage.getItem("saved_spells"))
    : [];
  return savedSpellIndexs;
};

export const saveSpellIndexs = (spellIndexArr) => {
  if (spellIndexArr.length) {
    localStorage.setItem("saved_spells", JSON.stringify(spellIndexArr));
  } else {
    localStorage.removeItem("saved_spells");
  }
};

export const removeSpellIndex = (spellIndex) => {
  const savedSpellIndexs = localStorage.getItem("saved_spells")
    ? JSON.parse(localStorage.getItem("saved_spells"))
    : null;

  if (!savedSpellIndexs) {
    return false;
  }

  const updatedsavedSpellIndexs = savedSpellIndexs?.filter(
    (savedSpellIndex) => savedSpellIndex !== spellIndex
  );
  localStorage.setItem("saved_spells", JSON.stringify(updatedsavedSpellIndexs));

  return true;
};
