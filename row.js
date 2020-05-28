import react from 'react'
import {FlatList, Text, View} from 'react-native'
import PropTypes from 'prop-types'


const Row = (props) => {
    <ScrollView key={props.key}>
      <Text >{props.name}</Text>
      <Text>{props.phone}</Text>
    </ScrollView>
  }

  export default Row;