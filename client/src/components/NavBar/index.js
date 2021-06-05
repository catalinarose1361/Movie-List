import React from "react";
import { Grommet, Button, Header, Icons } from "grommet";

function NavBar() {
    return (
        <Grommet>
        <Header background="brand">
  <Button href={"/"} label={"Home Page"} hoverIndicator />

  
</Header>
</Grommet>
    )
}

export default NavBar