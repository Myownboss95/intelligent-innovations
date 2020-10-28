import React from 'react'
import MadeWithLove from 'react-made-with-love'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		textAlign: 'center',
		marginTop: 20
	}
}

const Footer = ({ classes }) => (
	<div className={classes.root}>
		<MadeWithLove
			by="Daniel Odiachi"
			emoji
			link="https://facebook.com/dodiachi"
		/>
	</div>
)


export default withStyles(styles)(Footer)
