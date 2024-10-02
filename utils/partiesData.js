export const partiesData = [
  {
    id: 27,
    code: "APC",
    name: "All People's Congress",
    color1: "#0a9bb5",
    color2: "#a4ecf9",
    photo: "APC"
  },
  {
    id: 3,
    code: "CPP",
    name: "Convention Peoples Party",
    color1: "#CC0000",
    color2: "#ffa3a3",
    photo: "cpp.jpg"
  },
  {
    id: 15,
    code: "DFP",
    name: "Democratic Freedom Party",
    color1: "#FF7979",
    color2: "#ffd6d6",
    photo: ""
  },
  {
    id: 5,
    code: "DPP",
    name: "Democratic Peoples Party",
    color1: "#bb6666",
    color2: "#ead1d1",
    photo: "dpp.jpg"
  },
  {
    id: 24,
    code: "GFP",
    name: "Ghana Freedom Party",
    color1: "#e812ed",
    color2: "#f8b7f9",
    photo: "GFP"
  },
  {
    id: 32,
    code: "GUM",
    name: "Ghana Union Movement",
    color1: "#d6ed12",
    color2: "#f2f9b7",
    photo: "GUM"
  },
  {
    id: 7,
    code: "GCPP",
    name: "Great Consolidated Popular Party",
    color1: "#aab50a",
    color2: "#f4f9a4",
    photo: "gcpp.jpg"
  },
  {
    id: 8,
    code: "IND",
    name: "Independent Candidate",
    color1: "#663366",
    color2: "#dbb7db",
    photo: "ind.jpg"
  },
  {
    id: 33,
    code: "LPG",
    name: "Liberal Party Ghana",
    color1: "#7ea4bb",
    color2: "#d8e3ea",
    photo: "LPG"
  },
  {
    id: 2,
    code: "NDC",
    name: "National Democratic Congress",
    color1: "#339933",
    color2: "#bae8ba",
    photo: "ndc.jpg"
  },
  {
    id: 18,
    code: "NDP",
    name: "National Democratic Party",
    color1: "#b50a58",
    color2: "#f9a4cb",
    photo: "ndp"
  },
  {
    id: 1,
    code: "NPP",
    name: "New Patriotic Party",
    color1: "#0f0ff5",
    color2: "#b7b7fb",
    photo: "npp.jpg"
  },
  {
    id: 25,
    code: "Others",
    name: "Others",
    color1: "#999999",
    color2: "#e0e0e0",
    photo: "OTH"
  },
  {
    id: 4,
    code: "PNC",
    name: "People National Convention",
    color1: "#FF9911",
    color2: "#fee0b7",
    photo: "pnc.jpg"
  },
  {
    id: 17,
    code: "PPP",
    name: "Progressive Peoples Party",
    color1: "#7b9579",
    color2: "#d7dfd6",
    photo: "ppp"
  },
  {
    id: 14,
    code: "RPD",
    name: "Reformed Patriotic Democrats",
    color1: "#66FF33",
    color2: "#d1ffc1",
    photo: ""
  }
];

export const getPartyData = (partyId) => {
  return partiesData.find((party) => {
    return party.id === partyId;
  })
}