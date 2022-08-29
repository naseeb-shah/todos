
import {Box,Flex, Button,HStack,Center,Text,Image,Input,FormLabel} from '@chakra-ui/react'
import { useState } from 'react'


 export  default  function Todos(){
    const [task,settask]=useState('')
    const [status,setstatus]=useState('')
    const [todos,setodo]=useState([])

    const addtask=()=>{
        fetch('http://localhost:5000/add/630ced516696b39e7c08a1d1',{
            method:"POST",
            body:JSON.stringify({
                task:task,
                status:status
            }),
            headers:{
              'Content-Type':"application/json"
            },
          }).then(x=>x.json()).then(x=>alert("added")).catch((e=>alert(e)))
    }

const showtask=()=>{
    fetch('http://localhost:5000/task/630ced516696b39e7c08a1d1').then(x=>x.json()).then(x=>setodo(x[0].todos))
    console.log(todos)
        


}

const single=(t)=>{
return <>
<HStack>
<Text>
  {  t.taks}
</Text>
<Text>
   {t.status}
</Text>

</HStack>

</>

}

return <>

<Box>
    add task
    <Input  onChange={(e)=>settask(e.target.value)}>
    </Input>
</Box>
<Box>
    status
    <Input  onChange={(e)=>setstatus(e.target.value)}>
    </Input>
</Box>
<Button onClick={addtask}>

addtask
</Button>
<Button
 onClick={showtask}>
    Show task
</Button>
{
    todos?todos.map(e=>single(e)):""
}
</>


}