// import gql from 'graphql-tag';
// import { server } from '..';
// import { startTestServer, toPromise } from './testUtils';
//
// const GET_USERS = gql`
// 	query userList {
// 		users {
// 			id
// 			firstName
// 			lastName
// 			emailAddress
// 			country
// 		}
// 	}
// `;
//
// describe('Server - e2e', () => {
// 	let stop;
// 	let graphql;
//
// 	beforeEach(async () => {
// 	  const testServer = await startTestServer(server);
// 	  stop = testServer.stop;
// 	  graphql = testServer.graphql;
// 	});
//
// 	afterEach(() => stop());
//
// 	it('Gets list of users', async () => {
// 		return true;
// 		const res = await toPromise(
// 		  graphql({
// 		    query: GET_USERS
// 		  })
// 		);
// 		expect(res).toMatchSnapshot();
// 	});
// });
