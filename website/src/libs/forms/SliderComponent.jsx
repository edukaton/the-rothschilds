import React from 'react'
import { ObjectComponent } from 'simple-react-form'
import { FormLabel, FormControl } from 'material-ui/Form';
import Slider from 'rc-slider'
import './SliderComponent.css'

export default class SliderComponent extends ObjectComponent {
  render() {
    const { className, ...otherProps } = this.props.passProps
    return (
      <FormControl className={className}>
        <FormLabel>{this.props.label}</FormLabel>
        <Slider
          {...this.props}
          {...otherProps}
        />
      </FormControl>
    )
  }
}
