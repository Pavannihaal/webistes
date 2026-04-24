const questions = [
  {"week": 1, "question": "The Global Goals were adopted by all United Nations member states in ___ as a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity by ___.", "options": ["2025, 2080", "2020, 2060", "2012, 2050", "2015, 2030"], "answer": 3},
  {"week": 1, "question": "Which of the following is true?", "options": ["The SDGs are a bold commitment to solely increase the GDP of India", "Dealing with climate change has no impact on gender equality", "Success in one SDG affects success of the others", "Only 14 out of the 17 SDGs are interconnected"], "answer": 2},
  {"week": 1, "question": "In June 1992, at the Earth Summit in Rio de Janeiro, Brazil, more than 178 countries adopted ___.", "options": ["Agenda 21", "Millennium Development Goals", "Agenda 51", "Sustainable Development Goals"], "answer": 0},
  {"week": 1, "question": "Brundtland Report was released in 1987 by the WCED. WCED stands for ___.", "options": ["World Commission on Environment Degradation", "World Commission on Environment and Development", "World Committee on Environmental Depletion", "World Commission on Earth Development"], "answer": 1},
  {"week": 1, "question": "Extreme poverty means living on less than ___ a day.", "options": ["$1.25", "$4.25", "$10.25", "$100.25"], "answer": 0},
  {"week": 1, "question": "___ poverty measures reveal who is poor and how they are poor.", "options": ["Unidimensional", "Bidirectional", "Multidimensional", "Multidirectional"], "answer": 2},
  {"week": 1, "question": "SDG 2 aims end all forms of ___ by 2030.", "options": ["crime", "hunger and malnutrition", "pollution", "drought"], "answer": 1},
  {"week": 1, "question": "Which of the following is not one of the indicators of the Global Hunger Index?", "options": ["prevalence of wasting and stunting in children under 5 years", "under 5 child mortality rate", "proportion of undernourished in the population", "proportion of obese people in the population"], "answer": 3},
  {"week": 1, "question": "As per Ministry of Housing and Urban Affairs, 135 litre per capita per day (lpcd) has been suggested as the benchmark for urban water supply. For rural areas, a minimum service delivery of 55 lpcd has been fixed under___.", "options": ["Jal Jeevan Mission", "Jal Shakti Mission", "Jal Protection Mission", "Jal Janta Mission"], "answer": 0},
  {"week": 1, "question": "Forests cover about ___ percent of the Earth’s surface", "options": ["5", "85", "30", "50"], "answer": 2},
  {"week": 2, "question": "Which of the following is a characteristic of ESD as described in the framework?", "options": ["It is not locally relevant", "It promotes learning only for children", "It is interdisciplinary", "It uses only two pedagogical techniques"], "answer": 2},
  {"week": 2, "question": "The Declaration on the Right to Development (1986) established that everyone is entitled to participate in and enjoy:", "options": ["only economic and social development", "economic, political, psychological and communist development", "economic, social, cultural and political development", "only cultural development"], "answer": 2},
  {"week": 2, "question": "Text based methods for assessing ESD programs can be improved by using ___.", "options": ["interpretive methodologies", "strict curriculum", "only quantitative techniques", "only qualitative methods"], "answer": 0},
  {"week": 2, "question": "SDGS are for the following except ___.", "options": ["people", "practice", "planet", "partnership"], "answer": 1},
  {"week": 2, "question": "Policies like employment and labor rights, care and family leaves, and financial regulation are often called the ___ policies.", "options": ["post-regulation", "self-care", "forceful", "pre-distributive"], "answer": 3},
  {"week": 2, "question": "Which of the following is involved in the development of the HRE indicator framework to measure progress on national implementation of human rights education.", "options": ["Danish Institute of Human Rights", "The Office of the High Commission for Human Rights", "Both A and B", "Neither A nor B"], "answer": 2},
  {"week": 2, "question": "___ plays a role in peace education.", "options": ["schools", "parents", "community", "all the given"], "answer": 3},
  {"week": 2, "question": "The enterprise of education at its most profound level is ___.", "options": ["discriminatory", "selective", "restricted", "transformative"], "answer": 3},
  {"week": 2, "question": "UNESCO’s World in 2030 survey revealed that respondents see ___ as one of the top global challenges", "options": ["climate change", "hunger", "unemployment", "mental health"], "answer": 0},
  {"week": 2, "question": "Education for sustainable development and peace develops people’s skills to take actions that improve our quality of life__________.", "options": ["only now", "only for the future", "for now and for the future", "only for the past"], "answer": 2},
  {"week": 3, "question": "Global citizenship is a belief that individuals are members of ___ networks.", "options": ["multiple", "diverse", "local and non-local", "all of the given"], "answer": 3},
  {"week": 3, "question": "A global citizen ___.", "options": ["is not aware of the wider world", "is confused about their place in the world", "takes an active role in their community", "do not care much about the planet"], "answer": 2},
  {"week": 3, "question": "Global citizenship education is based on ___ domains of learning.", "options": ["three", "two", "four", "seven"], "answer": 0},
  {"week": 3, "question": "___ is UNESCO’s first Category 1 education-related institute in the Asia-Pacific region.", "options": ["MGEIN", "MGIER", "MGIEP", "MGOEL"], "answer": 2},
  {"week": 3, "question": "SDG target 4.7 rearticulates a ____ agenda for education.", "options": ["regional", "behavioral", "political", "humanistic"], "answer": 3},
  {"week": 3, "question": "SEL stands for________.", "options": ["Sustainable education and learning", "Social and environmental learning", "Social and emotional learning", "Sustainable and economic learning"], "answer": 2},
  {"week": 3, "question": "Which of the following is a role taken by a teacher in education for sustainable development?", "options": ["facilitator", "guide", "role model", "all of the given"], "answer": 3},
  {"week": 3, "question": "Target ___ calls for strengthening efforts to protect and safeguard the world’s cultural and natural heritage.", "options": ["9.5", "1.5", "2.3", "11.4"], "answer": 3},
  {"week": 3, "question": "The UNESCO International Centre for Technical and Vocational Education and Training enables ___ in member states.", "options": ["green TVET", "blue TVET", "orange TVET", "white TVET"], "answer": 0},
  {"week": 3, "question": "Which of the following statements is not true?", "options": ["green jobs contribute to preserving environmental quality", "green jobs ensure workers’ rights", "green jobs are only found in the agriculture sector", "green jobs must be accessible to all"], "answer": 2},
  {"week": 4, "question": "GESO stands for ___.", "options": ["Green Education for Sustainable Occupation", "Green Enhanced Sustainable Occupation", "Green Enhanced Skills Occupation", "None of the above"], "answer": 2},
  {"week": 4, "question": "The classification of occupations into GIDO, GESO and GNEO is given by US National Center for ___ .", "options": ["G*NET", "A*NET", "I*NET", "O*NET"], "answer": 3},
  {"week": 4, "question": "The International Framework for Greening TVET consists of the following tiers, except ___.", "options": ["Breaking TVET institutions", "Transforming TVET institutions", "Formulating National Policies", "Forming International Alliance"], "answer": 0},
  {"week": 4, "question": "Energy, water and waste management comes under the ___ dimension of Greening TVET.", "options": ["Green research", "Green culture", "Green teaching", "Green campus"], "answer": 3},
  {"week": 4, "question": "Industry-institute interaction is an indicator of ___.", "options": ["green house", "green teaching", "green campus", "green curriculum"], "answer": 3},
  {"week": 4, "question": "Sustainable entrepreneurship includes ___.", "options": ["social entrepreneurship", "eco-preneurship", "intra-preneurship", "all of the given"], "answer": 3},
  {"week": 4, "question": "ESD requires ___ learning methods.", "options": ["participatory", "passive", "rigid", "static"], "answer": 0},
  {"week": 4, "question": "Which of the following is a transversal competency?", "options": ["creativity", "empathy", "systems thinking", "all of the given"], "answer": 3},
  {"week": 4, "question": "___ is the ability to create good relationships and adapt to different social situations.", "options": ["emotional fitness", "mental health", "social health", "physical health"], "answer": 2},
  {"week": 4, "question": "Sustainable health is ___.", "options": ["a curative approach", "only about the body", "a balance of mind, body and spirit", "only about mental health"], "answer": 2},
  {"week": 5, "question": "Siddha comes under the ___.", "options": ["public health sector", "voluntary health agencies", "indigenous system of medicine", "private health sector"], "answer": 2},
  {"week": 5, "question": "Which of the following is not a problem of healthcare infrastructure in India?", "options": ["shortage of staff", "skewed favor to urban areas", "no proper regulatory mechanism", "standard procedures in all regions"], "answer": 3},
  {"week": 5, "question": "Which of the following is a health system building block as suggested by WHO?", "options": ["Economic growth", "Access to public transport", "Politics", "Service delivery"], "answer": 3},
  {"week": 5, "question": "An ecologically sustainable approach broadens the definition of ___.", "options": ["objective", "outcome", "cost", "value"], "answer": 3},
  {"week": 5, "question": "A ___ is an environment in which data of medical interest can be stored and made easily available.", "options": ["health repository", "health bank", "health bag", "health grid"], "answer": 3},
  {"week": 5, "question": "The POSHAN Abhiyan in India aims to improve nutritional outcomes for ___.", "options": ["children", "lactating mothers", "pregnant women", "all of the given"], "answer": 3},
  {"week": 5, "question": "Sus-QI stands for ___.", "options": ["Sustainable quality improvement", "Sustainable quality improvisation", "Sustainable quantity improvement", "Sustainable quantity improvisation"], "answer": 0},
  {"week": 5, "question": "Which of the following is not a stage of Sus-QI?", "options": ["set goals", "measure impacts", "design the improvement effort", "ignore the system"], "answer": 3},
  {"week": 5, "question": "Food insecurity is measured on the ___.", "options": ["FIES", "FAIS", "FIET", "FAIR"], "answer": 0},
  {"week": 5, "question": "The UN lists ___ levels of food security for any given country.", "options": ["5", "4", "3", "2"], "answer": 0},
  {"week": 6, "question": "Poor infrastructure can cause hunger in a country.", "options": ["True", "False"], "answer": 0},
  {"week": 6, "question": "In high income countries, hunger is mainly caused due to poverty that results from ___.", "options": ["low GDP of the country", "lack of access to food", "poor public transport infrastructure", "lack of jobs"], "answer": 3},
  {"week": 6, "question": "Which of the following is true about hunger?", "options": ["It is a cause of war", "It is an effect of war", "It is both a cause and effect of war", "It is neither a cause nor an effect of war"], "answer": 2},
  {"week": 6, "question": "___ are most vulnerable to the harmful effects of hidden hunger.", "options": ["adults", "infants", "adolescents", "elderly"], "answer": 1},
  {"week": 6, "question": "Desertification is typically a result of ___.", "options": ["drought", "deforestation", "inappropriate agriculture", "all of the given"], "answer": 3},
  {"week": 6, "question": "Which of the following is a key initiative in India for the problem of hunger?", "options": ["One Nation, One Plate", "One Nation, One Hunger", "One Nation, No Ration Card", "One Nation, One Ration Card"], "answer": 3},
  {"week": 6, "question": "In the past, MGNREGA has ___.", "options": ["decreased rural wages", "increased gender wage gaps", "enabled poor access to food", "reduced distress migration from rural areas"], "answer": 3},
  {"week": 6, "question": "Wheat productivity can suffer if ___.", "options": ["temperature rises", "temperature does not change", "temperature falls", "none of the given"], "answer": 0},
  {"week": 6, "question": "Bringing forgotten and neglected foods like yam into cultivation and onto the market is called ___.", "options": ["diversifying food basket", "restricting food basket", "completing food box", "wasting food basket"], "answer": 0},
  {"week": 6, "question": "Home gardening has been proven as a reliable source to supplement food and nutritional security at the household level.", "options": ["True", "False"], "answer": 0},
  {"week": 7, "question": "Which of the following is a type of energy?", "options": ["fossil fuels", "nuclear power", "traditional biomass", "all of the given"], "answer": 3},
  {"week": 7, "question": "In IPCC by UN, I stands for ___.", "options": ["Industrial", "Internal", "International", "Intergovernmental"], "answer": 3},
  {"week": 7, "question": "The extraction, transport and refinement of nuclear fuels results in___.", "options": ["improvement of land from mining", "pollution of air and water", "replenishment of biodiversity", "all of the given"], "answer": 1},
  {"week": 7, "question": "The greatest contributor to air pollution in China is ___.", "options": ["cooking and heating", "coal burning", "transport", "forest burning"], "answer": 1},
  {"week": 7, "question": "In the wake of tsunami and nuclear disaster following severe earthquake in 2011, a city in Japan set a target for ___ by 2022.", "options": ["hundred net energy", "one net energy", "million net energy", "zero net energy"], "answer": 3},
  {"week": 7, "question": "The term ‘energy democracy’ grew out of the ___ movement.", "options": ["hunger justice", "hunger revolt", "climate revolt", "climate justice"], "answer": 3},
  {"week": 7, "question": "The Paris Agreement is a legally binding treaty on ___ adopted by 196 parties at COP 21 in 2015.", "options": ["climate change", "education", "poverty", "none of the given"], "answer": 0},
  {"week": 7, "question": "The Government of India launched the NAPCC in 2008 outlining ___ National Missions on climate change.", "options": ["8", "2", "100", "78"], "answer": 0},
  {"week": 7, "question": "Stubble burning usually takes place in the months of ___.", "options": ["October-November", "May-June", "January-February", "July-August"], "answer": 0},
  {"week": 7, "question": "Stubble burning is ___.", "options": ["intentional", "natural", "healthy for air quality", "related to burning of paper"], "answer": 0},
  {
    "week": 8,
    "question": "The Okayama Commitment is from ___.",
    "options": ["Russia", "South Korea", "North Korea", "Japan"],
    "answer": 3
  },
  {
    "week": 8,
    "question": "Which of the following is a policy support mechanism of Okayama Commitment?",
    "options": ["Taking money", "Content development", "Exploitation of resources", "None of the given"],
    "answer": 1
  },
  {
    "week": 8,
    "question": "Education is related to SDG 9 such that ___.",
    "options": ["education helps in skills required to build resilient infrastructure", "education enhances skills to use natural resources more sustainably", "education is critical to lifting people out of poverty", "education helps reduce gender gaps"],
    "answer": 0
  },
  {
    "week": 8,
    "question": "The frame model structures sustainability competencies into ___ goal dimensions.",
    "options": ["8", "3", "11", "45"],
    "answer": 1
  },
  {
    "week": 8,
    "question": "Sustainability issues must be looked at through a ___ approach.",
    "options": ["isolated thinking", "independent thinking", "silos thinking", "systems thinking"],
    "answer": 3
  },
  {
    "week": 8,
    "question": "Technology and Science can alone solve all our sustainability problems.",
    "options": ["True", "False"],
    "answer": 1
  },
  {
    "week": 8,
    "question": "GAP in the context of ESD stands for ___.",
    "options": ["Global Action Programme", "Great Actvity Plan", "Global Attention Programme", "Great Action Policy"],
    "answer": 0
  },
  {
    "week": 8,
    "question": "___ competency is the capability to understand and evaluate multiple futures.",
    "options": ["anticipatory", "normative", "strategic", "collaborative"],
    "answer": 0
  },
  {
    "week": 8,
    "question": "The ability to question norms is ___ competency.",
    "options": ["critical thinking", "normative", "anticipatory", "self-awareness"],
    "answer": 0
  },
  {
    "week": 8,
    "question": "Action-oriented learning draws on Kolb’s concept of ___.",
    "options": ["experiential learning", "experimental learning", "rote learning", "direct learning"],
    "answer": 0
  },
  {
    "week": 9,
    "question": "Activities like fish bowl discussion help ___.",
    "options": ["passive thinking", "critical and reflexive thinking", "rote-memory", "all of the given"],
    "answer": 1
  },
  {
    "week": 9,
    "question": "Which of the following is not a vision-building exercise?",
    "options": ["scenario analysis", "classroom teaching", "science fiction thinking", "dystopian storytelling"],
    "answer": 1
  },
  {
    "week": 9,
    "question": "The ability to hold contradictory thoughts and feelings is an ___ competency.",
    "options": ["intellectual", "interpersonal", "intrapersonal", "institutional"],
    "answer": 2
  },
  {
    "week": 9,
    "question": "___intelligences is proposed by Howard Gardner.",
    "options": ["multiple", "singular", "double", "triple"],
    "answer": 0
  },
  {
    "week": 9,
    "question": "___intelligence refers to using one’s body in skilled ways.",
    "options": ["kinesthetic", "musical", "naturalist", "spatial"],
    "answer": 0
  },
  {
    "week": 9,
    "question": "The idea of big transformation implies that changes in individual action are intertwined with ___.",
    "options": ["reorganization of self", "reorganization of societal structures", "ignorance of others", "none of the given"],
    "answer": 1
  },
  {
    "week": 9,
    "question": "In ___ learning, learners start to question all the things they knew to make room for new insights and information.",
    "options": ["transformative", "transactional", "trivial", "trans-disciplinary"],
    "answer": 0
  },
  {
    "week": 9,
    "question": "Which of the following is a key principle of adult education?",
    "options": ["need to know why", "guilt", "boredom", "none of the given"],
    "answer": 0
  },
  {
    "week": 9,
    "question": "___ Sustainable Development is a process through which people influence and share control over development initiatives, decisions and resources that affects them.",
    "options": ["Internal", "Societal", "Participatory", "Transformational"],
    "answer": 2
  },
  {
    "week": 9,
    "question": "___ is the common regulatory body for higher education in India.",
    "options": ["HECI", "WHO", "AIIMS", "None of the given"],
    "answer": 0
  },
  {
    "week": 10,
    "question": "Sustainable leaders look at immediate, short-term gains.",
    "options": ["True", "False"],
    "answer": 1
  },
  {
    "week": 10,
    "question": "The need of the hour is to have leaders who ___.",
    "options": ["focus only on business profit", "focus only on building technical solutions", "take a holistic approach", "none of the given"],
    "answer": 2
  },
  {
    "week": 10,
    "question": "Which of the following is a part of the 3Ps of triple bottom line?",
    "options": ["Profit", "Passion", "Party", "Pivot"],
    "answer": 0
  },
  {
    "week": 10,
    "question": "Organizations need leaders who create value for ___.",
    "options": ["internal stakeholders", "external stakeholders", "oneself", "all stakeholders"],
    "answer": 3
  },
  {
    "week": 10,
    "question": "The sustainability mindset involves ___.",
    "options": ["transparency", "presencing", "integrity", "all of the given"],
    "answer": 3
  },
  {
    "week": 10,
    "question": "Finding ways to maintain one’s own and others’ energy is an unsustainable leadership practice.",
    "options": ["True", "False"],
    "answer": 1
  },
  {
    "week": 10,
    "question": "Systems thinking is often highlighted by the ability to ___.",
    "options": ["zoom in", "zoom out", "zoom in and out", "none of the given"],
    "answer": 2
  },
  {
    "week": 10,
    "question": "Practicing consciousness awareness includes ___.",
    "options": ["ignoring self with others", "forgetting about what has happened and moving on", "living in denial", "authentic interactions"],
    "answer": 3
  },
  {
    "week": 10,
    "question": "Leadership ___ is the last challenge of leadership; of letting go, moving on, and planning for one’s own obsolescence.",
    "options": ["succession", "regression", "formation", "integration"],
    "answer": 0
  },
  {
    "week": 10,
    "question": "___ leadership is also called missionary leadership and is different from quiet leadership.",
    "options": ["participative", "servant", "radical", "inspirational"],
    "answer": 2
  },
  {
    "week": 11,
    "question": "There is one universal curriculum to become a sustainable leader.",
    "options": ["True", "False"],
    "answer": 1
  },
  {
    "week": 11,
    "question": "A sustainable leader has a ___ decision-making style.",
    "options": ["forceful", "autocratic", "selfish", "consensual"],
    "answer": 3
  },
  {
    "week": 11,
    "question": "A sustainable leader must have awareness of ___ contexts.",
    "options": ["ecological", "economic", "political", "all of the given"],
    "answer": 3
  },
  {
    "week": 11,
    "question": "The ‘results’ component of sustainable leadership relates with the ___ dimension.",
    "options": ["instituional", "social", "environmental", "economic"],
    "answer": 3
  },
  {
    "week": 11,
    "question": "___ India gives a theory U that consists of aspects like co-initiating, co-sensing and co-evolving among others.",
    "options": ["HEAD", "SAID", "GEAD", "LEAD"],
    "answer": 3
  },
  {
    "week": 11,
    "question": "The __ component in theory ‘U’ entails prototyping the new.",
    "options": ["co-evolving", "co-initiating", "co-sensing", "co-creating"],
    "answer": 3
  },
  {
    "week": 11,
    "question": "Which of the following factor does not aid in becoming a global leader?",
    "options": ["willingness to stay in one’s comfort zone", "undesirable circumstances like poverty", "confidence to embrace risk", "willingness to learn from failure"],
    "answer": 0
  },
  {
    "week": 11,
    "question": "According to Maxwell, there are ___ levels of leadership.",
    "options": ["15", "25", "50", "5"],
    "answer": 3
  },
  {
    "week": 11,
    "question": "The ___, in relation to their Global Leadership Fellowship program, describes global leaders as dynamic, engaged and driven individuals who possess a high degree of intellectual curiosity and service-oriented humility; an entrepreneur in the global public interest with a profound sense of purpose regardless of the scale and scope of the challenge.",
    "options": ["World Health Organization", "World Labor Organization", "World Economic Forum", "World Political Forum"],
    "answer": 2
  },
  {
    "week": 11,
    "question": "SDG ___ is to make cities and human settlements inclusive, safe, resilient, and sustainable.",
    "options": ["2", "10", "11", "5"],
    "answer": 2
  },
  {
    "week": 12,
    "question": "___resources are those that exist in the absence of human intervention.",
    "options": ["Artificial", "Natural", "Fake", "Real"],
    "answer": 1
  },
  {
    "week": 12,
    "question": "The food sector accounts for around ___ percent of total greenhouse gas emissions.",
    "options": ["3", "22", "100", "90"],
    "answer": 1
  },
  {
    "week": 12,
    "question": "Which of the following is not a solution for natural resource depletion?",
    "options": ["use less renewable energy", "promote sustainable fishing growth", "reduce food waste", "treat wastewater before discharging"],
    "answer": 0
  },
  {
    "week": 12,
    "question": "In order to support reform on green fiscal policy, UN Environment has established the ___ in partnership with the International Monetary Fund.",
    "options": ["Green Fiscal Policy Network", "Blue Fiscal Policy Network", "Green Fishery Policy Network", "Green Fiscal Policy Natural"],
    "answer": 0
  },
  {
    "week": 12,
    "question": "As responsible consumers, we should ask ourselves “___” before buying anything.",
    "options": ["do I really need it?", "how long will I use it?", "can I borrow it from someone I know?", "all of the given"],
    "answer": 3
  },
  {
    "week": 12,
    "question": "A bulb thrown out after usage forms __.",
    "options": ["wet waste", "valuable waste", "responsible waste", "e-waste"],
    "answer": 3
  },
  {
    "week": 12,
    "question": "SDG ___ seeks to promote international trade, and help developing countries increase their exports to ensure a universal rules-based and equitable trading system that is fair, open and beneficial to all.",
    "options": ["17", "2", "6", "11"],
    "answer": 0
  },
  {
    "week": 12,
    "question": "According to Gandhiji, wealth should be used for ___.",
    "options": ["the betterment of the humanity", "personal indulgence", "conflicts", "politics"],
    "answer": 0
  },
  {
    "week": 12,
    "question": "The ___ initiated and spearheaded by Gandhiji is the preeminent prototype of small and cottage industries.",
    "options": ["Khadi Movement", "Salt March", "Cotton Movement", "Non-violent Protest"],
    "answer": 0
  },
  {
    "week": 12,
    "question": "___ is the ability of a system to absorb disturbances & retain its basic function and structure.",
    "options": ["resilience", "gratitude", "mindfulness", "sustainable consumption"],
    "answer": 0
  }
];
