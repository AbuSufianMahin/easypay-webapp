import React from 'react'
import FAQLottie from './FAQLottie'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function FAQSection() {
    const queries = [
        {
            id: 1,
            question: "How do I set up my EasyPay account for the first time?",
            answer: "To set up your EasyPay account, download the app, sign up with your email or phone number, verify your identity, and you’re ready to start making transactions."
        },
        {
            id: 2,
            question: "How long does a transaction take?",
            answer: "Most transactions are instant. However, in rare cases it may take up to 24 hours depending on the banks involved."
        },
        {
            id: 3,
            question: "Can I request a refund?",
            answer: "Yes, you can request a refund by contacting support via the 'Help & Support' section. Refunds are usually processed within 3-5 business days."
        },
        {
            id: 4,
            question: "Is EasyPay safe to use?",
            answer: "Yes, EasyPay uses advanced encryption and multi-factor authentication to ensure all transactions are secure and your personal data is protected."
        },
        {
            id: 5,
            question: "Can I use EasyPay internationally?",
            answer: "Yes, EasyPay supports international payments to selected countries. Make sure your account is verified and your card supports international transactions."
        },
        {
            id: 6,
            question: "How do I contact EasyPay support?",
            answer: "You can contact EasyPay support through the 'Help & Support' section in the app or by emailing support@easypay.com. Our team responds within 24 hours."
        }
    ];

    return (
        <section className='max-w-7xl mx-auto'>
            <div className='mx-4 md:mx-6 2xl:mx-0 flex flex-col lg:flex-row items-center gap-5 pb-10 mb-10 border-b lg:border-0'>
                <div>
                    <FAQLottie />
                </div>
                <div className='flex-1'>
                    <Accordion type="single" collapsible>
                        {
                            queries.map((query, index) =>
                                <AccordionItem value={`item-${index + 1}`}>
                                    <AccordionTrigger className='md:text-lg'>{query.question}</AccordionTrigger>
                                    <AccordionContent>
                                        {query.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default FAQSection