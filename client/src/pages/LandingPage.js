import { React } from "react";
import { Grommet, Box, Heading, Paragraph, Button } from "grommet";

const LandingPage = () => {
    return (
        <Grommet>
      
<Heading alignSelf="center" margin="none">Movie List</Heading>
<Paragraph alignSelf="center" margin="none">
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
</Paragraph>
<Button href={"/movieList"} alignSelf="center" primary label="Add Movies" />
 
        </Grommet>
    )
}

export default LandingPage