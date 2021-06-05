import React from "react";
import { Grommet, Stack, Box, Heading} from "grommet"

const NoMatch = () => {

    return (

        <Grommet>

          <Stack anchor="top-right">
  
            <Box
            background="brand"
            pad={{ horizontal: 'large' }}
            round
            >

              <Heading alignSelf="center" margin="none">404 Page Not Found</Heading>

            </Box>

          </Stack>
          
        </Grommet>
    
    )
}

export default NoMatch