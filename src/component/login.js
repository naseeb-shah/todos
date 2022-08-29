


import { Box, Button, Center, Flex, HStack, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {log,lout} from '../features/auth'



import {

    AlertDialog,
    AlertDialogBody, AlertDialogContent, AlertDialogFooter,
    AlertDialogHeader, AlertDialogOverlay, Link, Spinner, useDisclosure
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
  
  export default function Login(){
    var dispatch=useDispatch()
    var redirect= useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
  var match=false
   const[sp,sps]=useState(false)
   const[helper,shelper]=useState()
      const[us,sus]=useState({})
      const[ds,dus]=useState('none')
      const[al,set]=useState({
        
      })
      const[user,setdata]=useState({"email":"",
     
      "password":"",
      "username":"",
      })
      const Handler=(e)=>{
  
          sus({...us,[e.target.name]:e.target.value})
          console.log(us)
      }
  const hand=(e)=>{
  
    setdata({...user,[e.target.name]:e.target.value})
    console.log(user)
  }
  
  
  const and=(e)=>{
    if(user.password===e.target.value){
      match=true
    }
  }
   const Register=()=>{
    var flag=false
    Object.keys(user).forEach((e)=>{
      if(user[e]===''){
        alert("Please Fill Valid "+ e.toUpperCase())
        flag=true
      }
      
    })
    if(flag)
    return
    sps(true)
  
  fetch('http://localhost:5000/reg',{
    method:"POST",
    body:JSON.stringify(user),
    headers:{
      'Content-Type':"application/json"
    },
  }).then(x=>x.json()).then(x=>{
    sps(false)
    set({
      h:" User Successfully Registered",
      b:" Thank you for Registration at Shah Store",
      button:'Thank You'
    })
  onOpen()
  }).catch((e)=>console.log(e))
  
  
  
  
  
    
   }
  
  
   const Login=()=>{
    var flag=false
    Object.keys(us).forEach((e)=>{
      if(us[e]===''){
        alert("Please Fill Valid "+ e.toUpperCase())
        flag=true
      }
      
    })
    if(flag)
    return
    sps(true)
  console.log(us)
  fetch('http://localhost:5000/login',{
    method:"POST",
    body:JSON.stringify(us),
    headers:{
      'Content-Type':"application/json"
    },
  }).then(x=>x.json()).then(x=>{
    sps(false)
    console.log(x)
    set({
      h:`${x.user.username}`,
      b:" Welcome to todos ",
      button:'Thank You'
    })
    onOpen()
  shelper(x.username)
  console.log(x._id)
  if(x._id){
    dispatch(log())
  localStorage.setItem('cur',JSON.stringify(x))
  localStorage.setItem('id',x._id)
  
  }
    
  }).catch((e)=>console.log(e))
  
  
  
  
  
  
   }
  
   const goto=()=>{
    if(helper===' User not Exist '){
      redirect('/log')
    }else{
      redirect('/')
    }
   }
      return(
          <>
            <AlertDialog
          isOpen={isOpen}
          // leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
               {al.h}
              </AlertDialogHeader>
  
              <AlertDialogBody>
               {al.b}
              </AlertDialogBody>
  
              <AlertDialogFooter>
             
                <Button colorScheme='green' onClick={()=>{
                  goto()
                onClose()
                }} ml={3}>
                 {al.button}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
  
  
          
          <Center>
          <Flex  >
  
          <Box mt='90px' border={'2px'} borderColor='blackAlpha.50' p='35px' display={ds==='block'?"none":'blo  '} >
          <Text fontSize={'40px'}>
            Login
          </Text>
           <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
             <Text  color='black' fontSize={'20px'} w={'100px'}>
              Email
             </Text>
               <Input
               borderColor={'green'}
               border={'2px'}
  name='email'
               w="300px"
               onChange={Handler}
               placeholder='Username@gmail.com'
               >
  
               </Input>
           </HStack>
           <HStack p='5px' mt='10px'  w={'400px'} borderRadius='10px' >
             <Text  color='black' fontSize={'20px'} w={'100px'}>
              Password
             </Text>
               <Input
               type='password'
  name='password'
               w="300px"
               borderColor={'green'}
               border={'2px'}
               onChange={Handler}
               placeholder='Password'
               >
               
               </Input>
               
           </HStack>
  <Box w='400px' mt='20px'>
  <Center>
    
  <Button ml='69px'
  // borderColor={'green'}
  colorScheme='yellow'
  w='300px'
  onClick={Login}
  >
  {sp?<Spinner/>:''}
    Log in
  </Button>
  
  
           </Center>
  <Text ml='80px'>
    Haven't Registered ? <Link onClick={()=>dus("block")} >Register Now</Link>
  </Text>
          
  
  </Box>
  
           </Box>
  
           <Box mt='90px' border={'2px'} borderColor='blackAlpha.50' p='35px' h='600px' display={ds}>
  
           <Text fontSize={'40px'}>
           Register
          </Text>
          <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
             <Text w='100px' color='black' fontSize={'20px'}>
              Username
             </Text>
               <Input
               borderColor={'green'}
               border={'2px'}
  name='username'
               w="300px"
               onChange={hand}
               placeholder='anjana'
               isRequired
               >
                 
  
               </Input>
           </HStack>
           <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
             <Text w='100px' color='black' fontSize={'20px'}>
              Email
             </Text>
               <Input
               borderColor={'green'}
               border={'2px'}
  name='email'
               w="300px"
               onChange={hand}
               placeholder='Username@gmail.com'
               >
                 
  
               </Input>
           </HStack>
           <HStack p='5px' mt='10px' w={'400px'} borderRadius='10px'>
             <Text w='100px' color='black' fontSize={'20px'}>
              Password
             </Text>
               <Input
                 type={'password'}
               borderColor={'green'}
               border={'2px'}
  name='password'
               w="300px"
               onChange={hand}
               placeholder='Password'
               >
                 
  
               </Input>
           </HStack>
         
  
  
         
  
  
           <Box w='400px' mt='20px'>
  <Center>
    
  <Button ml='69px'
  // borderColor={'green'}
  colorScheme='yellow'
  w='300px'
  
  onClick={Register}
  >
  {sp?<Spinner />:''}
    Register
  </Button>
  
  
           </Center>
  <Text ml='80px'>
    Have Registered ? <Link onClick={()=>dus("none")}> Login Now</Link>
  </Text>
          
  
  </Box>
  
  
  
  
  
            </Box>
   
           </Flex>
           </Center>
  
          </>
      )
  }