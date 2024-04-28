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
                      "This atypical black and white bar diagram titled Illiteracy documents the rather rapid decrease in the number of Black Americans who could not read from Emancipation to the beginning of the 20th century. Just thirty years following the end of slavery, the literacy rate increased by 31.73%. Based on the previous data, Du Bois and his team estimated that black Americans would achieve 50% literacy by 1900 and represented this guess by incorporating question marks adjacent to the data. The realized data from the National Assessment of Adult Literacy determined the literacy rates for Black Americans actually fared better than the Atlanta University team imagined with 55.5% of Black people older than 14 years of age learning to read in 1900. As of 1979, less than 1.6% of Black Americans were believed to be illiterate. Despite this perceived progress, the U.S. Department of Education’s National Assessment of Educational Progress reported in 2019 that an astounding 85% of Black American students lack proficiency in reading skills. Additionally, 84% of these same students also struggle to show proficiency in math.",
                      'Add some text here relating to the purpose for Illiteracy Across Race.',
                      'INSTRUCTIONS for Illiteracy',
                      'We developed <i>Illiteracy Across Race</i> using a'],
                      
  'incarceration': ['https://8th.io/j6r6e',
                      'Anuj Gupta',
                      'https://www.youtube.com/embed/0Zm0lqm0P6s?si=Cc1i_YJMXgeHeX8b',
                      'Du Bois visualized the convictions of over 3000 Black prisoners in unconventional, engaging ways.',
                      "At the turn of the century, Du Bois and his team analyzed the convictions of 3250 African American prisoners. Although the diagram is visually similar to a bar graph, it is actually more like an area chart in function. The slanted chart tells the viewer that the lion's share of convicted crimes committed by African Americans were against people (in brown) or property (in black). Curiously, Du Bois never compared the incarceration rates of black Americans versus their white counterparts, but, in 2023, it is a glaring fact that is hard to ignore. Despite only representing 13.6% of America’s population, Black Americans are incarcerated in state prisons nearly five times over the rate of whites. nationally, one in every 81 black adults will serve time in a state prison in the United States. 35% of the individuals executed under the death penalty within the last 40 years have been Black. The purpose of modern incarceration is to silo people perceived as undesirable away from the general public. The use of this augmented reality visualization makes the issue of mass incarceration personal. According to the Sentencing Project, in 12 states, more than half the prison population is Black: Alabama, Delaware, Georgia, Illinois, Louisiana, Maryland, Michigan, Mississippi, New Jersey, North Carolina, South Carolina, and Virginia. Several states have passed “racial impact statement” laws to undo the racial and ethnic disparity resulting from decades of tough-on-crime policies.",
                      'Add some text here relating to the purpose for Black Space and the Environment.',
                      'INSTRUCTIONS for Incarceration',
                      'We developed <i>Incarceration Across Race</i> using a'],
}

