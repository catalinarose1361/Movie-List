import React from "react";
import { Grommet, Card, CardHeader, CardBody, CardFooter, Button } from "grommet"


function ViewAll(props)  {
  console.log("viewAll", props)
  
    
   

      
  
          return(

            <Grommet>
              <Card  height="medium" width="medium" background="light-1">
      <CardHeader pad="medium">{props.title}</CardHeader>
      <CardBody pad="medium">
      
      
              
              <p>{props.genre}</p>
              <p>{props.year}</p>
              <Button onClick={() => props.deleteMovie(props.id)} label="Delete Movie" />
      
      </CardBody>
      <CardFooter pad={{horizontal: "small"}} background="light-2">   
     
   
    </CardFooter>
</Card>
              
            
            </Grommet>
          )
       
      
    
  }

export default ViewAll