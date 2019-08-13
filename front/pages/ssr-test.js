import Header from '../components/Header';
import axios from 'axios';


class SSRTest extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('http://localhost:5000/users')
        return {
            users: response.data
        }
    }

    render() {
        const { users } = this.props;

        const userList = users.map(
            user => <li key={user.id}>{user.name}, {user.username}</li>
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

export default SSRTest