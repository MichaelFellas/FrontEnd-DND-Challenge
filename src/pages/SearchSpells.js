import React, { useState, useEffect } from "react";
import {
  Container,
  Modal,
  Button,
  Card,
  CardColumns,
  Col,
  Row,
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

      let spellClassesArr = await items.classes.map(function (asdasd) {
        return asdasd.name + ", ";
      });

      let spellDescArr = await items.desc.map(function (asdasd) {
        return asdasd + " ";
      });

      let spellDamageKeys = "";
      let spellDamageArr = "";

      if (items.damage) {
        spellDamageArr = Object.values(
          items.damage.damage_at_slot_level || items.damage_at_character_level
        );
        spellDamageKeys = Object.keys(
          items.damage.damage_at_slot_level || items.damage_at_character_level
        );
      }
      const spellInfoData = {
        spellName: items.name,
        spellIndex: items.index,
        spellURL: items.url,
        spellDamageKeys: spellDamageKeys || "",
        spellDamage: spellDamageArr || "",
        spellDamageType: items.damage?.damage_type || "",
        spellAOESize: items.area_of_effect?.size || "",
        spellAOEType: items.area_of_effect?.type || "",
        spellCastingTime: items.casting_time,
        spellClasses: spellClassesArr,
        spellComponents: items.components,
        spellDesc: spellDescArr,
        spellDuration: items.duration,
        spellLevel: items.level,
        spellMaterial: items.material,
        spellRange: items.range,
        spellRitual: items.ritual,
        spellSchool: items.school.name,
      };
      console.log(spellDamageKeys);
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
      <Container className="containerPage">
        <br></br>
        <h2 className="pageTitle">
          {spells.length
            ? `Viewing ${spells.length} results:`
            : "DnD 5e Spells List"}
        </h2>

        <br></br>
        <CardColumns>
          {spells.map((spell) => {
            return (
              <Card key={spell.spellIndex} border="dark">
                <Card.Body className="card-body">
                  <Card.Title className="card-title">
                    {spell.spellName}
                  </Card.Title>

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
                      {spellInfo.spellAOESize && (
                        <p>
                          Spell Size: {spellInfo.spellAOESize}
                          {" feet "}
                          {spellInfo.spellAOEType}
                        </p>
                      )}

                      {spellInfo.spellCastingTime && (
                        <p>Casting Time: {spellInfo.spellCastingTime}</p>
                      )}
                      {spellInfo.spellDuration && (
                        <p>Duration: {spellInfo.spellDuration}</p>
                      )}

                      {spellInfo.spellComponents && (
                        <p>Components: {spellInfo.spellComponents}</p>
                      )}
                      {spellInfo.spellClasses && (
                        <p>Classes: {spellInfo.spellClasses}</p>
                      )}

                      {spellInfo.spellSchool && (
                        <p>School: {spellInfo.spellSchool}</p>
                      )}
                      {spellInfo.spellMaterial && (
                        <p>Materials: {spellInfo.spellMaterial}</p>
                      )}
                      {spellInfo.spellRange && (
                        <p>Range: {spellInfo.spellRange}</p>
                      )}
                      {spellInfo.spellLevel && (
                        <p>Level: {spellInfo.spellLevel}</p>
                      )}
                      {spellInfo.spellDesc && (
                        <p>Desc: {spellInfo.spellDesc}</p>
                      )}
                      {spellInfo.spellDamageKeys && (
                        <Card.Text className="card-text-damage black">
                          Damage
                        </Card.Text>
                      )}
                      <Container className="damageTable">
                        <Row>
                          <Col className="damageCol">
                            {spellInfo.spellDamageKeys &&
                              spellInfo.spellDamageKeys.map((spellDamage) => {
                                return (
                                  <p className=" damageText">
                                    Damage Level: {spellDamage}
                                  </p>
                                );
                              })}
                          </Col>
                          <Col className="damageCol">
                            {spellInfo.spellDamage &&
                              spellInfo.spellDamage.map((spellDamage) => {
                                return (
                                  <p className=" damageText">
                                    Dice: {spellDamage}
                                  </p>
                                );
                              })}
                          </Col>
                        </Row>
                      </Container>
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
