---
path: "/2019-12-28-poc2"
date: "29-12-2019"
author: Bruno de Paula
title: "Meu Segundo Post"
description: "Testando blog no gatsby - post 2"
keywords: "teste3, teste4"
cover: "post2.jpg"
---

# Bem Vindo

**Bem vindos**, este é meu segundo post.

Misty II is a fully-loaded robot that stands 14” tall and can see, smell, talk, touch, move and emote right out-of-the-box. Anyone who knows Javascript or C# can bring their code to life on its platform and this openness has made it possibly to build a loyal fan base among developers who freely contribute to its skill repositories.

Ian Bernstein, Misty Robotics founder and head of product, said in a recent statement that he believes the “key to unlocking the future of robots” lies in creating open platforms for the more than 23 million software developers worldwide who are not roboticists.

Misty Robotics "May The Fourth Be With You" Celebration with Misty II, BB-8 and R2D2

Misty Robotics
In 2015, he made it big with Sphero, the toy company he co-founded with Adam Wilson that made the app-controlled BB-8 droid from Star Wars Episode VII - The Force Awakens.

By 2017, Bernstein was ready to spin off Misty Robotics and revealed Misty I at CES 2018. He then raised $22.5 million in a Series A from Venrock’s David Pakman and Foundry Group’s Brad Feld, and launched a Kickstarter for 1500 Misty II robots packed with facial and voice recognition, capacitive touch, spatial mapping, path planning, environmental sensors, and more. In September, the Kickstarter units shipped and on October 30, Misty II began selling to the public for $2,899-3,199.

Misty Robotics Head of Community Ben Edwards, with me and Misty | Martine Paris

Martine Paris
On December 3, they invited me to attend a development meetup at Microsoft Reactor in San Francisco for the release of the Misty II .NET SDK. There I had a chance to catch up with Head of Community Ben Edwards where he demoed Misty’s new capabilities for me and shared plans for CES and beyond. What follows is an edited transcript of our discussion.

What is Misty II packed with?

Misty II is a platform robot designed with dozens of different sensors and capabilities. From the top down she’s got capacitive touch sensors both on her head, under her chin and back of her neck which can turn 3 degrees of freedom. She’s got a microphone array so she can know where sound is coming from. For her visual elements she can see things with her 3D camera that can make a 3D pixel map of her environment. She also has a 4K camera, two Qualcomm chips, and a wide angle fisheye lens. She’s got a flashlight to illuminate the scene and LEDs to show different statuses to let people know if she’s recording. She’s got speakers and a screen for emoting which people can also use to display images on. She sounds more like R2D2 than C3PO but can be programmed to speak like a human and in many languages. She has CAD software for printing 3D parts (on home maker bot or sites like SparkFun) and she supports Arduino and Raspberry Pi. She also has a trailer hitch for pulling things like a Radio Flyer wagon fully of Slurpees.

Misty is very expressive. She’ll let you know that she doesn’t like to be touched on her head. Why?

We want to encourage developers to define her personality. Her form factor entices people to interact with her. For learning and care scenarios, people need to have empathy for the robot in order to identify with it.

What’s exciting about the new .NET SDK?

The .NET SDK is unique from our older JavaScript SDK in that the robot’s underlying technologies are aligned with Microsoft. Windows IoT Core is one of the operating systems within this robot and the .NET SDK is much closer to the native way the robot is programmed.

In addition to Javascript and C#, are there any other languages you might add?

If we add another language it might be Python. People have already done a Python wrapper where they can write with Python syntax and it gets converted to code Misty can use.

When she first launched, Misty was described as a personal robot that one day would cook and clean the house. How close are you to that goal?

We’re two years into our ten year plan to get to Rosie from The Jetsons, and we’re taking an iterative approach. First with Misty as a platform robot that our developer community can create skills for to turn her into the ultimate personal robot. that will be multipurpose and mobile. We don’t believe that robots will continue to be single purpose robots, e.g. one that only does vacuuming.

What can Misty do right now?

She has facial recognition so she can learn your face and know who you are. She has a keyword, “Hey Misty” that can be turned on. She navigates with simultaneous localization and mapping (SLAM) which means as she roams around with her sensor arrays, she creates a 3D map of her environment where she knows where things are. She has a hazard system that keeps her from bumping into things and falling off tables. And she’s a great sensor array for AI algorithms.

Can she project Netflix shows onto the ceiling?

Sure she can. One developer printed 3D projector arms for this.

Can she stream a party?

Yes, she can be programmed to roam around a party, recognize guests by name, greet them, get them a drink, take pictures, and ask them for permission to send photos to the party host.

What can’t she do yet?

Right now she can’t do sentiment analysis where she looks at you and says, “You seem sad” but she could if a developer connected her to third party APIs for AI, like Microsoft Azure Cognitive Services.

Who are your competitors?

Maybe TurtleBot. I think our robotics platform play is unique. We’re the only one that’s developer first. A lot of robots are addressing the consumer market and it seems too early for that. We don’t think people will buy fully featured robots that are not toys and put them in their homes and offices right now. We think they need to have a bit more skill.

How many skills does Misty have right now?

There are about 100 skills posted in our community forums and our GitHub repository. In time, we expect to have a vast marketplace much like an app store.

What is your community most interested in developing?

One area we’re starting to see critical mass around is eldercare. Here Misty roams around and monitors situations, sends alerts if someone is not where they’re supposed to be, reminds someone to take their medication. There are actually a dozen different firms working with Misty on eldercare right now, several in Europe. Other interesting developer projects are featured our Misty Heroes Hall of Fame.

Are there Misty II Hackathons?

Yes, we have hackathon all across the country. There’s an airline doing their own internal hackathon using Misty and we’re very active on campuses including Carnegie Mellon, UCLA, UC San Diego, Tufts, Purdue, Vanderbilt, Denver University, University of Colorado, University of Wisconsin, Ontario Tech, and Polytechnic University of Yucatan. Libraries as well. Palo Alto Library is doing interesting things with Python and Misty.

What skills are high on your wishlist?

Getting to a place where Misty is truly autonomous, running skills on her own and choosing skills which to run based on criteria she’s taking in from her sensors. That’s when we’re going to start to see Misty doing some really cool things and learning like last time I hit my head when I tried to go under the table, I’m not going to do that again, I’m going to go around. Or last time the dog annoyed me but when I made this sound it ran away.

Do you ever offer prizes for skills on your wishlist?

We have missions that we put out every three weeks and offer small prizes like gift cards but we’re starting to look at mega missions for the community to build bigger things which will offer much larger prizes.

How are developers monetizing?

We’ve seen developers package skill sets when deploying a robot for a monthly subscription fee, like in home care scenarios.

What are you hoping to get out of CES?

We’ll be demoing the new eldercare skills in a suite at the Venetian. Our goal is to let developers know that they have an option to code on a robot.

Any thoughts on Misty III?

The plan is to keep iterating and hopefully get the price under $1,000.

This conversation has been edited and condensed for clarity.

Espero que goste!
