import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import { FieldType } from 'simple-react-form'

export default class TextFieldComponent extends React.Component {
  static propTypes = {
    ...FieldType.propTypes,
    fieldType: PropTypes.string,
  }
  static defaultProps = {
    fieldType: 'text',
  }

  onKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.props.onChange(event.target.value)
    }
  }

  onBlur = (event) => {
    if (this.props.onBlur) {
      this.props.onBlur()
    }
    this.props.onChange(event.target.value)
  }

  isNumberType() {
    if (this.props.fieldSchema) {
      return this.props.fieldSchema.type === Number
    }
    if (this.props.fieldType === 'number') {
      return true
    }
    if (this.type === 'number') {
      return true
    }
    return false
  }

  onChange = (event) => {
    const value = this.isNumberType() ? Number(event.target.value) : event.target.value
    this.props.onChange(value)
  }

  render() {
    const fieldType = this.props.fieldType || this.type
    const hasError = (typeof this.props.errorMessage) === 'string'
    const { helperText, ...passProps } = this.props.passProps
    return (
      <TextField
        value={typeof this.props.value !== 'undefined' ? this.props.value : ''}
        error={hasError}
        type={fieldType}
        label={this.props.label}
        helperText={hasError ? this.props.errorMessage : helperText}
        placeholder={this.props.useHint ? this.props.label : null}
        disabled={this.props.disabled}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        onBlur={this.onBlur}
        {...passProps}
      />
    )
  }
}
