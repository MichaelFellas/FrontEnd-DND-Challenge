import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
  Row,
  Col,
} from "react-bootstrap";

import {
  saveSpellIndexs,
  removeSpellIndex,
  getsavedSpellIndexs,
} from "../utils/localStorage";
import { searchDnDAPI } from "../utils/API";

const SavedBooks = () => {
  const [spells, setSpells] = useState(getsavedSpellIndexs());

  const getUserSpells = async () => {
    try {
      const response = await getsavedSpellIndexs();
      var spellData = [];
      for (let i = 0; i < response.length; i++) {
        let data = await searchDnDAPI(response[i]);
        const items = await data.json();

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
          spellAOESize: items.area_of_effect?.size || "",
          spellAOEType: items.area_of_effect?.type || "",
          spellDamageKeys: spellDamageKeys || "",
          spellDamage: spellDamageArr || "",
          spellDamageType: items.damage?.damage_type || "",
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
        console.log(spellInfoData);
        spellData.push(spellInfoData);
      }

      setSpells(spellData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUserSpells();
  }, []);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteSpell = async (index) => {
    removeSpellIndex(index);
    console.log(index);
    getUserSpells();
  };

  return (
    <>
      <Container>
        <h2 className="pageTitle titleBuffer">
          {spells.length
            ? `Viewing ${spells.length} saved ${
                spells.length === 1 ? "spell" : "spells"
              }:`
            : "You have no saved spells!"}
        </h2>
        <CardColumns>
          {spells.map((spell) => {
            return (
              <Card key={spell.spellIndex} border="dark">
                <Card.Body className="card-body">
                  <Card.Title className="card-title">
                    {spell.spellName}
                  </Card.Title>

                  {spell.spellDamageType && (
                    <p className="card-text">
                      Damage Type: {spell.spellDamageType.name}
                      {" damage "}
                    </p>
                  )}
                  {spell.spellAOESize && (
                    <p className="card-text">
                      Spell Size: {spell.spellAOESize}
                      {" feet "}
                      {spell.spellAOEType}
                    </p>
                  )}

                  {spell.spellCastingTime && (
                    <p className="card-text">
                      Casting Time: {spell.spellCastingTime}
                    </p>
                  )}
                  {spell.spellDuration && (
                    <p className="card-text">Duration: {spell.spellDuration}</p>
                  )}
                  {spell.spellComponents && (
                    <p className="card-text">
                      Components: {spell.spellComponents}
                    </p>
                  )}
                  {spell.spellClasses && (
                    <p className="card-text">Classes: {spell.spellClasses}</p>
                  )}
                  {spell.spellSchool && (
                    <p className="card-text">School: {spell.spellSchool}</p>
                  )}
                  {spell.spellMaterial && (
                    <p className="card-text">
                      Materials: {spell.spellMaterial}
                    </p>
                  )}
                  {spell.spellRange && (
                    <p className="card-text">Range: {spell.spellRange}</p>
                  )}
                  {spell.spellLevel && (
                    <p className="card-text">Level: {spell.spellLevel}</p>
                  )}
                  {spell.spellDesc && (
                    <Card.Text className="card-text">
                      Desc: {spell.spellDesc}
                    </Card.Text>
                  )}
                  {spell.spellDamageKeys && (
                    <Card.Text className="card-text-damage">Damage</Card.Text>
                  )}
                  <Container className="damageTable">
                    <Row>
                      <Col className="damageCol">
                        {spell.spellDamageKeys &&
                          spell.spellDamageKeys.map((spellDamage) => {
                            return (
                              <p className="card-text damageText">
                                Damage Level: {spellDamage}
                              </p>
                            );
                          })}
                      </Col>
                      <Col className="damageCol">
                        {spell.spellDamage &&
                          spell.spellDamage.map((spellDamage) => {
                            return (
                              <p className="card-text damageText">
                                Dice: {spellDamage}
                              </p>
                            );
                          })}
                      </Col>
                    </Row>
                  </Container>
                  <br></br>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteSpell(spell.spellIndex)}
                  >
                    Delete this Spell!
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

export default SavedBooks;
