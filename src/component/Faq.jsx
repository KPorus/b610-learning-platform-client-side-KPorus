import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "What is Node? How does Node work?",
            content: ` Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the server-side
            of the application. This way javascript is used on both frontend and
            backend. Node.js runs on chrome v8 engine which converts javascript
            code into machine code, it is highly scalable, lightweight, fast, and
            data-intensive..`,
        },
        {
            title: "*How does the private route work?",
            content:
                `Private Routes in React Router (also called Protected Routes) require
                a user being authorized to visit a route (read: page). So if a user is
                not authorized for a specific page, they cannot access it. The most
                common example is authentication in a React application where a user
                can only access the protected pages when they are authorized (which
                means in this case being authenticated).`,
        },
        {
            title: "How to use firebase",
            content: `Firebase is a mobile app platform with integrated, unified client libraries in various mobile programming languages. Firebase's different backend-as-a-service (BaaS) features help you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.

            To use the Firestore mobile/web client libraries and other Firebase features, add Firebase to your existing Google project.
            
           1. Add Firebase to your existing Google Cloud project:
            
            a.Log in to the Firebase console, then click Add project.
            b. Select your existing Google Cloud project from the dropdown menu.
            c. (Optional) Enable Google Analytics for your project, then follow the prompts to select or create a Google Analytics account.
            Click Add Firebase.
            `,
        },
        {
            title: "Cross-Origin Resource Sharing",
            content: <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
            that allows a server to indicate any origins (domain, scheme, or port)
            other than its own from which a browser should permit loading
            resources. CORS also relies on a mechanism by which browsers make a
            "preflight" request to the server hosting the cross-origin resource,
            in order to check that the server will permit the actual request.</p>,
        },
    ],
};

const styles = {
    bgColor: '#2A303C',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'grey',
    arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const FAQ = () => {
    return (
        <div className="mx-9 mb-96 mt-12  bg-slate-800">
        <Faq
            data={data}
            styles={styles}
            config={config}
        />
    </div>
    );
};

export default FAQ;