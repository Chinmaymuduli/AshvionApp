import {
  ColorValue,
  ImageSourcePropType,
  TextProps,
  TextStyle,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ReturnKeyType,
  StyleProp,
  Animated,
  Easing,
  TextInput,
} from 'react-native';
import {TextInputProps} from 'react-native';

export type InputRef = {
  focus: () => void;
  blur: () => void;
};

export interface InputComponentType {
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  onChangeText?: (text: string) => void;
  value?: string;
  maxLength?: number;
  editable?: boolean;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  refInner?: React.RefObject<TextInput>;
  returnKeyType?: ReturnKeyType;
  onSubmitEditing?: () => void;
  numberOfLines?: number;
  multiline?: boolean;
  inputName?: string;
  backgroundColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  inputMarginTop?: number;
  marginTop?: number;
  borderWidth?: number;
  left?: ImageSourcePropType;
  right?: ImageSourcePropType;
  leftComponent?: () => React.ReactNode;
  rightComponent?: () => React.ReactNode;
  onPressRight?: () => void;
  opacityLeftIcon?: number;
  height?: number;
  marginHorizontal?: number;
  error?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  containerStyle?: ViewStyle;
  paddHorizontal?: number;
  titleMarginHorizontal?: number;
  callPress?: () => void;
  countryCode?: string;
  dropdownPress?: () => void;
}

export type TextComponentType = TextProps & {
  tag?:
    | '22H2700'
    | '14B2400'
    | '14B2500'
    | '14B2600'
    | '20H3600'
    | '14B2700'
    | '16B1500'
    | '16B3500'
    | '12B3500'
    | '12B3400'
    | '16B1400'
    | '18H4500'
    | '18H4400'
    | '18H4600'
    | '12B3600'
    | '24H1600'
    | '16B1600'
    | '20H3700'
    | '10B3600'
    | '16B1700'
    | '16B3400'
    | '12B3700'
    | '12B3800'
    | '24B1600';
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  marginTop?: number;
  onClick?: () => void;
  textColor?: ColorValue;
};

export type AccordionItemProps = {
  title: string;
  content: React.ReactNode;
  expanded?: boolean;
  onPress: () => void;
  headerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  titleStyle?: TextStyle;
  icon?: React.ReactNode;
  expandedIcon?: React.ReactNode;
  collapsedIcon?: React.ReactNode;
  renderHeader?: (expanded: boolean) => React.ReactNode;
  animationConfig?: {
    duration: number;
    type: 'timing' | 'spring';
    property:
      | keyof Animated.TimingAnimationConfig
      | keyof Animated.SpringAnimationConfig;
  };
  disabled?: boolean;
};

export type Section = {
  title: string;
  content: React.ReactNode;
  headerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  titleStyle?: TextStyle;
  icon?: React.ReactNode;
  expandedIcon?: React.ReactNode;
  collapsedIcon?: React.ReactNode;
  renderHeader?: (expanded: boolean) => React.ReactNode;
  animationConfig?: {
    duration: number;
    type: any;
    property: any;
  };
  disabled?: boolean;
};

export type AccordionProps = {
  sections: Section[];
  allowMultiple?: boolean;
  defaultExpanded?: number[];
  onChange?: (expandedIndices: number[]) => void;
  containerStyle?: ViewStyle;
  sectionContainerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  contentStyle?: ViewStyle;
  titleStyle?: TextStyle;
  renderHeader?: (expanded: boolean) => React.ReactNode;
  renderContent?: (content: React.ReactNode, index: number) => React.ReactNode;
  animationConfig?: {
    duration: number;
    type: 'timing' | 'spring';
    property:
      | keyof Animated.TimingAnimationConfig
      | keyof Animated.SpringAnimationConfig;
  };
};

export type itemType = {
  id: string;
  label: string;
  value: string;
  image?: ImageSourcePropType | any;
};
