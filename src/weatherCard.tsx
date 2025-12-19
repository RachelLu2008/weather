// import React from 'react';
import styled from 'styled-components';
import type {weather} from "./Hooks.ts";

function weatherCode(code: number){
    if(code == 0){
        return "Sunny"
    }
    else if(code >0 && code<= 19){
        return "Cloudy"
    }
    else if(code > 20 && code <= 29){
        return "Rain";
    }
    else if(code > 30 && code <= 39){
        return "Dust Storm";
    }
    else if(code > 40 && code <= 49){
        return "Fog";
    }
    else if(code > 50 && code <= 59){
        return "Drizzle";
    }
    else if(code > 60 && code <= 69){
        return "Rain";
    }
    else if(code > 70 && code <= 79){
        return "Snow";
    }
}
const Card = ({weather, currPlace}:{weather: weather, currPlace:string}) => {
    const options:{hour:"numeric", minute:"numeric"} = {
        hour: "numeric",
        minute: "numeric",
    }
    return (
        <StyledWrapper>
            <div className="card">
                <section className="landscape-section">
                    <div className="sky" />
                    <div className="moon">
                        <div className="shine-1" />
                        <div className="shine-2" />
                        <div className="real-moon">
                            <div className="moon-shape" />
                        </div>
                    </div>
                    <div className="hill-1" />
                    <div className="hill-2" />
                    <div className="ocean">
                        <div className="reflection" />
                        <div className="reflection" />
                        <div className="reflection" />
                        <div className="reflection" />
                        <div className="reflection" />
                        <div className="shadow-hill-1" />
                        <div className="shadow-hill-2" />
                    </div>
                    <div className="hill-3" />
                    <div className="hill-4" />
                    <div className="tree-1">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xmlSpace="preserve" fill="#47567F">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#47567F" d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z" />
                            </g>
                        </svg>
                    </div>
                    <div className="tree-2">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xmlSpace="preserve" fill="#47567F">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#47567F" d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z" />
                            </g>
                        </svg>
                    </div>
                    <div className="tree-3">
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-0.64 -0.64 65.28 65.28" xmlSpace="preserve" fill="#4A4973" stroke="#4A4973">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#4A4973" d="M32,0C18.148,0,12,23.188,12,32c0,9.656,6.883,17.734,16,19.594V60c0,2.211,1.789,4,4,4s4-1.789,4-4v-8.406 C45.117,49.734,52,41.656,52,32C52,22.891,46.051,0,32,0z" />
                            </g>
                        </svg>
                    </div>
                    <div className="filter" />
                </section>
                <section className="content-section">
                    <div className="weather-info">
                        <div className="left-side">
                            <div className="icon">
                                <svg stroke="#000000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <g strokeWidth={0} id="SVGRepo_bgCarrier" />
                                    <g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path strokeLinecap="round" strokeWidth="1.5" stroke="#ffffff" d="M22 14.3529C22 17.4717 19.4416 20 16.2857 20H11M14.381 9.02721C14.9767 8.81911 15.6178 8.70588 16.2857 8.70588C16.9404 8.70588 17.5693 8.81468 18.1551 9.01498M7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H7M7.11616 11.6089C6.88706 10.9978 6.7619 10.3369 6.7619 9.64706C6.7619 6.52827 9.32028 4 12.4762 4C15.4159 4 17.8371 6.19371 18.1551 9.01498M7.11616 11.6089C7.68059 11.7184 8.20528 11.9374 8.66667 12.2426M18.1551 9.01498C18.8381 9.24853 19.4623 9.60648 20 10.0614" />
                                    </g>
                                </svg>
                            </div>
                            <p>{weatherCode(weather.current.weather_code)}</p>
                        </div>

                        <div className="right-side">
                            <div className="location">
                                <div>
                                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                         xmlnsXlink="http://www.w3.org/1999/xlink" width="64px" height="64px"
                                         viewBox="0 0 64 64" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff">
                                        <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fill="#ffffff"
                                                  d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
                                        </g>
                                    </svg>
                                    <span>{currPlace}</span>
                                    <div>{weather.timezone}</div>
                                </div>
                            </div>
                            <p>{weather.daily.time[0]}</p>
                            <p className="temperature">{weather.current.temperature_2m}°F</p>
                        </div>
                    </div>
                    <div className="forecast">
                        <div>
                            <p>{weather.daily.time[1]}</p>
                            <p>{weather.daily.temperature_2m_max[1]}°F</p>
                            <p>{weatherCode(weather.daily.weather_code[0])}</p>
                        </div>
                        <div className="separator" />
                        <div>
                            <p>{weather.daily.time[2]}</p>
                            <p>{weather.daily.temperature_2m_max[2]}°F</p>
                            <p>{weatherCode(weather.daily.weather_code[1])}</p>
                        </div>
                        <div className="separator"/>
                        <div>
                            <p>{weather.daily.time[3]}</p>
                            <p>{weather.daily.temperature_2m_max[3]}°F</p>
                            <p>{weatherCode(weather.daily.weather_code[2])}</p>
                        </div>
                    </div>
                </section>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
      margin-left: auto;
      margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 1000px;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.1);
    background-color: white;
  }

  /* Landscape section */
  .landscape-section {
    position: relative;
    width: 100%;
    height: 70%;
    overflow: hidden;
  }

  .landscape-section * {
    position: absolute;
  }

  .sky {
    width: 100%;
    height: 100%;
    background: rgb(175, 243, 230);
    background: linear-gradient(
      0deg,
      rgba(175, 243, 230, 1) 0%,
      rgba(65, 131, 170, 1) 100%
    );
  }

  .moon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    bottom: 40%;
    left: 23%;
    filter: drop-shadow(0px 0px 10px white);
  }

  .shine-1 {
    width: 134%;
    height: 134%;
    border-radius: 50%;
    background-color: #b6ebe7;
    opacity: 0.3;
  }

  .shine-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 118%;
    height: 118%;
    border-radius: 50%;
    background-color: #b6e8eb;
  }

  .moon-shape {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: -25%;
    right: -25%;
    background-color: #b6e8eb;
  }

  .real-moon {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: white;
    overflow: hidden;
  }

  .ocean {
    overflow: hidden;
    bottom: 0;
    width: 100%;
    height: 28%;
    background: rgb(140, 232, 225);
    background: linear-gradient(
      0deg,
      rgba(140, 232, 225, 1) 0%,
      rgba(141, 233, 221, 1) 100%
    );
  }

  .reflection {
    position: absolute;
    background-color: white;
    opacity: 0.5;
    z-index: 1;
  }

  .reflection:nth-child(1) {
    width: 40px;
    height: 10px;
    clip-path: polygon(0% 0%, 100% 0%, 50% 20%);
    top: 5%;
    left: 32%;
  }

  .reflection:nth-child(2) {
    width: 80px;
    height: 15px;
    clip-path: polygon(0% 0%, 100% 0%, 60% 20%, 40% 20%);
    top: 15%;
    left: 39%;
  }

  .reflection:nth-child(3) {
    width: 60px;
    height: 2px;
    clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
    top: 27%;
    right: 15%;
  }

  .reflection:nth-child(4) {
    width: 70px;
    height: 2px;
    clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
    top: 37%;
    right: 28%;
  }
  .reflection:nth-child(5) {
    width: 70px;
    height: 3px;
    clip-path: polygon(0% 50%, 40% 0%, 60% 0%, 100% 50%, 60% 100%, 40% 100%);
    top: 46%;
    right: 8%;
  }

  .hill-1 {
    right: -25%;
    bottom: 20%;
    width: 150px;
    height: 40px;
    border-radius: 50%;
    background-color: #4bcacc;
  }

  .shadow-hill-1 {
    right: -25%;
    top: -30%;
    width: 150px;
    height: 40px;
    border-radius: 50%;
    background-color: #88d8d7;
    opacity: 1;
  }

  .hill-2 {
    right: -36%;
    bottom: 10%;
    width: 150px;
    height: 80px;
    border-radius: 50%;
    background-color: #3f85a8;
  }

  .shadow-hill-2 {
    right: -36%;
    top: -65%;
    width: 150px;
    height: 80px;
    border-radius: 50%;
    background-color: #73c8cf;
    opacity: 1;
  }

  .hill-3 {
    left: -100%;
    bottom: -30%;
    width: 350px;
    height: 150px;
    border-radius: 50%;
    background-color: #47567f;
    z-index: 3;
  }

  .tree-1 {
    bottom: 19%;
    left: 3%;
    width: 50px;
    height: 70px;
    z-index: 3;
  }

  .tree-2 {
    bottom: 12%;
    left: 25%;
    width: 50px;
    height: 70px;
    z-index: 3;
  }

  .hill-4 {
    right: -100%;
    bottom: -40%;
    width: 350px;
    height: 150px;
    border-radius: 50%;
    background-color: #4a4973;
    z-index: 3;
  }

  .tree-3 {
    bottom: 10%;
    right: 1%;
    width: 65px;
    height: 80px;
    z-index: 3;
  }

  .filter {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 40%
    );
    z-index: 5;
    opacity: 0.2;
  }

  /* Content section */
  .content-section {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .weather-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    text-align: center;
    top: 0;
    right: 0%;
    width: 100%;
    padding-top: 15px;
    color: white;
    z-index: 10;
  }

  .weather-info .left-side:not(.icon) {
    width: 20%;
    font-size: 11pt;
    font-weight: 600;
    align-self: baseline;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon svg {
    width: 40px;
  }

  .weather-info .right-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .weather-info .right-side p:nth-child(2) {
    font-size: 9pt;
    margin: 0;
    padding: 0;
  }

  .weather-info .location span {
    font-size: 11pt;
    font-weight: 700;
    text-transform: uppercase;
  }

  .location {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .location svg {
    width: 14px;
    height: auto;
  }

  .temperature {
    font-size: 20pt;
    font-weight: 700;
    line-height: 30px;
  }

  .forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    padding: 10px 25px;
  }

  .forecast > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: lightslategray;
    font-size: 9pt;
  }

  .separator {
    width: 100%;
    height: 2px;
    background-color: rgb(233, 233, 233);
    border-radius: 1px;
  }`;

export default Card;
