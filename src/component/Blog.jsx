import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className='text-5xl p-3 font-[Lato] font-bold text-gray-200 text-center'>
        BLOG
      </h1>
      <p className='text-2xl p-2 font-[Lato] font-medium text-gray-200 text-center'>
        Here is some blog for recent populer question. Enjoy your self. Happy
        learing.
      </p>
      <hr className='w-[50%] m-auto mb-3'></hr>

      <div className='sm:m-24 m-[3rem]'>
        <h1 className='text-3xl font-bold font-serif text-center text-white'>
          *Cross-Origin Resource Sharing
        </h1>
        <p className='text-gray-200 font-serif'>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request. An example
          of a cross-origin request: the front-end JavaScript code served from{" "}
          <span className='text-orange-600'> https://domain-a.com</span> uses
          XMLHttpRequest to make a request for{" "}
          <span className='text-orange-600'>
            https://domain-b.com/data.json.
          </span>
          For security reasons, browsers restrict cross-origin HTTP requests
          initiated from scripts. For example, XMLHttpRequest and the Fetch API
          follow the same-origin policy. This means that a web application using
          those APIs can only request resources from the same origin the
          application was loaded from unless the response from other origins
          includes the right CORS headers.{" "}
        </p>
        <img src='https://i.ibb.co/2jNFcG8/cors.png' alt='blog-1'></img>
      </div>

      <div className='sm:m-24 m-[3rem]'>
        <h1 className='text-3xl font-bold font-serif text-center text-white'>
          *Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className='text-gray-200 font-serif'>
          Most apps need to know the identity of a user. Knowing a user's
          identity allows an app to securely save user data in the cloud and
          provide the same personalized experience across all of the user's
          devices. Firebase Authentication provides backend services,
          easy-to-use SDKs, and ready-made UI libraries to authenticate users to
          your app. It supports authentication using passwords, phone numbers,
          popular federated identity providers like Google, Facebook and
          Twitter, and more.
        </p>
        <div className='flex justify-around'>
          <img src='https://i.ibb.co/BzHjJxV/firebase11.jpg' alt='blog-2'></img>
        </div>
        <p className='text-gray-200 font-serif'>
          Usually, authentication by a server entails the use of a user name and
          password.{" "}
          <span className='text-orange-600'>
            Auth0, MongoDB, Passport, Okta,
          </span>{" "}
          and Firebase are the most popular alternatives and competitors to
          Firebase Authentication.
        </p>
      </div>

      <div className='sm:m-24 m-[3rem]'>
        <h1 className='text-3xl font-bold font-serif text-center text-white'>
          *How does the private route work?
        </h1>
        <p className='text-gray-200 font-serif'>
          Private Routes in React Router (also called Protected Routes) require
          a user being authorized to visit a route (read: page). So if a user is
          not authorized for a specific page, they cannot access it. The most
          common example is authentication in a React application where a user
          can only access the protected pages when they are authorized (which
          means in this case being authenticated). Authorization goes beyond
          authentication though. For example, a user can also have roles and
          permissions which give a user access to specific areas of the
          application.
        </p>
      </div>

      <div className='sm:m-24 m-[3rem]'>
        <h1 className='text-3xl font-bold font-serif text-center text-white'>
          *What is Node? How does Node work?
        </h1>
        <p className='text-gray-200 font-serif'>
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive. Working of Node.js: Node.js accepts the request from
          the clients and sends the response, while working with the request
          node.js handles them with a single thread. To operate I/O operations
          or requests node.js use the concept of threads. Thread is a sequence
          of instructions that the server needs to perform. It runs parallel on
          the server to provide the information to multiple clients. Node.js is
          an event loop single-threaded language. It can handle concurrent
          requests with a single thread without blocking it for one request.
          <ul>
            <li>1.<span className="text-orange-600">Asynchronous</span></li>
            <li>2.<span className="text-orange-600">Non-blocking I/O</span></li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blog;
