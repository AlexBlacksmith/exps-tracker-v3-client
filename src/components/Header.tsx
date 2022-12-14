import { useState, useContext } from "react";
import { ThemeContext } from 'styled-components'

import { Container, Flex } from "./styled/Layout.styled";
import { StyledHeader } from "./styled/Details.styled";
import ImageWrapper from "./styled/ImageWrapper.styled";
import Drawer from "./Drawer";
import Nav from "./Nav";
import AccountNav from "./AccountNav";

type DrawerState = 'init' | 'open' | 'closed';

const Header = () => {
    const [open, setOpen] = useState<DrawerState>('init');
    const [content, setContent] = useState(<></>);

    const openDrawer = () => setOpen('open');
    const closeDrawer = () => setOpen('closed');

    const useDrawer = (content: JSX.Element) => {
        setContent(content);
        openDrawer();
    }

    const { userTheme, changeTheme } = useContext(ThemeContext);
    const themes = ['neon', 'classic'];
    return(
        <StyledHeader>
            <Drawer open={open} closeDrawer={closeDrawer}>
                { content }
            </Drawer>
            <Container>
                <Flex justify="space-between" align="center">
                    <div onClick={() => useDrawer(<Nav closeDrawer={closeDrawer} />)}>
                        <ImageWrapper size="2rem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" preserveAspectRatio="none">
                                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </ImageWrapper>
                    </div>
                    <select
                        defaultValue={ themes.find(theme => theme === userTheme) } 
                        onChange={ (e) => changeTheme(e.target.value) }
                        hidden
                    >
                        {themes.map(theme => (
                            <option key={theme} value={theme}>{theme.toUpperCase()}</option>
                        ))}
                    </select>
                    <div onClick={() => useDrawer(<AccountNav closeDrawer={closeDrawer} />)}>
                        <ImageWrapper size="2rem">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" preserveAspectRatio="none">
                                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                            </svg>
                        </ImageWrapper>
                    </div>
                </Flex>
            </Container>
        </StyledHeader>
    );
}

export default Header;