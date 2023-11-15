import { useHttp } from '../hooks/http.hook'

const GetFromBD = () => {

    const { loading, request, error } = useHttp();

    const getUser = async () => {
        const res = await request('https://fakestoreapi.com/users');
        return res.map(transformUser);
    }

    const transformUser = (res) => {
        return {
            id: res.id,
            email: res.email,
            userName: res.username,
            password: res.password,

        }
    }

    return {
        loading,
        error,
        getUser,

    }
}

export default GetFromBD;


