import useFetch from "../CustomHooks/useFetch.js"
const Users = ()=>{
    const {data , isLoading , error} = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if(isLoading) return <h1>Loading....!!</h1>
    if(error) return <h1>{error}</h1>

    return (
        <div style={{margin:"20px"}}>
            <ul>
                {
                data.map((user)=>(
                    <li key={user.id}>
                        <p>Name:{user.name}</p>
                        <p>UserName:{user.username}</p>
                        <p>Email:{user.email}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}
export default Users;