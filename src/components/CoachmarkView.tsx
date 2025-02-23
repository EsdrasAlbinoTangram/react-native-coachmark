import React, { Component } from 'react';
import CoachmarkContent from './CoachmarkContent';
import CoachmarkArrow from './CoachmarkArrow';
import { CoachmarkPosition, CoachmarkViewProps } from '../types';

export default class CoachmarkView extends Component<CoachmarkViewProps> {
  static defaultProps: Pick<CoachmarkViewProps, 'position' | 'renderArrow'> = {
    position: CoachmarkPosition.TOP,
    renderArrow: ({ x, position }) => <CoachmarkArrow x={x} position={position} />,
  };

  renderCoachmarkContent() {
    if (this.props.renderContent) {
      return this.props.renderContent();
    }
    return <CoachmarkContent message={this.props.message} buttonText={this.props.buttonText} />;
  }

  renderCoachmarkArrow() {
    const { renderArrow, x, position } = this.props;
    return renderArrow({ x, position });
  }

  render() {
    return this.props.position === CoachmarkPosition.TOP ? (
      <React.Fragment>
        {this.renderCoachmarkArrow()}
        {this.renderCoachmarkContent()}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {this.renderCoachmarkContent()}
        {this.renderCoachmarkArrow()}
      </React.Fragment>
    );
  }
}
