import { fireEvent, render, screen } from '@testing-library/react-native'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'


type ComponentProps = {
  title: string
  loading: boolean
}
export default function Component({loading,title}:ComponentProps) {
  const [count, setCount] = useState(0)

  if(loading) return <View><Text>Loading...</Text></View>
  return (
    <View>
      <Pressable testID='title' onPress={() => setCount(state => state+1)}>
        <Text>{title}</Text>
      </Pressable>
      
      <Text>Pressed: {count} times</Text>
      
      <Pressable onPress={() => setCount(0)}>
        <Text>reset</Text>
      </Pressable>
    </View>
  )
}

describe('Component', () => {

  it('should show the title when not loading', () => {
    render(<Component title='Title' loading={false} />)
  
    const element = screen.getByText("Title")
    expect(element).toBeOnTheScreen()
  })
  
  it('should display loading message when is loading', () => {
    render(<Component title='Title' loading={true} />)
  
    const element = screen.getByText("Loading...")
    expect(element).toBeOnTheScreen()
  })
  
  it('should display the correct count', () => {
    render(<Component title='Title' loading={false} />)
  
    expect(screen.getByText('Pressed: 0 times')).toBeOnTheScreen()
    
    const button = screen.getByTestId('title')
    fireEvent.press(button)
    expect(screen.getByText('Pressed: 1 times')).toBeOnTheScreen()
  })

})
