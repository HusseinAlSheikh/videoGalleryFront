import {Outlet,Navigate} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../store/auth_context';

export default function DefaultLayout(){
    const authCtx = useContext(AuthContext);
    // const token= useSelector(state => state.auth.token);
    if (!authCtx.token){
        return <Navigate to="/login"/>
    }


    // const logoutHandler = (event) =>{
    //     event.preventDefault();
    //
    //     axiosClient.post('/logout')
    //         .then(()=>{
    //             setUser({});
    //             setToken(null);
    //         });
    // }

    // useEffect(()=>{
    //
    //     axiosClient.get('/user')
    //         .then(({data})=>{
    //             setUser(data);
    //         }).catch(err => {
    //         console.error(err);
    //     });
    //     console.log('effect process');
    // },[]);



    return (
        <>
            Dashboard Layout 
            <Outlet/> 
        </>
    );
};