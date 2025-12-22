---
layout: page
title: Services
permalink: /services/
description: Academic service and professional contributions
nav: true
nav_order: 6
---

<style>
.service-container {
  max-width: 1000px;
  margin: 0 auto;
}

.award-conference {
  background: linear-gradient(135deg, var(--global-bg-color) 0%, rgba(var(--global-theme-color-rgb), 0.05) 100%);
  border-left: 4px solid #FFD700;
}

.award-badge {
  margin-top: 0.5rem;
  padding: 0.3rem 0.6rem;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #000;
  font-weight: 600;
  font-size: 0.85rem;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 0 2px 4px rgba(255, 215, 0, 0.3);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--global-theme-color);
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--global-theme-color);
  padding-bottom: 0.5rem;
}

.subsection-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--global-text-color);
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.conference-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.conference-item {
  padding: 1rem;
  background: var(--global-bg-color);
  border-left: 3px solid var(--global-theme-color);
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.conference-item:hover {
  transform: translateX(5px);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.conf-name {
  font-weight: 600;
  color: var(--global-text-color);
  font-size: 1.05rem;
  margin-bottom: 0.3rem;
}

.conf-acronym {
  color: var(--global-theme-color);
  font-weight: 600;
}

.conf-years {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
  font-style: italic;
}

.journal-list {
  display: grid;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.journal-item {
  padding: 0.8rem 1rem;
  background: var(--global-bg-color);
  border-left: 3px solid var(--global-theme-color);
  border-radius: 4px;
}

.journal-name {
  font-weight: 500;
  color: var(--global-text-color);
}

.journal-abbr {
  color: var(--global-theme-color);
  font-weight: 600;
}

.mentee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.mentee-card {
  padding: 1.2rem;
  background: var(--global-bg-color);
  border: 1px solid var(--global-divider-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.mentee-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.12);
}

.mentee-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--global-text-color);
  margin-bottom: 0.5rem;
}

.mentee-name a {
  color: var(--global-text-color);
  text-decoration: none;
  transition: color 0.2s;
}

.mentee-name a:hover {
  color: var(--global-theme-color);
  text-decoration: underline;
}

.mentee-current {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid var(--global-divider-color);
  color: var(--global-theme-color);
  font-size: 0.9rem;
  font-weight: 500;
}

.mentee-role {
  color: var(--global-theme-color);
  font-weight: 500;
  font-size: 0.95rem;
  margin-bottom: 0.3rem;
}

.mentee-affiliation {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
}

.leadership-box {
  padding: 1.5rem;
  background: var(--global-bg-color);
  border: 2px solid var(--global-theme-color);
  border-radius: 8px;
  margin-bottom: 2rem;
}

.leadership-role {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--global-theme-color);
  margin-bottom: 0.5rem;
}

.leadership-org {
  font-weight: 500;
  color: var(--global-text-color);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .conference-grid,
  .mentee-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="service-container">

<div class="section-title">Program Committee Member & Reviewer</div>

<div class="subsection-title">Conferences</div>

<div class="conference-grid">
  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">AAAI</span> – Conference on Artificial Intelligence</div>
    <div class="conf-years">2023, 2024, 2025, 2026</div>
  </div>

  <div class="conference-item award-conference">
    <div class="conf-name"><span class="conf-acronym">AISTATS</span> – International Conference on Artificial Intelligence and Statistics</div>
    <div class="conf-years">2025, 2026</div>
    <div class="award-badge">🏆 Best Reviewer Award</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">BMVC</span> – British Machine Vision Conference</div>
    <div class="conf-years">2024, 2025</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">CVPR</span> – IEEE/CVF Conference on Computer Vision and Pattern Recognition</div>
    <div class="conf-years">2025, 2026</div>
  </div>

  <div class="conference-item award-conference">
    <div class="conf-name"><span class="conf-acronym">ECCV</span> – European Conference on Computer Vision</div>
    <div class="conf-years">2024</div>
    <div class="award-badge">🏆 Outstanding Reviewer Award</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">ICCV</span> – International Conference on Computer Vision</div>
    <div class="conf-years">2025</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">ICML</span> – International Conference on Machine Learning</div>
    <div class="conf-years">2025</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">ICLR</span> – International Conference on Learning Representations</div>
    <div class="conf-years">2025, 2026</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">IJCAI</span> – International Joint Conference on Artificial Intelligence</div>
    <div class="conf-years">2025</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">IJCNN</span> – International Joint Conference on Neural Networks</div>
    <div class="conf-years">2025</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">ISBI</span> – International Symposium on Biomedical Imaging</div>
    <div class="conf-years">2024, 2025, 2026</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">MICCAI</span> – International Conference on Medical Image Computing and Computer Assisted Intervention</div>
    <div class="conf-years">2024, 2025</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">MIDL</span> – Medical Imaging with Deep Learning</div>
    <div class="conf-years">2023</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">ML4H</span> – Machine Learning for Health</div>
    <div class="conf-years">2023</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">NeurIPS</span> – Conference on Neural Information Processing Systems</div>
    <div class="conf-years">2024, 2025</div>
  </div>

  <div class="conference-item">
    <div class="conf-name"><span class="conf-acronym">ShapeMI</span> – MICCAI Workshop on Shape in Medical Imaging</div>
    <div class="conf-years">2024</div>
  </div>

</div>

<div class="subsection-title">Journals</div>

<div class="journal-list">
  <div class="journal-item">
    <span class="journal-name"><span class="journal-abbr">IEEE TNNLS</span> – IEEE Transactions on Neural Networks and Learning Systems</span>
  </div>
  
  <div class="journal-item">
    <span class="journal-name"><span class="journal-abbr">IEEE TMI</span> – IEEE Transactions on Medical Imaging</span>
  </div>
  
  <div class="journal-item">
    <span class="journal-name">Medical Physics Journal</span>
  </div>
</div>

<div class="section-title">Mentoring</div>

<div class="mentee-grid">
  <div class="mentee-card">
    <div class="mentee-name"><a href="https://www.linkedin.com/in/farhanaswarnali/" target="_blank">Farhana Hossain Swarnali</a></div>
    <div class="mentee-role">Student Researcher</div>
    <div class="mentee-affiliation">CSE, AUST</div>
    <div class="mentee-current">Current: AI Software Engineeri at Genuity Systems Ltd.</div>
  </div>

  <div class="mentee-card">
    <div class="mentee-name"><a href="https://www.linkedin.com/in/ish--gupta/" target="_blank">Ishita Gupta</a></div>
    <div class="mentee-role">Graduate Student</div>
    <div class="mentee-affiliation">CS, University of Virginia</div>
    <div class="mentee-current">Current: AI/ML Software Engineer at Alai Studios</div>
  </div>

  <div class="mentee-card">
    <div class="mentee-name"><a href="https://www.linkedin.com/in/amirraj/" target="_blank">Amir Hossain Raj</a></div>
    <div class="mentee-role">Undergraduate Student</div>
    <div class="mentee-affiliation">Ahsanullah University of Science and Technology</div>
    <div class="mentee-current">Current: PhD Student at George Mason University</div>
  </div>

  <div class="mentee-card">
    <div class="mentee-name">Hyemin Yang</div>
    <div class="mentee-role">Undergraduate Student Researcher</div>
    <div class="mentee-affiliation">DGIST, South Korea</div>
  </div>
</div>

<div class="section-title">Leadership</div>

<div class="leadership-box">
  <div class="leadership-role">Co-Chair & Graduate Program Representative</div>
  <div class="leadership-org">Computer Science Graduate Student Group (CSGSG)</div>
  <div class="leadership-affiliation">University of Virginia</div>
  <div class="award-badge" style="margin-top: 0.8rem;">🏆 Outstanding Graduate Service Award</div>
</div>