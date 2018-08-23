import { FAVORITED_CARD } from "../actions/types";

const INITIAL_STATE = {
  cards: [
    {
      id: 1,
      label: "Blaziken",
      image: require("../images/blaziken.png"),
      is_favorite: false
    },
    {
      id: 2,
      label: "Carracosta",
      image: require("../images/carracosta.png"),
      is_favorite: false
    },
    {
      id: 3,
      label: "Entei",
      image: require("../images/entei.png"),
      is_favorite: false
    },
    {
      id: 4,
      label: "Feraligatr",
      image: require("../images/feraligatr.png"),
      is_favorite: false
    },
    {
      id: 5,
      label: "Gengar",
      image: require("../images/gengar.png"),
      is_favorite: false
    },
    {
      id: 6,
      label: "Golurk",
      image: require("../images/golurk.png"),
      is_favorite: false
    },
    {
      id: 7,
      label: "Ho-oh",
      image: require("../images/ho-oh.png"),
      is_favorite: false
    },
    {
      id: 8,
      label: "Lugia",
      image: require("../images/lugia.png"),
      is_favorite: false
    },
    {
      id: 9,
      label: "Luxray",
      image: require("../images/luxray.png"),
      is_favorite: false
    },
    {
      id: 10,
      label: "Milotic",
      image: require("../images/milotic.png"),
      is_favorite: false
    },
    {
      id: 11,
      label: "Pikachu",
      image: require("../images/pikachu.png"),
      is_favorite: false
    },
    {
      id: 12,
      label: "Quilava",
      image: require("../images/quilava.png"),
      is_favorite: false
    },
    {
      id: 13,
      label: "Regice",
      image: require("../images/regice.png"),
      is_favorite: false
    },
    {
      id: 14,
      label: "Scizor",
      image: require("../images/scizor.png"),
      is_favorite: false
    },
    {
      id: 15,
      label: "Skarmory",
      image: require("../images/skarmory.png"),
      is_favorite: false
    },
    {
      id: 16,
      label: "Torterra",
      image: require("../images/torterra.png"),
      is_favorite: false
    },
    {
      id: 17,
      label: "Tyranitar",
      image: require("../images/tyranitar.png"),
      is_favorite: false
    },
    {
      id: 18,
      label: "Tyrantrum",
      image: require("../images/tyrantrum.png"),
      is_favorite: false
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FAVORITED_CARD:
      let cards = state.cards.map(item => {
        return item.id == action.payload
          ? { ...item, is_favorite: !item.is_favorite }
          : item;
      });

      return { ...state, cards };

    default:
      return state;
  }
};
