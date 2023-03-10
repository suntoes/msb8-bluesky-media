import { HashLink } from 'react-router-hash-link'

import Logo from './logo'
import {
  Box,
  Container,
  Link,
  Stack,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => (
  <Box w="full" position="absolute">
    <Container maxW="1410px">
      <Stack
        py={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />

        <Stack
          direction={{ base: 'column', lg: 'row' }}
          display={{ base: 'none', lg: 'flex' }}
          width={{ base: 'full', lg: 'auto' }}
          alignItems="center"
          fontWeight={600}
          color="white"
          spacing={12}
          mt={{ base: 4, lg: 0 }}
        >
          <Link as={HashLink} to="/#why-bluesky">
            Why BlueSky
          </Link>
          <Link as={HashLink} to="/#our-work">
            Our Work
          </Link>
          <Link as={HashLink} to="/#our-process">
            Our Process
          </Link>
          <Link as={HashLink} to="/#what-clients-say">
            What Clients Say
          </Link>
        </Stack>
        <Box display={{ base: 'flex', lg: 'none' }} alignItems="center">
          <Menu isLazy id="navbar-menu">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              bg="#ffffff55"
              variant="solid"
              aria-label="Options"
            />
            <MenuList>
              <Link as={HashLink} to="/#why-bluesky">
                <MenuItem>Why BlueSky</MenuItem>
              </Link>
              <Link as={HashLink} to="/#our-work">
                <MenuItem>Our Work</MenuItem>
              </Link>
              <Link as={HashLink} to="/#our-process">
                <MenuItem>Our Process</MenuItem>
              </Link>
              <Link as={HashLink} to="/#what-clients-say">
                <MenuItem>What Clients Say</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Stack>
    </Container>
  </Box>
)

export default Navbar
