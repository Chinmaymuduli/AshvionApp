import {useMemo, useState} from 'react';
import {
  Alert,
  I18nManager,
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import {getMargin} from '@constants/helper';
import {AppColors} from '@constants';
import {InputComponentType} from '../../types/componentsType';
import Text from '@components/text';
import View from '@components/view';

const Input = (props: InputComponentType) => {
  const [focus, setFocus] = useState(false);
  let style = useMemo(() => {
    return {
      ...styles.container,
      borderColor: AppColors.C111214,
      marginTop: getMargin(props?.marginTop ?? 0),
      backgroundColor: props.backgroundColor ?? AppColors.C111214,
      height: props.height ?? undefined,
      borderWidth: props?.borderWidth ?? 1,
      inputMarginTop: props?.inputMarginTop ?? getMargin(0),
      paddHorizontal: props?.paddHorizontal ?? null,

      // marginHorizontal: props?.marginHorizontal ?? getMargin(0),
    };
  }, [focus, props.error]);

  const renderUI = () => {
    return (
      <View
        onTouchStart={props.dropdownPress}
        style={[style, props.containerStyle]}>
        {props.left && (
          <>
            <Image
              source={props.left as ImageSourcePropType}
              style={[styles.left, {opacity: props?.opacityLeftIcon ?? 1}]}
              resizeMode="contain"
            />
            {props.countryCode && (
              <Text
                onPress={props.callPress}
                marginTop={3}
                textColor={AppColors.C111214}
                tag="16B1700">
                {props.countryCode}
              </Text>
            )}
          </>
        )}
        {props.leftComponent && props.leftComponent()}
        <TextInput
          onFocus={e => {
            setFocus(true);
            props.onFocus && props.onFocus(e);
          }}
          onBlur={e => {
            setFocus(false);
            props.onBlur && props.onBlur(e);
          }}
          cursorColor={AppColors.CE43428}
          style={{
            height: props.height ?? getMargin(51),
            fontSize: 16,
            backgroundColor: 'transparent',
            flex: 1,
            // fontFamily: AppFonts.PoppinsSemiBold,
            color: AppColors.solid.white,
            marginTop: 5,
            paddingHorizontal: props.paddHorizontal,
            textAlign: I18nManager.isRTL ? 'right' : 'left',
          }}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          value={props.value}
          maxLength={props.maxLength}
          editable={props.editable}
          ref={props.refInner}
          returnKeyType={props.returnKeyType}
          onSubmitEditing={props.onSubmitEditing}
          numberOfLines={props.numberOfLines}
          multiline={props.multiline}
          autoCapitalize={props.autoCapitalize}
          placeholder={props.placeholder}
          placeholderTextColor={AppColors.rgb.lightGrey}
        />
        {/* {props.right && (
          <Touchable onPress={props.onPressRight}>
            <Image
              source={props.right}
              style={styles.right}
              resizeMode="contain"
            />
          </Touchable>
        )} */}
        {props.rightComponent && props.rightComponent()}
      </View>
    );
  };

  if (props.onPress) {
    return (
      <Pressable onPress={props.onPress}>
        <View style={{pointerEvents: 'none'}}>{renderUI()}</View>
      </Pressable>
    );
  }

  return (
    <View>
      {props.inputName && (
        <Text
          style={{
            marginVertical: 8,
            marginTop: props.inputMarginTop
              ? getMargin(props.inputMarginTop)
              : getMargin(22),
            marginHorizontal: props.titleMarginHorizontal,
          }}
          tag="14B2500">
          {props.inputName}
        </Text>
      )}
      {renderUI()}
      {props.error ? (
        <Text
          tag="12B3400"
          textColor={AppColors.CE43428}
          style={{marginTop: getMargin(4), marginLeft: getMargin(12)}}>
          {props.error}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginTop: getMargin(8),
    borderRadius: getMargin(19),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    height: getMargin(24),
    width: getMargin(24),
    marginStart: getMargin(12),
    resizeMode: 'contain',
    marginRight: getMargin(4),
  },
  right: {
    marginEnd: getMargin(12),
    resizeMode: 'contain',
    height: getMargin(24),
    width: getMargin(24),
  },
});
