import React from 'react';
import {Text as RText, StyleSheet, TextStyle} from 'react-native';
import {AppColors, AppHelper} from '../../constants';
import {getMargin} from '../../constants/helper';
import {TextComponentType} from '../../types/componentsType';

const Text = (props: TextComponentType) => {
  let style: TextStyle = {
    color: AppColors.solid.white,
    ...(props.style as TextStyle),
  };

  if (props.textAlign) {
    style = AppHelper.composeStyle(style, {textAlign: props.textAlign});
  }

  if (props.tag) {
    const tagStyle =
      props.tag in styles
        ? styles[props.tag as keyof typeof styles]
        : undefined;
    if (tagStyle) {
      style = AppHelper.composeStyle(style, tagStyle);
    }
  }

  if (props.marginTop) {
    style = AppHelper.composeStyle(style, {
      marginTop: getMargin(props.marginTop),
    });
  }

  if (props.textColor) {
    style = AppHelper.composeStyle(style, {color: props.textColor});
  }

  //   if (props.onClick) {
  //     return (
  //       <Touchable onPress={props.onClick}>
  //         <RText {...props} style={style} />
  //       </Touchable>
  //     );
  //   }
  return <RText {...props} style={style} />;
};

export default Text;

export const styles = StyleSheet.create({
  '22H2700': {
    fontSize: 22,
    // fontFamily: AppFonts.PoppinsBlack,
    // color is not specified, will use default white
  },
  '14B2400': {
    fontSize: 14,
    // fontFamily: AppFonts.PoppinsRegular,
  },
  '14B2500': {
    fontSize: 14,
    // fontFamily: AppFonts.PoppinsBold,
  },
  '14B2600': {
    fontSize: 14,
    // fontFamily: AppFonts.PoppinsMedium,
  },
  '14B2700': {
    fontSize: 14,
    // fontFamily: AppFonts.PoppinsBold,
  },
  '16B1500': {
    fontSize: 16,
    // fontFamily: AppFonts.PoppinsRegular,
    // color is not specified, will use default white
  },
  '20H3600': {
    fontSize: 20,
    // fontFamily: AppFonts.PoppinsBold,
    // color is not specified, will use default white
  },
  '12B3500': {
    fontSize: 12,
    // fontFamily: AppFonts.PoppinsRegular,
  },
  '12B3400': {
    fontSize: 12,
    // fontFamily: AppFonts.PoppinsBlack,
  },
  '16B3500': {
    fontSize: 16,
    // fontFamily: AppFonts.PoppinsRegular,
  },
  '16B3400': {
    fontSize: 16,
    // fontFamily: AppFonts.PoppinsMedium,
  },
  '16B1400': {
    fontSize: 16,
    // fontFamily: AppFonts.PoppinsBlack,
  },
  '16B1600': {
    fontSize: 16,
    // fontFamily: AppFonts.PoppinsSemiBold,
  },
  '16B1700': {
    fontSize: 16,
    // fontFamily: AppFonts.PoppinsBold,
    // color is not specified, will use default white
  },
  '18H4500': {
    fontSize: 18,
    // fontFamily: AppFonts.PoppinsMedium,
  },
  '18H4400': {
    fontSize: 18,
    // fontFamily: AppFonts.PoppinsRegular,
  },
  '18H4600': {
    fontSize: 18,
    // fontFamily: AppFonts.PoppinsBold,
  },
  '12B3600': {
    fontSize: 12,
    // fontFamily: AppFonts.PoppinsSemiBold,
  },
  '12B3700': {
    fontSize: 12,
    // fontFamily: AppFonts.PoppinsBold,
  },
  '24H1600': {
    fontSize: 24,
    // fontFamily: AppFonts.PoppinsBold,
    // color is not specified, will use default white
  },
  '20H3700': {
    fontSize: 20,
    // fontFamily: AppFonts.PoppinsBold,
    // color is not specified, will use default white
  },

  '10B3600': {
    fontSize: 10,
    // fontFamily: AppFonts.PoppinsBold,
  },
  '24B1600': {
    fontSize: 24,
    // fontFamily: AppFonts.PoppinsBold,
    // color is not specified, will use default white
  },
});
