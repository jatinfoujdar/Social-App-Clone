import {Navigate, Route, Routes} from "react-router-dom"
import { Container } from '@chakra-ui/react'
import UserPage from "./Pages/UserPage";
import PostPage from "./Pages/PostPage";
import Header from "./component/Header";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import { useRecoilValue } from "recoil";
import { userAtom } from "./atoms/userAtom";
import Logout from "./component/Logout";

function App(){

  const user = useRecoilValue(userAtom)


  return(
 
 <Container maxW='550px'>
  <Header/>
<Routes>
  <Route path="/" element={user ? <HomePage/> : <Navigate to="/auth"/> }/>
  <Route path="/auth" element={!user ? <AuthPage/> : <Navigate to="/"/>}/>
 <Route path= "/:username" element={<UserPage/>} />
 <Route path= "/:username/post/:pid" element={<PostPage/>} />
</Routes>
{user && <Logout/>}
 </Container>
 
  )
}

export default App;