import React from "react";
import { Container } from "react-bootstrap";
import "./Blogs.css"


const Blogs = () => {
  return (
   
      <Container>
      <div className="w-75 py-5">
        <div className="qus">
          <h4> 
           1. What is the difference between authorization and authentication?
          </h4>
          <p>
            Authentication is a process to identify someone. And who can access
            data from a specific file. Authentication identifies the user. It
            verifies the information by pin number, password and more.
            Authentication is a good identity and access management process. It
            is visible and changeable to the user. And authorization not visible
            and not changeable to the user. It always comes after
            authentication. Authorization decides who can access data. And
            authorization works by setting and it is maintained by organisation
          </p>
        </div>
        <div className="qus">
          <h4>
           2. Why are you using firebase? And what other option to implement
            authentication?
          </h4>
          <p>
            Firebase manages all data real-time in the database. Firebase is
            very fast and it can manage user data perfectly. Firebase is very
            easy. There are only a few codes for all implementations. Firebase
            provided few specific functions for authentication. Firebase
            implements many other options for authentication for example,
            google, github, facebook, twitter.
          </p>
        </div>
        <div className="qus">
          <h4>
           3. What other service does firebase provide other than authentication?
          </h4>
          <p>
            Without firebase there have more companies they provide the
            authentication service Parse Open Source Backend Platform, Kuzzle
            Backend for web, hybrid, or native mobile apps and IoT project,
            Pubnub Real-time APIs and Global Messaging, Kumulos App Performance
            Management, Game Sparks Game Backend Platform, Hoodie Generic
            backend with a client API for Offline First applications, Appwrite
            Open-Source backend for Flutter developers, Deployd Simple core
            library, with a modular API for your application, NHost Accelerates
            development and provides full control, Amplify JS Open-source
            Javascript framework, Heroku Platform as a service backed by
            Salesfor,
          </p>
        </div>
      </div>
    </Container>
  
  );
};

export default Blogs;
