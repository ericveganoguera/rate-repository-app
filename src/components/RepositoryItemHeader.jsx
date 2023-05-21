import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import theme from '../theme'

const RepositoryItemHeader = props => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View style={{ flex: 0, paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight='bold'>
          {props.fullName}
        </StyledText>
        <StyledText color='secondary'>{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  language: {
    padding: 5,
    marginVertical: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 4
  }
})

export default RepositoryItemHeader
