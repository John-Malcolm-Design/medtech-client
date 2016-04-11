'use strict';

/**
 * @ngdoc function
 * @name medtechClientApp.controller:BenchmarkCtrl
 * @description
 * # BenchmarkCtrl
 * Controller of the medtechClientApp
 */
angular.module('medtechClientApp')
    .controller('BenchmarkCtrl', function() {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        this.identify = [
    { //Row  
        'heading': 'Strategic Focus',
        'columns': [
            [
                'The Company’s areas of Strategic Focus for Product Development (PD) are stagnant and follow traditional lines based on its history and/ or the personal opinion of the key principals.',
                'The Company’s Strategic Focus is not based on clinical needs and market analysis',
                'The Company has developed a niche competency for Product Development (PD), but in a limited area of focus. There are concerns that the market may be evolving in a way that threatens the Strategic Focus of the company.',
                'The Company has no process in place to drive product development through Needs Finding'
            ],
            [
                'The Company has a Mission Statement that reflects its current Strategic Focus.',
                'The Company is implementing continuous assessment using a Needs Finding process to improve the incorporation of market evolution into the Strategic Focus.',
                'The Company explores and re-examines preliminary data from focus areas of interest and updates the boundaries for its Strategic Focus.',
                'Product development projects have Acceptance Criteria that are aligned with areas of Strategic Focus and are current, relevant and understood.'
            ],
            [
                'The Company’s Mission Statement is regularly reviewed and updated and reflects its recognised intent in areas of Strategic Focus.',
                'The Company’s live and iterative Needs Finding process is regularly reviewed to improve the quality, breadth, depth, history, analytical techniques and analysis of data to set/reset its areas and boundaries of Strategic Focus.',
                'The Company regularly reviews its strengths and weaknesses and updates Project Acceptance Criteria to ensure alignment with the Areas of Strategic Focus.'
            ]
        ]
    }, //Row
    { //Row  
        'heading': 'Observation and Problem Identification',
        'columns': [
            [
                'The Company has an informal/ ad hoc process for the Assessment of Customer/ Clinical Need (ACCN)',
                'Its ACCN process is largely insulated from the end user and restricted in its observation of user practice.',
                'Product Developments (PD) are based on internal bench studies rather than end-use observations. ',
                'Product iterations are the norm and are based on limited literature reviews, own or competitor product performance, and/ or company\'s historical pathways',
                'PD Practitioners have a good understanding of current technologies and opportunities for iterative improvements.'
            ],
            [
                'Product iterations are initiated based on the available input from the ACCN and on some literature reviews and/or the Company’s historical pathways',
                'PD Practitioners interviews End User practitioners to collect their insights for PD.',
                'The Company has a formal ACCN process but its scope is limited to End User practitioner input',
                'Practitioners offer useful input but may unconsciously accept and therefore be unaware of deficiencies in design.',
                'Broader stakeholders are not considered and on-site clinical observations are not conducted.',
                'An informal S/CAB exists but does not have the opportunity to assess all aspects of observed problems.'
            ],
            [
                'The Company has a formal ACCN process.',
                'Direct observations are held with end User Practitioners and all Stakeholders to assess the areas of Strategic Focus.',
                'Observations are recorded objectively and without jumping to immediate conclusions.',
                'All stakeholders (e.g. patient- provider- payer) are included in the observation/ questioning.',
                'Observer(s) becomes immersed in the broad stakeholder group; to expect and prepare for the unexpected; and to carry out multiple observations in multiple settings for all products',
                'The Company has a detailed history of prior observations, conclusions and performance of its prior PD and factors learnings into the observation process.',
                'The Company has a formal S/CAB process which enables critique and input to the observer(s) findings before final conclusions are reached.',
                'The Company concludes the process with a clearly defined Problem Statement before any problem solving, creativity ideation or PD is initiated.'
            ]
        ]
    }, //Row
    { //Row  
        'heading': 'Develop Needs Statement',
        'columns': [
            [
                'The Company’s Product Innovations have limited success and fail to achieve expected market goals',
                'Feedback from customers indicates that the Company’s Product innovations have not been developed to address “real” customer and/or market needs.',
                'The Company has an Inadequate Observation and Problem Identification process leading to poorly defined customer Needs.',
                'The Company’s PD Project objectives are largely based on internal opinion and/or arms-length observations.',
                'The Company has little or no S/CAB input or critique of customer and/or market needs.',
                'The Company’s PD performance goals are unclear, leading to ineffective evaluation of potential solutions'
            ],
            [
                'Product innovations are based on Needs Statements developed and considered from input received from End Users. ',
                'The Needs Statement is developed iteratively and challenged by stakeholders to ensure it satisfies an End User dilemma.',
                'The Needs Statement is a broad statement but linked to a verifiable problem.',
                'The Company’s S/CAB may review the Needs Statement.',
                'The Needs Statement references an inferred solution and/or ill-defined user populations.'
            ],
            [
                'The Company articulates a succinct Needs Statement with every word critically considered and a measure for the Desired Primary Outcome.',
                'The Statement is focused on what, with no reference to how. It is focused on the goal, not the problem.',
                'The Company involves its S/CAB who critically reviews the Needs Statement.',
                'The Company’s PD project Objectives are firmly based on the Needs Statement.',
                'No PD activity is initiated without an approved Needs Statement'
            ]
        ]
    }, //Row
    { //Row  
        'heading': 'Clinical Fundamentals',
        'columns': [
            [
                'The Company’s Needs Screening process is informal and limited by the extent of their personal clinical knowledge of the condition associated with the product',
                'The Company has the relevant knowledge of the principles related to the development of medical technology products',
                'PD Practitioners have a good understanding of current technologies required for medical technology products',
                'PD Practitioners have built up piecemeal clinical knowledge over time through involvement on projects and exposure to internal company know-how.'
            ],
            [
                'PD Practitioners are expected to demonstrate relevant clinical understandingfor the area of strategic focus.',
                'The Needs Finding process is used to align product developments with the intended clinical impact.',
                'The Company has built up a repository of relevant clinical information and PD Practitioners are encouraged to educate themselves in this area.',
                'This knowledge is implicitly taken into account during the PD cycle, but is not built in as a formal screening step in the process.'
            ],
            [
                'The Company has a formal Needs Screening process which includes a systematic review of clinical fundamentals.',
                'The Needs Screening process includes a relevant review of anatomy/ biology, impact of problem condition, symptoms and clinical outcomes, prevalence, and economic impacts.',
                'Project approvals and prioritisation will consider all clinical fundamentals and project sponsors will converse in an informed way with all stakeholders.',
                'Company has a formal process for increasing clinical knowledge within the PD Practitioner organisation in line with area of strategic focus.'
            ]
        ]
    }, //Row
    { //Row  
        'heading': 'Treatment/ Procedural Options',
        'columns': [
            [
                'The Company builds the most positive positioning for its technology within current procedural options.',
                'The Company considers Emerging technologies/ alternative approaches when they become a threat in the market.',
                'The Company has a good understanding of direct competitor technologies that use a similar procedural approach.',
                'The Company is focused on its own product suite and has an incomplete understanding of procedural approaches.',
                'The Company understands the clinical condition but the viable treatment/ procedural approaches are not given extensive consideration.',
                'The Company’s primary area of activity is Incremental developments of existing technologies.',
                'The Company does not have a formal scientific advisory board process that advises and enlightens their understanding of limitations in existing and potential procedural options'
            ],
            [
                'The Company carries out long term projections for clinical conditions and related technologies. ',
                'The Company reviews the strengths and weaknesses of each technology and these are inputted into the design requirements. ',
                'The Company looks for \'gaps\' in procedural options i.e. a need that is underserved by existing or emerging technologies.',
                'The Company reviews and considers Emerging technologies.',
                'The Company has an informal process for evaluating emerging technologies.',
                'The Company evaluates User Practitioner skillset requirements and the targeted clinical setting/ personnel are identified.',
                'The Company meets with scientific advisors to seek advice on limitations of existing procedural options, critical areas for improvement, and potential of emerging technologies.'
            ],
            [
                'The Company has a formal process to review strengths and weaknesses of current/emerging procedural options.',
                'The Company has a formal data repository which includes an overview and critique of current/ emerging procedures.',
                'The Company has a formal process to review total cost analysis of current/emerging procedures.',
                'The Company has a formal process to review usage rates and pricing of current procedures and projections for emerging procedures.',
                'The Company has a formal process to complete a risk analysis of each procedural option.',
                'The Company uses a formal Gap Analysis Matrix process to prioritise procedural options.',
                'The Company has a formal process to document and maintain a comprehensive Treatment Landscape.',
                'The Company formally reviews its prioritised procedural options with its scientific advisory board to consider their critique and consider further research/analysis to finalise procedural option priorities.'
            ]
        ]
    }, //Row
    { //Row  
        'heading': 'Stakeholder Analysis', 
        'columns': [
            [
                'The Company considers perceived requirements of the end user/ patient during the design phase of the project.',
                'The Company consults with the end user and/or patient in order to develop a User Requirement Specification (URS) but does not update the URS as the project progresses.',
                'The Company’s stakeholder analysis is kept to a small cohort of parties.',
                'The Company does not validate or update perceived requirements during the design phase of the project.',
                'The Company’s Design approval may be based on an inaccurate or incomplete URS.'
            ],
            [
                'The Company identifies all relevant stakeholders (e.g. patients, clinicians, facilities, payors) and consults them informally.',
                'The Company identifies and prioritises the needs of all stakeholders. ',
                'The Company includes Regulatory bodies, insurance companies and geographic nuances in its Stakeholder analysis process.',
                'The Company prioritises Stakeholders in terms of importance and there is clarity on who the key decision makers are and which clinical profession is to be targeted.',
                'The Company’s Design approval is based on a review of the stakeholder needs prioritisation. '
            ],
            [
                'The Company has a formal process to identify and track all stakeholder requirements throughout the product development process.',
                'The Company formally and regularly considers Direct and indirect (hard and soft) benefits for each stakeholder throughout the product development process.',
                'The Company formally reviews the costs and benefits of the project for each stakeholder cohort to ensure these are clearly understood. ',
                'The Company’s formal process looks at the complete economic analysis of the project to identify Stakeholder cohort(s) that may be negatively impacted (and who may become blockers).',
                'The Company develops a holistic communication of project benefits and establishes consensus among all Stakeholders to avoid “silo” blocking and maximise project adoption.'
            ]
        ]
    }, //Row
    { //Row  
        'heading': 'Market Analysis',
        'columns': [
            [
                'The Company focuses Product Developments on existing customers and existing segments.',
                'The Company’s Product Development (PD) is focused on iterative improvements targeting existing market.',
                'The Company understands their existing target market but does not proactively assess Market dynamics and may miss important changes to end user/patient preferences, payers, and regulators/regulations.'
            ],
            [
                'The Company uses high level market Analysis tools (e.g. 5 Forces and SWOT) to capture an understanding of the market dynamics before undertaking new PD projects.',
                'The Company makes limited use of external data in the analysis of its target market.',
                'The Company’s PD projects take account of its understanding and analysis of market dynamics and some of this is reflected in its iterative improvements to products for existing target markets.'
            ],
            [
                'The Company uses a formal multistage to support detailed market analysis.',
                'The Company constantly challenges and re-evaluates the market opportunity as market dynamics change and throughout the PD cycle.',
                'The Company uses the data from the multi stage process to prepare useful market analysis information for presentation to all stakeholders.',
                'The Company uses the multistage process to challenge and model market data/ information/ assumptions to improve accuracy and avoid pitfalls relating to over/ underestimating market dynamics.'
            ]
        ]
    }, //Row
    { //Row  
        'heading': 'Needs Filtering',
        'columns': [
            [
                'The company has invested in market research. However, market research not given due emphasis and priorities are set based primarily on intuition.',
                'The Company overlooks the opportunity to combine analysis with intuition to establish and prioritise needs.',
                'The Company does not clearly articulate the key factors to be evaluated in the selection process to identify and prioritise needs.',
                'The Company defaults to incremental improvements to existing portfolio or risks making subjective decisions on emerging innovation opportunities.'
            ],
            [
                'The Company relies on quantitative scores for initial filtering of needs, but as further analysis is done on reducing the selection, qualitative reasoning comes more to the fore.',
                'The Company puts in place a formal rating system to supplement intuition with a more objective scoring of key factors when selecting and prioritisation needs.',
                'The Needs Specification focuses on the problem, opportunity, and need criteria and does not focus on the solution.',
                'The Company documents a Needs Specification for each selected Need that summarises the gathered data but not updated throughout the PD cycle.'
            ],
            [
                'The Company has implemented a formal process to identify and continually refresh key factors in the selection of needs.',
                'The Company has a formal process to organise identified needs/ opportunities in different portfolio categories (e.g. Blue-sky, mixed, incremental) that takes account of the desired mix of categories.',
                'The Company prepares Needs Specifications that are live documents are based on the portfolio of needs and are continually updated as its understanding of needs data emerges and evolves.',
                'The Company’s needs selection process enables it and requires it to revert back into the previous stages if emerging data indicates a potential change of direction should be considered.'
            ]
        ]
    } //Row
];
    });
