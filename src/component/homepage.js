
import {Box,Flex,HStack,Center,Text,Image,Input,FormLabel} from '@chakra-ui/react'
import { Outlet, Link } from "react-router-dom";


export default function Home(){

return <>

<Flex flexWrap={'wrap'} justify={'space-between'} border='2px' textColor={'white'} backgroundColor={'yellowgreen'}>
<Box>
    Home
</Box>
<Box>
    Todos
</Box>
<Box>
     login
</Box>



</Flex>



</>


}