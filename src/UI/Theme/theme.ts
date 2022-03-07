import { createGlobalStyle } from 'styled-components'
import { colors } from '../Colors/colors'
import { fontScales, fontWeight , Headers, fontNames} from '../Typography/typography'

export const GlobalStyle = createGlobalStyle`
.body {
    font-family: ${fontNames.text} ;
    font-size:${fontScales.normal} ;
    font-weight:${fontWeight.normal} ;
    color:${colors.foundation.black} ;
}
${Headers}
`