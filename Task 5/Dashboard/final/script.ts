interface Card {
    cardClass: string;
    title: string;
    starSelect: boolean;
    subject: string;
    grade: number;
    increment: number;
    units: number;
    lessons: number;
    topics: number;
    selectOptions: string[];
    studentsInfo: string;
    clicked: string[];
}

interface Alert {
    title: string;
    desc: string;
    meta: string;
    checked: boolean;
}

interface Announcement {
    title: string;
    desc: string;
    meta: string;
    checked: boolean;
}

interface AlertData {
    alerts: Alert[];
    buttons: { class: string; label: string }[];
}

interface AnnouncementData {
    announcements: Announcement[];
    buttons: { class: string; label: string }[];
}

async function loadCards(): Promise<void> {
    const response = await fetch('cards.json');
    const cards: Card[] = await response.json();

    const container = document.getElementById('cards-container');
    if (!container) return;
    container.innerHTML = '';

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.className = `card ${card.cardClass}`;

        cardDiv.innerHTML = `
          <div class="item1">
            <div class="item1-img"></div>
          </div>
          <div class="item2">
            <div class="item2-1">
              <div>${card.title}</div>
              <div class="item2-1-img ${card.starSelect ? 'star-select' : ''}"></div>
            </div>
            <div class="item2-2">
              <p>${card.subject} | Grade ${card.grade} <span class="inc">+${card.increment}</span></p>
            </div>
            <div class="item2-3">
              <p><b>${card.units}</b> Units <b>${card.lessons}</b> Lessons <b>${card.topics}</b> Topics</p>
            </div>
            <div class="item2-4">
              <div class="custom-select">
                <select>
                  ${card.selectOptions.map(option => `<option value="${option.toLowerCase().replace(/\s/g, '')}">${option}</option>`).join('')}
                </select>
              </div>
            </div>
            <div class="item2-5">
              <p>${card.studentsInfo}</p>
            </div>
            <div class="item2-6"></div>
          </div>
          <div class="item3">
            <div class="item3-eye item3-img ${card.clicked.includes('eye') ? 'clicked' : ''}"></div>
            <div class="item3-course item3-img ${card.clicked.includes('course') ? 'clicked' : ''}"></div>
            <div class="item3-grade item3-img ${card.clicked.includes('grade') ? 'clicked' : ''}"></div>
            <div class="item3-report item3-img ${card.clicked.includes('report') ? 'clicked' : ''}"></div>
          </div>
        `;

        container.appendChild(cardDiv);
    });

    document.querySelectorAll('.item2-1-img').forEach(img => {
        img.addEventListener('click', function () {
            this.classList.toggle('star-select');
        });
    });
    document.querySelectorAll('.item3-img').forEach(img => {
        img.addEventListener('click', function () {
            this.classList.toggle('clicked');
        });
    });
}

loadCards();

function toggleMenu(): void {
    // const navLinks = document.getElementById('navLinks');
    // navLinks.classList.toggle('active');
}

// const navLinks = document.querySelectorAll(".nav-links a");
const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", (e: MouseEvent) => {
        e.preventDefault();

        // Remove classes from all links
        navLinks.forEach(l => {
            l.classList.remove("selected-link");
            const lineElem = l.querySelector(".line");
            if (lineElem) {
                lineElem.classList.remove("default-selected-line");
            }
            l.classList.remove("default-selected-text");
        });

        // Add classes to clicked link
        link.classList.add("selected-link");
        const line = link.querySelector(".line");
        if (line) {
            line.classList.add("default-selected-line");
        }
        link.classList.add("default-selected-text");
    });
});

const sections: NodeListOf<HTMLElement> = document.querySelectorAll(".section");

sections.forEach(section => {
    const anchor = section.querySelector("a");
    if (anchor) {
        anchor.addEventListener("click", (e: MouseEvent) => {
            e.preventDefault(); // optional, if you want to stop jump

            // Remove the class from all section lines
            sections.forEach(s => {
                const line = s.querySelector(".section-line");
                if (line) {
                    line.classList.remove("default-selected-section");
                }
            });

            // Add the class to the clicked section's line
            const line = section.querySelector(".section-line");
            if (line) {
                line.classList.add("default-selected-section");
            }
        });
    }
});

// Dropdown menu toggle
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', (e: MouseEvent) => {
        e.stopPropagation();
        const dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu) {
            dropdownMenu.classList.toggle('active');
        }
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', function (e: MouseEvent) {
    const menu = document.getElementById('dropdownMenu');
    if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// Prevent dropdown from closing when clicking inside
const dropdownMenu = document.getElementById('dropdownMenu');
if (dropdownMenu) {
    dropdownMenu.addEventListener('click', function (e: MouseEvent) {
        e.stopPropagation();
    });
}

// Submenu toggle (reuse your function, but works for dropdown)
function toggleSubMenu(e: Event, id: string): void {
    e.preventDefault();
    const submenu = document.getElementById(id);
    if (submenu) {
        submenu.classList.toggle('active');
    }
    const link = e.currentTarget as HTMLElement;
    link.classList.toggle('open');
}

// ...existing code...
const announcementsIcon = document.querySelector('.announcements-icon');
if (announcementsIcon) {
    announcementsIcon.addEventListener('click', (e: MouseEvent) => {
        e.stopPropagation();
        const announcementPanel = document.getElementById('announcementPanel');
        if (announcementPanel) {
            announcementPanel.classList.toggle('active');
        }
    });
}

// Close panel when clicking outside
document.addEventListener('click', function (e: MouseEvent) {
    const panel = document.getElementById('announcementPanel');
    if (panel && panel.classList.contains('active')) {
        panel.classList.remove('active');
    }
});

// Prevent panel from closing when clicking inside
const announcementPanel = document.getElementById('announcementPanel');
if (announcementPanel) {
    announcementPanel.addEventListener('click', function (e: MouseEvent) {
        e.stopPropagation();
    });
}
// ...existing code...

// ...existing code...
function countAnnouncementCheckboxes(): { ticked: number; unticked: number } {
    const checkboxes = document.querySelectorAll('#announcementPanel .custom-checkbox input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    let ticked = 0, unticked = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) ticked++;
        else unticked++;
    });
    return { ticked, unticked };
}

// Function to update the div with the new number
function updateAnnouncemnt(): void {
    const announcemntCounts = document.getElementById('announcemntCounts');
    if (announcemntCounts) {
        announcemntCounts.innerText = countAnnouncementCheckboxes().ticked.toString();
    }
}
setInterval(updateAnnouncemnt, 1000);

// Example usage:
// const counts = countAnnouncementCheckboxes();
// console.log('Ticked:', counts.ticked, 'Unticked:', counts.unticked);
// ...existing code...

// ...existing code...
const alertIcon = document.querySelector('.alert-icon');
if (alertIcon) {
    alertIcon.addEventListener('click', (e: MouseEvent) => {
        e.stopPropagation();
        const alertPanel = document.getElementById('alertPanel');
        if (alertPanel) {
            alertPanel.classList.toggle('active');
        }
    });
}

// Close alert panel when clicking outside
document.addEventListener('click', function (e: MouseEvent) {
    const panel = document.getElementById('alertPanel');
    if (panel && panel.classList.contains('active')) {
        panel.classList.remove('active');
    }
});

// Prevent alert panel from closing when clicking inside
const alertPanel = document.getElementById('alertPanel');
if (alertPanel) {
    alertPanel.addEventListener('click', function (e: MouseEvent) {
        e.stopPropagation();
    });
}

// Count checked/unchecked checkboxes in alert panel
function countAlertCheckboxes(): { ticked: number; unticked: number } {
    const checkboxes = document.querySelectorAll('#alertPanel .custom-checkbox input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    let ticked = 0, unticked = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) ticked++;
        else unticked++;
    });
    return { ticked, unticked };
}

// Update alert count badge
function updateAlertCount(): void {
    const alertCounts = document.getElementById('alertCounts');
    if (alertCounts) {
        alertCounts.innerText = countAlertCheckboxes().ticked.toString();
    }
}
setInterval(updateAlertCount, 1000);
// ...existing code...

function setupHoverPanel(iconSelector: string, panelSelector: string, activeClass = 'active'): void {
    const icon = document.querySelector(iconSelector);
    const panel = document.querySelector(panelSelector);
    let hover = false;

    function showPanel(): void {
        if (panel) panel.classList.add(activeClass);
    }
    function hidePanel(): void {
        if (panel) panel.classList.remove(activeClass);
    }

    if (icon) {
        icon.addEventListener('mouseenter', showPanel);
        icon.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!hover) hidePanel();
            }, 50);
        });
    }

    if (panel) {
        panel.addEventListener('mouseenter', () => {
            hover = true;
            showPanel();
        });
        panel.addEventListener('mouseleave', () => {
            hover = false;
            hidePanel();
        });
    }
}
setupHoverPanel('.alert-icon', '#alertPanel');
setupHoverPanel('.announcements-icon', '#announcementPanel');
setupHoverPanel('.hamburger', '#dropdownMenu', 'active');

async function loadAlertData(): Promise<void> {
    const response = await fetch('alertData.json');
    const data: AlertData = await response.json();

    const alertList = document.querySelector('#alertPanel .alert-list');
    const alertActions = document.querySelector('#alertPanel .alert-actions');
    const alertCounts = document.getElementById('alertCounts');

    if (!alertList || !alertActions || !alertCounts) return;

    alertList.innerHTML = '';
    alertActions.innerHTML = '';

    data.alerts.forEach(alert => {
        const alertItem = document.createElement('div');
        alertItem.className = 'alert-item';
        if (!alert.checked) {
            alertItem.classList.add('unchecked');
        }

        alertItem.innerHTML = `
                    <div class="alert-info">
                        <div class="alert-title">${alert.title}</div>
                        <div class="alert-desc">${alert.desc}</div>
                        <div class="alert-meta">${alert.meta}</div>
                    </div>
                    <label class="custom-checkbox">
                        <input type="checkbox" ${alert.checked ? 'checked' : ''} />
                        <span></span>
                    </label>
                `;

        alertList.appendChild(alertItem);
    });

    data.buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = button.class;
        btn.textContent = button.label;
        alertActions.appendChild(btn);
    });

    // Update alert count badge
    function updateAlertCount(): void {
        const checkboxes = alertList.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
        let ticked = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) ticked++;
        });
        alertCounts.innerText = ticked.toString();
    }
    updateAlertCount();

    alertList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', (e: Event) => {
            const checkbox = e.target as HTMLInputElement;
            const alertItem = checkbox.closest('.alert-item');
            if (checkbox.checked) {
                alertItem?.classList.remove('unchecked');
            } else {
                alertItem?.classList.add('unchecked');
            }
            updateAlertCount();
        });
    });
}

async function loadAnnouncementData(): Promise<void> {
    const response = await fetch('announcementData.json');
    const data: AnnouncementData = await response.json();

    const announcementList = document.querySelector('#announcementPanel .announcement-list');
    const announcementActions = document.querySelector('#announcementPanel .announcement-actions');
    const announcemntCounts = document.getElementById('announcemntCounts');

    if (!announcementList || !announcementActions || !announcemntCounts) return;

    announcementList.innerHTML = '';
    announcementActions.innerHTML = '';

    data.announcements.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.className = 'announcement-item';
        if (!announcement.checked) {
            announcementItem.classList.add('unchecked');
        }

        announcementItem.innerHTML = `
                    <div class="announcement-info">
                        <div class="announcement-title">${announcement.title}</div>
                        <div class="announcement-desc">${announcement.desc}</div>
                        <div class="announcement-meta">${announcement.meta}</div>
                    </div>
                    <label class="custom-checkbox">
                        <input type="checkbox" ${announcement.checked ? 'checked' : ''} />
                        <span></span>
                    </label>
                `;

        announcementList.appendChild(announcementItem);
    });

    data.buttons.forEach(button => {
        const btn = document.createElement('button');
        btn.className = button.class;
        btn.textContent = button.label;
        announcementActions.appendChild(btn);
    });

    // Update announcement count badge
    function updateAnnouncementCount(): void {
        const checkboxes = announcementList.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
        let ticked = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) ticked++;
        });
        announcemntCounts.innerText = ticked.toString();
    }
    updateAnnouncementCount();

    announcementList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', (e: Event) => {
            const checkbox = e.target as HTMLInputElement;
            const announcementItem = checkbox.closest('.announcement-item');
            if (checkbox.checked) {
                announcementItem?.classList.remove('unchecked');
            } else {
                announcementItem?.classList.add('unchecked');
            }
            updateAnnouncementCount();
        });
    });
}

// Load data on page load
document.addEventListener('DOMContentLoaded', () => {
    loadAlertData();
    loadAnnouncementData();
});
