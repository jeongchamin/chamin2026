import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Wrapper = styled.div`    
`;
const MainContent = styled.div`  
`;


function Layout(){
    return(
        <Wrapper>
            <Header/>

            <MainContent>
                <Outlet />
            </MainContent>

            <Footer />

        </Wrapper>
    );
};
export default Layout;