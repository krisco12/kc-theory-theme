// ADHD Focus Type Quiz - Main Application
class ADHDQuiz {
  constructor() {
    this.currentQuestion = 0;
    this.answers = [];
    this.quizContainer = document.getElementById('adhd-quiz-container');
    this.init();
  }

  init() {
    this.renderWelcome();
  }

  renderWelcome() {
    this.quizContainer.innerHTML = `
      <div class="quiz-welcome">
        <div class="quiz-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" fill="#9333EA" opacity="0.1"/>
            <path d="M40 20C28.954 20 20 28.954 20 40C20 51.046 28.954 60 40 60C51.046 60 60 51.046 60 40C60 28.954 51.046 20 40 20Z" fill="#9333EA"/>
            <path d="M40 30C34.477 30 30 34.477 30 40C30 45.523 34.477 50 40 50C45.523 50 50 45.523 50 40C50 34.477 45.523 30 40 30Z" fill="white"/>
          </svg>
        </div>
        <h1 class="quiz-title">${quizData.title}</h1>
        <p class="quiz-subtitle">${quizData.subtitle}</p>
        <div class="quiz-duration">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/>
            <path d="M10 5V10L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>${quizData.duration}</span>
        </div>
        <button class="quiz-btn quiz-btn-primary" onclick="adhdQuiz.startQuiz()">Start Quiz</button>
        <div class="quiz-disclaimer">
          <p>${quizData.disclaimer}</p>
        </div>
      </div>
    `;
  }

  startQuiz() {
    this.currentQuestion = 0;
    this.answers = [];
    this.renderQuestion();
  }

  renderQuestion() {
    const question = quizData.questions[this.currentQuestion];
    const progress = ((this.currentQuestion + 1) / quizData.questions.length) * 100;
    
    this.quizContainer.innerHTML = `
      <div class="quiz-question-container">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width: ${progress}%"></div>
        </div>
        <div class="quiz-question-number">Question ${this.currentQuestion + 1} of ${quizData.questions.length}</div>
        <h2 class="quiz-question-text">${question.question}</h2>
        <div class="quiz-options">
          ${question.options.map((option, index) => `
            <button class="quiz-option" onclick="adhdQuiz.selectAnswer(${index}, '${option.type}')">
              <span class="quiz-option-radio"></span>
              <span class="quiz-option-text">${option.text}</span>
            </button>
          `).join('')}
        </div>
        ${this.currentQuestion > 0 ? `
          <button class="quiz-btn quiz-btn-secondary" onclick="adhdQuiz.previousQuestion()">Previous</button>
        ` : ''}
      </div>
    `;
  }

  selectAnswer(optionIndex, type) {
    this.answers[this.currentQuestion] = type;
    
    // Visual feedback
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
      opt.classList.remove('selected');
      if (idx === optionIndex) {
        opt.classList.add('selected');
      }
    });
    
    // Auto-advance after a short delay
    setTimeout(() => {
      this.nextQuestion();
    }, 300);
  }

  nextQuestion() {
    if (this.currentQuestion < quizData.questions.length - 1) {
      this.currentQuestion++;
      this.renderQuestion();
    } else {
      this.showResults();
    }
  }

  previousQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.renderQuestion();
    }
  }

  calculateResult() {
    const counts = {
      hyperactive: 0,
      inattentive: 0,
      combined: 0,
      executive: 0
    };
    
    this.answers.forEach(answer => {
      if (counts.hasOwnProperty(answer)) {
        counts[answer]++;
      }
    });
    
    // Find the type with the highest count
    let maxCount = 0;
    let resultType = 'combined';
    
    for (const [type, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        resultType = type;
      }
    }
    
    return resultType;
  }

  showResults() {
    const resultType = this.calculateResult();
    const result = quizData.results[resultType];
    
    this.quizContainer.innerHTML = `
      <div class="quiz-results">
        <div class="quiz-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" fill="#9333EA" opacity="0.1"/>
            <path d="M40 20C28.954 20 20 28.954 20 40C20 51.046 28.954 60 40 60C51.046 60 60 51.046 60 40C60 28.954 51.046 20 40 20Z" fill="#9333EA"/>
            <path d="M30 40L36 46L50 32" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h1 class="quiz-result-title">${result.title}</h1>
        <h2 class="quiz-result-subtitle">${result.subtitle}</h2>
        <p class="quiz-result-description">${result.description}</p>
        
        <div class="quiz-result-section">
          <h3>Your Strengths</h3>
          <ul class="quiz-result-list">
            ${result.strengths.map(strength => `<li>${strength}</li>`).join('')}
          </ul>
        </div>
        
        <div class="quiz-result-section">
          <h3>Common Challenges</h3>
          <ul class="quiz-result-list">
            ${result.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
          </ul>
        </div>
        
        <div class="quiz-result-section">
          <h3>Personalized Strategies</h3>
          <ul class="quiz-result-list quiz-result-strategies">
            ${result.strategies.map(strategy => `<li>${strategy}</li>`).join('')}
          </ul>
        </div>
        
        <div class="quiz-email-capture">
          <h3>Get Your Personalized Action Plan</h3>
          <p>Enter your email to receive a detailed PDF guide with strategies tailored to your focus type.</p>
          <form class="quiz-email-form" onsubmit="adhdQuiz.submitEmail(event)">
            <input type="email" id="quiz-email-input" placeholder="your@email.com" required>
            <button type="submit" class="quiz-btn quiz-btn-primary">Send My Results</button>
          </form>
          <p class="quiz-email-privacy">We respect your privacy. Unsubscribe anytime.</p>
        </div>
        
        <button class="quiz-btn quiz-btn-secondary" onclick="adhdQuiz.retakeQuiz()">Retake Quiz</button>
      </div>
    `;
  }

  submitEmail(event) {
    event.preventDefault();
    const email = document.getElementById('quiz-email-input').value;
    const resultType = this.calculateResult();
    
    // Store the email and result (you can integrate with Shopify customer data or email service)
    console.log('Email submitted:', email, 'Result type:', resultType);
    
    // Show success message
    const form = event.target;
    form.innerHTML = `
      <div class="quiz-email-success">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" stroke="#10B981" stroke-width="2"/>
          <path d="M7 12L10 15L17 8" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>Success! Check your email for your personalized action plan.</span>
      </div>
    `;
  }

  retakeQuiz() {
    this.currentQuestion = 0;
    this.answers = [];
    this.renderWelcome();
  }
}

// Initialize quiz when DOM is loaded
let adhdQuiz;
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('adhd-quiz-container')) {
    adhdQuiz = new ADHDQuiz();
  }
});
