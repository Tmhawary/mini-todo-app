import React, { FunctionComponent } from 'react'
import { StyledCard } from './styles'
import { CardWidget } from './types'

export const Card: FunctionComponent<CardWidget> = ({
	title,
	description,
}) => {
	return (
		<StyledCard>
			<h3>{title}</h3>
			<p>{description }</p>
		</StyledCard>
	)
}
