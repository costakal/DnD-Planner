import React from "react";
import styled from "styled-components";

const MonsterDetails = ({ monster, status }) => {
  return (
    <>
      {status === "ready" ? (
        <StatBlock>
          <MainDetails>
            <h2>{monster.name}</h2>
            <p>
              {monster.size} {monster.type}
              {monster.subtype !== null
                ? " (" + monster.subtype + ")"
                : ""}, {monster.alignment}
            </p>
          </MainDetails>
          <MainStats>
            <p>
              Armor Class <span>{monster.armor_class}</span>
            </p>
            <p>
              Hit Points{" "}
              <span>
                {monster.hit_points} ({monster.hit_dice})
              </span>
            </p>
            <p>
              Speed
              {monster.speed.walk ? <span> {monster.speed.walk}</span> : <></>}
              {monster.speed.burrow ? (
                <span>, burrow {monster.speed.burrow}</span>
              ) : (
                <></>
              )}
              {monster.speed.climb ? (
                <span>, climb {monster.speed.climb}</span>
              ) : (
                <></>
              )}
              {monster.speed.fly ? (
                <span>, fly {monster.speed.fly}</span>
              ) : (
                <></>
              )}
              {monster.speed.swim ? (
                <span>, swim {monster.speed.swim}</span>
              ) : (
                <></>
              )}
            </p>
          </MainStats>
          <AbilityScores>
            <div>
              <h4>STR</h4>
              <p>
                {monster.strength}{" "}
                {Math.floor((monster.strength - 10) / 2) < 0 ? (
                  <span>({Math.floor((monster.strength - 10) / 2)})</span>
                ) : (
                  <span>(+{Math.floor((monster.strength - 10) / 2)})</span>
                )}
              </p>
            </div>
            <div>
              <h4>DEX</h4>
              <p>
                {monster.dexterity}{" "}
                {Math.floor((monster.dexterity - 10) / 2) < 0 ? (
                  <span>({Math.floor((monster.dexterity - 10) / 2)})</span>
                ) : (
                  <span>(+{Math.floor((monster.dexterity - 10) / 2)})</span>
                )}
              </p>
            </div>
            <div>
              <h4>CON</h4>
              <p>
                {monster.constitution}{" "}
                {Math.floor((monster.constitution - 10) / 2) < 0 ? (
                  <span>({Math.floor((monster.constitution - 10) / 2)})</span>
                ) : (
                  <span>(+{Math.floor((monster.constitution - 10) / 2)})</span>
                )}
              </p>
            </div>
            <div>
              <h4>INT</h4>
              <p>
                {monster.intelligence}{" "}
                {Math.floor((monster.intelligence - 10) / 2) < 0 ? (
                  <span>({Math.floor((monster.intelligence - 10) / 2)})</span>
                ) : (
                  <span>(+{Math.floor((monster.intelligence - 10) / 2)})</span>
                )}
              </p>
            </div>
            <div>
              <h4>WIS</h4>
              <p>
                {monster.wisdom}{" "}
                {Math.floor((monster.wisdom - 10) / 2) < 0 ? (
                  <span>({Math.floor((monster.wisdom - 10) / 2)})</span>
                ) : (
                  <span>(+{Math.floor((monster.wisdom - 10) / 2)})</span>
                )}
              </p>
            </div>
            <div>
              <h4>CHA</h4>
              <p>
                {monster.charisma}{" "}
                {Math.floor((monster.charisma - 10) / 2) < 0 ? (
                  <span>({Math.floor((monster.charisma - 10) / 2)})</span>
                ) : (
                  <span>(+{Math.floor((monster.charisma - 10) / 2)})</span>
                )}
              </p>
            </div>
          </AbilityScores>
          <Proficiencies>
            {monster.proficiencies.find((prof) =>
              prof.name.includes("Saving")
            ) ? (
              <SavingThrows>
                <h4>Saving Throws: </h4>
                {monster.proficiencies
                  .filter((prof) => prof.name.includes("Saving"))
                  .map((prof) => {
                    return (
                      <p>
                        {prof.name.replace("Saving Throw:", "")}
                        <span>+{prof.value + " "}</span>
                      </p>
                    );
                  })}
              </SavingThrows>
            ) : (
              <></>
            )}
            {monster.proficiencies.find((prof) =>
              prof.name.includes("Skill")
            ) ? (
              <Skills>
                <h4>Skills: </h4>
                {monster.proficiencies
                  .filter((prof) => prof.name.includes("Skill"))
                  .map((prof) => {
                    return (
                      <p>
                        {prof.name.replace("Skill:", "")}
                        <span>+{prof.value + " "}</span>
                      </p>
                    );
                  })}
              </Skills>
            ) : (
              <></>
            )}
            {monster.damage_immunities.length == 0 ? (
              <></>
            ) : (
              <div>
                <h4>Damage Immunities: </h4>
                {monster.damage_immunities.map((imm) => (
                  <p>{imm}</p>
                ))}
              </div>
            )}
            {monster.damage_resistances.length == 0 ? (
              <></>
            ) : (
              <div>
                <h4>Damage Resistances: </h4>
                {monster.damage_resistances.map((res) => (
                  <p>{res}</p>
                ))}
              </div>
            )}
            {monster.damage_vulnerabilities.length == 0 ? (
              <></>
            ) : (
              <div>
                <h4>Damage Vulnerabilities: </h4>
                {monster.damage_vulnerabilities.map((vul) => (
                  <p>{vul}</p>
                ))}
              </div>
            )}
            {monster.condition_immunities.length == 0 ? (
              <></>
            ) : (
              <div>
                <h4>Condition Immunities: </h4>
                {monster.condition_immunities.map((con) => (
                  <p>{con.name} </p>
                ))}
              </div>
            )}
            <>
              {Object.keys(monster.senses).length !== 0 ? (
                <div>
                  <h4>Senses: </h4>
                  {monster.senses.blindsight ? (
                    <p>blindsight {monster.senses.blindsight}, </p>
                  ) : (
                    <></>
                  )}
                  {monster.senses.darkvision ? (
                    <p>darkvision {monster.senses.darkvision}, </p>
                  ) : (
                    <></>
                  )}
                  {monster.senses.tremorsense ? (
                    <p>tremorsense {monster.senses.tremorsense}, </p>
                  ) : (
                    <></>
                  )}
                  {monster.senses.truesight ? (
                    <p>truesight {monster.senses.truesight}, </p>
                  ) : (
                    <></>
                  )}
                  {monster.senses.passive_perception ? (
                    <p>
                      passive perception {monster.senses.passive_perception},{" "}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              ) : (
                <></>
              )}
            </>
            {monster.languages !== "" ? (
              <div>
                <h4>
                  Languages: <span>{monster.languages}</span>
                </h4>
              </div>
            ) : (
              <></>
            )}
            <div>
              <h4>
                Challenge Rating: <span>{monster.challenge_rating}</span>
              </h4>
            </div>
          </Proficiencies>
          <SpecialTraits>
            {monster.special_abilities ? (
              <div>
                {monster.special_abilities.map((spec) => {
                  return (
                    <div>
                      <p>
                        {spec.name}.{" "}
                        {spec.usage ? (
                          <span>
                            ({spec.usage.times}/{spec.usage.type})
                          </span>
                        ) : (
                          <></>
                        )}
                        <span>{spec.desc}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </SpecialTraits>
          <Actions>
            <div>
              <h3>Actions</h3>
            </div>
            {monster.actions.map((action) => (
              <div>
                <p>
                  {action.name}. <span>{action.desc}</span>
                </p>
                {action.attack_bonus ? (
                  <button>Attack +{action.attack_bonus}</button>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </Actions>
          <LegendaryActions>
            {monster.legendary_actions ? (
              <div>
                <h3>Legendary Actions</h3>
                {monster.legendary_actions.map((leg) => {
                  return (
                    <p>
                      {leg.name}. <span>{leg.desc}</span>
                    </p>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </LegendaryActions>
        </StatBlock>
      ) : (
        <></>
      )}
    </>
  );
};

export default MonsterDetails;

const StatBlock = styled.div`
  line-height: 1.2em;
`;

const MainDetails = styled.div`
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-style: italic;
  }
`;

const MainStats = styled.div`
  border-top: solid red 1px;
  p {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
`;

const AbilityScores = styled.div`
  display: flex;
  border-top: solid red 1px;
  text-align: center;
  div {
    padding: 5px 15px;
    h4 {
      font-weight: bold;
    }
  }
`;

const Proficiencies = styled.div`
  padding: 5px 0px;
  border-top: solid red 1px;

  div {
    display: flex;
    h4 {
      font-weight: bold;
      padding-right: 5px;
      span {
        font-weight: normal;
        padding-right: 5px;
      }
    }
    p {
      padding-right: 5px;
    }
  }
`;

const SavingThrows = styled.div`
  display: flex;
  h4 {
    padding-right: 5px;
  }
  p {
    padding-right: 8px;
    span {
      padding-left: 2px;
    }
  }
`;
const Skills = styled.div`
  display: flex;
  h4 {
    padding-right: 5px;
  }
  p {
    padding-right: 8px;
    span {
      padding-left: 2px;
    }
  }
`;

const SpecialTraits = styled.div`
  border-top: solid 1px red;
  div {
    margin: 5px 0px 10px;
    p {
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
`;

const Actions = styled.div`
  div {
    padding: 5px 0px;
    h3 {
      font-size: 20px;
      border-bottom: solid red 1px;
    }
    p {
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
`;

const LegendaryActions = styled.div`
    h3 {
      padding-top: 10px;
      font-size: 20px;
      border-bottom: solid red 1px;
    }
    p {
      padding: 2px 0px;
      font-weight: bold;
      span {
        font-weight: normal;
      }
    }
  }
`;
