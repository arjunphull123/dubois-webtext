document.addEventListener('DOMContentLoaded', (event) => {
    const runningHead = document.querySelector('.running-head');
    const titleSection = document.querySelector('.title-section');
    const toggleVisibility = () => {
      const titleRect = titleSection.getBoundingClientRect();
      if (titleRect.bottom < 160) {
        runningHead.classList.add('visible');
      } else {
        runningHead.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', toggleVisibility);
  });

document.addEventListener('DOMContentLoaded', function() {
    // Select all chevron SVG elements
    const chevrons = document.querySelectorAll('.chevron');

    // Function to toggle visibility and rotate chevron
    function toggleSection(event) {
        const chevron = event.currentTarget;
        const subsectionBody = chevron.parentElement.nextElementSibling;
        const subsection = subsectionBody.parentElement

        // Toggle a class for rotating the chevron
        chevron.style.transform = chevron.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';

        // Toggle the 'expanded' class for the adjacent section body
        subsectionBody.classList.toggle('expanded');
        subsection.classList.toggle('expanded')
    }

    // Add click event listeners to each chevron
    chevrons.forEach(chevron => {
        chevron.addEventListener('click', toggleSection);
    });

    const tabs = document.querySelectorAll('.tab')

    function activateTab() {
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      this.classList.add('active')
      switchContent(this.id)
    }

    function switchContent(id) {

      const [vizURL, author, inspoURL, inspoCaption, inspoText, purposeText, instructionsText, methodologyText] = vizRefs[id];

      console.log(instructionsText)

      document.querySelector('#viz-embed').src = vizURL
      document.querySelector('#author').innerHTML = "Created by " + author
      document.querySelector('#newtab').href = vizURL
      document.querySelector('#inspo-embed').src = inspoURL
      document.querySelector('#inspo-caption').innerHTML = inspoCaption
      document.querySelector('#inspo').innerHTML = inspoText
      document.querySelector('#purpose').innerHTML = purposeText
      document.querySelector('#instructions').innerHTML = instructionsText
      document.querySelector('#methodology-text').innerHTML = methodologyText
    }

    tabs.forEach(tab => {
      tab.addEventListener('click', activateTab)
    })
});

// Data dump for rotating visualization sections:
// [viz_URL, author, inspo_embed, inspo-caption, inspo-text, 
//           purpose-text, instructions, methodology-text]
const vizRefs = {
  'blackSpace':  ['https://dubois-black-space.netlify.app/',
                  'Arjun Phull',
                  'https://www.youtube.com/embed/erZ-Q_Doluw?si=VbRScsZRYV4P0jiK',
                  'Du Bois visualized demographics among Black Philadelphians in engaging and intuitive ways.',
                  "Prior to his contributions to the Exposition des Negres d'Amérique in 1900, W.E.B. Du Bois conducted the first sociological case study of an American urban community in his 1899 book, The Philadelphia Negro: A Social Study. As highlighted by Aldon Morris, “the achievement of The Philadelphia Negro was that it was steeped in empirical data with charts and graphs, which enabled Du Bois to chronicle and analyze the experience of Black Philadelphians at the turn of the twentieth century.” In <i>Death Rate of Philadelphia by Age Periods, For 1890</i>, the viewer experiences how Du Bois's persistent use of data visualization highlights the inequities between life expectancy between Black and white citizens of Philadelphia during this time through a simple set of bar graphs. The 3D data visualization highlights how, in 2023, Black people still had a shorter life expectancy in comparison to white people and fared worse than whites across the majority of 32 examined measures of health according to the Kaiser Family Foundation. Between 2019 and 2020, the life expectancy for all races/ethnicities declined. However, Black people saw a decrease from 74.7 to 71.8 years.",
                  'PURPOSE FOR Black Space and the Environment.',
                  'INSTRUCTIONS for Black Space',
                  'METHODOLOGY FOR Black Space and the Environment'],

  'blackLiterature': ['https://dubois-black-literature.netlify.app/',
                      'Arjun Phull',
                      'https://www.youtube.com/embed/erZ-Q_Doluw?si=VbRScsZRYV4P0jiK',
                      'Need a video for Literature!',
                      "Not sure which video or paragraph goes with this visualization.",
                      'Add some text here relating to the purpose for Black Space and the Environment.',
                      'INSTRUCTIONS for Black Literature',
                      'We developed <i>The Blossoming of Black Literature</i> using a'],

  'healthIncome': ['https://health-income-distribution.netlify.app/',
                      'Anuj Gupta',
                      'https://www.youtube.com/embed/wnM5Xiyq07c?si=6DKWWgmnAkM3c1wz',
                      'Du Bois visualized the earning and spending habits of Black families in creative and engaging ways.',
                      "Although the most informationally dense graph Du Bois and his team created, Income and Expenditure of 150 Negro families in Atlanta, GA, USA still manages to be a visual feast. Du Bois uses concise typography, clear photographs, and bright colors to educate his audience while the various bar charts highlight the differing budgetary discretions for Black families along class lines. In 1900, a head of household made an average of $1125 per year and would have been considered “well-to-do” according to Du Bois. With inflation, that would only amount to $33,996.59. As seen in the 3D visualization, according to the U.S. Bureau of Labor Statistics, the 2019 median income seems like a significant improvement for Black heads of household at $44,000 until one considers the median income for comparative whites: $80,602. The median white American in their late fifties had $251,000 more wealth than the median Black American.",
                      'Add some text here relating to the purpose for Health and Income Across Race.',
                      'INSTRUCTIONS for Black Health Income',
                      'We developed <i>Health and Income Across Race</i> using a'],

  'homeownership': ['https://dubois-homeownership.netlify.app/',
                      'Arjun Phull',
                      'https://www.youtube.com/embed/erZ-Q_Doluw?si=VbRScsZRYV4P0jiK',
                      'Need a video for Homeownership!',
                      "Acres of land owned by Negroes in Georgia implements the color red and a simple bar graph to highlight the (mostly) steady increases in the amount of land owned by Black Georgians between 1874 and 1899. Interestingly, the highly legible graph shares an uncanny resemblance with the shape of Georgia. The obstacles facing Black Americans to buy land and rent or buy a home continued to hinder an entire race of people from the financial vehicle most Americans used to build generational wealth. The 1968 Fair Housing Act created more favorable conditions for Black Americans across the country by protecting us from discrimination during the home buying process. However, by 2019, Black homeownership had fallen to 40.6%, making the gap between white and Black ownership larger than in 1960.",
                      'Add some text here relating to the purpose for Homeownership.',
                      'INSTRUCTIONS for Homeownership',
                      'We developed <i>Homeownership Across Race</i> using a'],

  'familyDynamics': ['https://dubois-family-dynamics.netlify.app/',
                      'Duo Bao',
                      'https://www.youtube.com/embed/e0k0zdv8wiw?si=aEXl49EVMXo5WlHG',
                      'Du Bois visualized demographics among Black Philadelphians in engaging and intuitive ways.',
                      "The graph Conjugal condition of American Negroes According to age periods utilizes a gridded area chart and bar graph to colorfully illustrate the number of black American married, single, and widowed individuals across the country by age group. The bifurcated split in the graph visually demonstrates the statistical differences in the marital statuses of men versus women. They further differentiate through the use of color (red indicating marriage, blue for singles, and green for widowers.) Featured in Du Bois’s A Series of Statistical Charts Illustrating the Condition of the Descendants of Former African Slaves Now Resident in the United States of America data was sourced from all over the country and created specifically for the 1900 World's Fair. The team incorporated a bold typeface for each section diagonally placed for maximum readability for the audience. The martial statistics today differ drastically. In 1900, 30% of black women aged 20-24 were married compared to 23% today. By 25-30, 73% of black women entered into holy matrimony versus only 43% today. Across all races, the speed and frequency at which people are getting married have decreased. However, the rates are even lower for black Americans. As a result of lower marriage rates, rapid inflation, housing discrimination, and targeted mass incarceration, the odds continue to stack against black families. The most alarming recent data shows how black families are more likely to experience racial discrimination in the child welfare system. Nearly 10 percent of Black children will be removed from their parents and placed into foster care (double the rate of white children,) according to the Center for the Study of Social Policy. In the District of Columbia, Black children represented 88% of the children in welfare while Black families only made up 50% of the District's total population in 2018.",
                      'Add some text here relating to the purpose for Black Family Dynamics.',
                      'INSTRUCTIONS for Family Dynamics',
                      'We developed <i>Black Family Dynamics</i> using a'],

  'illiteracy': ['https://8th.io/3h7mn',
                      'Anuj Gupta',
                      'https://www.youtube.com/embed/PopfBH08AfI?si=9Ln02hmSno-BBRQh',
                      'Du Bois visualized the rapid decrease in illiteracy rates among Black Americans throughout the Reconstruction era.',
                      "The inspiration for my visualization titled Illiteracy Rates in the U.S. (1860-1979) comes from an atypical black and white bar diagram titled Illiteracy created by W.E.B. Du Bois. His visualization, which is visible in the YouTube video in this section, documents the rather rapid decrease in the number of Black Americans who could not read from Emancipation to the beginning of the 20th century. Just thirty years following the end of slavery, the literacy rate increased by 31.73%. Based on the previous data, Du Bois and his team estimated that black Americans would achieve 50% literacy by 1900 and represented this guess by incorporating question marks adjacent to the data. The realized data from the National Assessment of Adult Literacy determined the literacy rates for Black Americans actually fared better than their Atlanta University team imagined with 55.5% of Black people older than 14 years of age learning to read in 1900. As of 1979, less than 1.6% of Black Americans were believed to be illiterate. Despite this perceived progress, the U.S. Department of Education’s National Assessment of Educational Progress reported in 2019 that an astounding 85% of Black American students lack proficiency in reading skills. Additionally, 84% of these same students also struggle to show proficiency in math.",
                      "Data science is super powerful on its own. But when you mix three-dimensional (3D) animation and Augmented Reality (AR) into it its power increases exponentially that converts insights and patterns in the data into stories that can inspire people to take action in the world. The purpose of the 3D, AR data visualization Illiteracy Rates in the U.S. (1860-1979) is to help audiences understand the immense difficulties that African Americans have had to overcome illiteracy. In this visualization, you see a 3D bar graph that shows illiteracy rates in the US starting from 1870-1980s. This gives you a bird’s eye view of the entire data spread in one go. The data contains 39 bars (13 decades with 3 data points about racial differences in illiteracy rates each). Representing all of them in a single 2-d graph frame would’ve made for a very cluttered experience. The bird’s eye view provided in a 3D bar graph makes it easier for us to visualize bigger datasets in one frame. As the visualization shows, in the 1870s, White Americans had a low illiteracy rate of 11.5%, but African Americans who have historically been denied access to education in the US, started with a staggeringly high illiteracy rate of 79%. The visualization tries to emphasize how much more difficult their struggle to overcome these inequalities has been to overcome these inequities when compared to other racial groups in the US. Apart from its 3-D elements, the augmented reality functions add an additional potential in it. Using that functionality, you can project this visualization in your classrooms, or at any other setting. For example, it could be projected on public buildings or other social settings related to the world of education to make a rhetorical argument about the connections between literacy and race.",
                      '<p class="ss-text">There are multiple ways to interact with this visualization.</p> <p class="ss-text">On a computer (desktop or laptop):</p> <p class="ss-text indent">Live view: You can view it either in the frame above within this window itself, or by clicking on the link next to it to open the visualization in a new window. This live view will render the visualization through the 8th wall. Using your computer’s mouse or trackpad you can then zoom in or out into the visualization. By clicking the circular button at the bottom, you can also take a photo or video. </p> <p class="ss-text editor-note indent">Note for Editors: If you recommend, we can also attach a fly-by video that shows readers what our visualizations look like in case they aren’t able to run the visualizations live due to some technical issues. That might help make our webtext more sustainable in the long run.</p> <p class="ss-text">On a handheld device (tablet or mobile phone):</p> <p class="ss-text indent">To open it on your hand-held device, you can scan the QR code or go to the URL below:</p> <p class="ss-text indent">8th.io/3h7mn</p> <p class="ss-text indent">You will need to grant camera and microphone permissions to 8th Wall to view the visualization.</p> <p class="ss-text indent">The visualization should now be projected in your surroundings in your device’s camera view. Using this functionality, you can project this visualization in your classrooms, or at any other setting.</p> <p class="ss-text indent">Using two fingers, you can now rotate the visualization and zoom into or out of it.</p> <p class="ss-text indent">Using the camera button at the bottom, you can click photos or make videos with the visualization projected in your surroundings.</p>',
                      "I created this visualization using an app called 8th Wall which allows users to create AR experiences. This app has pre-made templates that can be customized even with a limited or no understanding of computer coding. Users who have some understanding of coding, especially in the language called Javascript, can create more sophisticated and customized visualizations. For this particular visualization, I used a Javascript library called “aframe” within 8th Wall, which is very helpful to create 3D visualizations. Using this library, I created box shapes for each data point in the dataset and then arranged them along the x, y, and z axes. The data was adapted from publicly available data about illiteracy rates in the US from the National Center for Education Statistics (1992). Then using built-in templates in the 8th Wall app, I added AR functionalities so that users can use phone or tablet devices to project this visualization in their environments. They can also click photos or videos of the visualization and share it on social media. Since my own coding literacy is developing, I was very thankful for the detailed documentation provided by the 8th wall developer community (8th wall Inc., 2022b; 8th wall Inc., 2022c). Additionally, taking inspiration from Eyman’s (2023) experiments with using OpenAI’s ChatGPT for web design, I also used ChatGPT to assist me with brainstorming coding ideas and with debugging the code that I had written. Any coding suggestions given by ChatGPT were reviewed closely by me and corrected for errors."
                    ],

  'incarceration': ['https://8th.io/j6r6e',
                      'Anuj Gupta',
                      'https://www.youtube.com/embed/0Zm0lqm0P6s?si=Cc1i_YJMXgeHeX8b',
                      'Du Bois visualized the convictions of over 3000 Black prisoners in unconventional, engaging ways.',
                      "The inspiration for my visualization titled Incarceration Across Race comes partially from Du Bois and his team’s analysis of the convictions of 3250 African American prisoners. Although their diagram (which is visible in the YouTube video linked in this section) is visually similar to a bar graph, it is actually more like an area chart in function. The slanted chart tells the viewer that the lion's share of convicted crimes committed by African Americans were against people (marked with the color brown) or property (marked with the color black). Curiously, Du Bois never compared the incarceration rates of Black Americans versus their white counterparts in a visualization, even though he did document the glaring differences between them in table formats in works like The Philadelphia Negro: A Social Study (Du Bois, 2007, p. 168). In our own times, such facts have become ever more entrenched and hard to ignore at the national level in the US. Through publicly available prison census data that we accessed, we learnt that despite only representing 13.43% of America’s national population, Black Americans make up 33.6% of the incarcerated population in the US (Zeng, 2022). On the other hand, while white Americans make up 76.3% of the national population, they represent only 49.4% of the prison population (Zeng, 2022). This means that in terms of representational ratios, for every 1% of African Americans in the national population, there are 2.5% in the prison population while for every 1% of white Americans in the national population, there are only 0.65% in the prison population. Black Americans are thus nearly 4 times more overrepresented in prisons compared to their white counterparts. In terms of the inspiration for the specific form of this visualization, I used the idea of face-filters that was popularized by platforms like Snapchat where people could project funny features like animal faces and make up on their faces while video chatting. While platforms like snapchat intend such features to afford light-hearted and humorous augmentation of everyday conversations, I wanted to see if similar features could be remixed for making rhetorical arguments.",
                      "Data is not really useful unless you integrate storytelling and interactivity into it. I’ve realized that we need to create experiences where people can interact and immerse themselves with the data which can then rhetorically inspire them to take action. This is a great space for STEM and humanities scholars to come together to create such experiences. In this visualization, my purpose was to create something that would help people to understand that statistics about social inequities are not just external, distant facts out there in the world, but that they are a part of us and often we are complicit in them. In this augmented reality (AR) visualization, you see two pie charts that get superimposed on users’ faces. The two pie charts consist of two types of populations in the US in 2021. The outer pie chart consists of the national population for different racial groups, while the inner pie chart consists of the prison population for those groups. Each colored ring in the two pie charts represents a particular racial group. Despite only representing 13.43% of America’s national population, Black Americans make up 33.6% of the incarcerated population in the US (Zeng, 2022). On the other hand, while white Americans make up 76.3% of the national population, they represent only 49.4% of the prison population (Zeng, 2022). This means that in terms of representational ratios, for every 1% of African Americans in the national population, there are 2.5% in the prison population while for every 1% of white Americans in the national population, there are only 0.65% in the prison population. Black Americans are thus nearly 4 times more overrepresented in prisons compared to their white counterparts. The specific form of this visualization seeks to serve three rhetorical purposes. First, by concatenating proportions of national and prison populations of different racial groups in the US in the form of concentric circles, it seeks to make the concept of representational ratios—which is an important concept in understanding how social inequities work—more accessible and comprehensible to the general population. By contrasting the sizes of the different rings in the pie charts for each racial group, users can make inferences about the data. Second, by projecting these pie charts directly onto users’ faces, the visualization seeks to drive home the point that these statistics are not out there in a distant world, but we are very much a part of them. Thirdly, by providing users with an ability to take photos and videos and circulate them on social media, the visualization provides affordances for such multimodal work to have a greater rhetorical velocity (Ridolfo and Devoss, 2009) that facilitates its circulation and adaptation across multiple social media contexts.",
                      '<p class="ss-text">There are multiple ways to interact with this visualization.</p> <p class="ss-text">On a computer (desktop or laptop):</p> <p class="ss-text indent">Live view: You can view it either in the frame above within this window itself, or by clicking on the link next to it to open the visualization in a new window. You will need to grant camera and microphone permissions to the 8th Wall app to view the visualization. This live view will render the visualization through the 8th Wall app. Using your computer’s mouse or trackpad you can then zoom in or out into the visualization. By clicking the circular button at the bottom, you can also take a photo or video and share it on social media. </p> <p class="ss-text editor-note indent">Note for Editors: If you recommend, we can also attach a fly-by video that shows readers what our visualizations look like in case they aren’t able to run the visualizations live due to some technical issues. That might help make our webtext more sustainable in the long run.</p> <p class="ss-text">On a handheld device (tablet or mobile phone):</p> <p class="ss-text indent">To open it on your handheld device, you can scan the QR code or go to the URL below:</p> <p class="ss-text indent">8th.io/j6r6e</p> <p class="ss-text indent">You will need to grant camera and microphone permissions to the 8th Wall app to view the visualization.</p> <p class="ss-text indent">The visualization should now be projected on your face using your device’s front camera view. As you move your face, the visualization will move with you.</p> <p class="ss-text indent">Using the camera button at the bottom, you can click photos or make videos with the visualization projected in your surroundings. You can also share it on social media.</p>',
                      "I created this using an app called 8th Wall which allows users to create AR experiences. This app has pre-made templates that can be customized even with a limited or no understanding of computer coding. Users who have some understanding of coding, especially in the language called Javascript, can create more sophisticated and customized visualizations. For this particular visualization, I used a built-in template for creating face effects in 8th Wall that uses a Javascript library called “aframe” (8th Wall Inc, 2022a). This template provides a basic framework for creating visual elements that can be projected on users’ faces. How this works is that the 8th Wall engine analyzes facial features in the users’ front camera. As it recognises the users’ nose, it uses that as its anchor point and then arranges visual elements around that can be tweaked and defined by developers. I used aframe’s built-in shape features to create multiple rings that would give the appearance of the two pie charts in the visualization. It took several hours of trial and error to get the distances and ratios right to match the data that I wanted to represent. I used prison data that was publicly available from Zeng (2022) and national population data from US Census Bureau (2022). Since my own coding literacy is developing, I was very thankful to the detailed documentation provided by the 8th wall developer community (8th wall Inc., 2022a). Additionally, taking inspiration from Eyman’s (2023) experiments with using OpenAI’s ChatGPT for web design, I also used ChatGPT to assist me with brainstorming coding ideas and with debugging the code that I had written. Any coding suggestions given by ChatGPT were reviewed closely by me and corrected for errors."

                    ],
}

