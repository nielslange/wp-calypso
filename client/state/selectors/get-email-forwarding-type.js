/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Retrieve the type of the email forwards
 *
 * @param  {Object} state    Global state tree
 * @param  {string} domainName domainName to request email forwards for
 * @return {?string} the string type of the email forwards or null if it has not be retrieved yet
 */
export default function getEmailForwardingType( state, domainName ) {
	return get( state.emailForwarding, [ domainName, 'type' ], null );
}
