import React from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

@withStyles(theme => ({
  container: {
    width: '100%',
    flexGrow: 1,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'fixed',
    marginTop: theme.spacing.unit / 2,
    marginBottom: theme.spacing.unit * 3,
    zIndex: theme.zIndex.popover,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
}))
export default class AutoComplete extends React.Component {
  constructor(props) {
    super(props)

    const initialValue = this.getSuggestionValue(props.value) || ''

    this.state = {
      value: initialValue,
      suggestions: [],
    }
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({ value: this.getSuggestionValue(nextProps.value) || '' })
  }

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  }
  getSuggestions = (value) => {
    const escapedValue = this.escapeRegexCharacters(value.trim())
    if (escapedValue === '') {
      return [];
    }
    const suggestions = this.props.passProps.data.filter(item => _.includes(_.toLower(this.getSuggestionValue(item)), _.toLower(escapedValue)))
    return _.take(suggestions, this.props.passProps.maxSearchResults);
  }
  getSuggestionValue = (item) => {
    const { itemName } = this.props.passProps
    switch (typeof itemName) {
    case 'string': // path
      return _.get(item, itemName)
    case 'function': // getter
      return itemName(item)
    default:
      return null
    }
  }
  handleChange = (e, { newValue }) => {
    this.setState({ value: newValue });
  }
  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({ suggestions: this.getSuggestions(value) })
  }
  handleClearSuggestions = () => {
    this.setState({ suggestions: [] })
  }
  handleSuggestionSelected = (event, { suggestion }) => {
    this.props.onChange(suggestion)
  }
  renderSuggestion = (item, { query, isHighlighted }) => {
    const { renderItem } = this.props.passProps
    let label = null
    switch (typeof renderItem) {
    case 'string': // path
      label = _.get(item, renderItem)
      break
    case 'function': // getter
      label = renderItem(item)
      break
    }
    const matches = match(label, query)
    const parts = parse(label, matches)

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map((part, index) => {
            return part.highlight ? (
              <span key={String(index)} style={{ fontWeight: 500 }}>
                {part.text}
              </span>
            ) : (
              <strong key={String(index)} style={{ fontWeight: 300 }}>
                {part.text}
              </strong>
            );
          })}
        </div>
      </MenuItem>
    );
  }

  renderInput = (inputProps) => {
    const { classes, ref, TextFieldProps, ...other } = inputProps;
    return (
      <TextField
        className={classes.textField}
        inputRef={ref}
        InputProps={{
          classes: {
            input: classes.input,
          },
        }}
        {...TextFieldProps}
        {...other}
      />
    );
  }

  renderSuggestionsContainer = (options) => {
    const { containerProps, children } = options;

    return (
      <Paper {...containerProps} square>
        {children}
      </Paper>
    );
  }

  render() {
    const { classes } = this.props;
    let { TextFieldProps } = this.props.passProps
    TextFieldProps = TextFieldProps || {}
    const { helperText } = TextFieldProps
    const hasError = (typeof this.props.errorMessage) === 'string'
    const menuStyle = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%',
      zIndex: '999999999999',
    }

    return (
      <Autosuggest
        getSuggestionValue={this.getSuggestionValue}
        inputProps={{
          value: this.state.value,
          classes: classes,
          onChange: this.handleChange,
          label: this.props.label,
          error: hasError,
          TextFieldProps: TextFieldProps,
          helperText: hasError ? this.props.errorMessage : helperText,
        }}
        onSuggestionSelected={this.handleSuggestionSelected}
        onSuggestionsClearRequested={this.handleClearSuggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        renderInputComponent={this.renderInput}
        renderSuggestion={this.renderSuggestion}
        renderSuggestionsContainer={this.renderSuggestionsContainer}
        suggestions={this.state.suggestions}
        menuStyle={menuStyle}
        theme={{
          container: classnames(classes.container, this.props.passProps.className),
          suggestion: classes.suggestion,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
        }}
      />
    );
  }
}
