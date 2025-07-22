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

    // --- NEW Main Dashboard Action Buttons ---
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

    // --- Text Book Management Elements (Manage Book Section) ---
    const bookFileInput = document.getElementById('bookFileInput');
    const chooseFileButton = document.getElementById('chooseFileButton');
    const uploadBookButton = document.getElementById('uploadBookButton');
    const selectedFileName = document.getElementById('selectedFileName');
    const currentBookDisplay = document.getElementById('currentBookDisplay');
    const currentBookName = document.getElementById('currentBookName'); // Used for "إدارة الكتب النصية"
    const removeMainBookButton = document.getElementById('removeMainBookButton'); // Changed from replace to remove
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
    const currentAudioBookNameSecondary = document.getElementById('currentAudioBookNameSecondary'); // Used for "الكتب الصوتية" page
    const removeMainAudioBookButton = document.getElementById('removeMainAudioBookButton'); // Changed from replace to remove
    const audioUploadForm = document.getElementById('audioUploadForm');
    const audioBooksListContainer = document.getElementById('audioBooksList');
    const noAudioBooksMessage = document.getElementById('noAudioBooksMessage');

    // --- Daily Schedule Elements ---
    const dailyScheduleGrid = document.querySelector('.daily-schedule-grid');
    const saveDailyScheduleButton = document.getElementById('saveDailyScheduleButton');
    // Days starting from Sunday
    const daysOfWeek = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];

    // --- Progress Tracking Elements ---
    const progressBooksList = document.getElementById('progressBooksList');
    const noProgressBooksMessage = document.getElementById('noProgressBooksMessage');
    const DEFAULT_BOOK_PAGES = 100; // Default number of pages for progress tracking

    // --- Quizzes Elements ---
    const quizzesBooksList = document.getElementById('quizzesBooksList');
    const noQuizzesBooksMessage = document.getElementById('noQuizzesBooksMessage');

    // --- Notes Elements ---
    const notesArea = document.getElementById('notesArea');
    const saveNotesButton = document.getElementById('saveNotesButton');


    // --- Data Storage (Simulated Backend with localStorage) ---
    let currentSelectedFile = null; // For text book upload
    let currentSelectedAudioFile = null; // For audio book upload
    let userTextBooks = JSON.parse(localStorage.getItem('userTextBooks')) || [];
    let userAudioBooks = JSON.parse(localStorage.getItem('userAudioBooks')) || [];
    let dailySchedule = JSON.parse(localStorage.getItem('dailySchedule')) || {};
    let bookProgress = JSON.parse(localStorage.getItem('bookProgress')) || {};
    let bookQuizzes = JSON.parse(localStorage.getItem('bookQuizzes')) || {};
    let userNotes = localStorage.getItem('userNotes') || '';

    let selectedMainTextBookId = localStorage.getItem('selectedMainTextBookId') ? parseInt(localStorage.getItem('selectedMainTextBookId')) : null;
    let selectedMainAudioBookId = localStorage.getItem('selectedMainAudioBookId') ? parseInt(localStorage.getItem('selectedMainAudioBookId')) : null;

    // --- Initial Load Logic ---
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
        userNameInput.value = savedUserName; // Prefill input
        showDashboard(savedUserName);
        displayMainDashboardInfo(); // Initial display of main dashboard content
        // Update secondary pages based on stored data
        displayCurrentBookInfo(); // Update the "Manage Book" section
        displayCurrentAudioBookInfo(); // Update the "Audio Books" section
        renderTextBooksList(); // Load and display books in "My Books" section
        renderAudioBooksList(); // Load and display audio books
        renderDailySchedule(); // Load and display daily schedule
        renderProgressTracking(); // Load and display progress
        renderQuizzesSection(); // Load and display quizzes section
        loadNotes(); // Load saved notes
        updateOverallProgress(); // Calculate and display overall progress
    }

    // --- Event Listeners ---

    // Welcome Screen Start Button
    startButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            localStorage.setItem('userName', userName); // Save user name
            showDashboard(userName);
            displayMainDashboardInfo(); // Show content for main page
            displayCurrentBookInfo();
            displayCurrentAudioBookInfo();
            renderTextBooksList();
            renderAudioBooksList();
            renderDailySchedule();
            renderProgressTracking();
            renderQuizzesSection();
            loadNotes();
            updateOverallProgress();
        } else {
            alert('من فضلك أدخل اسمك لتتمكن من المتابعة.');
        }
    });

    // Sidebar Navigation
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            const contentId = item.dataset.content;
            if (contentId) {
                setActiveContent(contentId);
            }
        });
    });

    // Main Dashboard Action Buttons
    goToLessonsButton.addEventListener('click', () => setActiveContent('lessons-content'));
    listenToExplanationButton.addEventListener('click', () => {
        const mainAudioBook = userAudioBooks.find(b => b.id == selectedMainAudioBookId);
        if (mainAudioBook) {
            playAudioBook(mainAudioBook);
        } else {
            alert('لا يوجد كتاب صوتي رئيسي محدد. يرجى تحديد كتاب من قسم "الكتب الصوتية".');
            setActiveContent('audio-books-content'); // Guide user
        }
    });
    takeQuizButton.addEventListener('click', () => setActiveContent('quizzes-content'));
    goToNotesButton.addEventListener('click', () => setActiveContent('notes-content'));

    // Main Page Selected Book Info Button
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


    // Modal Close Buttons (X button and outside click)
    closeModalButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        // Pause any playing media when modal closes
        const audioInModal = modalBody.querySelector('audio');
        const videoInModal = modalBody.querySelector('video');
        if (audioInModal) audioInModal.pause();
        if (videoInModal) videoInModal.pause();
        modalBody.innerHTML = ''; // Clear modal content
    });
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
            const audioInModal = modalBody.querySelector('audio');
            const videoInModal = modalBody.querySelector('video');
            if (audioInModal) audioInModal.pause();
            if (videoInModal) videoInModal.pause();
            modalBody.innerHTML = ''; // Clear modal content
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
                totalPages: DEFAULT_BOOK_PAGES // Default pages for new books
            };

            userTextBooks.push(newBook);
            localStorage.setItem('userTextBooks', JSON.stringify(userTextBooks));

            alert(`تم رفع كتاب "${newBook.name}" بنجاح! 🎉📚\nيمكنك الآن تعيينه ككتاب رئيسي من "قائمة كتبي النصية".`);

            displayCurrentBookInfo(); // Update "Manage Book" section
            renderTextBooksList(); // Update "My Books" list
            renderLessonsList(); // Update lessons list
            renderProgressTracking(); // Update progress tracking section
            renderQuizzesSection(); // Update quizzes section
            updateOverallProgress(); // Update overall progress in sidebar

            // Reset form elements
            bookFileInput.value = '';
            currentSelectedFile = null;
            selectedFileName.textContent = '';
            uploadBookButton.style.display = 'none';
        } else {
            alert('من فضلك اختر كتابًا لرفعه أولاً.');
        }
    });

    // Changed from replaceBookButton to removeMainBookButton
    removeMainBookButton.addEventListener('click', () => {
        const confirmRemove = confirm('هل أنت متأكد أنك تريد إزالة الكتاب النصي الرئيسي من الواجهة الرئيسية؟ لن يتم حذفه من قائمة كتبك.');
        if (confirmRemove) {
            selectedMainTextBookId = null;
            localStorage.removeItem('selectedMainTextBookId');
            displayCurrentBookInfo(); // Update "Manage Book" section
            displayMainDashboardInfo(); // Update main dashboard
            renderTextBooksList(); // To show select buttons again
            renderLessonsList(); // To show select buttons again
            updateOverallProgress(); // Re-evaluate if main book change affects total progress display
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
            // Check for MP3 or MP4 MIME types
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
                type: currentSelectedAudioFile.type // Store file type (audio/mpeg or video/mp4)
            };

            userAudioBooks.push(newAudioBook);
            localStorage.setItem('userAudioBooks', JSON.stringify(userAudioBooks));

            alert(`تم رفع ملف "${newAudioBook.name}" بنجاح! 🎉🎧\nيمكنك الآن تعيينه ككتاب صوتي رئيسي من "الكتب الصوتية".`);

            displayCurrentAudioBookInfo(); // Update "Audio Books" section
            renderAudioBooksList(); // Update "Audio Books" list
            renderLessonsList(); // Update lessons list

            // Reset form elements
            audioFileInput.value = '';
            currentSelectedAudioFile = null;
            selectedAudioFileName.textContent = '';
            uploadAudioBookButton.style.display = 'none';
        } else {
            alert('من فضلك اختر ملفًا صوتيًا لرفعه أولاً.');
        }
    });

    // Changed from replaceAudioBookButton to removeMainAudioBookButton
    removeMainAudioBookButton.addEventListener('click', () => {
        const confirmRemove = confirm('هل أنت متأكد أنك تريد إزالة الكتاب الصوتي الرئيسي من الواجهة الرئيسية؟ لن يتم حذفه من قائمة ملفاتك.');
        if (confirmRemove) {
            selectedMainAudioBookId = null;
            localStorage.removeItem('selectedMainAudioBookId');
            displayCurrentAudioBookInfo(); // Update "Audio Books" section
            displayMainDashboardInfo(); // Update main dashboard
            renderAudioBooksList(); // To show select buttons again
            renderLessonsList(); // To show select buttons again
            alert('تم إزالة الكتاب الصوتي الرئيسي من الواجهة الرئيسية.');
        }
    });

    // --- Daily Schedule (الجدول اليومي) ---
    saveDailyScheduleButton.addEventListener('click', saveDailySchedule);

    // --- Notes Section ---
    saveNotesButton.addEventListener('click', saveNotes);


    // --- Core Functions ---

    function showDashboard(name) {
        welcomeScreen.style.display = 'none';
        dashboard.style.display = 'flex';
        displayedUserName.textContent = name;
        setActiveContent('main-dashboard-content'); // Set default active section to new home
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
                renderLessonsList(); // Show all books when "Go to Lessons" is clicked
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
            } else if (contentId === 'quizzes-content') {
                renderQuizzesSection();
            } else if (contentId === 'notes-content') {
                loadNotes();
            }
        }
    }

    function showModal(contentHTML) {
        modalBody.innerHTML = contentHTML;
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
            // Ensure audio player is hidden and stopped if no book
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
            currentBookName.textContent = 'لم يتم تعيين كتاب نصي رئيسي بعد.'; // Changed message
            currentBookDisplay.style.display = 'none'; // Hide if no main book selected
        }
    }

    function renderTextBooksList() {
        booksListContainer.innerHTML = ''; // Clear previous list

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
                buttonsHtml += `<button class="delete-book-button" data-book-id="${book.id}" style="background-color: #dc3545; margin-top: 10px;">حذف الكتاب</button>`; // Added Delete Button

                bookCard.innerHTML = `
                    <h3>${book.name}</h3>
                    ${buttonsHtml}
                `;
                booksListContainer.appendChild(bookCard);
            });

            // Attach event listeners to newly created buttons
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
                    displayMainDashboardInfo(); // Update main dashboard
                    displayCurrentBookInfo(); // Update "Manage Book" section
                    renderTextBooksList(); // Re-render to update buttons
                    renderLessonsList(); // Re-render to update lessons list
                    alert('تم تعيين الكتاب النصي الرئيسي بنجاح! ✅');
                });
            });

            document.querySelectorAll('.add-questions-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const bookId = parseInt(event.target.dataset.bookId);
                    const bookName = event.target.dataset.bookName;
                    // Switch to quizzes section and highlight relevant book or open modal
                    setActiveContent('quizzes-content');
                    // Optionally, scroll to the specific quiz section for this book
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

            // If the deleted book was the main book, clear main selection
            if (selectedMainTextBookId === bookId) {
                selectedMainTextBookId = null;
                localStorage.removeItem('selectedMainTextBookId');
            }
            // Remove progress and quizzes associated with this book
            delete bookProgress[bookId];
            localStorage.setItem('bookProgress', JSON.stringify(bookProgress));
            delete bookQuizzes[bookId];
            localStorage.setItem('bookQuizzes', JSON.stringify(bookQuizzes));


            alert(`تم حذف كتاب "${bookToDelete.name}" بنجاح! 🗑️`);
            displayMainDashboardInfo();
            displayCurrentBookInfo();
            renderTextBooksList();
            renderLessonsList();
            renderProgressTracking();
            renderQuizzesSection();
            updateOverallProgress();
        }
    }


    function readBook(book) {
        const modalContentHTML = `
            <h2>قراءة: ${book.name}</h2>
            <div style="width: 100%; height: 500px; border: 1px solid #ccc; margin-top: 20px;">
                <iframe src="${book.url}" style="width: 100%; height: 100%; border: none;"></iframe>
            </div>
            <p style="margin-top: 15px; color: #666;">
                <small>ملاحظة: هذه ميزة تجريبية. عرض ملفات PDF مباشرة في المتصفح يتطلب دعماً من المتصفح وقد لا يعمل لجميع الملفات أو المتصفحات.</small>
            </p>
        `;
        showModal(modalContentHTML);
    }

    // --- Audio Book Functions ---
    function displayCurrentAudioBookInfo() {
        const mainAudioBook = userAudioBooks.find(b => b.id == selectedMainAudioBookId);
        if (mainAudioBook) {
            currentAudioBookNameSecondary.textContent = mainAudioBook.name; // Use secondary ID for this page
            currentAudioBookDisplay.style.display = 'flex';
        } else {
            currentAudioBookNameSecondary.textContent = 'لم يتم تعيين كتاب صوتي رئيسي بعد.'; // Changed message
            currentAudioBookDisplay.style.display = 'none'; // Hide if no main audio book selected
        }
    }

    function renderAudioBooksList() {
        audioBooksListContainer.innerHTML = ''; // Clear previous list

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
                buttonsHtml += `<button class="delete-audio-book-button" data-book-id="${book.id}" style="background-color: #dc3545; margin-top: 10px;">حذف الملف</button>`; // Added Delete Button


                audioBookCard.innerHTML = `
                    <h3>${book.name}</h3>
                    ${buttonsHtml}
                `;
                audioBooksListContainer.appendChild(audioBookCard);
            });

            // Attach event listeners to newly created buttons
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
                    displayMainDashboardInfo(); // Update main dashboard
                    displayCurrentAudioBookInfo(); // Update "Audio Books" section
                    renderAudioBooksList(); // Re-render to update buttons
                    renderLessonsList(); // Re-render to update lessons list
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

            // If the deleted book was the main audio book, clear main selection
            if (selectedMainAudioBookId === bookId) {
                selectedMainAudioBookId = null;
                localStorage.removeItem('selectedMainAudioBookId');
            }

            alert(`تم حذف ملف "${bookToDelete.name}" الصوتي بنجاح! 🗑️`);
            displayMainDashboardInfo();
            displayCurrentAudioBookInfo();
            renderAudioBooksList();
            renderLessonsList();
        }
    }


    function playAudioBook(book) {
        let mediaTag;
        // Pause any currently playing audio/video in the main player if present
        if (currentMainAudioPlayer && !currentMainAudioPlayer.paused) {
            currentMainAudioPlayer.pause();
        }

        if (book.type === 'audio/mpeg') {
            mediaTag = `<audio controls autoplay style="width: 100%; margin-top: 15px;">
                            <source src="${book.url}" type="audio/mpeg">
                            متصفحك لا يدعم عنصر الصوت.
                        </audio>`;
        } else if (book.type === 'video/mp4') {
            mediaTag = `<video controls autoplay style="width: 100%; margin-top: 15px;">
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
    }

    // --- Daily Schedule Functions ---
    function renderDailySchedule() {
        // Clear existing entries except headers
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
        progressBooksList.innerHTML = ''; // Clear previous list

        if (userTextBooks.length === 0) {
            noProgressBooksMessage.style.display = 'block';
        } else {
            noProgressBooksMessage.style.display = 'none';
            userTextBooks.forEach(book => {
                const savedProgress = bookProgress[book.id] || 0;
                // Ensure book.totalPages is a number, default to DEFAULT_BOOK_PAGES
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
                    input.value = pageNumber; // Update input with sanitized value

                    bookProgress[bookId] = pageNumber;
                    localStorage.setItem('bookProgress', JSON.stringify(bookProgress));

                    const percentageSpan = document.getElementById(`progress-percentage-${bookId}`);
                    const newPercentage = ((pageNumber / totalPages) * 100).toFixed(0);
                    percentageSpan.textContent = `${newPercentage}%`;

                    updateOverallProgress(); // Recalculate overall progress
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

    // --- Quizzes Functions ---
    function renderQuizzesSection() {
        quizzesBooksList.innerHTML = ''; // Clear previous list

        if (userTextBooks.length === 0) {
            noQuizzesBooksMessage.style.display = 'block';
        } else {
            noQuizzesBooksMessage.style.display = 'none';
            userTextBooks.forEach(book => {
                const quizItem = document.createElement('div');
                quizItem.classList.add('quiz-book-item');
                quizItem.setAttribute('data-book-id', book.id); // Add data-book-id to the main quiz item
                quizItem.innerHTML = `
                    <h3>الاختبارات الخاصة بكتاب: ${book.name}</h3>
                    <p>أضف أسئلة أو ابدأ الاختبار لهذا الكتاب.</p>
                    <textarea class="question-input" placeholder="اكتب السؤال هنا..."></textarea>
                    <textarea class="answer-input" placeholder="اكتب الإجابة هنا..."></textarea>
                    <button class="add-quiz-question-button">إضافة سؤال وجواب</button>
                    <button class="start-quiz-button" style="background-color: #009688; margin-right: 10px;">بدء الاختبار</button>
                    <div class="questions-list" id="questions-list-${book.id}">
                        </div>
                `;
                quizzesBooksList.appendChild(quizItem);
                loadQuizQuestions(book.id); // Load existing questions for this book
            });

            document.querySelectorAll('.add-quiz-question-button').forEach(button => {
                button.addEventListener('click', (event) => {
                    const quizItemDiv = event.target.closest('.quiz-book-item');
                    const bookId = parseInt(quizItemDiv.dataset.bookId);
                    const questionInput = quizItemDiv.querySelector('.question-input');
                    const answerInput = quizItemDiv.querySelector('.answer-input');

                    const question = questionInput.value.trim();
                    const answer = answerInput.value.trim();

                    if (question && answer) {
                        addQuizQuestion(bookId, question, answer);
                        questionInput.value = ''; // Clear inputs
                        answerInput.value = '';
                        alert('تم إضافة السؤال والإجابة بنجاح! يمكنك إضافة المزيد أو بدء الاختبار.');
                    } else {
                        alert('من فضلك أدخل السؤال والإجابة لإضافتها.');
                    }
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

    function addQuizQuestion(bookId, question, answer) {
        if (!bookQuizzes[bookId]) {
            bookQuizzes[bookId] = [];
        }
        bookQuizzes[bookId].push({ question, answer });
        localStorage.setItem('bookQuizzes', JSON.stringify(bookQuizzes));
        loadQuizQuestions(bookId); // Reload questions for the specific book
    }

    function loadQuizQuestions(bookId) {
        const questionsListDiv = document.getElementById(`questions-list-${bookId}`);
        questionsListDiv.innerHTML = ''; // Clear previous questions

        const questionsForBook = bookQuizzes[bookId] || [];
        if (questionsForBook.length === 0) {
            questionsListDiv.innerHTML = '<p style="color: #888;">لا توجد أسئلة لهذا الكتاب بعد. ابدأ بإضافة أسئلة!</p>';
        } else {
            questionsForBook.forEach((q, index) => {
                const questionEntry = document.createElement('div');
                questionEntry.classList.add('question-entry');
                questionEntry.innerHTML = `
                    <p><strong>السؤال ${index + 1}:</strong> ${q.question}</p>
                    <p><strong>الإجابة:</strong> ${q.answer}</p>
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

    function deleteQuizQuestion(bookId, index) {
        if (bookQuizzes[bookId] && bookQuizzes[bookId].length > index) {
            const confirmDelete = confirm('هل أنت متأكد أنك تريد حذف هذا السؤال؟');
            if (confirmDelete) {
                bookQuizzes[bookId].splice(index, 1);
                localStorage.setItem('bookQuizzes', JSON.stringify(bookQuizzes));
                loadQuizQuestions(bookId); // Re-render questions for this book
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
                modalBody.innerHTML = `
                    <h2>اختبار الكتاب: ${userTextBooks.find(b => b.id === bookId).name}</h2>
                    <p style="font-size: 1.2em; margin-bottom: 20px;"><strong>السؤال ${currentQuestionIndex + 1} من ${questions.length}:</strong></p>
                    <p style="font-size: 1.1em; background-color: #f0f8ff; padding: 15px; border-radius: 8px; border: 1px solid #e0e0e0;">${q.question}</p>
                    <textarea id="userAnswerInput" placeholder="اكتب إجابتك هنا..." style="width: calc(100% - 20px); height: 100px; margin-top: 20px;"></textarea>
                    <button id="submitAnswerButton" style="margin-top: 15px;">تسليم الإجابة</button>
                    <div id="quizFeedback" style="margin-top: 20px; font-weight: bold; text-align: center;"></div>
                `;
                showModal(modalBody.innerHTML);

                document.getElementById('submitAnswerButton').onclick = () => {
                    const userAnswer = document.getElementById('userAnswerInput').value.trim();
                    const feedbackDiv = document.getElementById('quizFeedback');

                    if (!userAnswer) {
                        feedbackDiv.textContent = 'الرجاء كتابة إجابتك قبل التسليم.';
                        feedbackDiv.style.color = 'orange';
                        return;
                    }

                    // Simple comparison for now, can be enhanced with fuzzy matching
                    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
                        feedbackDiv.textContent = 'إجابة صحيحة! 🎉';
                        feedbackDiv.style.color = 'green';
                        score++;
                    } else {
                        feedbackDiv.textContent = `إجابة خاطئة. الإجابة الصحيحة هي: "${q.answer}"`;
                        feedbackDiv.style.color = 'red';
                    }

                    // Disable input and button after submission, prepare for next
                    document.getElementById('userAnswerInput').disabled = true;
                    document.getElementById('submitAnswerButton').textContent = 'السؤال التالي';
                    document.getElementById('submitAnswerButton').onclick = () => {
                        currentQuestionIndex++;
                        renderQuizQuestion();
                    };
                };
            } else {
                // Quiz finished
                modalBody.innerHTML = `
                    <h2>الاختبار انتهى!</h2>
                    <p style="font-size: 1.5em; text-align: center; margin-top: 30px;">نتيجتك: ${score} من ${questions.length}</p>
                    <p style="text-align: center; color: #555;">لقد أكملت جميع الأسئلة لهذا الكتاب.</p>
                    <button id="restartQuizButton" style="display: block; margin: 30px auto;">إعادة الاختبار</button>
                    <button id="closeQuizButton" style="display: block; margin: 10px auto; background-color: #6c757d;">إغلاق</button>
                `;
                showModal(modalBody.innerHTML);

                document.getElementById('restartQuizButton').onclick = () => startQuiz(bookId); // Restart quiz
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
        alert('تم حفظ الملاحظات بنجاح! 📝');
    }
});