import {Outlet} from 'react-router-dom';
import Navbar from '../components/Partials/NavBar';
import Footer from '../components/Partials/Footer';


export default function DefaultLayout(){
   
    // const token= useSelector(state => state.auth.token);
    // if (!token){
    //     return <Navigate to="/login"/>
    // }


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
            <Navbar />
        
              <Outlet/> 

            <Footer/>
        </>
    );
};