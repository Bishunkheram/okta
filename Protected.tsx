import React from 'react';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
const Protected = () => {
	const history = useHistory();
	const { oktaAuth, authState } = useOktaAuth();
	if (authState.isPending) return null;
	if (authState.isAuthenticated) {
		history.push('/');
	}
};
export default Protected;