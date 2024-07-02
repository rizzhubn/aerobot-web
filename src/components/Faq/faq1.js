import React, {useState} from 'react';
import FAQ from './FAQ';

const Heading = ({text}) =>{
    return (
        <div className='max-w-screen-xl text-[#216FB9] text-lg lg:text-2xl font-semibold mx-auto flex justify-center items-center bg-[#80CAFF12] py-4 capitalize'>
            {text}
        </div>
    )
};

const Faq1 = () => {
    const [faqs,setFaqs] = useState([
        {question : "Where Can I Watch ?", answer:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.", open : true},
        {question : "Where Can I Watch ?", answer:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",open : false},
        {question : "Where Can I Watch ?", answer:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",open : false},
        {question : "Where Can I Watch ?", answer:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",open : false},
    ]);

const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };
    return (
        <>
            <Heading text={"FAQ'S"}/>
            <div className="max-w-screen-xl mx-auto flex justify-center items-center mt-4">
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faq1