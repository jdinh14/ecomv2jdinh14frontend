import React from "react";
import EmailForm from "./Form";
import UnsubForm
 from "./Unsub";
const Assistance = () => {
    return (
        <main id="terms">
            <h1>Contact Us</h1>
            <p>
                For access to over a hundred chemical suppliers, plus our own line of manufactured chemicals -
                contact Reagents today. Orders may be placed on the web, by phone, or mail through our headquarters:
            </p>
            <div>
                <ul id="nodec">
                    <li>P.O. Box 788</li>
                    <li>Belmont, NC 28102</li>
                    <li>1-800-732-8484﻿</li>
                    <li>
                        <a href="mailto:orders@tcpanalytical.com" className="emailcolor">
                            orders@tcpanalytical.com
                        </a>
                    </li>
                </ul>
            </div>

            <h1>Technical Assistance</h1>
            <p>
                Our chemists are available to provide technical assistance. Please call 1-800-732-8484﻿ or email{" "}
                <a href="mailto:orders@tcpanalytical.com" className="emailcolor">
                    orders@tcpanalytical.com
                </a>{" "}
                and ask for technical service.
            </p>
            <h1>Newsletter Subscription</h1>
            <p>Input your e-mail to subscribe to our newsletter, your email will be put into our secure database.</p>
            <div className="formcontainer">
            
            <EmailForm />
            
            <UnsubForm />
            </div>
        </main>
    );
};

export default Assistance;
