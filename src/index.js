import {registerComponent} from 'mjml-core'

import CmImage from './cm-image'
import CmLayout from './cm-layout'
import CmRepeater from './cm-repeater'
import CmUnsubscribe from './cm-unsubscribe'
import CmSingleline from './cm-singleline'
import CmMultiline from './cm-multiline'

registerComponent(CmImage)
registerComponent(CmLayout)
registerComponent(CmRepeater)
registerComponent(CmUnsubscribe)
registerComponent(CmSingleline)
registerComponent(CmMultiline)

export default {
  CmImage,
  CmLayout,
  CmRepeater,
  CmUnsubscribe,
  CmSingleline,
  CmMultiline,
}
