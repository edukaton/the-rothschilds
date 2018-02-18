import React from 'react'
import cnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import Stepper, { Step, StepLabel } from 'material-ui/Stepper'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import UserInfo from '../../components/userInfo/UserInfo'
import Test from '../../components/test/Test'
import Article from '../../components/article/Article'

const getSteps = () => {
  return ['Info', 'Test', 'Artykuł']
}

@withStyles((theme) => ({
  root: {
    marginLeft: '20%',
    marginRight: '20%',
    marginTop: '50px',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  buttonRight: {
    marginLeft: 'auto',
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  btnContainer: {
    float: 'right',
  }
}))
@withRouter
export default class Home extends React.Component {
  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 })
  }
  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 })
  }
  handleReset = () => {
    this.setState({ activeStep: 0 })
  }
  handleExit = () => {
    this.props.history.push('/')
  }

  renderStepComponent = () => {
    switch (this.state.activeStep) {
    case 0:
      return <UserInfo onDone={this.handleNext} />
    case 1:
      return <Test onDone={this.handleNext} />
    case 2:
      return <Article onDone={this.handleNext} />
    default:
      return null;
    }
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        {this.renderStepComponent()}
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className={classes.btnContainer}>
          <Button onClick={this.handleReset} className={cnames(classes.buttonRight, classes.button)}>Resetuj</Button>
          <Button onClick={this.handleExit} className={cnames(classes.buttonRight, classes.button)}>Wyjdź</Button>
        </div>
      </div>
    );
  }
}
