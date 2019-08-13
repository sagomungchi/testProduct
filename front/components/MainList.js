import React from 'react';
import {Col, Row} from "antd";
import PostLink from "./PostLink";

const ad1 = {
    adImg: "https://image.shutterstock.com/z/stock-vector-abstract-futuristic-background-technology-sci-fi-concept-653564875.jpg",
    adTitle:"광고1",
    adText: "《용비어천가》는 조선 세종 때 권제와 정인지, 안지 등이 세종의 명을 받아 지은 악장·서사시이다. 정인지와 안지, 권제 등이 짓고, 성삼문과 박팽년, 이개 등이 주석, 정인지가 서문을 쓰고 최항이 발문하였다. 1445년 4월에 지어 1447년 5월에 간행하였다.",
};
const ad2 = {
    adImg: "https://image.shutterstock.com/z/stock-vector-abstract-futuristic-circuit-board-illustration-high-computer-digital-technology-concept-vector-661982146.jpg",
    adTitle:"광고 2",
    adText: "《용비어천가》는 조선 세종 때 권제와 정인지, 안지 등이 세종의 명을 받아 지은 악장·서사시이다. 정인지와 안지, 권제 등이 짓고, 성삼문과 박팽년, 이개 등이 주석, 정인지가 서문을 쓰고 최항이 발문하였다. 1445년 4월에 지어 1447년 5월에 간행하였다."
};
const ad3 = {
    adImg: "https://image.shutterstock.com/z/stock-vector-vector-abstract-futuristic-circuit-board-global-network-computer-technology-dark-blue-color-708494212.jpg",
    adTitle: "광고 3",
    adText:"《용비어천가》는 조선 세종 때 권제와 정인지, 안지 등이 세종의 명을 받아 지은 악장·서사시이다. 정인지와 안지, 권제 등이 짓고, 성삼문과 박팽년, 이개 등이 주석, 정인지가 서문을 쓰고 최항이 발문하였다. 1445년 4월에 지어 1447년 5월에 간행하였다."
};

const mainListStyle={
    width:"300px",
    height:"250px"
}

const MainList=()=>{
    return(
        <div>
            <Col span={6}>
                <PostLink img={ad1.adImg} title={ad1.adTitle} text={ad1.adText}/>
            </Col>
            <Col span={6}>
                <Row>
                    <img src={ad2.adImg} style={mainListStyle}></img>
                </Row>
                <Row>
                    {ad2.adTitle}
                </Row>
            </Col>
            <Col span={6}>
                <Row>
                    <img src={ad3.adImg} style={mainListStyle}></img>
                </Row>
                <Row>
                    {ad3.adTitle}
                </Row>
            </Col>
        </div>
    )
};

export default MainList