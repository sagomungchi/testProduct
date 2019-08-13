import Header from '../components/Header';
import axios from 'axios';


class List extends React.Component {

    static async getInitialProps ({req}) {
        const response = await axios.get('http://localhost:5000/users')
        return {
            users: response.data
        }
    }
    render() {

        const { users } = this.props;

        //users.push({"name":"twelveman","id":"12"},{"name":"sdf"});
        users[0].username="tempname";


        const userList = users.map(
            user => <li key={user.id}>{user.id}, {user.username}</li>
        )



        return (
            <Header>
                <ul>
                    {userList}
                </ul>
            </Header>
        );
    }
}

export default List