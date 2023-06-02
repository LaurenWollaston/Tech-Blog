const { User } = require("../models");

const userData = [
  {
    username: "ADMIN",
    email: "user@email.com",
    password: "password",
  },
  {
    username: "StarGazer",
    email: "stargazer@example.com",
    password: "Celestial1!",
  },
  {
    username: "PixelNinja",
    email: "pixelninja@example.com",
    password: "CodeMaster2#",
  },
  {
    username: "AquaDreamer",
    email: "aquadreamer@example.com",
    password: "OceanWaves3$",
  },
  { 
    username: "LunaSol",
    email: "lunasol@example.com",
    password: "Eclipse4*" ,
  },
  {
    username: "WhisperingWillow",
    email: "whisperingwillow@example.com",
    password: "Secrets5%",
  },
  {
    username: "SilverArrow",
    email: "silverarrow@example.com",
    password: "Archery6&",
  },
  {
    username: "ScribbleMaster",
    email: "scribblemaster@example.com",
    password: "InkBlot7^",
  },
  {
    username: "MidnightRider",
    email: "midnightrider@example.com",
    password: "GuitarSolo8(",
  },
  {
    username: "EnigmaSeeker",
    email: "enigmaseeker@example.com",
    password: "PuzzleSolver9)",
  },
  {
    username: "RubySorcerer",
    email: "rubysorcerer@example.com",
    password: "MagicSpells10@",
  },
  {
    username: "VelvetWhisper",
    email: "velvetwhisper@example.com",
    password: "SoftBreeze11~",
  },
  {
    username: "NeoSpartan",
    email: "neospartan@example.com",
    password: "Warrior12!",
  },
  {
    username: "MysticRaven",
    email: "mysticraven@example.com",
    password: "ShadowWings13#",
  },
  {
    username: "BlazePhoenix",
    email: "blazephoenix@example.com",
    password: "FieryFlight14$",
  },
  {
    username: "EmeraldDream",
    email: "emeralddream@example.com",
    password: "NaturePower15%",
  },
  {
    username: "CosmicVoyager",
    email: "cosmicvoyager@example.com",
    password: "Interstellar16*",
  },
  {
    username: "EtherealWhirl",
    email: "etherealwhirl@example.com",
    password: "Timeless17^",
  },
  {
    username: "SapphireEnchantress",
    email: "sapphireenchantress@example.com",
    password: "MysticCharms18(",
  },
  {
    username: "CrimsonBlade",
    email: "crimsonblade@example.com",
    password: "SwordDancer19)",
  },
  {
    username: "LabyrinthExplorer",
    email: "labyrinthexplorer@example.com",
    password: "MazeMaster20@",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;
