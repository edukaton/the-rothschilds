import React from 'react'
import Switch from 'material-ui/Switch'
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';
import { FieldType } from 'simple-react-form'

export default class SwitchComponent extends React.Component {
  static propTypes = {
    ...FieldType.propTypes,
  }

  CheckboxControl = (
    <Checkbox
      disabled={this.props.disabled}
      value={this.props.value}
      onChange={(event, checked) => this.props.onChange(checked)}
    />)

  SwitchControl = (
    <Switch
      disabled={this.props.disabled}
      value={this.props.value}
      onChange={(event, checked) => this.props.onChange(checked)}
    />)

  render() {
    const fieldType = this.props.passProps.fieldType || 'checkbox'
    const formControl = (fieldType === 'checkbox') ? this.CheckboxControl : this.SwitchControl
    return (
      <FormControlLabel
        control={formControl}
        label={this.props.label}
      />
    )
  }
}
