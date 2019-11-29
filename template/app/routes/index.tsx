import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeContainer from '../screens/Home'

const APP = createStackNavigator(
    { HOME: HomeContainer },
    {
        headerMode: 'none',
    },
)

export default createAppContainer(APP)
