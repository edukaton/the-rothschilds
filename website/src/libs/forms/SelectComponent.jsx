import React from 'react'
import _ from 'lodash'
import { FieldType } from 'simple-react-form'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'
import Input, { InputLabel } from 'material-ui/Input'
// import Radio from 'material-ui/Radio'
import { FormHelperText, FormControl } from 'material-ui/Form'

export default class SelectComponent extends React.Component {
  static propTypes = {
    ...FieldType.propTypes,
  }

  constructor(props) {
    super(props)
    this.id = _.uniqueId('select-component-')
  }

  componentDidMount() {
    if (!this.props.value) {
      this.props.onChange(this.props.defaultValue)
    }
  }

  renderSelect() {
    const hasError = (typeof this.props.errorMessage) === 'string'
    const { type, fullWidth, className, helperText, displayEmpty, emptyLabel, options, ...passProps } = this.props.passProps
    return (
      <FormControl fullWidth={fullWidth} className={className}>
        <InputLabel htmlFor={this.id}>{this.props.label}</InputLabel>
        <Select
          error={hasError}
          value={this.props.value}
          input={<Input id={this.id} />}
          onChange={event => this.props.onChange(event.target.value)}
          displayEmpty
          {...passProps}
        >
          {options.map(item => (
            <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
        { helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  }

  renderRadio() {
    // const { options } = this.props.passProps
    return (
      // <FormControl fullWidth={fullWidth} className={className} error={hasError}>
      //   <FormLabel htmlFor={this.id}>{this.props.label}</FormLabel>
      //   <RadioGroup
      //     value={this.props.value}
      //     aria-label={this.props.label}
      //     name={this.props.label}
      //     input={<Input id={this.id} />}
      //     onChange={(event, value) => { console.log(event, value); this.props.onChange(value) }}
      //     {...passProps}
      //   >
      //     {options.map(item => (
      //       <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
      //     ))}
      //   </RadioGroup>
      //   { helperText && <FormHelperText>{helperText}</FormHelperText>}
      // </FormControl>
      <div>
        {/* {options.map(item => (
          <Radio
            key={item.value}
            checked={this.props.value === item.value}
            onChange={this.props.onChange(item.value)}
            value={item.value}
            label={item.label}
            name={item.label}
            aria-label={item.label}
          />
        ))} */}
      </div>
    )
  }

  render() {
    if (this.props.passProps.componentType === 'radio') {
      return this.renderRadio()
    } else {
      return this.renderSelect()
    }
  }
}
