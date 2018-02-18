import { action, extendObservable, toJS } from 'mobx'
import _ from 'lodash'

// import quiz from '../../data/quiz0.json'
import quiz from '../../data/quiz1.json'


// DEFAULT_VALUES change on reset
const DEFAULT_VALUES = {
  name: '',
  sex: '',
  answers: {},
}

class InfoStore {
  // observable generator does not initialize observable props so we use extendObservable instead
  constructor() {
    extendObservable(this, _.assign(DEFAULT_VALUES, quiz))
  }

  @action.bound setName(name) {
    this.name = _.upperFirst(name)
  }
  @action.bound setSex(sex) {
    this.sex = sex
  }
  @action.bound addAnswer(key, value) {
    this.answers[key] = value
  }
  @action.bound reset() {
    _.assign(this, DEFAULT_VALUES)
  }
}

export default new InfoStore()
