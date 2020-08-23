import React from "react";
import styled from "styled-components";

const MonsterDetails = ({ monster, status }) => {
  return (
    <>
      {status === "ready" ? (
        <div>
          <h2>{monster.name}</h2>
          <p>
            {monster.size} {monster.type}, {monster.alignment}
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
          {monster.proficiencies.find((prof) => prof.name.includes("Skill")) ? (
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MonsterDetails;

const AbilityScores = styled.div`
  display: flex;
`;
