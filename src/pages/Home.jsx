import styled from "styled-components";
import Hero from "../components/home/Hero/Hero";
import UserProfile from "../components/home/UserProfile/UserProfile";
import WorksGrid from "../components/home/WorksGrid/WorksGrid";
import {LineTitle} from "../components/common";
import { Container } from "../components/common/Container";
// import Weather from "../components/home/Weather/Weather";

const HomeWrapper = styled.div`

`;

function Home(){

    return(
        <HomeWrapper>
            <Hero/>

            <Container>
                {/* <Weather/> */}

                <LineTitle label="About Me"/>
                <UserProfile/>

                <LineTitle label="My Works"/>
                <WorksGrid/>


            </Container>

            
        </HomeWrapper>
    );
};

export default Home;