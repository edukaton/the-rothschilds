import React from 'react'
import { withStyles } from 'material-ui/styles'
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const getSteps = () => {
  return ['Quiz', 'Artykuł', 'Wytłumaczenie', 'Samodzielna analiza (opcjonalnie)']
}

const getStepContent = (step) => {
  switch (step) {
    case 0:
      return `Użytkownik wypełnia quiz z neutralnymi pytaniami. (Czy lubisz koty? Czy masz smartfona?)`;
    case 1:
      return `Na podstawie udzielonych odpowiedzi tworzy się paszkwil na temat użytkownika.
              Prawdziwe informacje są zmanipulowane tak, żeby postawić użytkownika w złym świetle.
              (Posiadasz smartfona podobnie jak większość przestępców)`;
    case 2:
      return `Na podstawie chwytów zastosowanych w stworzonym w ten sposób paszkwilu,
              tłumaczone są ogólniejsze mechanizmy manipulacji w formie filmiku na youtube.
              (korelacja to nie przyczynowość)`;
    case 3:
      return `Wyświetla się analogiczny artykuł, który użytkownik może sam przeanalizować wykorzystując nabytą wiedzę.
              (Kasia Cichopek używa smartfona, więc jest przestępcą.)`;
    default:
      return 'Unknown step';
  }
}

@withStyles((theme) => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
}))
export default class Home extends React.Component {
  state = {
    activeStep: 0,
  }

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
    })
  }

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    })
  }

  handleReset = () => {
    this.setState({
      activeStep: 0,
    })
  }

  render() {
    const { classes } = this.props
    const steps = getSteps()
    const { activeStep } = this.state

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Cofnij
                      </Button>
                      <Button
                        variant="raised"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Zakończ' : 'Dalej'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <img style={{ display: 'block'}} src="/img/test.png" alt="" />
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    )
  }
}
