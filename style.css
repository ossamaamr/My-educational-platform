document.addEventListener('DOMContentLoaded', () => {
    // --- General UI Elements ---
    const welcomeScreen = document.getElementById('welcome-screen');
    const dashboard = document.getElementById('dashboard');
    const userNameInput = document.getElementById('userNameInput');
    const startButton = document.getElementById('startButton');
    const displayedUserName = document.getElementById('displayedUserName');
    const progressPercentage = document.getElementById('progressPercentage');

    // --- Dashboard Navigation & Content ---
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const contentSections = document.querySelectorAll('.content-section');

    // --- Main Dashboard Action Buttons ---
    const goToLessonsButton = document.getElementById('goToLessonsButton');
    const listenToExplanationButton = document.getElementById('listenToExplanationButton');
    const takeQuizButton = document.getElementById('takeQuizButton');
    const goToNotesButton = document.getElementById('goToNotesButton');

    // --- Quick Access Info on Main Dashboard ---
    const mainPageStatus = document.getElementById('mainPageStatus');
    const mainPageSelectedBookInfo = document.getElementById('main-page-selected-book-info');
    const currentMainBookNameDisplay = document.getElementById('currentMainBookNameDisplay');
    const viewCurrentMainBookButton = document.getElementById('viewCurrentMainBookButton');
    const playCurrentMainAudioButton = document.getElementById('playCurrentMainAudioButton');
    const currentMainAudioPlayer = document.getElementById('currentMainAudioPlayer');

    // --- "اذهب للدروس" Section Elements ---
    const lessonTextBooksList = document.getElementById('lessonTextBooksList');
    const noLessonTextBooksMessage = document.getElementById('noLessonTextBooksMessage');
    const lessonAudioBooksList = document.getElementById('lessonAudioBooksList');
    const noLessonAudioBooksMessage = document.getElementById('noLessonAudioBooksMessage');


    // --- Modal Elements ---
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalButton = document.getElementById('closeModal');
    const modalBody = document.getElementById('modalBody');

    // --- NEW Feature 1: Highlight and Annotate Elements ---
    const pdfViewerContainer = document.getElementById('pdfViewerContainer');
    const pdfViewerFrame = document.getElementById('pdfViewerFrame');
    const highlightOverlay = document.getElementById('highlightOverlay');
    const annotationTools = document.getElementById('annotationTools');
    const highlightButton = document.getElementById('highlightButton');
    const addAnnotationButton = document.getElementById('addAnnotationButton');
    const annotationInput = document.getElementById('annotationInput');
    const saveAnnotationButton = document.getElementById('saveAnnotationButton');
    const activeAnnotationsList = document.getElementById('activeAnnotationsList');
    let currentBookAnnotations = {}; // Stores annotations for the currently viewed book

    // --- Text Book Management (Manage Book Section) ---
    const bookFileInput = document.getElementById('bookFileInput');
    const chooseFileButton = document.getElementById('chooseFileButton');
    const uploadBookButton = document.getElementById('uploadBookButton');
    const selectedFileName = document.getElementById('selectedFileName');
    const currentBookDisplay = document.getElementById('currentBookDisplay');
    const currentBookName = document.getElementById('currentBookName');
    const removeMainBookButton = document.getElementById('removeMainBookButton');
    const uploadForm = document.getElementById('uploadForm');

    // --- My Text Books List Elements (My Books Section) ---
    const booksListContainer = document.getElementById('booksList');
    const noBooksMessage = document.getElementById('noBooksMessage');

    // --- Audio Book Management Elements (Audio Books Section) ---
    const audioFileInput = document.getElementById('audioFileInput');
    const chooseAudioFileButton = document.getElementById('chooseAudioFileButton');
    const uploadAudioBookButton = document.getElementById('uploadAudioBookButton');
    const selectedAudioFileName = document.getElementById('selectedAudioFileName');
    const currentAudioBookDisplay = document.getElementById('currentAudioBookDisplay');
    const currentAudioBookNameSecondary = document.getElementById('currentAudioBookNameSecondary');
    const removeMainAudioBookButton = document.getElementById('removeMainAudioBookButton');
    const audioUploadForm = document.getElementById('audioUploadForm');
    const audioBooksListContainer = document.getElementById('audioBooksList');
    const noAudioBooksMessage = document.getElementById('noAudioBooksMessage');

    // --- Daily Schedule Elements ---
    const dailyScheduleGrid = document.querySelector('.daily-schedule-grid');
    const saveDailyScheduleButton = document.getElementById('saveDailyScheduleButton');
    const daysOfWeek = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

    // --- Progress Tracking Elements ---
    const progressBooksList = document.getElementById('progressBooksList');
    const noProgressBooksMessage = document.getElementById('noProgressBooksMessage');
    const DEFAULT_BOOK_PAGES = 100;

    // --- NEW Feature 4: Detailed Statistics Elements ---
    const totalReadingTimeDisplay = document.getElementById('totalReadingTime');
    const totalListeningTimeDisplay = document.getElementById('totalListeningTime');
    const textBookProgressChartCanvas = document.getElementById('textBookProgressChart');
    const audioBookActivityChartCanvas = document.getElementById('audioBookActivityChart');
    const noTextBookProgressChartMessage = document.getElementById('noTextBookProgressChart');
    const noAudioBookActivityChartMessage = document.getElementById('noAudioBookActivityChart');
    let textBookProgressChartInstance = null; // To hold Chart.js instance
    let audioBookActivityChartInstance = null; // To hold Chart.js instance

    // --- NEW Feature 2: Gamification Elements ---
    const userXpDisplay = document.getElementById('userXp');
    const userLevelDisplay = document.getElementById('userLevel');
    const badgesDisplay = document.getElementById('badges-display');
    const noBadgesMessage = document.getElementById('noBadgesMessage');
    const goalReader100 = document.getElementById('goalReader100');
    const goalListener60 = document.getElementById('goalListener60');
    const goalQuizzes5 = document.getElementById('goalQuizzes5');

    // --- Quizzes Elements ---
    const quizzesBooksList = document.getElementById('quizzesBooksList');
    const noQuizzesBooksMessage = document.getElementById('noQuizzesBooksMessage');

    // --- Notes Elements ---
    const notesArea = document.getElementById('notesArea');
    const saveNotesButton = document.getElementById('saveNotesButton');

    // --- NEW Feature 5: Data Management Elements ---
    const exportDataButton = document.getElementById('exportDataButton');
    const importFileInput = document.getElementById('importFileInput');
    const chooseImportFileButton = document.getElementById('chooseImportFileButton');
    const selectedImportFileName = document.getElementById('selectedImportFileName');
    const importDataButton = document.getElementById('importDataButton');


    // --- Data Storage (Simulated Backend with localStorage) ---
    let currentSelectedFile = null;
    let currentSelectedAudioFile = null;
    let userTextBooks = JSON.parse(localStorage.getItem('userTextBooks')) || [];
    let userAudioBooks = JSON.parse(localStorage.getItem('userAudioBooks')) || [];
    let dailySchedule = JSON.parse(localStorage.getItem('dailySchedule')) || {};
    let bookProgress = JSON.parse(localStorage.getItem('bookProgress')) || {};
    let bookQuizzes = JSON.parse(localStorage.getItem('bookQuizzes')) || {};
    let userNotes = localStorage.getItem('userNotes') || '';
    let readingTimes = JSON.parse(localStorage.getItem('readingTimes')) || {}; // { bookId: totalSeconds }
    let listeningTimes = JSON.parse(localStorage.getItem('listeningTimes')) || {}; // { bookId: totalSeconds }
    let userXp = parseInt(localStorage.getItem('userXp')) || 0;
    let userLevel = parseInt(localStorage.getItem('userLevel')) || 1;
    let userBadges = JSON.parse(localStorage.getItem('userBadges')) || [];
    let quizCompletions = parseInt(localStorage.getItem('quizCompletions')) || 0;


    let selectedMainTextBookId = localStorage.getItem('selectedMainTextBookId') ? parseInt(localStorage.getItem('selectedMainTextBookId')) : null;
    let selectedMainAudioBookId = localStorage.getItem('selectedMainAudioBookId') ? parseInt(localStorage.getItem('selectedMainAudioBookId')) : null;

    // --- Initial Load Logic ---
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
        userNameInput.value = savedUserName; // Prefill input
        showDashboard(savedUserName);
        displayMainDashboardInfo();
        displayCurrentBookInfo();
        displayCurrentAudioBookInfo();
        renderTextBooksList();
        renderAudioBooksList();
        renderDailySchedule();
        renderProgressTracking();
        renderQuizzesSection();
        loadNotes();
        updateOverallProgress();
        updateGamificationDisplay(); // NEW: Load gamification data
    }

    // --- Event Listeners ---

    startButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            localStorage.setItem('userName', userName);
            showDashboard(userName);
            displayMainDashboardInfo();
            displayCurrentBookInfo();
            displayCurrentAudioBookInfo();
            renderTextBooksList();
            renderAudioBooksList();
            renderDailySchedule();
            renderProgressTracking();
            renderQuizzesSection();
            loadNotes();
            updateOverallProgress();
            updateGamificationDisplay(); // NEW: Load gamification data
        } else {
            alert('من فضلك أدخل اسمك لتتمكن من المتابعة.');
        }
    });

    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const contentId = item.dataset.content;
            if (contentId) {
                setActiveContent(contentId);
            }
        });
    });

    goToLessonsButton.addEventListener('click', () => setActiveContent('lessons-content'));
    listenToExplanationButton.addEventListener('click', () => {
        const mainAudioBook = userAudioBooks.find(b => b.id == selectedMainAudioBookId);
        if (mainAudioBook) {
            playAudioBook(mainAudioBook);
        } else {
            alert('لا يوجد كتاب صوتي رئيسي محدد. يرجى تحديد كتاب من قسم "الكتب الصوتية".');
            setActiveContent('audio-books-content');
        }
    });
    takeQuizButton.addEventListener('click', () => setActiveContent('quizzes-content'));
    goToNotesButton.addEventListener('click', () => setActiveContent('notes-content'));

    viewCurrentMainBookButton.addEventListener('click', () => {
        const mainTextBook = userTextBooks.find(b => b.id == selectedMainTextBookId);
        if (mainTextBook) {
            readBook(mainTextBook);
        } else {
            alert('لا يوجد كتاب نصي رئيسي محدد للعرض.');
        }
    });
    playCurrentMainAudioButton.addEventListener('click', () => {
        const mainAudioBook = userAudioBooks.find(b => b.id == selectedMainAudioBookId);
        if (mainAudioBook) {
            playAudioBook(mainAudioBook);
        } else {
            alert('لا يوجد كتاب صوتي رئيسي محدد للتشغيل.');
        }
    });


    // Modal Close Buttons
    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        const audioInModal = modalBody.querySelector('audio');
        const videoInModal = modalBody.querySelector('video');
        if (audioInModal) audioInModal.pause();
        if (videoInModal) videoInModal.pause();

        // Clear highlight/annotation tools when modal closes
        annotationTools.style.display = 'none';
        annotationInput.style.display = 'none';
        saveAnnotationButton.style.display = 'none';
        highlightOverlay.innerHTML = ''; // Clear highlights
        activeAnnotationsList.innerHTML = ''; // Clear annotations list
        currentBookAnnotations = {}; // Clear annotations data
        modalBody.innerHTML = ''; // Clear modal content completely
    });
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
            const audioInModal = modalBody.querySelector('audio');
            const videoInModal = modalBody.querySelector('video');
            if (audioInModal) audioInModal.pause();
            if (videoInModal) videoInModal.pause();

            // Clear highlight/annotation tools when modal closes
            annotationTools.style.display = 'none';
            annotationInput.style.display = 'none';
            saveAnnotationButton.style.display = 'none';
            highlightOverlay.innerHTML = ''; // Clear highlights
            activeAnnotationsList.innerHTML = ''; // Clear annotations list
            currentBookAnnotations = {}; // Clear annotations data
            modalBody.innerHTML = ''; // Clear modal content completely
        }
    });

    // --- Text Book Management (إدارة الكتب النصية) ---
    chooseFileButton.addEventListener('click', () => {
        bookFileInput.click();
    });

    bookFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type === 'application/pdf') {
                currentSelectedFile = file;
                selectedFileName.textContent = `تم اختيار الملف: ${file.name}`;
                uploadBookButton.style.display = 'block';
            } else {
                currentSelectedFile = null;
                selectedFileName.textContent = 'الرجاء اختيار ملف PDF فقط.';
                uploadBookButton.style.display = 'none';
                alert('عذرًا، يجب أن يكون الملف بصيغة PDF.');
            }
        } else {
            currentSelectedFile = null;
            selectedFileName.textContent = '';
            uploadBookButton.style.display = 'none';
        }
    });

    uploadBookButton.addEventListener('click', () => {
        if (currentSelectedFile) {
            const newBook = {
                id: Date.now(),
                name: currentSelectedFile.name,
                url: URL.createObjectURL(currentSelectedFile),
                totalPages: DEFAULT_BOOK_PAGES, // Default pages for new books
                annotations: [] // Initialize annotations for new book (Feature 1)
            };

            userTextBooks.push(newBook);
            localStorage.setItem('userTextBooks', JSON.stringify(userTextBooks));

            // Initialize progress for new book
            bookProgress[newBook.id] = 0;
            localStorage.setItem('bookProgress', JSON.stringify(bookProgress));

            // Initialize reading time for new book
            readingTimes[newBook.id] = 0;
            localStorage.setItem('readingTimes', JSON.stringify(readingTimes));

            alert(`تم رفع كتاب "${newBook.name}" بنجاح! 🎉📚\nيمكنك الآن تعيينه ككتاب رئيسي من "قائمة كتبي النصية".`);

            displayCurrentBookInfo();
            renderTextBooksList();
            renderLessonsList();
            renderProgressTracking();
            renderQuizzesSection();
            updateOverallProgress();
            updateGamificationDisplay(); // Update after adding a book
            renderDetailedStatistics(); // Update stats

            bookFileInput.value = '';
            currentSelectedFile = null;
            selectedFileName.textContent = '';
            uploadBookButton.style.display = 'none';
        } else {
            alert('من فضلك اختر كتابًا لرفعه أولاً.');
        }
    });

    removeMainBookButton.addEventListener('click', () => {
        const confirmRemove = confirm('هل أنت متأكد أنك تريد إزالة الكتاب النصي الرئيسي من الواجهة الرئيسية؟ لن يتم حذفه من قائمة كتبك.');
        if (confirmRemove) {
            selectedMainTextBookId = null;
            localStorage.removeItem('selectedMainTextBookId');
            displayCurrentBookInfo();
            displayMainDashboardInfo();
            renderTextBooksList();
            renderLessonsList();
            updateOverallProgress();
            alert('تم إزالة الكتاب النصي الرئيسي من الواجهة الرئيسية.');
        }
    });

    // --- Audio Book Management (الكتب الصوتية) ---
    chooseAudioFileButton.addEventListener('click', () => {
        audioFileInput.click();
    });

    audioFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type === 'audio/mpeg' || file.type === 'video/mp4') {
                currentSelectedAudioFile = file;
                selectedAudioFileName.textContent = `تم اختيار الملف: ${file.name}`;
                uploadAudioBookButton.style.display = 'block';
            } else {
                currentSelectedAudioFile = null;
                selectedAudioFileName.textContent = 'الرجاء اختيار ملف MP3 أو MP4 فقط.';
                uploadAudioBookButton.style.display = 'none';
                alert('عذرًا، يجب أن يكون الملف بصيغة MP3 أو MP4.');
            }
        } else {
            currentSelectedAudioFile = null;
            selectedAudioFileName.textContent = '';
            uploadAudioBookButton.style.display = 'none';
        }
    });

    uploadAudioBookButton.addEventListener('click', () => {
        if (currentSelectedAudioFile) {
            const newAudioBook = {
                id: Date.now(),
                name: currentSelectedAudioFile.name,
                url: URL.createObjectURL(currentSelectedAudioFile),
                type: currentSelectedAudioFile.type
            };

            userAudioBooks.push(newAudioBook);
            localStorage.setItem('userAudioBooks', JSON.stringify(userAudioBooks));

            // Initialize listening time for new audio book
            listeningTimes[newAudioBook.id] = 0;
            localStorage.setItem('listeningTimes', JSON.stringify(listeningTimes));

            alert(`تم رفع ملف "${newAudioBook.name}" بنجاح! 🎉🎧\nيمكنك الآن تعيينه ككتاب صوتي رئيسي من "الكتب الصوتية".`);

            displayCurrentAudioBookInfo();
            renderAudioBooksList();
            renderLessonsList();
            updateGamificationDisplay(); // Update after adding an audio book
            renderDetailedStatistics(); // Update stats

            audioFileInput.value = '';
            currentSelectedAudioFile = null;
            selectedAudioFileName.textContent = '';
            uploadAudioBookButton.style.display = 'none';
        } else {
            alert('من فضلك اختر ملفًا صوتيًا لرفعه أولاً.');
        }
    });

    removeMainAudioBookButton.addEventListener('click', () => {
        const confirmRemove = confirm('هل أنت متأكد أنك تريد إزالة الكتاب الصوتي الرئيسي من الواجهة الرئيسية؟ لن يتم حذفه من قائمة ملفاتك.');
        if (confirmRemove) {
            selectedMainAudioBookId = null;
            localStorage.removeItem('selectedMainAudioBookId');
            displayCurrentAudioBookInfo();
            displayMainDashboardInfo();
            renderAudioBooksList();
            renderLessonsList();
            alert('تم إزالة الكتاب الصوتي الرئيسي من الواجهة الرئيسية.');
        }
    });

    // --- Daily Schedule (الجدول اليومي) ---
    saveDailyScheduleButton.addEventListener('click', saveDailySchedule);

    // --- Notes Section ---
    saveNotesButton.addEventListener('click', saveNotes);

    // --- NEW Feature 5: Data Management Event Listeners ---
    exportDataButton.addEventListener('click', exportUserData);

    chooseImportFileButton.addEventListener('click', () => {
        importFileInput.click();
    });

    importFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type === 'application/json') {
                selectedImportFileName.textContent = `الملف المختار: ${file.name}`;
                importDataButton.style.display = 'block';
            } else {
                selectedImportFileName.textContent = 'الرجاء اختيار ملف JSON فقط.';
                importDataButton.style.display = 'none';
                alert('عذرًا، يجب أن يكون الملف بصيغة JSON.');
            }
        } else {
            selectedImportFileName.textContent = '';
            importDataButton.style.display = 'none';
        }
    });

    importDataButton.addEventListener('click', importUserData);


    // --- Core Functions ---

    function showDashboard(name) {
        welcomeScreen.style.display = 'none';
        dashboard.style.display = 'flex';
        displayedUserName.textContent = name;
        setActiveContent('main-dashboard-content');
    }

    function setActiveContent(contentId) {
        sidebarItems.forEach(item => item.classList.remove('active'));
        contentSections.forEach(section => section.style.display = 'none');

        const activeSidebarItem = document.querySelector(`.sidebar-item[data-content="${contentId}"]`);
        if (activeSidebarItem) {
            activeSidebarItem.classList.add('active');
        }

        const targetContent = document.getElementById(contentId);
        if (targetContent) {
            targetContent.style.display = 'block';

            // Re-render content based on the active section
            if (contentId === 'main-dashboard-content') {
                displayMainDashboardInfo();
            } else if (contentId === 'lessons-content') {
                renderLessonsList();
            } else if (contentId === 'manage-book-content') {
                displayCurrentBookInfo();
            } else if (contentId === 'my-books-content') {
                renderTextBooksList();
            } else if (contentId === 'audio-books-content') {
                displayCurrentAudioBookInfo();
                renderAudioBooksList();
            } else if (contentId === 'daily-schedule-content') {
                renderDailySchedule();
            } else if (contentId === 'progress-tracking-content') {
                renderProgressTracking();
            } else if (contentId === 'detailed-statistics-content') { // NEW: Feature 4
                renderDetailedStatistics();
            } else if (contentId === 'gamification-content') { // NEW: Feature 2
                updateGamificationDisplay();
            } else if (contentId === 'quizzes-content') {
                renderQuizzesSection();
            } else if (contentId === 'notes-content') {
                loadNotes();
            } else if (contentId === 'data-management-content') { // NEW: Feature 5
                selectedImportFileName.textContent = '';
                importFileInput.value = '';
                importDataButton.style.display = 'none';
            }
        }
    }

    function showModal(contentHTML, isPdfViewer = false) {
        // First, reset modal content if not showing PDF Viewer
        if (!isPdfViewer) {
            modalBody.innerHTML = contentHTML;
            // Hide PDF viewer specific tools if not a PDF
            pdfViewerContainer.style.display = 'none';
            annotationTools.style.display = 'none';
            annotationInput.style.display = 'none';
            saveAnnotationButton.style.display = 'none';
            highlightOverlay.innerHTML = ''; // Clear highlights
            activeAnnotationsList.innerHTML = ''; // Clear annotations list
            currentBookAnnotations = {}; // Clear annotations data
        } else {
            // If it's a PDF viewer, the HTML elements are already in the modal
            pdfViewerContainer.style.display = 'block';
        }
        modalOverlay.style.display = 'flex';
    }

    // --- Main Dashboard Info Display Logic ---
    function displayMainDashboardInfo() {
        const mainTextBook = userTextBooks.find(b => b.id == selectedMainTextBookId);
        const mainAudioBook = userAudioBooks.find(b => b.id == selectedMainAudioBookId);

        let statusText = "اختر زرًا من الأعلى لتبدأ أو تابع تقدمك.";
        let currentBookNameDisplay = "";
        let showTextButton = false;
        let showAudioButton = false;

        if (mainTextBook && mainAudioBook) {
            statusText = `الكتاب النصي الرئيسي: ${mainTextBook.name} | الكتاب الصوتي الرئيسي: ${mainAudioBook.name}`;
            currentBookNameDisplay = `${mainTextBook.name} (نصي) و ${mainAudioBook.name} (صوتي)`;
            showTextButton = true;
            showAudioButton = true;
        } else if (mainTextBook) {
            statusText = `الكتاب النصي الرئيسي المحدد: ${mainTextBook.name}`;
            currentBookNameDisplay = `${mainTextBook.name} (نصي)`;
            showTextButton = true;
        } else if (mainAudioBook) {
            statusText = `الكتاب الصوتي الرئيسي المحدد: ${mainAudioBook.name}`;
            currentBookNameDisplay = `${mainAudioBook.name} (صوتي)`;
            showAudioButton = true;
        } else {
            statusText = "لم يتم تحديد أي كتاب رئيسي بعد. يرجى إدارة كتبك من القائمة الجانبية.";
        }

        mainPageStatus.textContent = statusText;

        if (mainTextBook || mainAudioBook) {
            mainPageSelectedBookInfo.style.display = 'block';
            currentMainBookNameDisplay.textContent = currentBookNameDisplay;

            if (showTextButton) {
                viewCurrentMainBookButton.style.display = 'inline-block';
            } else {
                viewCurrentMainBookButton.style.display = 'none';
            }

            if (showAudioButton) {
                playCurrentMainAudioButton.style.display = 'inline-block';
                currentMainAudioPlayer.src = mainAudioBook ? mainAudioBook.url : '';
                currentMainAudioPlayer.type = mainAudioBook ? mainAudioBook.type : '';
                currentMainAudioPlayer.style.display = 'block';
            } else {
                playCurrentMainAudioButton.style.display = 'none';
                currentMainAudioPlayer.pause();
                currentMainAudioPlayer.removeAttribute('src');
                currentMainAudioPlayer.removeAttribute('type');
                currentMainAudioPlayer.style.display = 'none';
            }
        } else {
            mainPageSelectedBookInfo.style.display = 'none';
            currentMainAudioPlayer.pause();
            currentMainAudioPlayer.removeAttribute('src');
            currentMainAudioPlayer.removeAttribute('type');
            currentMainAudioPlayer.style.display = 'none';
        }
    }


    // --- "اذهب للدروس" Section: Displaying all available books ---
    function renderLessonsList() {
        lessonTextBooksList.innerHTML = ''; // Clear existing
        lessonAudioBooksList.innerHTML = ''; // Clear existing

        if (userTextBooks.length === 0) {
            noLessonTextBooksMessage.style.display = 'block';
        } else {
            noLessonTextBooksMessage.style.display = 'none';
            userTextBooks.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-card');
                bookCard.innerHTML = `
                    <h3>${book.name}</h3>
                    <p style="font-size:0.9em; color:#777;">(كتاب نصي)</p>
                    <button class="read-book-button" data-book-id="${book.id}">قراءة</button>
                    ${book.id == selectedMainTextBookId ?
                        '<span style="display:block; margin-top:10px; color:#007bff; font-weight:bold;"> (الرئيسي)</span>' : ''
                    }
                `;
                lessonTextBooksList.appendChild(bookCard);
            });
            document.querySelectorAll('#lessonTextBooksList .read-book-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookId = parseInt(event.target.dataset.bookId);
                    const bookToRead = userTextBooks.find(b => b.id === bookId);
                    if (bookToRead) {
                        readBook(bookToRead);
                    }
                });
            });
        }

        if (userAudioBooks.length === 0) {
            noLessonAudioBooksMessage.style.display = 'block';
        } else {
            noLessonAudioBooksMessage.style.display = 'none';
            userAudioBooks.forEach(book => {
                const audioBookCard = document.createElement('div');
                audioBookCard.classList.add('audio-book-card');
                audioBookCard.innerHTML = `
                    <h3>${book.name}</h3>
                    <p style="font-size:0.9em; color:#777;">(كتاب صوتي/مرئي)</p>
                    <button class="play-audio-button" data-book-id="${book.id}">تشغيل</button>
                    ${book.id == selectedMainAudioBookId ?
                        '<span style="display:block; margin-top:10px; color:#007bff; font-weight:bold;"> (الرئيسي)</span>' : ''
                    }
                `;
                lessonAudioBooksList.appendChild(audioBookCard);
            });
            document.querySelectorAll('#lessonAudioBooksList .play-audio-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookId = parseInt(event.target.dataset.bookId);
                    const bookToPlay = userAudioBooks.find(b => b.id === bookId);
                    if (bookToPlay) {
                        playAudioBook(bookToPlay);
                    }
                });
            });
        }
    }


    // --- Text Book Functions ---
    function displayCurrentBookInfo() {
        const mainTextBook = userTextBooks.find(b => b.id == selectedMainTextBookId);
        if (mainTextBook) {
            currentBookName.textContent = mainTextBook.name;
            currentBookDisplay.style.display = 'flex';
        } else {
            currentBookName.textContent = 'لم يتم تعيين كتاب نصي رئيسي بعد.';
            currentBookDisplay.style.display = 'none';
        }
    }

    function renderTextBooksList() {
        booksListContainer.innerHTML = '';

        if (userTextBooks.length === 0) {
            noBooksMessage.style.display = 'block';
        } else {
            noBooksMessage.style.display = 'none';
            userTextBooks.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-card');

                let buttonsHtml = '';
                if (book.id == selectedMainTextBookId) {
                    buttonsHtml += '<button style="background-color: #007bff; margin-top: 10px; cursor: default;">الكتاب الرئيسي</button>';
                } else {
                    buttonsHtml += `<button class="select-book-for-main-button" data-book-id="${book.id}" style="background-color: #6c757d; margin-top: 10px;">تعيين ككتاب رئيسي</button>`;
                }
                buttonsHtml += `<button class="read-book-button" data-book-id="${book.id}" style="margin-top: 10px;">قراءة الكتاب</button>`;
                buttonsHtml += `<button class="add-questions-button" data-book-id="${book.id}" data-book-name="${book.name}" style="margin-top: 10px;">إضافة أسئلة</button>`;
                buttonsHtml += `<button class="delete-book-button" data-book-id="${book.id}" style="background-color: #dc3545; margin-top: 10px;">حذف الكتاب</button>`;

                bookCard.innerHTML = `
                    <h3>${book.name}</h3>
                    ${buttonsHtml}
                `;
                booksListContainer.appendChild(bookCard);
            });

            document.querySelectorAll('.read-book-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookId = parseInt(event.target.dataset.bookId);
                    const bookToRead = userTextBooks.find(b => b.id === bookId);
                    if (bookToRead) {
                        readBook(bookToRead);
                    }
                });
            });

            document.querySelectorAll('.select-book-for-main-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    selectedMainTextBookId = parseInt(event.target.dataset.bookId);
                    localStorage.setItem('selectedMainTextBookId', selectedMainTextBookId);
                    displayMainDashboardInfo();
                    displayCurrentBookInfo();
                    renderTextBooksList();
                    renderLessonsList();
                    alert('تم تعيين الكتاب النصي الرئيسي بنجاح! ✅');
                });
            });

            document.querySelectorAll('.add-questions-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookId = parseInt(event.target.dataset.bookId);
                    const bookName = event.target.dataset.bookName;
                    setActiveContent('quizzes-content');
                    const quizItemDiv = document.querySelector(`.quiz-book-item[data-book-id="${bookId}"]`);
                    if (quizItemDiv) {
                        quizItemDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                    alert(`جارٍ توجيهك إلى قسم الاختبارات لإضافة أسئلة لكتاب "${bookName}".`);
                });
            });

            document.querySelectorAll('.delete-book-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookIdToDelete = parseInt(event.target.dataset.bookId);
                    deleteTextBook(bookIdToDelete);
                });
            });
        }
    }

    function deleteTextBook(bookId) {
        const bookToDelete = userTextBooks.find(b => b.id === bookId);
        if (!bookToDelete) return;

        const confirmDelete = confirm(`هل أنت متأكد أنك تريد حذف كتاب "${bookToDelete.name}" بشكل دائم؟ هذا الإجراء لا يمكن التراجع عنه.`);
        if (confirmDelete) {
            userTextBooks = userTextBooks.filter(b => b.id !== bookId);
            localStorage.setItem('userTextBooks', JSON.stringify(userTextBooks));

            if (selectedMainTextBookId === bookId) {
                selectedMainTextBookId = null;
                localStorage.removeItem('selectedMainTextBookId');
            }
            delete bookProgress[bookId];
            localStorage.setItem('bookProgress', JSON.stringify(bookProgress));
            delete bookQuizzes[bookId];
            localStorage.setItem('bookQuizzes', JSON.stringify(bookQuizzes));
            delete readingTimes[bookId]; // NEW: Delete reading time data
            localStorage.setItem('readingTimes', JSON.stringify(readingTimes));


            alert(`تم حذف كتاب "${bookToDelete.name}" بنجاح! 🗑️`);
            displayMainDashboardInfo();
            displayCurrentBookInfo();
            renderTextBooksList();
            renderLessonsList();
            renderProgressTracking();
            renderQuizzesSection();
            updateOverallProgress();
            updateGamificationDisplay(); // Update after deleting a book
            renderDetailedStatistics(); // Update stats
        }
    }


    // --- NEW Feature 1: Highlight and Annotate Functions ---
    // Make sure these are declared within the DOMContentLoaded or accessible globally
    let currentPdfBookId = null; // Store the ID of the currently viewed PDF book

    function readBook(book) {
        currentPdfBookId = book.id; // Set the current book ID for annotations
        currentBookAnnotations = userTextBooks.find(b => b.id === book.id)?.annotations || []; // Load annotations for this book

        // Prepare the modal with the PDF viewer
        modalBody.innerHTML = `
            <h2>قراءة: ${book.name}</h2>
            <div id="pdfViewerContainer" style="width: 100%; height: 500px; position: relative;">
                <iframe id="pdfViewerFrame" src="${book.url}" style="width: 100%; height: 100%; border: none;"></iframe>
                <div id="highlightOverlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;"></div>
            </div>
            <div id="annotationTools" style="margin-top: 10px; text-align: center;">
                <button id="highlightButton" style="background-color: #ffc107; color: #333; margin-right: 5px;">تمييز</button>
                <button id="addAnnotationButton" style="background-color: #007bff;">إضافة تعليق</button>
            </div>
            <textarea id="annotationInput" placeholder="اكتب تعليقك هنا..." style="width: calc(100% - 20px); height: 80px; margin-top: 10px; display: none;"></textarea>
            <button id="saveAnnotationButton" style="display: none;">حفظ التعليق</button>
            <div id="annotationsList" style="margin-top: 20px; text-align: right;">
                <h3>تعليقاتك:</h3>
                <ul id="activeAnnotationsList" style="list-style-type: none; padding: 0;"></ul>
            </div>
            <p style="margin-top: 15px; color: #666;">
                <small>ملاحظة: هذه ميزة تجريبية. عرض ملفات PDF مباشرة في المتصفح يتطلب دعماً وقد لا تعمل لجميع الملفات أو المتصفحات. التمييز والتعليقات تعمل بشكل افتراضي على أي نص يتم تحديده داخل منطقة العارض وليس بالضرورة داخل الـ PDF نفسه.</small>
            </p>
        `;

        showModal(modalBody.innerHTML, true); // Pass true to indicate PDF viewer HTML is already set

        // Re-attach event listeners as the modalBody HTML is replaced
        const currentHighlightButton = document.getElementById('highlightButton');
        const currentAddAnnotationButton = document.getElementById('addAnnotationButton');
        const currentAnnotationInput = document.getElementById('annotationInput');
        const currentSaveAnnotationButton = document.getElementById('saveAnnotationButton');
        const currentHighlightOverlay = document.getElementById('highlightOverlay');
        const currentPdfViewerFrame = document.getElementById('pdfViewerFrame');


        currentHighlightButton.onclick = handleHighlightSelection;
        currentAddAnnotationButton.onclick = () => {
            currentAnnotationInput.style.display = 'block';
            currentSaveAnnotationButton.style.display = 'inline-block';
            currentAnnotationInput.focus();
        };
        currentSaveAnnotationButton.onclick = saveAnnotation;

        // Load existing annotations for this book when PDF viewer opens
        renderAnnotations(currentPdfBookId);

        // --- Reading Time Tracking ---
        let readingStartTime = Date.now();
        const intervalId = setInterval(() => {
            // Check if modal is still open and user is active
            if (modalOverlay.style.display === 'flex' && currentPdfBookId) {
                const elapsedSeconds = 1; // Track every second
                readingTimes[currentPdfBookId] = (readingTimes[currentPdfBookId] || 0) + elapsedSeconds;
                localStorage.setItem('readingTimes', JSON.stringify(readingTimes));
                updateGamificationDisplay(); // Update gamification based on reading time
            } else {
                clearInterval(intervalId); // Stop tracking if modal is closed
            }
        }, 1000); // Update every second

    }

    // Function to handle text highlighting
    function handleHighlightSelection() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const rects = range.getClientRects(); // Get bounding rectangles for the selection

            // Get the position of the iframe/viewer container to offset highlight
            const viewerRect = pdfViewerFrame.getBoundingClientRect(); // Use iframe for position reference

            for (const rect of rects) {
                const highlightDiv = document.createElement('div');
                highlightDiv.classList.add('highlight');
                // Adjust position relative to the iframe/viewer
                highlightDiv.style.left = `${rect.left - viewerRect.left}px`;
                highlightDiv.style.top = `${rect.top - viewerRect.top}px`;
                highlightDiv.style.width = `${rect.width}px`;
                highlightDiv.style.height = `${rect.height}px`;
                highlightOverlay.appendChild(highlightDiv); // Add to the overlay
            }
            selection.removeAllRanges(); // Clear the selection after highlighting

            // Store the highlight data for this book
            if (currentPdfBookId) {
                const bookIndex = userTextBooks.findIndex(b => b.id === currentPdfBookId);
                if (bookIndex !== -1) {
                    if (!userTextBooks[bookIndex].highlights) {
                        userTextBooks[bookIndex].highlights = [];
                    }
                    // Store rects relative to viewer or a simpler representation
                    userTextBooks[bookIndex].highlights.push(Array.from(rects).map(r => ({
                        left: r.left - viewerRect.left,
                        top: r.top - viewerRect.top,
                        width: r.width,
                        height: r.height
                    })));
                    localStorage.setItem('userTextBooks', JSON.stringify(userTextBooks));
                }
            }
        } else {
            alert('الرجاء تحديد بعض النص لتمييزه.');
        }
    }

    // Function to save an annotation
    function saveAnnotation() {
        const annotationText = annotationInput.value.trim();
        if (annotationText && currentPdfBookId) {
            const bookIndex = userTextBooks.findIndex(b => b.id === currentPdfBookId);
            if (bookIndex !== -1) {
                // Get approximate position for marker (e.g., top-left of the PDF viewer)
                const viewerRect = pdfViewerFrame.getBoundingClientRect();
                const x = viewerRect.width / 2; // Center for simplicity, can be more precise
                const y = viewerRect.height / 2; // Center for simplicity

                const newAnnotation = {
                    id: Date.now(),
                    text: annotationText,
                    x: x, // Position relative to viewer (for marker)
                    y: y,
                    timestamp: new Date().toLocaleString()
                };

                userTextBooks[bookIndex].annotations.push(newAnnotation);
                localStorage.setItem('userTextBooks', JSON.stringify(userTextBooks));
                renderAnnotations(currentPdfBookId); // Re-render annotations list

                annotationInput.value = '';
                annotationInput.style.display = 'none';
                saveAnnotationButton.style.display = 'none';
                alert('تم حفظ التعليق بنجاح!');
            }
        } else {
            alert('الرجاء كتابة تعليق لحفظه.');
        }
    }

    // Function to render existing highlights and annotations
    function renderAnnotations(bookId) {
        const book = userTextBooks.find(b => b.id === bookId);
        if (!book) return;

        // Clear existing highlights and markers
        highlightOverlay.innerHTML = '';
        activeAnnotationsList.innerHTML = '';

        // Render Highlights
        if (book.highlights) {
            const viewerRect = pdfViewerFrame.getBoundingClientRect();
            book.highlights.forEach(highlightGroup => {
                highlightGroup.forEach(rectData => {
                    const highlightDiv = document.createElement('div');
                    highlightDiv.classList.add('highlight');
                    highlightDiv.style.left = `${rectData.left}px`;
                    highlightDiv.style.top = `${rectData.top}px`;
                    highlightDiv.style.width = `${rectData.width}px`;
                    highlightDiv.style.height = `${rectData.height}px`;
                    highlightOverlay.appendChild(highlightDiv);
                });
            });
        }

        // Render Annotations (markers and list)
        if (book.annotations) {
            book.annotations.forEach((ann, index) => {
                // Add to list
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <span class="annotation-text">
                        **${ann.timestamp}**: ${ann.text}
                    </span>
                    <button class="delete-annotation-button" data-annotation-id="${ann.id}">حذف</button>
                `;
                activeAnnotationsList.appendChild(listItem);
            });

            // Add event listeners for delete buttons
            document.querySelectorAll('.delete-annotation-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const annotationId = parseInt(event.target.dataset.annotationId);
                    deleteAnnotation(bookId, annotationId);
                });
            });
        }
    }

    function deleteAnnotation(bookId, annotationId) {
        const bookIndex = userTextBooks.findIndex(b => b.id === bookId);
        if (bookIndex !== -1) {
            const annotationIndex = userTextBooks[bookIndex].annotations.findIndex(ann => ann.id === annotationId);
            if (annotationIndex !== -1) {
                const confirmDelete = confirm('هل أنت متأكد أنك تريد حذف هذا التعليق؟');
                if (confirmDelete) {
                    userTextBooks[bookIndex].annotations.splice(annotationIndex, 1);
                    localStorage.setItem('userTextBooks', JSON.stringify(userTextBooks));
                    renderAnnotations(bookId); // Re-render the list
                    alert('تم حذف التعليق بنجاح.');
                }
            }
        }
    }


    // --- Audio Book Functions ---
    function displayCurrentAudioBookInfo() {
        const mainAudioBook = userAudioBooks.find(b => b.id == selectedMainAudioBookId);
        if (mainAudioBook) {
            currentAudioBookNameSecondary.textContent = mainAudioBook.name;
            currentAudioBookDisplay.style.display = 'flex';
        } else {
            currentAudioBookNameSecondary.textContent = 'لم يتم تعيين كتاب صوتي رئيسي بعد.';
            currentAudioBookDisplay.style.display = 'none';
        }
    }

    function renderAudioBooksList() {
        audioBooksListContainer.innerHTML = '';

        if (userAudioBooks.length === 0) {
            noAudioBooksMessage.style.display = 'block';
        } else {
            noAudioBooksMessage.style.display = 'none';
            userAudioBooks.forEach(book => {
                const audioBookCard = document.createElement('div');
                audioBookCard.classList.add('audio-book-card');

                let buttonsHtml = '';
                if (book.id == selectedMainAudioBookId) {
                    buttonsHtml += '<button style="background-color: #007bff; margin-top: 10px; cursor: default;">الكتاب الصوتي الرئيسي</button>';
                } else {
                    buttonsHtml += `<button class="select-audio-for-main-button" data-book-id="${book.id}" style="background-color: #6c757d; margin-top: 10px;">تعيين ككتاب رئيسي</button>`;
                }
                buttonsHtml += `<button class="play-audio-button" data-book-id="${book.id}" style="margin-top: 10px;">تشغيل</button>`;
                buttonsHtml += `<button class="delete-audio-book-button" data-book-id="${book.id}" style="background-color: #dc3545; margin-top: 10px;">حذف الملف</button>`;


                audioBookCard.innerHTML = `
                    <h3>${book.name}</h3>
                    ${buttonsHtml}
                `;
                audioBooksListContainer.appendChild(audioBookCard);
            });

            document.querySelectorAll('.play-audio-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookId = parseInt(event.target.dataset.bookId);
                    const bookToPlay = userAudioBooks.find(b => b.id === bookId);
                    if (bookToPlay) {
                        playAudioBook(bookToPlay);
                    }
                });
            });

            document.querySelectorAll('.select-audio-for-main-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    selectedMainAudioBookId = parseInt(event.target.dataset.bookId);
                    localStorage.setItem('selectedMainAudioBookId', selectedMainAudioBookId);
                    displayMainDashboardInfo();
                    displayCurrentAudioBookInfo();
                    renderAudioBooksList();
                    renderLessonsList();
                    alert('تم تعيين الكتاب الصوتي الرئيسي بنجاح! ✅');
                });
            });

            document.querySelectorAll('.delete-audio-book-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookIdToDelete = parseInt(event.target.dataset.bookId);
                    deleteAudioBook(bookIdToDelete);
                });
            });
        }
    }

    function deleteAudioBook(bookId) {
        const bookToDelete = userAudioBooks.find(b => b.id === bookId);
        if (!bookToDelete) return;

        const confirmDelete = confirm(`هل أنت متأكد أنك تريد حذف ملف "${bookToDelete.name}" الصوتي بشكل دائم؟ هذا الإجراء لا يمكن التراجع عنه.`);
        if (confirmDelete) {
            userAudioBooks = userAudioBooks.filter(b => b.id !== bookId);
            localStorage.setItem('userAudioBooks', JSON.stringify(userAudioBooks));

            if (selectedMainAudioBookId === bookId) {
                selectedMainAudioBookId = null;
                localStorage.removeItem('selectedMainAudioBookId');
            }
            delete listeningTimes[bookId]; // NEW: Delete listening time data
            localStorage.setItem('listeningTimes', JSON.stringify(listeningTimes));

            alert(`تم حذف ملف "${bookToDelete.name}" الصوتي بنجاح! 🗑️`);
            displayMainDashboardInfo();
            displayCurrentAudioBookInfo();
            renderAudioBooksList();
            renderLessonsList();
            updateGamificationDisplay(); // Update after deleting an audio book
            renderDetailedStatistics(); // Update stats
        }
    }


    function playAudioBook(book) {
        let mediaTag;
        if (currentMainAudioPlayer && !currentMainAudioPlayer.paused) {
            currentMainAudioPlayer.pause();
        }

        if (book.type === 'audio/mpeg') {
            mediaTag = `<audio id="modalAudioPlayer" controls autoplay style="width: 100%; margin-top: 15px;">
                            <source src="${book.url}" type="audio/mpeg">
                            متصفحك لا يدعم عنصر الصوت.
                        </audio>`;
        } else if (book.type === 'video/mp4') {
            mediaTag = `<video id="modalVideoPlayer" controls autoplay style="width: 100%; margin-top: 15px;">
                            <source src="${book.url}" type="video/mp4">
                            متصفحك لا يدعم عنصر الفيديو.
                        </video>`;
        } else {
            mediaTag = `<p style="color:red;">صيغة الملف غير مدعومة للتشغيل المباشر.</p>`;
        }

        const modalContentHTML = `
            <h2>تشغيل: ${book.name}</h2>
            ${mediaTag}
            <p style="margin-top: 15px; color: #666;">
                <small>ملاحظة: هذا رابط مؤقت للملف الصوتي/المرئي. في تطبيق حقيقي، يجب أن يكون رابطاً لملف مستضاف.</small>
            </p>
        `;
        showModal(modalContentHTML);

        // --- Listening Time Tracking (Feature 4) ---
        let mediaElement;
        if (book.type === 'audio/mpeg') {
            mediaElement = document.getElementById('modalAudioPlayer');
        } else if (book.type === 'video/mp4') {
            mediaElement = document.getElementById('modalVideoPlayer');
        }

        if (mediaElement) {
            let listeningInterval;
            mediaElement.addEventListener('play', () => {
                listeningInterval = setInterval(() => {
                    listeningTimes[book.id] = (listeningTimes[book.id] || 0) + 1;
                    localStorage.setItem('listeningTimes', JSON.stringify(listeningTimes));
                    updateGamificationDisplay(); // Update gamification based on listening time
                }, 1000); // Track every second
            });

            mediaElement.addEventListener('pause', () => clearInterval(listeningInterval));
            mediaElement.addEventListener('ended', () => clearInterval(listeningInterval));
            // Ensure interval is cleared when modal closes
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay || e.target === closeModalButton) {
                    clearInterval(listeningInterval);
                }
            }, { once: true }); // Only run once
        }
    }


    // --- Daily Schedule Functions ---
    function renderDailySchedule() {
        const existingItems = dailyScheduleGrid.querySelectorAll('.daily-schedule-item');
        existingItems.forEach(item => item.remove());

        daysOfWeek.forEach(day => {
            const savedText = dailySchedule[day] || '';

            const dayLabel = document.createElement('label');
            dayLabel.textContent = day;
            dayLabel.classList.add('daily-schedule-item');
            dailyScheduleGrid.appendChild(dayLabel);

            const textAreaContainer = document.createElement('div');
            textAreaContainer.classList.add('daily-schedule-item');
            const textArea = document.createElement('textarea');
            textArea.id = `schedule-${day}`;
            textArea.value = savedText;
            textArea.placeholder = `اكتب ما ستقرأه أو تنجزه في يوم ${day}...`;
            textAreaContainer.appendChild(textArea);
            dailyScheduleGrid.appendChild(textAreaContainer);
        });
    }

    function saveDailySchedule() {
        daysOfWeek.forEach(day => {
            const textArea = document.getElementById(`schedule-${day}`);
            if (textArea) {
                dailySchedule[day] = textArea.value.trim();
            }
        });
        localStorage.setItem('dailySchedule', JSON.stringify(dailySchedule));
        alert('تم حفظ الجدول اليومي بنجاح! ✨');
    }

    // --- Progress Tracking Functions ---
    function renderProgressTracking() {
        progressBooksList.innerHTML = '';

        if (userTextBooks.length === 0) {
            noProgressBooksMessage.style.display = 'block';
        } else {
            noProgressBooksMessage.style.display = 'none';
            userTextBooks.forEach(book => {
                const savedProgress = bookProgress[book.id] || 0;
                const totalPages = book.totalPages || DEFAULT_BOOK_PAGES;
                const percentage = ((savedProgress / totalPages) * 100).toFixed(0);

                const progressItem = document.createElement('div');
                progressItem.classList.add('progress-book-item');
                progressItem.innerHTML = `
                    <h3>${book.name} (إجمالي الصفحات: ${totalPages})</h3>
                    <p>وصلت للصفحة:
                        <input type="number" class="current-page-input" data-book-id="${book.id}" value="${savedProgress}" min="0" max="${totalPages}">
                        <button class="save-progress-button" data-book-id="${book.id}">حفظ التقدم</button>
                    </p>
                    <p>النسبة المئوية المنجزة: <span class="percentage" id="progress-percentage-${book.id}">${percentage}%</span></p>
                `;
                progressBooksList.appendChild(progressItem);
            });

            document.querySelectorAll('.save-progress-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookId = parseInt(event.target.dataset.bookId);
                    const input = document.querySelector(`.current-page-input[data-book-id="${bookId}"]`);
                    let pageNumber = parseInt(input.value);

                    const book = userTextBooks.find(b => b.id === bookId);
                    if (!book) return;

                    const totalPages = book.totalPages || DEFAULT_BOOK_PAGES;

                    if (isNaN(pageNumber) || pageNumber < 0) {
                        pageNumber = 0;
                    } else if (pageNumber > totalPages) {
                        pageNumber = totalPages;
                    }
                    input.value = pageNumber;

                    bookProgress[bookId] = pageNumber;
                    localStorage.setItem('bookProgress', JSON.stringify(bookProgress));

                    const percentageSpan = document.getElementById(`progress-percentage-${bookId}`);
                    const newPercentage = ((pageNumber / totalPages) * 100).toFixed(0);
                    percentageSpan.textContent = `${newPercentage}%`;

                    updateOverallProgress();
                    updateGamificationDisplay(); // Update gamification after progress change
                    renderDetailedStatistics(); // Update stats
                    alert(`تم حفظ تقدمك في كتاب "${book.name}" للصفحة ${pageNumber}!`);
                });
            });
        }
    }

    function updateOverallProgress() {
        let totalCompletedPages = 0;
        let totalPossiblePages = 0;

        userTextBooks.forEach(book => {
            const completed = bookProgress[book.id] || 0;
            const totalPages = book.totalPages || DEFAULT_BOOK_PAGES;
            totalCompletedPages += completed;
            totalPossiblePages += totalPages;
        });

        if (totalPossiblePages > 0) {
            const overallPercentage = ((totalCompletedPages / totalPossiblePages) * 100).toFixed(0);
            progressPercentage.textContent = `${overallPercentage}%`;
        } else {
            progressPercentage.textContent = '0%';
        }
    }

    // --- NEW Feature 4: Detailed Statistics Functions ---
    function renderDetailedStatistics() {
        let totalReadSeconds = 0;
        for (const bookId in readingTimes) {
            totalReadSeconds += readingTimes[bookId];
        }
        const totalReadMinutes = Math.floor(totalReadSeconds / 60);
        const totalReadHours = Math.floor(totalReadMinutes / 60);
        totalReadingTimeDisplay.textContent = `إجمالي وقت القراءة: ${totalReadHours} ساعة و ${totalReadMinutes % 60} دقيقة`;

        let totalListenSeconds = 0;
        for (const bookId in listeningTimes) {
            totalListenSeconds += listeningTimes[bookId];
        }
        const totalListenMinutes = Math.floor(totalListenSeconds / 60);
        const totalListenHours = Math.floor(totalListenMinutes / 60);
        totalListeningTimeDisplay.textContent = `إجمالي وقت الاستماع: ${totalListenHours} ساعة و ${totalListenMinutes % 60} دقيقة`;

        // Render Text Book Progress Chart
        const textBookNames = userTextBooks.map(book => book.name);
        const textBookPercentages = userTextBooks.map(book => {
            const savedProgress = bookProgress[book.id] || 0;
            const totalPages = book.totalPages || DEFAULT_BOOK_PAGES;
            return ((savedProgress / totalPages) * 100).toFixed(1);
        });

        if (textBookProgressChartInstance) {
            textBookProgressChartInstance.destroy();
        }

        if (userTextBooks.length > 0) {
            noTextBookProgressChartMessage.style.display = 'none';
            textBookProgressChartCanvas.style.display = 'block';
            const ctx1 = textBookProgressChartCanvas.getContext('2d');
            textBookProgressChartInstance = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: textBookNames,
                    datasets: [{
                        label: 'نسبة الإنجاز %',
                        data: textBookPercentages,
                        backgroundColor: 'rgba(0, 123, 255, 0.7)',
                        borderColor: 'rgba(0, 123, 255, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            title: {
                                display: true,
                                text: 'نسبة الإنجاز %'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'تقدم الكتب النصية'
                        }
                    }
                }
            });
        } else {
            noTextBookProgressChartMessage.style.display = 'block';
            textBookProgressChartCanvas.style.display = 'none';
        }


        // Render Audio Book Activity Chart
        const audioBookNames = userAudioBooks.map(book => book.name);
        const audioBookListeningMinutes = userAudioBooks.map(book => (listeningTimes[book.id] || 0) / 60);

        if (audioBookActivityChartInstance) {
            audioBookActivityChartInstance.destroy();
        }

        if (userAudioBooks.length > 0) {
            noAudioBookActivityChartMessage.style.display = 'none';
            audioBookActivityChartCanvas.style.display = 'block';
            const ctx2 = audioBookActivityChartCanvas.getContext('2d');
            audioBookActivityChartInstance = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: audioBookNames,
                    datasets: [{
                        label: 'وقت الاستماع (بالدقائق)',
                        data: audioBookListeningMinutes,
                        backgroundColor: 'rgba(40, 167, 69, 0.7)',
                        borderColor: 'rgba(40, 167, 69, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'وقت الاستماع (دقائق)'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'نشاط الاستماع للكتب الصوتية'
                        }
                    }
                }
            });
        } else {
            noAudioBookActivityChartMessage.style.display = 'block';
            audioBookActivityChartCanvas.style.display = 'none';
        }
    }


    // --- NEW Feature 2: Gamification Functions ---
    const BADGES = {
        'initial_reader': { name: 'قارئ مبتدئ', icon: 'fas fa-book-reader', description: 'أكمل 100 صفحة من القراءة.' },
        'active_listener': { name: 'المستمع النشيط', icon: 'fas fa-headphones', description: 'استمع لمدة 60 دقيقة.' },
        'quiz_master': { name: 'خبير الاختبارات', icon: 'fas fa-graduation-cap', description: 'أكمل 5 اختبارات.' },
        'prolific_writer': { name: 'الكاتب المبدع', icon: 'fas fa-pencil-alt', description: 'أضف 10 ملاحظات.' },
        'first_book': { name: 'أول كتاب', icon: 'fas fa-book', description: 'رفع أول كتاب نصي.' },
        'first_audio_book': { name: 'أول كتاب صوتي', icon: 'fas fa-music', description: 'رفع أول كتاب صوتي.' }
    };

    function addXp(amount) {
        userXp += amount;
        localStorage.setItem('userXp', userXp);
        updateLevel();
        updateGamificationDisplay();
    }

    function updateLevel() {
        // Simple leveling system: 100 XP per level
        userLevel = Math.floor(userXp / 100) + 1;
        localStorage.setItem('userLevel', userLevel);
    }

    function checkAndAwardBadges() {
        // Check "Initial Reader"
        let totalPagesRead = 0;
        for (const bookId in bookProgress) {
            totalPagesRead += bookProgress[bookId];
        }
        if (totalPagesRead >= 100 && !userBadges.includes('initial_reader')) {
            awardBadge('initial_reader');
        }
        goalReader100.textContent = totalPagesRead; // Update goal display

        // Check "Active Listener"
        let totalMinutesListened = 0;
        for (const bookId in listeningTimes) {
            totalMinutesListened += Math.floor(listeningTimes[bookId] / 60);
        }
        if (totalMinutesListened >= 60 && !userBadges.includes('active_listener')) {
            awardBadge('active_listener');
        }
        goalListener60.textContent = totalMinutesListened; // Update goal display

        // Check "Quiz Master"
        if (quizCompletions >= 5 && !userBadges.includes('quiz_master')) {
            awardBadge('quiz_master');
        }
        goalQuizzes5.textContent = quizCompletions; // Update goal display

        // Check "First Book"
        if (userTextBooks.length >= 1 && !userBadges.includes('first_book')) {
            awardBadge('first_book');
        }
        // Check "First Audio Book"
        if (userAudioBooks.length >= 1 && !userBadges.includes('first_audio_book')) {
            awardBadge('first_audio_book');
        }
        // Check "Prolific Writer"
        let totalNotesLength = userNotes.length; // Simple proxy for notes quantity
        if (totalNotesLength > 100 && !userBadges.includes('prolific_writer')) { // Example: 100 characters in notes
            awardBadge('prolific_writer');
        }

        renderBadges(); // Always re-render badges to ensure display is current
    }

    function awardBadge(badgeKey) {
        if (!userBadges.includes(badgeKey)) {
            userBadges.push(badgeKey);
            localStorage.setItem('userBadges', JSON.stringify(userBadges));
            addXp(50); // Award XP for a badge
            alert(`تهانينا! لقد ربحت شارة "${BADGES[badgeKey].name}"! 🎉`);
            renderBadges();
        }
    }

    function renderBadges() {
        badgesDisplay.innerHTML = '';
        if (userBadges.length === 0) {
            noBadgesMessage.style.display = 'block';
        } else {
            noBadgesMessage.style.display = 'none';
            userBadges.forEach(badgeKey => {
                const badge = BADGES[badgeKey];
                if (badge) {
                    const badgeItem = document.createElement('div');
                    badgeItem.classList.add('badge-item');
                    badgeItem.innerHTML = `
                        <i class="${badge.icon}"></i>
                        <p>${badge.name}</p>
                        <small style="font-size: 0.8em; color: #666;">${badge.description}</small>
                    `;
                    badgesDisplay.appendChild(badgeItem);
                }
            });
        }
    }

    function updateGamificationDisplay() {
        userXpDisplay.textContent = userXp;
        userLevelDisplay.textContent = userLevel;
        checkAndAwardBadges(); // Call this to update goals and badges
    }


    // --- Quizzes Functions (NEW Feature 3: Multiple Question Types) ---
    function renderQuizzesSection() {
        quizzesBooksList.innerHTML = '';

        if (userTextBooks.length === 0) {
            noQuizzesBooksMessage.style.display = 'block';
        } else {
            noQuizzesBooksMessage.style.display = 'none';
            userTextBooks.forEach(book => {
                const quizItem = document.createElement('div');
                quizItem.classList.add('quiz-book-item');
                quizItem.setAttribute('data-book-id', book.id);
                quizItem.innerHTML = `
                    <h3>الاختبارات الخاصة بكتاب: ${book.name}</h3>
                    <p>أضف أسئلة أو ابدأ الاختبار لهذا الكتاب.</p>
                    <select class="question-type-select">
                        <option value="text">سؤال نصي (إجابة نصية)</option>
                        <option value="mcq">اختيار من متعدد</option>
                        <option value="true_false">صواب/خطأ</option>
                    </select>
                    <div class="question-inputs">
                        <textarea class="question-input" placeholder="اكتب السؤال هنا..."></textarea>
                        <textarea class="answer-input" placeholder="اكتب الإجابة هنا..."></textarea>
                    </div>
                    <div class="mcq-options" style="display: none;">
                        <input type="text" class="mcq-option" placeholder="الخيار أ">
                        <input type="text" class="mcq-option" placeholder="الخيار ب">
                        <input type="text" class="mcq-option" placeholder="الخيار ج">
                        <input type="text" class="mcq-option" placeholder="الخيار د">
                        <p>الإجابة الصحيحة (اكتب الخيار الصحيح أ/ب/ج/د):</p>
                        <input type="text" class="mcq-correct-answer" placeholder="مثال: أ">
                    </div>
                     <div class="true-false-options" style="display: none;">
                        <p>الإجابة الصحيحة:</p>
                        <select class="true-false-correct-answer">
                            <option value="true">صواب</option>
                            <option value="false">خطأ</option>
                        </select>
                    </div>
                    <button class="add-quiz-question-button">إضافة سؤال</button>
                    <button class="start-quiz-button" style="background-color: #009688; margin-right: 10px;">بدء الاختبار</button>
                    <div class="questions-list" id="questions-list-${book.id}">
                        </div>
                `;
                quizzesBooksList.appendChild(quizItem);
                loadQuizQuestions(book.id); // Load existing questions for this book
            });

            document.querySelectorAll('.question-type-select').forEach(select => {
                select.addEventListener('change', (event) => {
                    const quizItemDiv = event.target.closest('.quiz-book-item');
                    const questionInputsDiv = quizItemDiv.querySelector('.question-inputs');
                    const mcqOptionsDiv = quizItemDiv.querySelector('.mcq-options');
                    const trueFalseOptionsDiv = quizItemDiv.querySelector('.true-false-options');

                    questionInputsDiv.style.display = 'none';
                    mcqOptionsDiv.style.display = 'none';
                    trueFalseOptionsDiv.style.display = 'none';

                    if (event.target.value === 'text') {
                        questionInputsDiv.style.display = 'block';
                    } else if (event.target.value === 'mcq') {
                        mcqOptionsDiv.style.display = 'block';
                        questionInputsDiv.querySelector('.answer-input').style.display = 'none'; // Hide text answer
                    } else if (event.target.value === 'true_false') {
                        trueFalseOptionsDiv.style.display = 'block';
                    }
                });
                // Trigger change once to set initial state
                select.dispatchEvent(new Event('change'));
            });


            document.querySelectorAll('.add-quiz-question-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const quizItemDiv = event.target.closest('.quiz-book-item');
                    const bookId = parseInt(quizItemDiv.dataset.bookId);
                    const questionType = quizItemDiv.querySelector('.question-type-select').value;
                    const questionTextarea = quizItemDiv.querySelector('.question-input');
                    const answerTextarea = quizItemDiv.querySelector('.answer-input');

                    let question = questionTextarea.value.trim();
                    let answer;
                    let options = [];

                    if (!question) {
                         alert('من فضلك أدخل السؤال.');
                         return;
                    }

                    if (questionType === 'text') {
                        answer = answerTextarea.value.trim();
                        if (!answer) {
                            alert('من فضلك أدخل الإجابة.');
                            return;
                        }
                    } else if (questionType === 'mcq') {
                        const mcqInputs = quizItemDiv.querySelectorAll('.mcq-option');
                        mcqInputs.forEach(input => options.push(input.value.trim()));
                        answer = quizItemDiv.querySelector('.mcq-correct-answer').value.trim().toUpperCase();

                        if (!options.every(opt => opt) || !answer || !['أ', 'ب', 'ج', 'د'].includes(answer)) {
                            alert('من فضلك أدخل جميع الخيارات والإجابة الصحيحة (أ/ب/ج/د).');
                            return;
                        }
                    } else if (questionType === 'true_false') {
                        answer = quizItemDiv.querySelector('.true-false-correct-answer').value;
                    }

                    addQuizQuestion(bookId, { type: questionType, question: question, answer: answer, options: options });

                    // Clear inputs after adding
                    questionTextarea.value = '';
                    answerTextarea.value = '';
                    quizItemDiv.querySelectorAll('.mcq-option').forEach(input => input.value = '');
                    quizItemDiv.querySelector('.mcq-correct-answer').value = '';
                    quizItemDiv.querySelector('.true-false-correct-answer').value = 'true';

                    alert('تم إضافة السؤال بنجاح! يمكنك إضافة المزيد أو بدء الاختبار.');
                });
            });

            document.querySelectorAll('.start-quiz-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const quizItemDiv = event.target.closest('.quiz-book-item');
                    const bookId = parseInt(quizItemDiv.dataset.bookId);
                    startQuiz(bookId);
                });
            });
        }
    }

    function addQuizQuestion(bookId, questionObj) {
        if (!bookQuizzes[bookId]) {
            bookQuizzes[bookId] = [];
        }
        bookQuizzes[bookId].push(questionObj);
        localStorage.setItem('bookQuizzes', JSON.stringify(bookQuizzes));
        loadQuizQuestions(bookId);
    }

    function loadQuizQuestions(bookId) {
        const questionsListDiv = document.getElementById(`questions-list-${bookId}`);
        questionsListDiv.innerHTML = '';

        const questionsForBook = bookQuizzes[bookId] || [];
        if (questionsForBook.length === 0) {
            questionsListDiv.innerHTML = '<p style="color: #888;">لا توجد أسئلة لهذا الكتاب بعد. ابدأ بإضافة أسئلة!</p>';
        } else {
            questionsForBook.forEach((q, index) => {
                const questionEntry = document.createElement('div');
                questionEntry.classList.add('question-entry');
                let displayHtml = `<p><strong>السؤال ${index + 1} (${getQuestionTypeDisplayName(q.type)}):</strong> ${q.question}</p>`;
                if (q.type === 'mcq') {
                    displayHtml += `<p>الخيارات: ${q.options.map((opt, i) => `${String.fromCharCode(65 + i)}: ${opt}`).join(', ')}</p>`;
                    displayHtml += `<p><strong>الإجابة:</strong> الخيار ${q.answer}</p>`;
                } else if (q.type === 'true_false') {
                    displayHtml += `<p><strong>الإجابة:</strong> ${q.answer === 'true' ? 'صواب' : 'خطأ'}</p>`;
                } else { // text type
                    displayHtml += `<p><strong>الإجابة:</strong> ${q.answer}</p>`;
                }

                questionEntry.innerHTML = `
                    ${displayHtml}
                    <button class="delete-question-button" data-book-id="${bookId}" data-index="${index}">حذف</button>
                `;
                questionsListDiv.appendChild(questionEntry);
            });
            document.querySelectorAll(`#questions-list-${bookId} .delete-question-button`).forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookId = parseInt(event.target.dataset.bookId);
                    const indexToDelete = parseInt(event.target.dataset.index);
                    deleteQuizQuestion(bookId, indexToDelete);
                });
            });
        }
    }

    function getQuestionTypeDisplayName(type) {
        switch (type) {
            case 'text': return 'نصي';
            case 'mcq': return 'اختيار من متعدد';
            case 'true_false': return 'صواب/خطأ';
            default: return 'غير معروف';
        }
    }

    function deleteQuizQuestion(bookId, index) {
        if (bookQuizzes[bookId] && bookQuizzes[bookId].length > index) {
            const confirmDelete = confirm('هل أنت متأكد أنك تريد حذف هذا السؤال؟');
            if (confirmDelete) {
                bookQuizzes[bookId].splice(index, 1);
                localStorage.setItem('bookQuizzes', JSON.stringify(bookQuizzes));
                loadQuizQuestions(bookId);
                alert('تم حذف السؤال بنجاح.');
            }
        }
    }

    function startQuiz(bookId) {
        const questions = bookQuizzes[bookId];
        if (!questions || questions.length === 0) {
            alert('لا توجد أسئلة لهذا الكتاب لإجراء الاختبار. يرجى إضافة أسئلة أولاً.');
            return;
        }

        let currentQuestionIndex = 0;
        let score = 0;

        function renderQuizQuestion() {
            if (currentQuestionIndex < questions.length) {
                const q = questions[currentQuestionIndex];
                let questionHtml = `
                    <h2>اختبار الكتاب: ${userTextBooks.find(b => b.id === bookId).name}</h2>
                    <p style="font-size: 1.2em; margin-bottom: 20px;"><strong>السؤال ${currentQuestionIndex + 1} من ${questions.length}:</strong></p>
                    <p style="font-size: 1.1em; background-color: #f0f8ff; padding: 15px; border-radius: 8px; border: 1px solid #e0e0e0;">${q.question}</p>
                `;
                let answerInputHtml = '';
                let correctAnswerDisplay = '';

                if (q.type === 'text') {
                    answerInputHtml = `<textarea id="userAnswerInput" placeholder="اكتب إجابتك هنا..." style="width: calc(100% - 20px); height: 100px; margin-top: 20px;"></textarea>`;
                    correctAnswerDisplay = `الإجابة الصحيحة: "${q.answer}"`;
                } else if (q.type === 'mcq') {
                    answerInputHtml = '<div style="margin-top: 20px;">';
                    q.options.forEach((opt, i) => {
                        const optionLetter = String.fromCharCode(65 + i);
                        answerInputHtml += `
                            <label style="display: block; margin-bottom: 10px;">
                                <input type="radio" name="mcq_option" value="${optionLetter}" style="margin-left: 10px;">
                                ${optionLetter}: ${opt}
                            </label>
                        `;
                    });
                    answerInputHtml += '</div>';
                    correctAnswerDisplay = `الإجابة الصحيحة: الخيار ${q.answer}`;
                } else if (q.type === 'true_false') {
                    answerInputHtml = `
                        <div style="margin-top: 20px;">
                            <label style="margin-right: 20px;">
                                <input type="radio" name="true_false_option" value="true" style="margin-left: 10px;"> صواب
                            </label>
                            <label>
                                <input type="radio" name="true_false_option" value="false" style="margin-left: 10px;"> خطأ
                            </label>
                        </div>
                    `;
                    correctAnswerDisplay = `الإجابة الصحيحة: ${q.answer === 'true' ? 'صواب' : 'خطأ'}`;
                }

                modalBody.innerHTML = `
                    ${questionHtml}
                    ${answerInputHtml}
                    <button id="submitAnswerButton" style="margin-top: 15px;">تسليم الإجابة</button>
                    <div id="quizFeedback" style="margin-top: 20px; font-weight: bold; text-align: center;"></div>
                    <div id="correctAnswerDisplay" style="margin-top: 10px; color: #007bff; display: none; text-align: center;">${correctAnswerDisplay}</div>
                `;
                showModal(modalBody.innerHTML);

                document.getElementById('submitAnswerButton').onclick = () => {
                    let userAnswer;
                    if (q.type === 'text') {
                        userAnswer = document.getElementById('userAnswerInput').value.trim();
                    } else if (q.type === 'mcq') {
                        const selectedOption = document.querySelector('input[name="mcq_option"]:checked');
                        userAnswer = selectedOption ? selectedOption.value : '';
                    } else if (q.type === 'true_false') {
                        const selectedOption = document.querySelector('input[name="true_false_option"]:checked');
                        userAnswer = selectedOption ? selectedOption.value : '';
                    }

                    const feedbackDiv = document.getElementById('quizFeedback');
                    const correctAnswerDiv = document.getElementById('correctAnswerDisplay');

                    if (!userAnswer) {
                        feedbackDiv.textContent = 'الرجاء كتابة أو اختيار إجابتك قبل التسليم.';
                        feedbackDiv.style.color = 'orange';
                        return;
                    }

                    let isCorrect = false;
                    if (q.type === 'text') {
                        isCorrect = userAnswer.toLowerCase() === q.answer.toLowerCase();
                    } else if (q.type === 'mcq') {
                        isCorrect = userAnswer.toUpperCase() === q.answer.toUpperCase();
                    } else if (q.type === 'true_false') {
                        isCorrect = userAnswer === q.answer;
                    }

                    if (isCorrect) {
                        feedbackDiv.textContent = 'إجابة صحيحة! 🎉';
                        feedbackDiv.style.color = 'green';
                        score++;
                        addXp(10); // Award XP for correct answer
                    } else {
                        feedbackDiv.textContent = `إجابة خاطئة.`;
                        feedbackDiv.style.color = 'red';
                        correctAnswerDiv.style.display = 'block'; // Show correct answer for wrong attempts
                    }

                    // Disable inputs and button after submission
                    if (q.type === 'text') {
                        document.getElementById('userAnswerInput').disabled = true;
                    } else if (q.type === 'mcq') {
                        document.querySelectorAll('input[name="mcq_option"]').forEach(input => input.disabled = true);
                    } else if (q.type === 'true_false') {
                        document.querySelectorAll('input[name="true_false_option"]').forEach(input => input.disabled = true);
                    }

                    document.getElementById('submitAnswerButton').textContent = 'السؤال التالي';
                    document.getElementById('submitAnswerButton').onclick = () => {
                        currentQuestionIndex++;
                        renderQuizQuestion();
                    };
                };
            } else {
                // Quiz finished
                quizCompletions++; // Increment quiz completions (Feature 2)
                localStorage.setItem('quizCompletions', quizCompletions);
                updateGamificationDisplay(); // Update gamification after quiz completion

                modalBody.innerHTML = `
                    <h2>الاختبار انتهى!</h2>
                    <p style="font-size: 1.5em; text-align: center; margin-top: 30px;">نتيجتك: ${score} من ${questions.length}</p>
                    <p style="text-align: center; color: #555;">لقد أكملت جميع الأسئلة لهذا الكتاب.</p>
                    <button id="restartQuizButton" style="display: block; margin: 30px auto;">إعادة الاختبار</button>
                    <button id="closeQuizButton" style="display: block; margin: 10px auto; background-color: #6c757d;">إغلاق</button>
                `;
                showModal(modalBody.innerHTML);

                document.getElementById('restartQuizButton').onclick = () => startQuiz(bookId);
                document.getElementById('closeQuizButton').onclick = () => modalOverlay.style.display = 'none';
            }
        }

        renderQuizQuestion(); // Start the first question
    }


    // --- Notes Functions ---
    function loadNotes() {
        notesArea.value = userNotes;
    }

    function saveNotes() {
        userNotes = notesArea.value.trim();
        localStorage.setItem('userNotes', userNotes);
        addXp(5); // Award XP for saving notes
        updateGamificationDisplay(); // Update after notes change
        alert('تم حفظ الملاحظات بنجاح! 📝');
    }

    // --- NEW Feature 5: Data Management Functions (Export/Import) ---
    function exportUserData() {
        const userData = {
            userName: localStorage.getItem('userName'),
            userTextBooks: userTextBooks,
            userAudioBooks: userAudioBooks,
            dailySchedule: dailySchedule,
            bookProgress: bookProgress,
            bookQuizzes: bookQuizzes,
            userNotes: userNotes,
            readingTimes: readingTimes,
            listeningTimes: listeningTimes,
            userXp: userXp,
            userLevel: userLevel,
            userBadges: userBadges,
            quizCompletions: quizCompletions
        };

        const dataStr = JSON.stringify(userData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `educational_platform_data_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('تم تصدير جميع بياناتك بنجاح! ✅');
    }

    function importUserData() {
        const file = importFileInput.files[0];
        if (!file) {
            alert('الرجاء اختيار ملف بيانات JSON للاستيراد.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const importedData = JSON.parse(event.target.result);

                const confirmImport = confirm('تحذير: استيراد البيانات سيستبدل جميع بياناتك الحالية. هل أنت متأكد؟');
                if (!confirmImport) {
                    selectedImportFileName.textContent = '';
                    importFileInput.value = '';
                    importDataButton.style.display = 'none';
                    return;
                }

                // Apply imported data
                localStorage.setItem('userName', importedData.userName || '');
                userTextBooks = importedData.userTextBooks || [];
                localStorage.setItem('userTextBooks', JSON.stringify(userTextBooks));
                userAudioBooks = importedData.userAudioBooks || [];
                localStorage.setItem('userAudioBooks', JSON.stringify(userAudioBooks));
                dailySchedule = importedData.dailySchedule || {};
                localStorage.setItem('dailySchedule', JSON.stringify(dailySchedule));
                bookProgress = importedData.bookProgress || {};
                localStorage.setItem('bookProgress', JSON.stringify(bookProgress));
                bookQuizzes = importedData.bookQuizzes || {};
                localStorage.setItem('bookQuizzes', JSON.stringify(bookQuizzes));
                userNotes = importedData.userNotes || '';
                localStorage.setItem('userNotes', userNotes);
                readingTimes = importedData.readingTimes || {};
                localStorage.setItem('readingTimes', JSON.stringify(readingTimes));
                listeningTimes = importedData.listeningTimes || {};
                localStorage.setItem('listeningTimes', JSON.stringify(listeningTimes));
                userXp = importedData.userXp || 0;
                localStorage.setItem('userXp', userXp);
                userLevel = importedData.userLevel || 1;
                localStorage.setItem('userLevel', userLevel);
                userBadges = importedData.userBadges || [];
                localStorage.setItem('userBadges', JSON.stringify(userBadges));
                quizCompletions = importedData.quizCompletions || 0;
                localStorage.setItem('quizCompletions', quizCompletions);


                // Re-calculate selected main book IDs from imported data (if they still exist)
                selectedMainTextBookId = userTextBooks.some(b => b.id == importedData.selectedMainTextBookId) ? importedData.selectedMainTextBookId : null;
                localStorage.setItem('selectedMainTextBookId', selectedMainTextBookId);
                selectedMainAudioBookId = userAudioBooks.some(b => b.id == importedData.selectedMainAudioBookId) ? importedData.selectedMainAudioBookId : null;
                localStorage.setItem('selectedMainAudioBookId', selectedMainAudioBookId);

                alert('تم استيراد البيانات بنجاح! سيتم تحديث الصفحة. 🔄');
                location.reload(); // Reload to reflect all changes
            } catch (e) {
                alert('حدث خطأ أثناء قراءة أو تحليل ملف البيانات. الرجاء التأكد من أنه ملف JSON صالح.');
                console.error('Error importing data:', e);
            } finally {
                selectedImportFileName.textContent = '';
                importFileInput.value = '';
                importDataButton.style.display = 'none';
            }
        };
        reader.onerror = () => {
            alert('تعذر قراءة الملف.');
        };
        reader.readAsText(file);
    }

});
