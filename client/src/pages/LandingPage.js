import { React } from "react";
import { Grommet, Box, Heading, Paragraph, Button } from "grommet";

const LandingPage = () => {
    return (
        <Grommet>
            <Box
  direction="row"
  border={{ color: 'brand', size: 'large' }}
  pad="medium"
>
<Heading alignSelf="center" margin="none">Movie List</Heading>
<Paragraph alignSelf="center" margin="none">
  Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua.
</Paragraph>
<Button href={"/movieList"} alignSelf="center" primary label="label" />
  <Box pad="small" background="dark-3" />
  <Box pad="medium" background="light-3" />
</Box>
        </Grommet>
    )
}

export default LandingPage