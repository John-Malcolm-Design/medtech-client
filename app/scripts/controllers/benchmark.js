'use strict';

/**
 * @ngdoc function
 * @name medtechClientApp.controller:BenchmarkCtrl
 * @description
 * # BenchmarkCtrl
 * Controller of the medtechClientApp
 */
angular.module('medtechClientApp')
    .controller('BenchmarkCtrl', function ($http, $scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        this.levelIndex = 0;
        this.levels = ['Entry', 'Learning', 'Performing'];
        this.level = this.levels[0];

        this.changeLevel = function (level) {
            this.levelIndex = level;
            this.level = this.levels[level];
        };
        
                   
        $scope.recommendations = {
            articles : [],
            
            getRecommendations : function(level) {
                var labels = {
                'heading': angular.element('#currentHeading').text(),
                'subHeading': level
            };
            $http({
                method: 'POST',
                url: 'http://medtech-api.herokuapp.com/articles/recommend',
                data: labels
            }).then(function successCallback(response) {
                
                $scope.recommendations.articles = response.data;

            });
            }
        };
        this.identify = [{ //Row  
            'heading': 'Strategic Focus',
            'columns': [
                [{
                    'text': 'The Company’s areas of Strategic Focus for Product Development (PD) are stagnant and follow traditional lines based on its history and/ or the personal opinion of the key principals.',
                    'warn': true
                }, {
                        'text': 'The Company’s Strategic Focus is not based on clinical needs and market analysis',
                        'warn': true
                    }, {
                        'text': 'The Company has developed a niche competency for Product Development (PD), but in a limited area of focus. There are concerns that the market may be evolving in a way that threatens the Strategic Focus of the company.',
                        'warn': true
                    }, {
                        'text': 'The Company has no process in place to drive product development through Needs Finding',
                        'warn': true
                    }],
                [{
                    'text': 'The Company has a Mission Statement that reflects its current Strategic Focus.',
                    'warn': false
                }, {
                        'text': 'The Company is implementing continuous assessment using a Needs Finding process to improve the incorporation of market evolution into the Strategic Focus.',
                        'warn': false
                    }, {
                        'text': 'The Company explores and re-examines preliminary data from focus areas of interest and updates the boundaries for its Strategic Focus.',
                        'warn': false
                    }, {
                        'text': 'Product development projects have Acceptance Criteria that are aligned with areas of Strategic Focus and are current, relevant and understood.',
                        'warn': false
                    }],
                [{
                    'text': 'The Company’s Mission Statement is regularly reviewed and updated and reflects its recognised intent in areas of Strategic Focus.',
                    'warn': false
                }, {
                        'text': 'The Company’s live and iterative Needs Finding process is regularly reviewed to improve the quality, breadth, depth, history, analytical techniques and analysis of data to set/reset its areas and boundaries of Strategic Focus.',
                        'warn': false
                    }, {
                        'text': 'The Company regularly reviews its strengths and weaknesses and updates Project Acceptance Criteria to ensure alignment with the Areas of Strategic Focus.',
                        'warn': false
                    }]
            ]
        }, //Row
            { //Row  
                'heading': 'Observation and Problem Identification',
                'columns': [
                    [{
                        'text': 'The Company has an informal/ ad hoc process for the Assessment of Customer/ Clinical Need (ACCN)',
                        'warn': true
                    }, {
                            'text': 'Its ACCN process is largely insulated from the end user and restricted in its observation of user practice.',
                            'warn': true
                        }, {
                            'text': 'Product Developments (PD) are based on internal bench studies rather than end-use observations. ',
                            'warn': true
                        }, {
                            'text': 'Product iterations are the norm and are based on limited literature reviews, own or competitor product performance, and/ or company\'s historical pathways',
                            'warn': true
                        }, {
                            'text': 'PD Practitioners have a good understanding of current technologies and opportunities for iterative improvements.',
                            'warn': false
                        }],
                    [{
                        'text': 'Product iterations are initiated based on the available input from the ACCN and on some literature reviews and/or the Company’s historical pathways',
                        'warn': false
                    }, {
                            'text': 'PD Practitioners interviews End User practitioners to collect their insights for PD.',
                            'warn': false
                        }, {
                            'text': 'The Company has a formal ACCN process but its scope is limited to End User practitioner input',
                            'warn': true
                        }, {
                            'text': 'Practitioners offer useful input but may unconsciously accept and therefore be unaware of deficiencies in design.',
                            'warn': true
                        }, {
                            'text': 'Broader stakeholders are not considered and on-site clinical observations are not conducted.',
                            'warn': true
                        }, {
                            'text': 'An informal S/CAB exists but does not have the opportunity to assess all aspects of observed problems.',
                            'warn': true
                        }],
                    [{
                        'text': 'The Company has a formal ACCN process.',
                        'warn': false
                    }, {
                            'text': 'Direct observations are held with end User Practitioners and all Stakeholders to assess the areas of Strategic Focus.',
                            'warn': false
                        }, {
                            'text': 'Observations are recorded objectively and without jumping to immediate conclusions.',
                            'warn': false
                        }, {
                            'text': 'All stakeholders (e.g. patient- provider- payer) are included in the observation/ questioning.',
                            'warn': false
                        }, {
                            'text': 'Observer(s) becomes immersed in the broad stakeholder group; to expect and prepare for the unexpected; and to carry out multiple observations in multiple settings for all products',
                            'warn': false
                        }, {
                            'text': 'The Company has a detailed history of prior observations, conclusions and performance of its prior PD and factors learnings into the observation process.',
                            'warn': false
                        }, {
                            'text': 'The Company has a formal S/CAB process which enables critique and input to the observer(s) findings before final conclusions are reached.',
                            'warn': false
                        }, {
                            'text': 'The Company concludes the process with a clearly defined Problem Statement before any problem solving, creativity ideation or PD is initiated.',
                            'warn': false
                        }]
                ]
            }, //Row
            { //Row  
                'heading': 'Develop Needs Statement',
                'columns': [
                    [{
                        'text': 'The Company’s Product Innovations have limited success and fail to achieve expected market goals',
                        'warn': true
                    }, {
                            'text': 'Feedback from customers indicates that the Company’s Product innovations have not been developed to address “real” customer and/or market needs.',
                            'warn': true
                        }, {
                            'text': 'The Company has an Inadequate Observation and Problem Identification process leading to poorly defined customer Needs.',
                            'warn': true
                        }, {
                            'text': 'The Company’s PD Project objectives are largely based on internal opinion and/or arms-length observations.',
                            'warn': true
                        }, {
                            'text': 'The Company has little or no S/CAB input or critique of customer and/or market needs.',
                            'warn': true
                        }, {
                            'text': 'The Company’s PD performance goals are unclear, leading to ineffective evaluation of potential solutions',
                            'warn': true
                        }],
                    [{
                        'text': 'Product innovations are based on Needs Statements developed and considered from input received from End Users. ',
                        'warn': false
                    }, {
                            'text': 'The Needs Statement is developed iteratively and challenged by stakeholders to ensure it satisfies an End User dilemma.',
                            'warn': false
                        }, {
                            'text': 'The Needs Statement is a broad statement but linked to a verifiable problem.',
                            'warn': false
                        }, {
                            'text': 'The Company’s S/CAB may review the Needs Statement.',
                            'warn': false
                        }, {
                            'text': 'The Needs Statement references an inferred solution and/or ill-defined user populations.',
                            'warn': true
                        }],
                    [{
                        'text': 'The Company articulates a succinct Needs Statement with every word critically considered and a measure for the Desired Primary Outcome.',
                        'warn': false
                    }, {
                            'text': 'The Statement is focused on what, with no reference to how. It is focused on the goal, not the problem.',
                            'warn': false
                        }, {
                            'text': 'The Company involves its S/CAB who critically reviews the Needs Statement.',
                            'warn': false
                        }, {
                            'text': 'The Company’s PD project Objectives are firmly based on the Needs Statement.',
                            'warn': false
                        }, {
                            'text': 'No PD activity is initiated without an approved Needs Statement',
                            'warn': false
                        }]
                ]
            }, //Row
            { //Row  
                'heading': 'Clinical Fundamentals',
                'columns': [
                    [{
                        'text': 'The Company’s Needs Screening process is informal and limited by the extent of their personal clinical knowledge of the condition associated with the product',
                        'warn': true
                    }, {
                            'text': 'The Company has the relevant knowledge of the principles related to the development of medical technology products',
                            'warn': false
                        }, {
                            'text': 'PD Practitioners have a good understanding of current technologies required for medical technology products',
                            'warn': false
                        }, {
                            'text': 'PD Practitioners have built up piecemeal clinical knowledge over time through involvement on projects and exposure to internal company know-how.',
                            'warn': false
                        }],
                    [{
                        'text': 'PD Practitioners are expected to demonstrate relevant clinical understandingfor the area of strategic focus.',
                        'warn': false
                    }, {
                            'text': 'The Needs Finding process is used to align product developments with the intended clinical impact.',
                            'warn': false
                        }, {
                            'text': 'The Company has built up a repository of relevant clinical information and PD Practitioners are encouraged to educate themselves in this area.',
                            'warn': false
                        }, {
                            'text': 'This knowledge is implicitly taken into account during the PD cycle, but is not built in as a formal screening step in the process.',
                            'warn': true
                        }],
                    [{
                        'text': 'The Company has a formal Needs Screening process which includes a systematic review of clinical fundamentals.',
                        'warn': false
                    }, {
                            'text': 'The Needs Screening process includes a relevant review of anatomy/ biology, impact of problem condition, symptoms and clinical outcomes, prevalence, and economic impacts.',
                            'warn': false
                        }, {
                            'text': 'Project approvals and prioritisation will consider all clinical fundamentals and project sponsors will converse in an informed way with all stakeholders.',
                            'warn': false
                        }, {
                            'text': 'Company has a formal process for increasing clinical knowledge within the PD Practitioner organisation in line with area of strategic focus.',
                            'warn': false
                        }]
                ]
            }, //Row
            { //Row  
                'heading': 'Treatment/ Procedural Options',
                'columns': [
                    [{
                        'text': 'The Company builds the most positive positioning for its technology within current procedural options.',
                        'warn': false
                    }, {
                            'text': 'The Company considers Emerging technologies/ alternative approaches when they become a threat in the market.',
                            'warn': false
                        }, {
                            'text': 'The Company has a good understanding of direct competitor technologies that use a similar procedural approach.',
                            'warn': false
                        }, {
                            'text': 'The Company is focused on its own product suite and has an incomplete understanding of procedural approaches.',
                            'warn': true
                        }, {
                            'text': 'The Company understands the clinical condition but the viable treatment/ procedural approaches are not given extensive consideration.',
                            'warn': true
                        }, {
                            'text': 'The Company’s primary area of activity is Incremental developments of existing technologies.',
                            'warn': true
                        }, {
                            'text': 'The Company does not have a formal scientific advisory board process that advises and enlightens their understanding of limitations in existing and potential procedural options',
                            'warn': true
                        }
                    ],
                    [{
                        'text': 'The Company carries out long term projections for clinical conditions and related technologies. ',
                        'warn': false
                    }, {
                            'text': 'The Company reviews the strengths and weaknesses of each technology and these are inputted into the design requirements. ',
                            'warn': false
                        }, {
                            'text': 'The Company looks for \'gaps\' in procedural options i.e. a need that is underserved by existing or emerging technologies.',
                            'warn': false
                        }, {
                            'text': 'The Company reviews and considers Emerging technologies.',
                            'warn': false
                        }, {
                            'text': 'The Company has an informal process for evaluating emerging technologies.',
                            'warn': false
                        }, {
                            'text': 'The Company evaluates User Practitioner skillset requirements and the targeted clinical setting/ personnel are identified.',
                            'warn': false
                        }, {
                            'text': 'The Company meets with scientific advisors to seek advice on limitations of existing procedural options, critical areas for improvement, and potential of emerging technologies.',
                            'warn': false
                        }],
                    [{
                        'text': 'The Company has a formal process to review strengths and weaknesses of current/emerging procedural options.',
                        'warn': false
                    }, {
                            'text': 'The Company has a formal data repository which includes an overview and critique of current/ emerging procedures.',
                            'warn': false
                        }, {
                            'text': 'The Company has a formal process to review total cost analysis of current/emerging procedures.',
                            'warn': false
                        }, {
                            'text': 'The Company has a formal process to review usage rates and pricing of current procedures and projections for emerging procedures.',
                            'warn': false
                        }, {
                            'text': 'The Company has a formal process to complete a risk analysis of each procedural option.',
                            'warn': false
                        }, {
                            'text': 'The Company uses a formal Gap Analysis Matrix process to prioritise procedural options.',
                            'warn': false
                        }, {
                            'text': 'The Company has a formal process to document and maintain a comprehensive Treatment Landscape.',
                            'warn': false
                        }, {
                            'text': 'The Company formally reviews its prioritised procedural options with its scientific advisory board to consider their critique and consider further research/analysis to finalise procedural option priorities.',
                            'warn': false
                        }]
                ]
            }, //Row
            { //Row  
                'heading': 'Stakeholder Analysis',
                'columns': [
                    [{
                        'text': 'The Company considers perceived requirements of the end user/ patient during the design phase of the project.',
                        'warn': false
                    }, {
                            'text': 'The Company consults with the end user and/or patient in order to develop a User Requirement Specification (URS) but does not update the URS as the project progresses.',
                            'warn': false
                        }, {
                            'text': 'The Company’s stakeholder analysis is kept to a small cohort of parties.',
                            'warn': true
                        }, {
                            'text': 'The Company does not validate or update perceived requirements during the design phase of the project.',
                            'warn': true
                        }, {
                            'text': 'The Company’s Design approval may be based on an inaccurate or incomplete URS.',
                            'warn': true
                        }],
                    [{
                        'text': 'The Company identifies all relevant stakeholders (e.g. patients, clinicians, facilities, payors) and consults them informally.',
                        'warn': false
                    }, {
                            'text': 'The Company identifies and prioritises the needs of all stakeholders. ',
                            'warn': false
                        }, {
                            'text': 'The Company includes Regulatory bodies, insurance companies and geographic nuances in its Stakeholder analysis process.',
                            'warn': false
                        }, {
                            'text': 'The Company prioritises Stakeholders in terms of importance and there is clarity on who the key decision makers are and which clinical profession is to be targeted.',
                            'warn': false
                        }, {
                            'text': 'The Company’s Design approval is based on a review of the stakeholder needs prioritisation.',
                            'warn': false
                        }],
                    [{
                        'text': 'The Company has a formal process to identify and track all stakeholder requirements throughout the product development process.',
                        'warn': false
                    }, {
                            'text': 'The Company formally and regularly considers Direct and indirect (hard and soft) benefits for each stakeholder throughout the product development process.',
                            'warn': false
                        }, {
                            'text': 'The Company formally reviews the costs and benefits of the project for each stakeholder cohort to ensure these are clearly understood. ',
                            'warn': false
                        }, {
                            'text': 'The Company’s formal process looks at the complete economic analysis of the project to identify Stakeholder cohort(s) that may be negatively impacted (and who may become blockers).',
                            'warn': false
                        }, {
                            'text': 'The Company develops a holistic communication of project benefits and establishes consensus among all Stakeholders to avoid “silo” blocking and maximise project adoption.',
                            'warn': false
                        }]
                ]
            }, //Row
            { //Row  
                'heading': 'Market Analysis',
                'columns': [
                    [{
                        'text': 'The Company focuses Product Developments on existing customers and existing segments.',
                        'warn': false
                    }, {
                            'text': 'The Company’s Product Development (PD) is focused on iterative improvements targeting existing market.',
                            'warn': false
                        }, {
                            'text': 'The Company understands their existing target market but does not proactively assess Market dynamics and may miss important changes to end user/patient preferences, payers, and regulators/regulations.',
                            'warn': false
                        }],
                    [{
                        'text': 'The Company uses high level market Analysis tools (e.g. 5 Forces and SWOT) to capture an understanding of the market dynamics before undertaking new PD projects.',
                        'warn': false
                    }, {
                            'text': 'The Company makes limited use of external data in the analysis of its target market.',
                            'warn': false
                        }, {
                            'text': 'The Company’s PD projects take account of its understanding and analysis of market dynamics and some of this is reflected in its iterative improvements to products for existing target markets.',
                            'warn': false
                        }],
                    [{
                        'text': 'The Company uses a formal multistage to support detailed market analysis.',
                        'warn': false
                    }, {
                            'text': 'The Company constantly challenges and re-evaluates the market opportunity as market dynamics change and throughout the PD cycle.',
                            'warn': false
                        }, {
                            'text': 'The Company uses the data from the multi stage process to prepare useful market analysis information for presentation to all stakeholders.',
                            'warn': false
                        }, {
                            'text': 'The Company uses the multistage process to challenge and model market data/ information/ assumptions to improve accuracy and avoid pitfalls relating to over/ underestimating market dynamics.',
                            'warn': false
                        }]
                ]
            }, //Row
            { //Row  
                'heading': 'Needs Filtering',
                'columns': [
                    [{
                        'text': 'The company has invested in market research. However, market research not given due emphasis and priorities are set based primarily on intuition.',
                        'warn': false
                    }, {
                            'text': 'The Company overlooks the opportunity to combine analysis with intuition to establish and prioritise needs.',
                            'warn': false
                        }, {
                            'text': 'The Company does not clearly articulate the key factors to be evaluated in the selection process to identify and prioritise needs.',
                            'warn': false
                        }, {
                            'text': 'The Company defaults to incremental improvements to existing portfolio or risks making subjective decisions on emerging innovation opportunities.',
                            'warn': false
                        }],
                    [{
                        'text': 'The Company relies on quantitative scores for initial filtering of needs, but as further analysis is done on reducing the selection, qualitative reasoning comes more to the fore.',
                        'warn': false
                    }, {
                            'text': 'The Company puts in place a formal rating system to supplement intuition with a more objective scoring of key factors when selecting and prioritisation needs.',
                            'warn': false
                        }, {
                            'text': 'The Needs Specification focuses on the problem, opportunity, and need criteria and does not focus on the solution.',
                            'warn': false
                        }, {
                            'text': 'The Company documents a Needs Specification for each selected Need that summarises the gathered data but not updated throughout the PD cycle.',
                            'warn': false
                        }],
                    [{
                        'text': 'The Company has implemented a formal process to identify and continually refresh key factors in the selection of needs.',
                        'warn': false
                    }, {
                            'text': 'The Company has a formal process to organise identified needs/ opportunities in different portfolio categories (e.g. Blue-sky, mixed, incremental) that takes account of the desired mix of categories.',
                            'warn': false
                        }, {
                            'text': 'The Company prepares Needs Specifications that are live documents are based on the portfolio of needs and are continually updated as its understanding of needs data emerges and evolves.',
                            'warn': false
                        }, {
                            'text': 'The Company’s needs selection process enables it and requires it to revert back into the previous stages if emerging data indicates a potential change of direction should be considered.',
                            'warn': false
                        }]
                ]
            } //Row
        ];
    });
