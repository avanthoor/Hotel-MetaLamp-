/* const omniImport = resolve => resolve.keys().forEach(resolve);

omniImport( require.context('../src/', true, /\.js$|\.scss$/) ); */
import './theme/global.scss'
import './theme/vars.scss'

import './components/text-field/text-field.scss'
import './components/text-field/__expander/text-field__expander.scss'
import './components/btn/btn.scss'

import './components/text-field/mask.js'
import './components/text-field/__expander/text-field__expander.js'

