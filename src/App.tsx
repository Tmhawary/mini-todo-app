import React from 'react'
import { GlobalStyle } from './UI/Theme/theme'
import {StyledContainer} from './AppStyles'
import { LandingPage } from './pages/landingPage'
import { StyledInput } from './UI/Form'
import { StyledButton } from './UI/Button'


function App() {
	return (
		<StyledContainer maxWidth='md'>
			<GlobalStyle />
			<LandingPage />
			<StyledInput
				label='trial'
				id='trial' />
			<StyledButton
				size="medium"
				variant="outlined"
				buttonName='trial'
			>
				</StyledButton>
		</StyledContainer>
		
	)
}

export default App
