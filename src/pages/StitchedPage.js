import React from 'react';

import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero';
import ImageBanner from '../components/ImageBanner';
import ImageBody from '../components/ImageBody';
import IntroSection from '../components/IntroSection';
import TextBlock from '../components/TextBlock';

import stitchedbg from '../assets/images/stitchedbg.png';
import stitchedinterview from '../assets/images/stitchedinterview.png';
import stitcheduser from '../assets/images/stitcheduser.png';
import stitchedmain from '../assets/images/stitchedmain.png';
import stitchediter1 from '../assets/images/stitchediter1.png';
import stitchediter2 from '../assets/images/stitchediter2.png';

function StitchedPage(props) {
    let newrole = <p>Researcher<br/>Primary UI designer</p>
    let background = <p>At Rice University, students are often bombarded by ongoing events. 
        This information overload makes it difficult to keep track of the events they actually care about.
        In a Design Thinking course, our group of four designed a web-browser plug-in as a solution.</p>
    return (
        <div>
            <Hero image={stitchedbg} title={props.title} subtitle={props.subtitle} text={props.text}/>
            <Container fluid={false}>
            <IntroSection background={background} role={newrole}/>
            <TextBlock 
                title="Understanding the Problem" 
                text="To begin, my partners and I interviewed over 10 students on campus to learn more
                about how events are spread across campus and the ways in which students typically keep track of events.">  
            </TextBlock>
            <ImageBanner image={stitchedinterview}/>
            <TextBlock 
                title="A Typical Student..." 
                text="From our interviews, we learned there were two types of students: those who used organizational tools
                to remember events and those who just 'keep it in their head'. We decided the former would benefit the greatest 
                from a solution for organizing all the campus events going on. These types of students, we called: Avid Planners.">  
            </TextBlock>
            <ImageBody image={stitcheduser} text="Students hear about campus events through various forms, such as social media platforms, email list
            servs, flyers and word of mouth.  We learned that some of the most popular forms were Facebook, email, and social groups. 
            Additionally, students use many different kinds of organizational tools, ranging from Google Calendar, note-taking apps, and hand-writing." 
                >
            </ImageBody>
            <TextBlock 
                title="How Might We..."
                text="help students keep track of all these sources in one organized place? Not only must students remember events they learn about 
                from all the various sources but also fit in important events with their existing hectic course schedule."/>
            <TextBlock  
                title="Introducing Stitched"
                text="Stitched is a web-browser plug-in that integrates event information from various places, such as
                Facebook, emails and Google Calendar. Using web browser cookies, Stitched enhances a student's event discovery by presenting a combined list
                of all possible events from social media, emails and their existing calendars, without having to individually visit
                each source. "/>
            <ImageBanner image={stitchedmain}/> 
            <TextBlock 
                title="But Wait..."
                text="During our first iteration, we initially thought students wanted a CENTRALIZED place to see their events. However, testing our prototype to 10 more students revealed
                that people already had existing organizational tools that they were attached to- primarily Google Calendar. They did not want
                to adopt a completely new platform but needed a way to transfer events into their preferred applications."/>
            <ImageBanner image={stitchediter1}/>
            <TextBlock 
                text="We modified our prototype to transfer these found events to personal calendars, such as Google calendar
                rather than creating an entirely separate calendar."/>
            <TextBlock  
                title="Round Two of Testing"
                text="In our second iteration, we presented our changes to another 10 students on campus.
                We learned that users also wanted the option to decline events and see these declined events in case they
                change their mind. From these insights, we decided to create an 'Archive' option, where users can see all archived
                events through the plug-in. By doing so, relevant events are easily separated from unimportant ones."/>
            <ImageBanner style={{maxHeight: "200px"}} image={stitchediter2}/>
            <TextBlock 
                title="Impact"
                text="This web browser plug-in allows students to browse any kind of event from one place. As students who rely on their laptops
                to complete assignments, check emails, browse the web, they are able to simultaneously discover upcoming events no matter what they are doing. 
                In addition, this plug-in serves as an integrative tool that elevates their existing organizational platforms, such as Google Calendar."/>
            <TextBlock  
                title="Key Learnings"
                text="From this challenge, we learned how important it is to SHOW not TELL during testing. It was crucial to
                let the users play with the prototype without guiding them in any way. This helped reveal what the product should be and 
                how the interactions should work."
                text2="Additionally, we saw how there was a preference for tools to INTEGRATE with existing solutions, rather
                than replace them."/>
        </Container>
        </div>
    );
}

export default StitchedPage;