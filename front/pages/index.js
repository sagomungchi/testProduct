import Header from "../components/Header";
import React from 'react';
import AdForm from "../components/AdForm";
import MainList from "../components/MainList";
import {Row} from 'antd';

const dummy = {
    isLoggedIn: false,
    imagePaths: [],
    mainPosts: [{
        img: ''
    }]
};

const Home = () => {
    return (
        <Header>
            <div style={{marginTop:"30px" ,marginBottom:'20px',marginLeft:'160px', textAlign:'left'}}>
                <AdForm/>
            </div>
            <Row style={{marginLeft:'80px', marginTop:"40px",textAlign:'center'}} gutter={32}>
                <MainList/>
            </Row>

        </Header>
    );
};
export default Home;