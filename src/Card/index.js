import React, { Component } from "react";
import s from "./Card.module.scss";
import cl from 'classnames'

class Card extends React.Component {
  state = {
    done: false,
  };

  handleClick = () => {
    this.setState({
      done: true
    })
  };

  render() {
    const { eng, rus } = this.props;
    const { done } = this.state;

    const cardClass = [s.card];

    if (done) {
      cardClass.push(s.done);
    }

    return (
      <div
        className={cl(s.card, {[s.done]: done})}
         onClick={this.handleClick}
      >
        <div className={s.cardInner}>
          <div className={s.cardFront}>{eng}</div>
          <div className={s.cardBack}>{rus}</div>
        </div>
      </div>
    );
  }
}

export default Card;
