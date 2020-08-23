import React from "react";
import styled from "styled-components";

const MonsterDetails = ({ monster, status }) => {
  return (
    <>
      {status === "ready" ? (
        <StatBlock>
          <h2>{monster.name}</h2>
          <p>
            {monster.size} {monster.type}
            {monster.subtype !== null ? " (" + monster.subtype + ")" : ""},{" "}
            {monster.alignment}
          </p>
          <p>
            <span>Armor Class </span>
            {monster.armor_class}
          </p>
          <p>
            <span>Hit Points </span>
            {monster.hit_points} {monster.hit_dice}
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
            {monster.speed.fly ? <span>, fly {monster.speed.fly}</span> : <></>}
            {monster.speed.swim ? (
              <span>, swim {monster.speed.swim}</span>
            ) : (
              <></>
            )}
          </p>
          <AbilityScores>
            <div>
              <p>STR</p>
              <p>{monster.strength}</p>
            </div>
            <div>
              <p>DEX</p>
              <p>{monster.dexterity}</p>
            </div>
            <div>
              <p>CON</p>
              <p>{monster.constitution}</p>
            </div>
            <div>
              <p>INT</p>
              <p>{monster.intelligence}</p>
            </div>
            <div>
              <p>WIS</p>
              <p>{monster.wisdom}</p>
            </div>
            <div>
              <p>CHA</p>
              <p>{monster.charisma}</p>
            </div>
          </AbilityScores>
          <Proficiencies>
            {monster.proficiencies.find((prof) =>
              prof.name.includes("Saving")
            ) ? (
              <div>
                <p>Saving Throws: </p>
                {monster.proficiencies
                  .filter((prof) => prof.name.includes("Saving"))
                  .map((prof) => {
                    return (
                      <p>
                        {prof.name.replace("Saving Throw:", "")}
                        <span> +{prof.value}</span>
                      </p>
                    );
                  })}
              </div>
            ) : (
              <></>
            )}
            {monster.proficiencies.find((prof) =>
              prof.name.includes("Skill")
            ) ? (
              <div>
                <p>Skills: </p>
                {monster.proficiencies
                  .filter((prof) => prof.name.includes("Skill"))
                  .map((prof) => {
                    return (
                      <p>
                        {prof.name.replace("Skill:", "")}
                        <span> +{prof.value}</span>
                      </p>
                    );
                  })}
              </div>
            ) : (
              <></>
            )}
            {monster.damage_immunities.length == 0 ? (
              <></>
            ) : (
              <div>
                <p>Damage Immunities: </p>
                {monster.damage_immunities.map((imm) => (
                  <p>{imm}</p>
                ))}
              </div>
            )}
            {monster.damage_resistances.length == 0 ? (
              <></>
            ) : (
              <div>
                <p>Damage Resistances: </p>
                {monster.damage_resistances.map((res) => (
                  <p>{res}</p>
                ))}
              </div>
            )}
            {monster.damage_vulnerabilities.length == 0 ? (
              <></>
            ) : (
              <div>
                <p>Damage Vulnerabilities: </p>
                {monster.damage_vulnerabilities.map((vul) => (
                  <p>{vul}</p>
                ))}
              </div>
            )}
            {monster.condition_immunities.length == 0 ? (
              <></>
            ) : (
              <div>
                <p>Condition Immunities: </p>
                {monster.condition_immunities.map((con) => (
                  <p>{con.name} </p>
                ))}
              </div>
            )}
            <>
              {Object.keys(monster.senses).length !== 0 ? (
                <div>
                  <p>Senses: </p>
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
              <p>Languages: {monster.languages}</p>
            ) : (
              <></>
            )}
            <p>Challenge Rating: {monster.challenge_rating}</p>
          </Proficiencies>
          <SpecialTraits>
            {monster.special_abilities ? (
              <div>
                {monster.special_abilities.map((spec) => {
                  return (
                    <>
                      <p>{spec.name}</p>
                      {spec.usage ? (
                        <p>
                          ({spec.usage.times}/{spec.usage.type})
                        </p>
                      ) : (
                        <></>
                      )}
                      <p>{spec.desc}</p>
                    </>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </SpecialTraits>
          <Actions>
            {monster.actions.map((action) => (
              <div>
                <p>{action.name}</p>
                <p>{action.desc}</p>
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
              <>
                {monster.legendary_actions.map((leg) => {
                  return (
                    <>
                      <p>{leg.name}</p>
                      <p>{leg.desc}</p>
                    </>
                  );
                })}
              </>
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

const StatBlock = styled.div``;

const AbilityScores = styled.div`
  display: flex;
`;

const Proficiencies = styled.div``;

const SpecialTraits = styled.div``;

const Actions = styled.div``;

const LegendaryActions = styled.div``;
