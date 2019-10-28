import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/Home'

const APP = createStackNavigator(
    { HOME: HomeScreen },
    {
        headerMode: 'none',
    },
)

export default createAppContainer(APP)
