import React, { Component, Fragment } from "react";
import { Column } from 'bulma-styled-components';
import styled from 'styled-components';

const AnimatedColumn = styled(Column)`

  .turnMeOff{
    color: black;
  }

  .turnMeOn{
    color: palegoldenrod;
    transition-property: all;
	  transition-duration: .5s;
	  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }
`;

class Test extends Component {

  state = {
    hover: false
  };

  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <Fragment>
        <AnimatedColumn >
          <p className={this.state.hover ? "turnMeOn" : "turnMeOff"}
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
          >Test</p>
        </AnimatedColumn>
      </Fragment>
    );
  }
};

export default Test;
