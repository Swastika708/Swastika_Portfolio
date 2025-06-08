import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div id='skills' className="skills">
        <div className="skills-title">
            <h1>Skills</h1>
        </div>
      <h2>Languages and Databases</h2>
      <div className="skill-category">
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
          <p>PostgreSQL</p>
        </div>
      </div>

      <h2>Libraries</h2>
      <div className="skill-category">
        <div className="skill-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" alt="NumPy" />
          <p>NumPy</p>
        </div>
        <div className="skill-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" alt="Pandas" />
          <p>Pandas</p>
        </div>
        <div className="skill-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" alt="OpenCV" />
          <p>OpenCV</p>
        </div>
        <div className="skill-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" />
          <p>Scikit-learn</p>
        </div>
        <div className="skill-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" alt="Matplotlib" />
          <p>Matplotlib</p>
        </div>
      </div>
   <h2>Frameworks</h2>
      <div className="skill-category">
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" />
          <p>Django</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div className="skill-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" alt="Keras" />
          <p>Keras</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
          <p>TensorFlow</p>
        </div>
      </div>

      {/* Other Tools */}
      <h2>Other</h2>
      <div className="skill-category">
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          <p>Git</p>
        </div>
        <div className="skill-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="AWS" />
          <p>AWS</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
