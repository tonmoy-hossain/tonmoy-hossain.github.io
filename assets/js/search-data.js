// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-services",
          title: "Services",
          description: "Academic service and professional contributions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-through-my-lens",
          title: "Through My Lens",
          description: "A visual journey through places and moments",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-one-journal-paper-got-accepted",
          title: 'One journal paper got accepted.',
          description: "",
          section: "News",},{id: "news-one-journal-paper-got-accepted-to-international-journal-of-advanced-computer-science-and-applications-ijacsa",
          title: 'One journal paper got accepted to International Journal of Advanced Computer Science and...',
          description: "",
          section: "News",},{id: "news-ranked-7th-position-at-inter-university-math-olympiad",
          title: 'Ranked 7th position at Inter University Math Olympiad',
          description: "",
          section: "News",},{id: "news-one-paper-got-accepted-to-icasert-2019",
          title: 'One paper got accepted to ICASERT 2019',
          description: "",
          section: "News",},{id: "news-attended-icasert-2019-in-dhaka-bangladesh-and-presented-a-paper",
          title: 'Attended ICASERT 2019, in Dhaka, Bangladesh, and presented a paper.',
          description: "",
          section: "News",},{id: "news-successfully-defended-my-b-sc-thesis",
          title: 'Successfully defended my B.Sc. Thesis.',
          description: "",
          section: "News",},{id: "news-joined-as-an-adjunct-lecturer-in-the-department-of-cse-ahsanullah-university-of-science-and-technology",
          title: 'Joined as an Adjunct Lecturer in the Department of CSE, Ahsanullah University of...',
          description: "",
          section: "News",},{id: "news-one-paper-got-accepted-to-iccit-2019",
          title: 'One paper got accepted to ICCIT 2019.',
          description: "",
          section: "News",},{id: "news-one-paper-got-accepted-to-eict-2019",
          title: 'One paper got accepted to EICT 2019.',
          description: "",
          section: "News",},{id: "news-attended-iccit-2019-in-dhaka-bangladesh-and-presented-a-paper",
          title: 'Attended ICCIT 2019, in Dhaka, Bangladesh and presented a paper.',
          description: "",
          section: "News",},{id: "news-a-paper-was-presented-at-eict-2019",
          title: 'A paper was presented at EICT 2019.',
          description: "",
          section: "News",},{id: "news-joined-as-a-lecturer-in-the-department-of-cse-ahsanullah-university-of-science-and-technology",
          title: 'Joined as a Lecturer in the Department of CSE, Ahsanullah University of Science...',
          description: "",
          section: "News",},{id: "news-one-paper-got-accepted-to-tensymp-2020",
          title: 'One paper got accepted to Tensymp 2020.',
          description: "",
          section: "News",},{id: "news-a-short-paper-was-presented-at-tensymp-2020-presentation",
          title: 'A short paper was presented at Tensymp 2020 (presentation).',
          description: "",
          section: "News",},{id: "news-a-long-paper-was-accepted-at-icacie-2020",
          title: 'A long paper was accepted at ICACIE 2020.',
          description: "",
          section: "News",},{id: "news-a-pre-print-version-of-a-journal-submitted-paper-is-published-at-research-square",
          title: 'A pre-print version of a journal submitted paper is published at Research Square....',
          description: "",
          section: "News",},{id: "news-a-long-paper-was-accepted-at-ieee-iemcon-2020",
          title: 'A long paper was accepted at IEEE-IEMCON 2020.',
          description: "",
          section: "News",},{id: "news-a-short-paper-was-accepted-at-icaict-2020",
          title: 'A short paper was accepted at ICAICT 2020.',
          description: "",
          section: "News",},{id: "news-a-long-paper-was-accepted-at-iccit-2020",
          title: 'A long paper was accepted at ICCIT 2020.',
          description: "",
          section: "News",},{id: "news-one-paper-won-the-best-paper-award-under-data-mining-and-data-analytics-and-big-data-category-at-ieee-iemcon-2020",
          title: 'One paper won the Best Paper Award under Data Mining and Data Analytics...',
          description: "",
          section: "News",},{id: "news-one-short-paper-was-accepted-at-icece-2020",
          title: 'One short paper was accepted at ICECE 2020.',
          description: "",
          section: "News",},{id: "news-one-long-paper-is-accepted-at-springer-nature-computer-science-journal",
          title: 'One long paper is accepted at Springer Nature Computer Science Journal.',
          description: "",
          section: "News",},{id: "news-one-paper-won-the-3rd-best-paper-award-at-iccit-2020",
          title: 'One paper won the 3rd Best Paper Award at ICCIT 2020.',
          description: "",
          section: "News",},{id: "news-one-long-paper-is-accepted-at-springer-nature-computer-science-journal",
          title: 'One long paper is accepted at Springer Nature Computer Science  Journal.',
          description: "",
          section: "News",},{id: "news-one-long-survey-paper-is-accepted-and-published-at-springer-nature-computer-science-journal",
          title: 'One long survey paper is accepted and published at Springer Nature Computer Science...',
          description: "",
          section: "News",},{id: "news-started-working-as-graduate-program-representative-at-uva-csgsg",
          title: 'Started working as Graduate Program Representative at UVA CSGSG.',
          description: "",
          section: "News",},{id: "news-reached-100-citations-on-my-google-scholar-profile",
          title: 'Reached 100+ citations on my Google Scholar profile.',
          description: "",
          section: "News",},{id: "news-i-have-started-working-with-professor-miaomiao-zhang-as-my-ph-d-advisor-i-ll-be-working-in-the-field-of-computer-vision-concentrating-on-generative-ai-and-causal-inference-for-any-kind-of-collaboration-don-t-hesitate-to-communicate",
          title: 'I have started working with Professor Miaomiao Zhang as my Ph.D. advisor. I’ll...',
          description: "",
          section: "News",},{id: "news-our-paper-on-multimodal-deep-learning-to-differentiate-tumor-recurrence-from-treatment-effect-in-human-glioblastoma-was-accepted-at-isbi-2023",
          title: 'Our paper on Multimodal Deep Learning to Differentiate Tumor Recurrence from Treatment Effect...',
          description: "",
          section: "News",},{id: "news-our-paper-on-sadir-shape-aware-diffusion-models-for-3d-image-reconstruction-was-accepted-at-miccai-shapemi-2023",
          title: 'Our paper on SADIR: Shape-Aware Diffusion Models for 3D Image Reconstruction was accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-on-diffusion-models-to-predict-3d-late-mechanical-activation-from-sparse-2d-cardiac-mris-was-accepted-at-ml4h-2023",
          title: 'Our paper on Diffusion Models To Predict 3D Late Mechanical Activation From Sparse...',
          description: "",
          section: "News",},{id: "news-received-the-best-thematic-paper-award-at-ml4h-2023-for-the-paper-diffusion-models-to-predict-3d-late-mechanical-activation-from-sparse-2d-cardiac-mris",
          title: 'Received the Best Thematic Paper Award at ML4H 2023 for the paper ‘Diffusion...',
          description: "",
          section: "News",},{id: "news-honored-to-be-accepted-into-the-aaai-24-student-scholarship-and-volunteer-program-with-gratitude-for-the-opportunity",
          title: 'Honored to be accepted into the AAAI-24 Student Scholarship and Volunteer Program, with...',
          description: "",
          section: "News",},{id: "news-defended-my-ph-d-dissertation-on-unifying-geometric-shape-and-image-texture-representations-for-healthcare-applications",
          title: 'Defended my Ph.D. dissertation on unifying geometric shape and image texture representations for...',
          description: "",
          section: "News",},{id: "news-honored-with-the-outstanding-graduate-service-award-from-the-department-of-computer-science-at-the-university-of-virginia",
          title: 'Honored with the Outstanding Graduate Service Award from the Department of Computer Science...',
          description: "",
          section: "News",},{id: "news-awarded-the-copenhaver-charitable-trust-bicentennial-fellowship-by-the-university-of-virginia",
          title: 'Awarded the Copenhaver Charitable Trust Bicentennial Fellowship by the University of Virginia.',
          description: "",
          section: "News",},{id: "news-our-paper-on-invariant-shape-representation-learning-for-image-classification-was-accepted-at-wacv-2025",
          title: 'Our paper on Invariant Shape Representation Learning For Image Classification was accepted at...',
          description: "",
          section: "News",},{id: "news-honored-with-the-outstanding-reviewer-award-at-eccv-2024-for-contributions-to-the-peer-review-process-for-more-details-visit-the-outstanding-reviewers-page-on-eccv-2024",
          title: 'Honored with the Outstanding Reviewer Award at ECCV 2024 for contributions to the...',
          description: "",
          section: "News",},{id: "news-our-paper-on-corld-contrastive-representation-learning-of-deformable-shapes-in-images-was-accepted-at-ipmi-2025",
          title: 'Our paper on CoRLD: Contrastive Representation Learning Of Deformable Shapes In Images was...',
          description: "",
          section: "News",},{id: "news-our-paper-on-mgaug-multimodal-geometric-augmentation-in-latent-spaces-of-image-deformations-was-accepted-at-medical-image-analysis-journal",
          title: 'Our paper on MGAug: Multimodal Geometric Augmentation in Latent Spaces of Image Deformations...',
          description: "",
          section: "News",},{id: "news-honored-with-the-best-reviewer-award-at-aistats-2025-as-recognized-on-the-aistats-2025-awards-page",
          title: 'Honored with the Best Reviewer Award at AISTATS 2025, as recognized on the...',
          description: "",
          section: "News",},{id: "news-our-paper-on-learning-group-actions-in-disentangled-latent-image-representations-was-accepted-at-wacv-2026",
          title: 'Our paper on Learning Group Actions In Disentangled Latent Image Representations was accepted...',
          description: "",
          section: "News",},{id: "news-honored-to-receive-travel-support-for-attending-the-aaai-2026-doctoral-consortium-in-singapore",
          title: 'Honored to receive travel support for attending the AAAI 2026 Doctoral Consortium in...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%68%6F%73%73%61%69%6E%33@%6D%67%68.%68%61%72%76%61%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tonmoy-hossain-dihan", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JoLJE7AAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/TonmoyHDihan", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
