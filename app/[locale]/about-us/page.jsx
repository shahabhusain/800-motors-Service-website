import About from '@/app/components/aboutPage/About'
import Faqs from '@/app/components/aboutPage/Faqs'
import Hero from '@/app/components/aboutPage/Hero'
import Leaders from '@/app/components/aboutPage/Leaders'
import Services from '@/app/components/aboutPage/Services'
import Team from '@/app/components/aboutPage/Team'
import CompleteAutoRepair from '@/app/components/homePage/CompleteAutoRepair'
import Testimonial from '@/app/components/homePage/Testimonial'
import React from 'react'
import bg from '@/public/herobg.jpg'

export async function generateMetadata() {
  return {
    title: "About Us | 800 Motor Guru Dubai",
    description: "Learn about 800 Motor Guru, the leading auto repair service in Dubai. Our story, mission, and commitment to quality car care since 2022.",
    alternates: {
      canonical: "https://800motorguru.ae/about-us",
    },
  };
}

const AboutUs = () => {
     const faqs = [
    {
        question:"Who is the founder of 800 Motor Guru?",
        answer:"Saminjan founded 800 Motor Guru. He has eight years of experience in the automotive industry. Samin Jan leads the team, sets service standards, and ensures transparent pricing and high-quality vehicle maintenance across Dubai."
    },
    {
        question:"When was 800 Motor Guru founded? ",
        answer:"800 Motor Guru was founded on Monday, 23rd March 2022."
    },
    {
        question:"How many employees are currently working at 800 Motor Guru?",
        answer:"800 Motor Guru has over 100 employees. The team includes 70 skilled technicians for car engine repair, diagnostics, AC, tires, and suspension, 20 support staff for customer service, appointments, and parts management, and 10 management members for workshop operations, service quality, and business development to expand automotive services. "
    },
    {
        question:"How to contact 800 Motor Guru? ",
        answer:"You can contact 800 Motor Guru through multiple channels. Call the landline at 80064878 or WhatsApp +971 800 64878. Email the team at info@800motorguru.com. You can also visit their Instagram 800 Motor Guru Official or Facebook 800 Motor Guru Official. Find the workshop location on Google Maps here"
    },
    {
        question:"Does 800 Motor Guru provide customer support through email? ",
        answer:"Yes, 800 Motor Guru provides customer support at info@800motorguru.com. You can send any questions, service requests, or custom inquiries to this address, and the support team will respond promptly to assist with your vehicle needs across Dubai."
    },


      {
        question:"Where is the main workshop of 800 Motor Guru located in Dubai? ",
        answer:"The main workshop of 800 Motor Guru is located on Al Marabea’ St, Al Quoz Industrial Area 3, Dubai"
    },
      {
        question:"Can I request a service appointment online with 800 Motor Guru? ",
        answer:"Yes, you can request a service appointment online with the 800 Motor Guru. Customers can fill out the service request form link https://800motorguru.com/contact/  on the website by providing their name, phone number, email, vehicle details, preferred service, location in Dubai, and a brief description of the issue. After you submit the form, the 800 Motor Guru team will reach out to confirm the appointment and arrange the service at a time that works for you."
    },
      {
        question:"What services does 800 Motor Guru offer?",
        answer:"800 Motor Guru offers a full range of automotive services in Dubai. The company provides 24/7 roadside assistance, such as battery replacement, jump start, and fuel delivery. The workshop handles mechanical services such as engine repair, diagnostics, oil change, and auto tuning. The team delivers maintenance services such as tire replacement, wheel alignment, balancing, and AC repair. The company also performs car body services such as denting, painting, and scratch repair. The service scope covers inspection, repair, and preventive maintenance for all major vehicle systems."
    },
      {
        question:"Does 800 Motor Guru provide services for all car brands?",
        answer:"Yes, 800 Motor Guru provides services for all car brands in Dubai. The workshop handles Japanese brands such as Toyota, Honda, Nissan, Mitsubishi, and Mazda. The team services German brands such as BMW, Mercedes-Benz, Audi, Porsche, and Volkswagen. The workshop repairs American brands such as Ford, Chevrolet, Jeep, and Dodge. The team supports British brands such as Land Rover, Range Rover, Jaguar, and Mini. The workshop also covers French brands such as Peugeot, Renault, and Citroën, along with Korean brands such as Hyundai and Kia, and other international vehicle models."
    },
      {
        question:"Why is 800 Motor Guru the best auto repair company in Dubai?",
        answer:"800 Motor Guru is the best auto repair company in Dubai due to its 04 years of industry experience and certified technicians. The company maintains transparent pricing and quick responses and has over 2,000 positive Google reviews, with an average rating above 4.5."
    },
   ]
  return (
    <div>
      <Hero about="About 800 Motor Guru Trusted and Affordable Car Repair Services in Dubai" desc="800 Motor Guru is a trusted and skilled car repair company in Dubai. 800 Motor Guru provides all automotive services in Dubai, such as car engine repair, diagnostics, oil changes, car AC repair, auto tuning, denting and painting, and electrical work. 800 Motor Guru also offers tire service, car battery replacement, jump-starts, fuel delivery, brake and suspension repair, vehicle inspections, and 24/7 roadside assistance for all types of vehicles. Car owners trust 800 Motor Guru to keep their vehicles in excellent condition. 800 Motor Guru combines 04 years of experience with modern tools, such as 5 computerized diagnostic scanners, 3 wheel alignment machines, and 4 engine analyzers, to deliver precise results. 800 Motor Guru earned 4,500 customer reviews across online platforms such as Google, Facebook, and Instagram. 800 Motor Guru operates from Warehouse No. 9, 22nd Street, Al Marabea Street, Al Quoz Industrial Area 3, Dubai, with easy access across the city. 
" bg={bg} />
      <About />
      <Services />
      <CompleteAutoRepair />
      <Leaders />
      {/* <Team /> */}
      <Testimonial />
      <Faqs faqs={faqs} />
    </div>
  )
}

export default AboutUs
