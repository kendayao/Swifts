import React from 'react'
import './Privacy.css'

function Privacy() {
    return (
        <div className='privacy'>
            <div className='privacy__logo'>
                <img src='../../logo/main-swifts-logo.png' alt='swifts logo'/>
            </div>

            <div className='privacy__body'>
                <div className='privacy__header'>
                    <p className='privacy__title'>Privacy Policy</p>
                </div>

                <div className='privacy__paragraph'>
                    <p className='privacy__heading'>
                        Overview
                    </p>
                    <p className='privacy__subheading'>SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?</p>
                    <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address.</p>
                    <p>When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.</p>
                    <p>Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
                    <p className='privacy__subheading'>SECTION 2 - CONSENT</p>
                    <p>How do you get my consent?</p>
                    <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only.</p>
                    <p>If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
                    <p>How do I withdraw my consent?</p>
                    <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at support@swifts.com or mailing us at: Swifts 452 Hamilton Steet, Los Angeles, CA 90021 </p>
                    <p className='privacy__subheading'>SECTION 3 - DISCLOSURE</p>
                    <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
                    <p className='privacy__subheading'>SECTION 4 - PAYMENT</p>
                    <p>If you choose a direct payment gateway to complete your purchase, then Swift your credit card data. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is deleted.</p>
                    <p>All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and Discover.</p>
                    <p>PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.</p>
                    <p className='privacy__subheading'>SECTION 5 - THIRD-PARTY SERVICES</p>
                    <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
                    <p>However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions.</p>
                    <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
                    <p>In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
                    <p className='privacy__subheading'>SECTION 6 - SECURITY</p>
                    <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.</p>
                    <p>If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</p>
                    <p className='privacy__subheading'>SECTION 7 - AGE OF CONSENT</p>
                    <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
                </div>
            </div>
        </div>
    )
}

export default Privacy
