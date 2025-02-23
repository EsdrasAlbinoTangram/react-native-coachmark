import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface CoachmarkProps {
  message?: string;
  buttonText?: string;
  autoShow?: boolean;
  onHide?: () => void;
  onShow?: () => void;
  isAnchorReady?: boolean;
  renderArrow?: CoachmarkViewProps['renderArrow'];
  renderContent?: CoachmarkViewProps['renderContent'];
  accessibilityLabel?: string;
  testID?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export enum CoachmarkPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface CoachmarkArrowProps {
  position?: CoachmarkPosition;
  x: number;
}

export interface CoachmarkContentProps {
  message?: string;
  buttonText?: string;
}

export type CoachmarkViewProps = {
  renderArrow: ({
    x,
    position,
  }: {
    x: number;
    position?: CoachmarkPosition;
  }) => React.ReactElement<CoachmarkArrowProps>;
  renderContent?: () => React.ReactElement;
} & CoachmarkContentProps &
  CoachmarkArrowProps;
