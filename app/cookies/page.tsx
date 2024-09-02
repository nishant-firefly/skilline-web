import { Article, Breadcrumb } from '@/components/core'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Breadcrumb
                data={[
                    {
                        label: "Home",
                        link: "/",
                        isActive: false,
                    },
                    {
                        label: "cookies",
                        link: "/Cookies",
                        isActive: true,
                    },
                ]}
            >
                Cookies
            </Breadcrumb>
            <div>
                <Article>
                    <p>Skilline uses cookies to enhance your experience on our website. This Cookies Policy explains what cookies are, how we use them, and your choices regarding their usage.</p>
                    <h3>1. What Are Cookies?</h3>
                    <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your actions and preferences over a period of time.</p>
                    <h3>2. How We Use Cookies</h3>
                    <ul>
                        <li><strong>Essential Cookies:</strong> These are necessary for the operation of our website. They enable you to navigate and use its features.</li>
                        <li><strong>Performance Cookies:</strong> These collect information about how visitors use our website, allowing us to improve its performance.</li>
                        <li><strong>Functional Cookies:</strong> These remember your preferences and choices, enhancing your user experience.</li>
                        <li><strong>Advertising Cookies:</strong> These cookies are used to deliver relevant advertisements to you and measure their effectiveness.</li>
                    </ul>
                    <h3>3. Managing Cookies</h3>
                    <p>You can manage your cookie preferences through your browser settings. Most browsers allow you to:</p>
                    <ul>
                        <li>View and delete cookies.</li>
                        <li>Block third-party cookies.</li>
                        <li>Block all cookies from specific sites.</li>
                        <li>Block all cookies from all sites.</li>
                    </ul>
                    <p>Please note that disabling cookies may affect the functionality of our website and your ability to access certain features.</p>
                    <h3>4. Changes to This Cookies Policy</h3>
                    <p>We may update our Cookies Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Cookies Policy periodically.</p>
                    <h3>5. Contact Us</h3>
                    <p>If you have any questions about this Cookies Policy, please contact us at:</p>
                    <ul>
                        <li><strong>Email:</strong> <Link href="mailto:info@skilline.ai">info@skilline.ai</Link></li>
                        <li><strong>Address:</strong>594, Road No. 34, Survey Of India Ayyappa Society, Chanda Naik Nagar, Madhapur, Hyderabad, Telangana 500081</li>
                    </ul>
                </Article>
            </div>
        </div>
    )
}

export default Page
