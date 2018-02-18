import React from 'react'
import _ from 'lodash'
import { inject, observer } from 'mobx-react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'

@withStyles((theme) => ({
card: {
  maxWidth: 800,
  marginBottom: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
  padding: 25,
},
media: {
  marginLeft: 'auto',
  marginRight: 'auto',
  height: 200,
  width: 200,
  padding: 5,
},
formField: {
  width: 180,
  marginLeft: 'auto',
  marginBottom: 20,
  marginRight: 'auto',
  textAlign: 'center',
  display: 'flex',
},
}))
@inject('infoStore')
@observer
export default class UserInfo extends React.Component {
  isInfoValid = () => {
    if (_.isEmpty(this.props.infoStore.name))
      return false
    else if (_.isEmpty(this.props.infoStore.sex))
      return false
    else
      return true
  }

  render() {
    const { classes } = this.props
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/img/avatar-default.png"
          title="Avatar"
        />
        <CardContent>
          <Typography variant="headline" component="h2"> Podstawowe informacje </Typography>
          <Typography component="p">
            Podane informacje są wykorzystywane jedynie na potrzeby stworzenia artykułu,
            nie są nigdzie przesyłane
          </Typography>
          <TextField
            className={classes.formField}
            inputProps={{ style: { textAlign: 'center' } }}
            required
            id="name"
            label="Imię"
            value={this.props.infoStore.name}
            onChange={event => this.props.infoStore.setName(event.target.value)}
            margin="normal"
          />
          <FormControl required className={classes.formField}>
            <InputLabel htmlFor="sex">Płeć</InputLabel>
            <Select
              value={this.props.infoStore.sex}
              onChange={(event) => this.props.infoStore.setSex(event.target.value)}
              inputProps={{ name: 'sex', id: 'sex' }}
            >
              <MenuItem value="K">Kobieta</MenuItem>
              <MenuItem value="M">Mężczyzna</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <CardActions>
          <Button style={{ marginLeft: 'auto' }} onClick={this.props.onDone} color="primary" disabled={!this.isInfoValid()} >Dalej</Button>
        </CardActions>
      </Card>
    )
  }
}
