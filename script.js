// App State
let appState = {
    allQuestions: [],
    currentQuizSet: [],
    currentIndex: 0,
    score: 0,
    userAnswers: {}, // Stores { [questionIndex]: selectedOptionIndex }
    mode: 'full'
};

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startFullBtn = document.getElementById('start-full-test');
const startReviewBtn = document.getElementById('start-review-test');
const weeklyGrid = document.getElementById('weekly-grid');

const questionNumberTxt = document.getElementById('question-number');
const questionTxt = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const progressBar = document.getElementById('progress-bar');

const scoreValueTxt = document.getElementById('score-value');
const scoreMessageTxt = document.getElementById('score-message');
const resultDetailContainer = document.getElementById('result-detail');

// Initialize
function init() {
    // Generate Weekly Cards
    weeklyGrid.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        const card = document.createElement('div');
        card.className = 'week-card';
        card.innerHTML = `
            <span class="week-title">Week ${i}</span>
            <div class="week-actions">
                <button class="action-btn btn-start" onclick="startQuiz('weekly', ${i})">
                    <span>📝 Quiz</span>
                </button>
                <a href="esd_${i}.pdf" class="action-btn btn-pdf" target="_blank">
                    <span>📄 PDF</span>
                </a>
            </div>
        `;
        weeklyGrid.appendChild(card);
    }

    // Set questions from global
    appState.allQuestions = [...questions];

    setupEventListeners();
}

function setupEventListeners() {
    if (startReviewBtn) {
        startReviewBtn.addEventListener('click', () => startQuiz('full'));
    }
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);
}

// Start Quiz Logic
function startQuiz(mode, week = null) {
    appState.currentIndex = 0;
    appState.score = 0;
    appState.userAnswers = {};

    if (mode === 'full') {
        appState.currentQuizSet = shuffleArray([...appState.allQuestions]);
    } else {
        appState.currentQuizSet = shuffleArray(appState.allQuestions.filter(q => q.week === week));
    }

    if (appState.currentQuizSet.length === 0) {
        alert("No questions found for this selection.");
        return;
    }

    showScreen('quiz');
    displayQuestion();
}

// Question Flow
function displayQuestion() {
    const q = appState.currentQuizSet[appState.currentIndex];
    
    // UI Update
    prevBtn.disabled = (appState.currentIndex === 0);
    nextBtn.textContent = (appState.currentIndex === appState.currentQuizSet.length - 1) ? 'Finish' : 'Next';
    
    questionNumberTxt.textContent = `Question ${appState.currentIndex + 1} of ${appState.currentQuizSet.length}`;
    questionTxt.textContent = q.question;
    
    const progress = (appState.currentIndex / appState.currentQuizSet.length) * 100;
    progressBar.style.width = `${progress}%`;

    optionsContainer.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        if (appState.userAnswers[appState.currentIndex] === idx) {
            btn.classList.add('selected');
        }
        btn.textContent = opt;
        btn.onclick = () => selectOption(idx, btn);
        optionsContainer.appendChild(btn);
    });

    // Only allow "Next" if an option is selected or we've already answered it before
    nextBtn.disabled = (appState.userAnswers[appState.currentIndex] === undefined);
}

function selectOption(index, btnElement) {
    appState.userAnswers[appState.currentIndex] = index;
    
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    btnElement.classList.add('selected');
    
    nextBtn.disabled = false;
}

function handleNext() {
    if (appState.currentIndex < appState.currentQuizSet.length - 1) {
        appState.currentIndex++;
        displayQuestion();
    } else {
        calculateAndShowResults();
    }
}

function handlePrev() {
    if (appState.currentIndex > 0) {
        appState.currentIndex--;
        displayQuestion();
    }
}

// Results Logic
function calculateAndShowResults() {
    appState.score = 0;
    const logs = [];

    appState.currentQuizSet.forEach((q, i) => {
        const selected = appState.userAnswers[i];
        const isCorrect = (selected !== undefined) && (selected === q.answer);
        if (isCorrect) appState.score++;
        
        logs.push({
            question: q.question,
            selected: selected !== undefined ? q.options[selected] : "Not answered",
            correct: q.options[q.answer],
            isCorrect: isCorrect
        });
    });

    showScreen('result');
    progressBar.style.width = '100%';

    const score = appState.score;
    const total = appState.currentQuizSet.length;
    scoreValueTxt.textContent = `${score}`;
    
    const percentage = (score / total) * 100;
    if (percentage >= 80) scoreMessageTxt.textContent = "Outstanding! You are a master of ESD. 🏆";
    else if (percentage >= 50) scoreMessageTxt.textContent = "Well done! Great progress. 🌟";
    else scoreMessageTxt.textContent = "Keep studying. Success is near! 📖";

    resultDetailContainer.innerHTML = '<h3>Review Questions</h3>';
    logs.forEach((log, i) => {
        const item = document.createElement('div');
        item.className = `result-item ${log.isCorrect ? 'correct' : 'wrong'}`;
        item.innerHTML = `
            <span class="res-q">${i+1}. ${log.question}</span>
            <div class="res-a">
                ${log.isCorrect 
                    ? `<span class="correct-ans">✓ Correct</span>` 
                    : `<span class="wrong-ans">✗ Incorrect</span><br>
                       <small>Your Choice: ${log.selected}</small><br>
                       <small>Right Answer: <span class="correct-ans">${log.correct}</span></small>`}
            </div>
        `;
        resultDetailContainer.appendChild(item);
    });
}

// Utility
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(`${screenId}-screen`).classList.add('active');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function goToHome() {
    if (appState.currentIndex > 0 && appState.currentIndex < appState.currentQuizSet.length && document.getElementById('quiz-screen').classList.contains('active')) {
        if (!confirm("Are you sure you want to exit the quiz? Your progress will be lost.")) {
            return;
        }
    }
    showScreen('welcome');
}

function exitApp() {
    if (confirm("Are you sure you want to exit the Quiz Portal?")) {
        window.close();
        // Fallback if window.close doesn't work
        alert("Please close this tab to exit. Thank you for using the NPTEL Sustainability Quiz!");
    }
}

// Start the app
window.onload = init;
