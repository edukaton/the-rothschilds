import { action, extendObservable, toJS } from 'mobx'
import _ from 'lodash'

// DEFAULT_VALUES change on reset
const DEFAULT_VALUES = {
}

class InfoStore {
  // observable generator does not initialize observable props so we use extendObservable instead
  constructor() {
    extendObservable(this, _.assign(DEFAULT_VALUES))
  }
}

export default new InfoStore()
