import { action, extendObservable, toJS } from 'mobx'
import _ from 'lodash'

import quest from '../../data/quest.json'

// DEFAULT_VALUES change on reset
const DEFAULT_VALUES = {
  dialog: quest,
  answers: [],
}

class QuestStore {
  // observable generator does not initialize observable props so we use extendObservable instead
  constructor() {
    extendObservable(this, _.assign(DEFAULT_VALUES))
  }

  @action.bound addAnswer(value) {
    this.answers.push(value)
  }
  @action.bound reset() {
    _.assign(this, DEFAULT_VALUES)
  }
}

export default new QuestStore()
