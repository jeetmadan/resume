import React , { Component } from 'react';
import {Cell} from "react-mdl";
import logo from "./circle-cropped.png";
class Aboutme extends Component
{
    render()
    {
        return(

            <div>
                <div style={{textAlign: 'left'}}>
                    <img
                        src={logo}
                        alt="avatar"
                        style={{height: '200px'}}
                    />
                </div>
                <h2 style={{paddingleft: '1em'}}>About me</h2>
                <Cell className="resume-right-col" col={12} ><h5 align="justify">Hello, I’m  Madanjeet Kumar. I’m a Software  developer in OYO ROOMS living in Bangalore, India. I am a fan of music, travel, and innovation.
                So who am I really? My all time favourite question.

                I am the only person in this entire world I would love to know thoroughly. I believe life is too short to be serious all the time, so if you cannot laugh at yourself... call me.. I'll do it for you :p.

                I don't hate anything or anybody. I passionately learn new things until I master them. Very light hearted and sportive person. Im one of those people who is a brilliant listener but at the end of the day does things finally what please my heart and feels right to me anyways. According to me... if nobody is against you, then you are doing something very boring.

                There is nothing called good or bad in this world (according to me)... its just a perspective... things I love doing and are good according to my like minded people are not acceptable by other un like minded people(if that is what they are called).

                I like bright colours(Yellow of them all) . Im not at all filmy or dramatic. I like getting straight to the point. I either have a fight or be awesomely cool with you. Hanging in between is not my thing.

                I love rain but from the inside of the house and a glass window to have a view of it and a cup of hot coffee in my hands.

                I love speed.. not racing.

                I love fantasy.. I always dream about the powers and out of the world things that would help me make a situation easy.

                I have been doing my Btech in Computer Science (ee hhee) from Thapar Institute of Engineering and Technology.

                    I love giving more than my best only if interested. I love learning new things and getting good at them.I am a technical person.As a technical person, I spend time understanding why something works. Once I know why it works, I can understand how it works. Once I know how it works, I no longer need training in how to use it.That's all about me.</h5></Cell></div>
        )

    }
}
export default  Aboutme;