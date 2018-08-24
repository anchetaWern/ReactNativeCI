import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { favoritedCard } from "../actions";
import Card from "./Card";

import { FAVORITED_CARD, LOCAL_DATA_REQUEST } from "../actions/types";

class CardList extends Component {
  componentDidMount() {
    this.props.requestLocalData();
  }

  render() {
    const { fetching, cards } = this.props;
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#333"
          animating={fetching}
          testID="loader"
        />
        <FlatList
          contentContainerStyle={styles.flatlist}
          data={cards}
          renderItem={this.renderCard}
          numColumns={2}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  }

  renderCard = ({ item }) => {
    return (
      <Card
        key={item.id}
        image={item.image}
        text={item.label}
        is_favorite={item.is_favorite}
        action={this.props.favoritedCard.bind(this, item.id)}
      />
    );
  };
}

const styles = {
  container: {
    flex: 1
  },
  flatlist: {
    marginBottom: 50
  }
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
  favoritedCard: PropTypes.func.isRequired
};

const mapStateToProps = ({ cards, fetching }) => {
  return {
    ...cards,
    ...fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatch action instead of returning the object containing the action data
    favoritedCard: id => {
      dispatch({ type: FAVORITED_CARD, payload: id });
    },
    // add function for dispatching action for initiating local storage data request
    requestLocalData: () => {
      dispatch({ type: LOCAL_DATA_REQUEST });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);
