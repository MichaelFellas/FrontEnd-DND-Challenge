import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import { searchALL, searchDnDAPI } from "../utils/API";
import { saveSpellIndexs, getsavedSpellIndexs } from "../utils/localStorage";

const SearchBooks = () => {
  const [spells, setSpells] = useState([]);

  const dataRequest = async () => {
    try {
      const response = await fetch(`https://www.dnd5eapi.co/api/spells/`);
      console.log(response);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const items = await response.json();
      console.log(items);
      const spellData = items.results.map((spell) => ({
        spellName: spell.name,
        spellIndex: spell.index,
        spellURL: spell.url,
      }));

      setSpells(spellData);
    } catch (err) {
      console.error(err);
    }
  };

  const [savedSpellIndexs, setsavedSpellIndexs] = useState(
    getsavedSpellIndexs()
  );

  useEffect(() => {
    return () => saveSpellIndexs(savedSpellIndexs);
  });

  const handleSaveSpells = async (spellIndex) => {
    const spellToSave = spells.find((spell) => spell.spellIndex === spellIndex);

    setsavedSpellIndexs([...savedSpellIndexs, spellToSave.spellIndex]);
  };

  const spellInfo = async (spellIndex) => {
    try {
      const response = await searchDnDAPI(spellIndex);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    dataRequest();
  }, []);

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container></Container>
      </Jumbotron>

      <Container>
        <h2>
          {spells.length
            ? `Viewing ${spells.length} results:`
            : "DnD 5e Spells List"}
        </h2>
        <CardColumns>
          {spells.map((spell) => {
            return (
              <Card key={spell.spellIndex} border="dark">
                <Card.Body>
                  <Card.Title>{spell.spellName}</Card.Title>

                  <Button
                    disabled={savedSpellIndexs?.some(
                      (savedSpellIndex) => savedSpellIndex === spell.spellIndex
                    )}
                    className="btn-block btn-info"
                    onClick={() => handleSaveSpells(spell.spellIndex)}
                  >
                    {savedSpellIndexs?.some(
                      (savedSpellIndex) => savedSpellIndex === spell.spellIndex
                    )
                      ? "This spell has already been saved!"
                      : "Save this Spell!"}
                  </Button>
                  <Button
                    className="btn-block btn-info"
                    onClick={() => spellInfo(spell.spellIndex)}
                  >
                    More Information
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchBooks;
