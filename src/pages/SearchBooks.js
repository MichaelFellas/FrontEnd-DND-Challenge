import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Modal,
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
  const [spellInfo, setSpellInfo] = useState([]);

  const dataRequest = async () => {
    try {
      const response = await searchALL();
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const items = await response.json();

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
    const spellToSave = await spells.find(
      (spell) => spell.spellIndex === spellIndex
    );

    setsavedSpellIndexs([...savedSpellIndexs, spellToSave.spellIndex]);
    setsavedSpellIndexs([...savedSpellIndexs, spellToSave.spellIndex]);
  };

  const findSpellInfo = async (spellIndex) => {
    try {
      const response = await searchDnDAPI(spellIndex);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      const items = await response.json();

      const spellInfoData = {
        spellName: items.name,
        spellIndex: items.index,
        spellURL: items.url,
        spellCastingTime: items.casting_time,
        spellClasses: items.classes.name,
        spellComponents: items.components,
        spellDesc: items.desc,
        spellDuration: items.duration,
        spellLevel: items.level,
        spellMaterial: items.material,
        spellRange: items.range,
        spellRitual: items.ritual,
        spellSchool: items.school.name,
      };

      setSpellInfo(spellInfoData);
      handleShow();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    dataRequest();
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Container>
        <br></br>
        <h2>
          {spells.length
            ? `Viewing ${spells.length} results:`
            : "DnD 5e Spells List"}
        </h2>

        <br></br>
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
                    onClick={() => findSpellInfo(spell.spellIndex)}
                  >
                    More Information
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{spellInfo.spellName}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <p>{spellInfo.spellDesc}</p>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button onClick={handleClose} variant="primary">
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
