import React from 'react'
import { GlobalStyle } from './UI/Theme/theme'
import {StyledContainer} from './AppStyles'
import { LandingPage } from './pages/landingPage'
function App() {
	return (
		<StyledContainer maxWidth='md'>
			<GlobalStyle />
			<LandingPage/>
		</StyledContainer>
	)
}

export default App
