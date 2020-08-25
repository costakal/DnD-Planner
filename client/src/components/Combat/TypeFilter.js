import React from "react";

const TypeFilter = ({ setFilteredType, setPageNumber }) => {
  return (
    <>
      <h2>Filter by monsters</h2>
      <button
        onClick={() => {
          setFilteredType("aberration");
          setPageNumber(0);
        }}
      >
        Aberration
      </button>
      <button
        onClick={() => {
          setFilteredType("beast");
          setPageNumber(0);
        }}
      >
        Beast
      </button>
      <button
        onClick={() => {
          setFilteredType("celestial");
          setPageNumber(0);
        }}
      >
        Celestial
      </button>
      <button
        onClick={() => {
          setFilteredType("construct");
          setPageNumber(0);
        }}
      >
        Construct
      </button>
      <button
        onClick={() => {
          setFilteredType("elemental");
          setPageNumber(0);
        }}
      >
        Elemental
      </button>
      <button
        onClick={() => {
          setFilteredType("fey");
          setPageNumber(0);
        }}
      >
        Fey
      </button>
      <button
        onClick={() => {
          setFilteredType("fiend");
          setPageNumber(0);
        }}
      >
        Fiend
      </button>
      <button
        onClick={() => {
          setFilteredType("giant");
          setPageNumber(0);
        }}
      >
        Giant
      </button>
      <button
        onClick={() => {
          setFilteredType("humanoid");
          setPageNumber(0);
        }}
      >
        Humanoid
      </button>
      <button
        onClick={() => {
          setFilteredType("monstrosity");
          setPageNumber(0);
        }}
      >
        Monstrosity
      </button>
      <button
        onClick={() => {
          setFilteredType("ooze");
          setPageNumber(0);
        }}
      >
        Ooze
      </button>
      <button
        onClick={() => {
          setFilteredType("plant");
          setPageNumber(0);
        }}
      >
        Plant
      </button>
      <button
        onClick={() => {
          setFilteredType("undead");
          setPageNumber(0);
        }}
      >
        Undead
      </button>
    </>
  );
};

export default TypeFilter;
