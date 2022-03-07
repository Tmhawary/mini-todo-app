import  { css } from 'styled-components'

export const fontNames = {
	headers: 'Roboto',
	text:'Libre Baskerville'
}

export const fontScales = {
	larger: '28px',
	large: '24px',
	medium: '22px',
	normal:'19px',
	small:'14px'
}
export const fontWeight = {
	heavier: 700,
	heavy: 500,
	normal:300,
	light:100
}

export const Headers = css`
h1 {
    font-size:${fontScales.larger} ;
    font-family:${fontNames.headers} ;
    font-weight:${fontWeight.heavier} ;
}
h2 {
    font-size:${fontScales.large};
    font-family:${fontNames.headers} ;
    font-weight: ${fontWeight.heavy} ;
}
h3 {
    font-size:${fontScales.medium} ;
    font-family: ${fontNames.text} ;
    font-weight:${fontWeight.heavy} ;
}
p {
    font-size:${fontScales.normal} ;
    font-family:${fontNames.text} ;
    font-style:italic ;
    font-weight:${fontWeight.normal} ;
}

`

