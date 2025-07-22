/* General Body and HTML structure */
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f4f7f6;
    color: #333;
    direction: rtl; /* For Arabic text alignment */
    text-align: right; /* For Arabic text alignment */
}

/* Welcome Screen */
#welcome-screen {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
}
#welcome-screen > div {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    text-align: center;
    max-width: 400px;
    width: 90%;
}
#welcome-screen h1 {
    color: #333;
    margin-bottom: 25px;
    font-size: 2em;
}
#welcome-screen p {
    color: #666;
    margin-bottom: 30px;
    font-size: 1.1em;
}
#userNameInput {
    width: calc(100% - 20px);
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1em;
    text-align: center;
}

/* General Button Styles */
button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 30px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
}
button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}
#removeMainBookButton, #removeMainAudioBookButton { /* Changed from replace to remove */
    background-color: #dc3545;
}
#removeMainBookButton:hover, #removeMainAudioBookButton:hover {
    background-color: #c82333;
}
#chooseFileButton, #chooseAudioFileButton {
    background-color: #28a745;
}
#chooseFileButton:hover, #chooseAudioFileButton:hover {
    background-color: #218838;
}
#saveNotesButton {
    background-color: #ffc107; /* Orange for notes save */
    color: #333;
    margin-top: 20px;
}
#saveNotesButton:hover {
    background-color: #e0a800;
    transform: translateY(-2px);
}


/* Dashboard Layout */
#dashboard {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden; /* Prevent body scroll, main will scroll */
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
header h1 {
    color: #333;
    font-size: 1.8em;
    margin: 0;
}
header p {
    color: #555;
    font-size: 1.1em;
    margin: 0;
}
#displayedUserName {
    color: #007bff;
}

/* Main Dashboard Content Area (Sidebar + Main Content) */
.dashboard-content-area {
    display: flex;
    flex-grow: 1; /* Take remaining vertical space */
    min-height: calc(100vh - 70px); /* Adjust based on header height */
}

/* Sidebar */
aside {
    width: 250px;
    background-color: #2c3e50;
    color: white;
    padding: 25px;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0; /* Prevent shrinking */
    overflow-y: auto; /* Enable scrolling for sidebar if content overflows */
}
aside h2 {
    margin-bottom: 30px;
    color: #ecf0f1;
    font-size: 1.5em;
}
.progress-circle {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #34495e;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5em;
    font-weight: bold;
    color: #2ecc71;
    border: 5px solid #2ecc71;
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
}
aside p {
    margin-top: 20px;
    font-size: 1.1em;
    text-align: center;
    color: #bdc3c7;
}
aside ul {
    list-style: none;
    padding: 0;
    margin-top: 40px;
    width: 100%;
}
.sidebar-item {
    padding: 12px 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 8px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-size: 1em;
    text-align: center;
}
.sidebar-item:hover {
    background-color: #34495e;
    transform: translateX(5px);
}
.sidebar-item.active {
    background-color: #007bff;
    color: white;
    font-weight: bold;
}

/* Main Content Area */
main {
    flex-grow: 1;
    padding: 30px;
    overflow-y: auto; /* Enable scrolling for main content */
}
.card {
    background-color: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    margin-bottom: 30px; /* Spacing between cards if multiple */
}
.card h1, .card h2, .card h3 {
    color: #333;
    margin-bottom: 25px;
    font-size: 2em; /* Adjusted for consistency */
}
.card p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;
}
.note {
    margin-top: 30px;
    color: #777;
    font-size: 0.9em;
    text-align: center;
}

/* New Main Dashboard Buttons Grid */
.main-buttons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
    padding: 20px;
    justify-content: center;
    align-items: center;
    max-width: 1000px; /* Limit width */
    margin: 40px auto; /* Center the grid */
}

.main-action-button {
    background-color: #007bff; /* Primary blue */
    color: white;
    font-size: 1.6em;
    padding: 30px 20px;
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0, 123, 255, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 150px; /* Make buttons larger */
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}
.main-action-button:hover {
    background-color: #0056b3;
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 123, 255, 0.4);
}
.main-action-button i {
    font-size: 2.5em; /* Icon size */
    margin-bottom: 15px;
}
.main-action-button span {
    font-weight: bold;
    font-size: 0.8em; /* Adjust text size relative to button */
}

/* Specific colors for some main buttons */
#listenToExplanationButton {
    background-color: #28a745; /* Green */
    box-shadow: 0 6px 15px rgba(40, 167, 69, 0.3);
}
#listenToExplanationButton:hover {
    background-color: #218838;
    box-shadow: 0 10px 25px rgba(40, 167, 69, 0.4);
}

#takeQuizButton {
    background-color: #ffc107; /* Yellow/Orange */
    color: #333; /* Dark text for contrast */
    box-shadow: 0 6px 15px rgba(255, 193, 7, 0.3);
}
#takeQuizButton:hover {
    background-color: #e0a800;
    box-shadow: 0 10px 25px rgba(255, 193, 7, 0.4);
}

#goToNotesButton {
    background-color: #6f42c1; /* Purple */
    box-shadow: 0 6px 15px rgba(111, 66, 193, 0.3);
}
#goToNotesButton:hover {
    background-color: #5d35a7;
    box-shadow: 0 10px 25px rgba(111, 66, 193, 0.4);
}


/* Quick Access Info on Main Page */
#main-page-selected-book-info {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    background-color: #f9f9f9;
    margin-top: 25px;
}
#main-page-selected-book-info h3 {
    margin-top: 0;
    color: #007bff;
    font-size: 1.5em;
}
#main-page-selected-book-info button {
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 1em;
}
#currentMainAudioPlayer {
    width: 100%;
    margin-top: 20px;
}


/* Books Grid (for My Books, Audio Books, Lessons) */
.books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}
.book-card, .audio-book-card {
    background-color: #f0f8ff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s ease;
}
.book-card:hover, .audio-book-card:hover {
    transform: translateY(-5px);
}
.book-card h3, .audio-book-card h3 {
    color: #007bff;
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.3em;
}
.book-card button, .audio-book-card button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95em;
    transition: background-color 0.3s ease;
    margin-top: 5px; /* Added margin for multiple buttons */
}
.book-card button:hover, .audio-book-card button:hover {
    background-color: #218838;
}
.add-questions-button, .select-book-for-main-button, .select-audio-for-main-button {
    background-color: #6c757d !important; /* Override general button style */
    margin-top: 10px;
}
.add-questions-button:hover, .select-book-for-main-button:hover, .select-audio-for-main-button:hover {
    background-color: #5a6268 !important;
}
#noBooksMessage, #noAudioBooksMessage, #noLessonTextBooksMessage, #noLessonAudioBooksMessage {
    color: #666;
    text-align: center;
    grid-column: 1 / -1; /* Span across all columns in grid */
}

/* Book Management Section Specifics */
#currentBookDisplay, #currentAudioBookDisplay {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#currentBookDisplay h3, #currentAudioBookDisplay h3 {
    color: #007bff;
    margin-top: 0;
    margin-bottom: 10px;
}
#currentBookName, #currentAudioBookNameSecondary { /* Changed ID here */
    font-size: 1.2em;
    font-weight: bold;
    color: #555;
}
#selectedFileName, #selectedAudioFileName {
    margin-top: 20px;
    color: #888;
    font-style: italic;
    text-align: center;
}
#uploadBookButton, #uploadAudioBookButton {
    margin-top: 20px;
}

/* Daily Schedule Section */
.daily-schedule-grid {
    display: grid;
    grid-template-columns: 1fr 2fr; /* Day column narrower, Books column wider */
    gap: 15px;
    margin-top: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 20px;
    background-color: #f9f9f9;
}
.daily-schedule-grid h3 {
    background-color: #e9e9e9;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    margin-top: 0;
    font-size: 1.1em;
    color: #444;
}
.daily-schedule-grid div {
    padding: 5px;
}
.daily-schedule-item {
    display: contents; /* Allows grid items to flow without creating new rows */
}
.daily-schedule-item label {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eef;
    border-radius: 5px;
    padding: 8px;
    font-size: 1em;
    color: #333;
}
.daily-schedule-item textarea {
    width: calc(100% - 20px);
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 0.95em;
    min-height: 60px;
    resize: vertical;
    margin-bottom: 10px; /* Space between textareas */
}
.daily-schedule-item button {
    background-color: #007bff;
    padding: 8px 15px;
    font-size: 0.9em;
    font-weight: normal;
    margin-top: 5px;
}

/* Progress Tracking Section */
.progress-book-item {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0,0,0,0.03);
}
.progress-book-item h3 {
    color: #007bff;
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.4em;
}
.progress-book-item input[type="number"] {
    width: 80px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    text-align: center;
    font-size: 1em;
    margin-left: 10px; /* Spacing next to label */
}
.progress-book-item button {
    background-color: #28a745;
    padding: 8px 15px;
    font-size: 0.95em;
    margin-top: 10px;
}
.progress-book-item p {
    margin-top: 15px;
    font-weight: bold;
    color: #555;
}
.progress-book-item span.percentage {
    color: #2ecc71;
}

/* Detailed Statistics Section - NEW Feature 4 */
#detailed-statistics-content canvas {
    background-color: #f0f0f0;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 25px;
    border: 1px solid #eee;
}
#time-spent-stats p {
    font-size: 1.1em;
    color: #444;
    margin-bottom: 8px;
}

/* Gamification Section - NEW Feature 2 */
.badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
    margin-top: 20px;
    padding: 10px;
    border: 1px dashed #ccc;
    border-radius: 10px;
    min-height: 100px;
    align-items: center;
    justify-content: center;
}
.badge-item {
    text-align: center;
    padding: 10px;
    background-color: #e6f7ff;
    border: 1px solid #b3e0ff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}
.badge-item i {
    font-size: 2.5em;
    color: #007bff;
    margin-bottom: 5px;
}
.badge-item p {
    font-size: 0.9em;
    font-weight: bold;
    color: #333;
    margin: 0;
}
#upcoming-goals p {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #eee;
    margin-bottom: 8px;
    font-size: 0.95em;
}
#upcoming-goals span {
    font-weight: bold;
    color: #28a745;
}


/* Quizzes Section */
.quiz-book-item {
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 5px rgba(0,0,0,0.03);
}
.quiz-book-item h3 {
    color: #007bff;
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 1.4em;
}
/* New Quiz elements */
.quiz-book-item select,
.quiz-book-item input[type="text"] { /* For choice options */
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
}
.quiz-book-item textarea {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    min-height: 80px;
    margin-bottom: 10px;
    resize: vertical;
}
.quiz-book-item button {
    background-color: #007bff;
    padding: 10px 20px;
    font-size: 1em;
}
.quiz-book-item .questions-list {
    margin-top: 20px;
    border-top: 1px dashed #eee;
    padding-top: 15px;
}
.quiz-book-item .question-entry {
    background-color: #eef;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    position: relative;
}
.quiz-book-item .question-entry strong {
    display: block;
    margin-bottom: 5px;
    color: #333;
}
.quiz-book-item .delete-question-button {
    background-color: #dc3545;
    color: white;
    font-size: 0.8em;
    padding: 5px 10px;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    left: 10px;
    transform: translateY(0); /* Reset transform from general button hover */
    margin: 0; /* Reset margin */
}
.quiz-book-item .delete-question-button:hover {
    background-color: #c82333;
    transform: translateY(0);
}


/* Notes Section */
#notesArea {
    width: calc(100% - 20px);
    height: 400px; /* Ample space for notes */
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 1.1em;
    line-height: 1.6;
    resize: vertical; /* Allow vertical resizing */
    margin-bottom: 20px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
}

/* Data Management Section - NEW Feature 5 */
#data-management-content button {
    margin-top: 15px;
    margin-left: 10px; /* Space between buttons */
}
#data-management-content p {
    font-size: 1em;
    margin-top: 15px;
}
#selectedImportFileName {
    margin-top: 10px;
    color: #888;
    font-style: italic;
}


/* Modal Styles */
#modal-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
#modal-content {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    max-width: 90vw;
    width: 90%;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
}
#closeModal {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.8em;
    cursor: pointer;
    color: #aaa;
    padding: 0;
    transition: color 0.2s ease;
}
#closeModal:hover {
    color: #666;
}
#modalBody {
    margin-top: 20px; /* Space for close button */
}
#modalBody h2 {
    font-size: 1.8em;
    color: #333;
    margin-bottom: 15px;
    text-align: center;
}
#modalBody audio, #modalBody video { /* Added video for MP4 */
    width: 100%;
    margin-top: 15px;
}
#modalBody iframe {
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
    margin-top: 20px;
}
#modalBody textarea {
    width: calc(100% - 20px);
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    resize: vertical;
}
#modalBody #submitQuestionButton {
    margin-top: 15px;
    background-color: #007bff;
    font-weight: normal; /* Override bold */
}
#modalBody #submitQuestionButton:hover {
    background-color: #0056b3;
}


/* NEW Feature 1: Highlight and Annotate Styles */
#pdfViewerContainer {
    position: relative;
}

#highlightOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Allows clicks to pass through to iframe */
    overflow: hidden; /* Prevent highlights from going outside */
}

.highlight {
    background-color: rgba(255, 255, 0, 0.5); /* Semi-transparent yellow */
    position: absolute;
    pointer-events: none; /* Ensures clicks pass through to iframe for selection */
    border-radius: 2px;
}

.annotation-marker {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #007bff; /* Blue marker */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;
    pointer-events: auto; /* Make marker clickable */
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
    z-index: 10; /* Above highlights */
}
.annotation-marker:hover {
    background-color: #0056b3;
    transform: scale(1.1);
}

#annotationTools {
    margin-top: 15px;
    text-align: center;
}
#annotationInput {
    display: none;
    margin: 15px auto 0;
    width: calc(100% - 40px);
}
#saveAnnotationButton {
    display: none;
    margin: 10px auto 0;
}

#activeAnnotationsList {
    margin-top: 15px;
    border-top: 1px solid #eee;
    padding-top: 15px;
}
#activeAnnotationsList li {
    background-color: #f0f8ff;
    border: 1px solid #e0e0e0;
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#activeAnnotationsList li button {
    background-color: #dc3545;
    padding: 5px 10px;
    font-size: 0.8em;
    margin-right: 5px; /* Adjust spacing */
}
#activeAnnotationsList li button:hover {
    background-color: #c82333;
}
.annotation-text {
    flex-grow: 1;
    margin-left: 10px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
    /* Header */
    header {
        flex-direction: column;
        align-items: flex-start;
        padding-bottom: 10px;
    }
    header p {
        margin-top: 10px;
    }

    /* Dashboard Layout */
    .dashboard-content-area {
        flex-direction: column;
    }
    aside {
        width: 100%;
        min-height: auto;
        padding-bottom: 15px;
        order: 1; /* Put sidebar above main content on mobile */
    }
    main {
        order: 2; /* Put main content below sidebar on mobile */
        padding: 20px;
    }

    /* Cards and Buttons */
    .card {
        padding: 20px;
    }
    .card h1, .card h2, .card h3 {
        font-size: 1.5em;
    }
    .action-button {
        flex-basis: calc(50% - 10px); /* Two buttons per row on smaller screens */
        font-size: 1em;
        padding: 10px 15px;
    }
    .books-grid {
        grid-template-columns: 1fr; /* Single column on mobile */
    }
    .main-buttons-grid {
        grid-template-columns: 1fr; /* Stack buttons vertically on small screens */
        padding: 15px;
    }
    .main-action-button {
        font-size: 1.4em;
        padding: 20px 15px;
        min-height: 120px;
    }
    .main-action-button i {
        font-size: 2em;
        margin-bottom: 10px;
    }


    /* Welcome Screen */
    #welcome-screen > div {
        padding: 30px;
    }
    #welcome-screen h1 {
        font-size: 1.8em;
    }
    #welcome-screen p {
        font-size: 1em;
    }
    #userNameInput, #startButton {
        padding: 10px;
        font-size: 1em;
    }

    /* Modal */
    #modal-content {
        padding: 20px;
    }
    #modalBody h2 {
        font-size: 1.5em;
    }
    #modalBody iframe {
        height: 400px;
    }

    /* Daily Schedule */
    .daily-schedule-grid {
        grid-template-columns: 1fr; /* Single column on mobile */
    }
    .daily-schedule-grid h3 {
        grid-column: 1 / -1; /* Header spans full width */
    }
    .daily-schedule-item label {
        margin-bottom: 5px;
    }
}
