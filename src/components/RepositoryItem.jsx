import React from 'react'
import { View, StyleSheet } from 'react-native'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'
import RepositoryItemHeader from './RepositoryItemHeader'

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  },
  language: {
    padding: 5,
    marginTop: 4,
    marginBottom: 4,
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

export default RepositoryItem
