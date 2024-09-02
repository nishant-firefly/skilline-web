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
                        label: "Privacy",
                        link: "/privacy",
                        isActive: true,
                    },
                ]}
            >
                Privacy
            </Breadcrumb>
            <div>
                <Article>
                    <p>Skilline values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.</p>
                    <h3>1. Information We Collect</h3>
                    <ul>
                        <li><strong>Personal Information:</strong> We may collect personal details such as your name, email address, phone number, and other information you provide when you sign up for our services or contact us.</li>
                        <li><strong>Usage Data:</strong> We automatically collect information about your interactions with our website, including IP address, browser type, pages visited, and the time and date of your visit.</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to track activity on our website and store certain information. Cookies help us enhance your experience by remembering your preferences and visits.</li>
                    </ul>
                    <h3>2. How We Use Your Information</h3>
                    <ul>
                        <li><strong>To Provide and Maintain Services:</strong> We use your information to deliver and manage our services, including user accounts and customer support.</li>
                        <li><strong>To Improve Our Services:</strong> We analyze usage data to improve our website functionality, content, and user experience.</li>
                        <li><strong>To Communicate With You:</strong> We may send you updates, promotional materials, and other information related to our services. You can opt-out of receiving these communications at any time.</li>
                        <li><strong>For Compliance and Legal Obligations:</strong> We may use your data to comply with legal obligations, resolve disputes, and enforce our policies.</li>
                    </ul>
                    <h3>3. Sharing Your Information</h3>
                    <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except:</p>
                    <ul>
                        <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you.</li>
                        <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                    </ul>
                    <h3>4. Data Security</h3>
                    <p>We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
                    <h3>5. Your Rights</h3>
                    <ul>
                        <li><strong>Access and Correction:</strong> You have the right to access and correct your personal information held by us.</li>
                        <li><strong>Deletion:</strong> You may request the deletion of your personal information, subject to certain legal requirements.</li>
                        <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional communications from us by following the unsubscribe link or instructions provided in our emails.</li>
                    </ul>
                    <h3>6. Changes to This Privacy Policy</h3>
                    <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.</p>
                    <h3>7. Contact Us</h3>
                    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
