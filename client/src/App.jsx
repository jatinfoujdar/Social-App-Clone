import {Route, Routes} from "react-router-dom"
import { Container } from '@chakra-ui/react'
import UserPage from "./Pages/UserPage";
import PostPage from "./Pages/PostPage";
import Header from "./component/Header";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";

function App(){
  return(
 
 <Container maxW='550px'>
  <Header/>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/auth" element={<AuthPage/>}/>
 <Route path= "/:username" element={<UserPage/>} />
 <Route path= "/:username/post/:pid" element={<PostPage/>} />
</Routes>
 </Container>
 
  )
}

export default App;