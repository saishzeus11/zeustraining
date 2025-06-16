var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function loadCards() {
    return __awaiter(this, void 0, void 0, function () {
        var response, cards, container;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('cards.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    cards = _a.sent();
                    container = document.getElementById('cards-container');
                    if (!container)
                        return [2 /*return*/];
                    container.innerHTML = '';
                    cards.forEach(function (card) {
                        var cardDiv = document.createElement('div');
                        cardDiv.className = "card ".concat(card.cardClass);
                        cardDiv.innerHTML = "\n          <div class=\"item1\">\n            <div class=\"item1-img\"></div>\n          </div>\n          <div class=\"item2\">\n            <div class=\"item2-1\">\n              <div>".concat(card.title, "</div>\n              <div class=\"item2-1-img ").concat(card.starSelect ? 'star-select' : '', "\"></div>\n            </div>\n            <div class=\"item2-2\">\n              <p>").concat(card.subject, " | Grade ").concat(card.grade, " <span class=\"inc\">+").concat(card.increment, "</span></p>\n            </div>\n            <div class=\"item2-3\">\n              <p><b>").concat(card.units, "</b> Units <b>").concat(card.lessons, "</b> Lessons <b>").concat(card.topics, "</b> Topics</p>\n            </div>\n            <div class=\"item2-4\">\n              <div class=\"custom-select\">\n                <select>\n                  ").concat(card.selectOptions.map(function (option) { return "<option value=\"".concat(option.toLowerCase().replace(/\s/g, ''), "\">").concat(option, "</option>"); }).join(''), "\n                </select>\n              </div>\n            </div>\n            <div class=\"item2-5\">\n              <p>").concat(card.studentsInfo, "</p>\n            </div>\n            <div class=\"item2-6\"></div>\n          </div>\n          <div class=\"item3\">\n            <div class=\"item3-eye item3-img ").concat(card.clicked.includes('eye') ? 'clicked' : '', "\"></div>\n            <div class=\"item3-course item3-img ").concat(card.clicked.includes('course') ? 'clicked' : '', "\"></div>\n            <div class=\"item3-grade item3-img ").concat(card.clicked.includes('grade') ? 'clicked' : '', "\"></div>\n            <div class=\"item3-report item3-img ").concat(card.clicked.includes('report') ? 'clicked' : '', "\"></div>\n          </div>\n        ");
                        container.appendChild(cardDiv);
                    });
                    document.querySelectorAll('.item2-1-img').forEach(function (img) {
                        img.addEventListener('click', function () {
                            this.classList.toggle('star-select');
                        });
                    });
                    document.querySelectorAll('.item3-img').forEach(function (img) {
                        img.addEventListener('click', function () {
                            this.classList.toggle('clicked');
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
loadCards();
function toggleMenu() {
    // const navLinks = document.getElementById('navLinks');
    // navLinks.classList.toggle('active');
}
// const navLinks = document.querySelectorAll(".nav-links a");
var navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        // Remove classes from all links
        navLinks.forEach(function (l) {
            l.classList.remove("selected-link");
            var lineElem = l.querySelector(".line");
            if (lineElem) {
                lineElem.classList.remove("default-selected-line");
            }
            l.classList.remove("default-selected-text");
        });
        // Add classes to clicked link
        link.classList.add("selected-link");
        var line = link.querySelector(".line");
        if (line) {
            line.classList.add("default-selected-line");
        }
        link.classList.add("default-selected-text");
    });
});
var sections = document.querySelectorAll(".section");
sections.forEach(function (section) {
    var anchor = section.querySelector("a");
    if (anchor) {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // optional, if you want to stop jump
            // Remove the class from all section lines
            sections.forEach(function (s) {
                var line = s.querySelector(".section-line");
                if (line) {
                    line.classList.remove("default-selected-section");
                }
            });
            // Add the class to the clicked section's line
            var line = section.querySelector(".section-line");
            if (line) {
                line.classList.add("default-selected-section");
            }
        });
    }
});
// Dropdown menu toggle
var hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        var dropdownMenu = document.getElementById('dropdownMenu');
        if (dropdownMenu) {
            dropdownMenu.classList.toggle('active');
        }
    });
}
// Close dropdown when clicking outside
document.addEventListener('click', function (e) {
    var menu = document.getElementById('dropdownMenu');
    if (menu && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});
// Prevent dropdown from closing when clicking inside
var dropdownMenu = document.getElementById('dropdownMenu');
if (dropdownMenu) {
    dropdownMenu.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}
// Submenu toggle (reuse your function, but works for dropdown)
function toggleSubMenu(e, id) {
    e.preventDefault();
    var submenu = document.getElementById(id);
    if (submenu) {
        submenu.classList.toggle('active');
    }
    var link = e.currentTarget;
    link.classList.toggle('open');
}
// ...existing code...
var announcementsIcon = document.querySelector('.announcements-icon');
if (announcementsIcon) {
    announcementsIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        var announcementPanel = document.getElementById('announcementPanel');
        if (announcementPanel) {
            announcementPanel.classList.toggle('active');
        }
    });
}
// Close panel when clicking outside
document.addEventListener('click', function (e) {
    var panel = document.getElementById('announcementPanel');
    if (panel && panel.classList.contains('active')) {
        panel.classList.remove('active');
    }
});
// Prevent panel from closing when clicking inside
var announcementPanel = document.getElementById('announcementPanel');
if (announcementPanel) {
    announcementPanel.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}
// ...existing code...
// ...existing code...
function countAnnouncementCheckboxes() {
    var checkboxes = document.querySelectorAll('#announcementPanel .custom-checkbox input[type="checkbox"]');
    var ticked = 0, unticked = 0;
    checkboxes.forEach(function (cb) {
        if (cb.checked)
            ticked++;
        else
            unticked++;
    });
    return { ticked: ticked, unticked: unticked };
}
// Function to update the div with the new number
function updateAnnouncemnt() {
    var announcemntCounts = document.getElementById('announcemntCounts');
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
var alertIcon = document.querySelector('.alert-icon');
if (alertIcon) {
    alertIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        var alertPanel = document.getElementById('alertPanel');
        if (alertPanel) {
            alertPanel.classList.toggle('active');
        }
    });
}
// Close alert panel when clicking outside
document.addEventListener('click', function (e) {
    var panel = document.getElementById('alertPanel');
    if (panel && panel.classList.contains('active')) {
        panel.classList.remove('active');
    }
});
// Prevent alert panel from closing when clicking inside
var alertPanel = document.getElementById('alertPanel');
if (alertPanel) {
    alertPanel.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}
// Count checked/unchecked checkboxes in alert panel
function countAlertCheckboxes() {
    var checkboxes = document.querySelectorAll('#alertPanel .custom-checkbox input[type="checkbox"]');
    var ticked = 0, unticked = 0;
    checkboxes.forEach(function (cb) {
        if (cb.checked)
            ticked++;
        else
            unticked++;
    });
    return { ticked: ticked, unticked: unticked };
}
// Update alert count badge
function updateAlertCount() {
    var alertCounts = document.getElementById('alertCounts');
    if (alertCounts) {
        alertCounts.innerText = countAlertCheckboxes().ticked.toString();
    }
}
setInterval(updateAlertCount, 1000);
// ...existing code...
function setupHoverPanel(iconSelector, panelSelector, activeClass) {
    if (activeClass === void 0) { activeClass = 'active'; }
    var icon = document.querySelector(iconSelector);
    var panel = document.querySelector(panelSelector);
    var hover = false;
    function showPanel() {
        if (panel)
            panel.classList.add(activeClass);
    }
    function hidePanel() {
        if (panel)
            panel.classList.remove(activeClass);
    }
    if (icon) {
        icon.addEventListener('mouseenter', showPanel);
        icon.addEventListener('mouseleave', function () {
            setTimeout(function () {
                if (!hover)
                    hidePanel();
            }, 50);
        });
    }
    if (panel) {
        panel.addEventListener('mouseenter', function () {
            hover = true;
            showPanel();
        });
        panel.addEventListener('mouseleave', function () {
            hover = false;
            hidePanel();
        });
    }
}
setupHoverPanel('.alert-icon', '#alertPanel');
setupHoverPanel('.announcements-icon', '#announcementPanel');
setupHoverPanel('.hamburger', '#dropdownMenu', 'active');
function loadAlertData() {
    return __awaiter(this, void 0, void 0, function () {
        // Update alert count badge
        function updateAlertCount() {
            var checkboxes = alertList.querySelectorAll('input[type="checkbox"]');
            var ticked = 0;
            checkboxes.forEach(function (cb) {
                if (cb.checked)
                    ticked++;
            });
            alertCounts.innerText = ticked.toString();
        }
        var response, data, alertList, alertActions, alertCounts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('alertData.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    alertList = document.querySelector('#alertPanel .alert-list');
                    alertActions = document.querySelector('#alertPanel .alert-actions');
                    alertCounts = document.getElementById('alertCounts');
                    if (!alertList || !alertActions || !alertCounts)
                        return [2 /*return*/];
                    alertList.innerHTML = '';
                    alertActions.innerHTML = '';
                    data.alerts.forEach(function (alert) {
                        var alertItem = document.createElement('div');
                        alertItem.className = 'alert-item';
                        if (!alert.checked) {
                            alertItem.classList.add('unchecked');
                        }
                        alertItem.innerHTML = "\n                    <div class=\"alert-info\">\n                        <div class=\"alert-title\">".concat(alert.title, "</div>\n                        <div class=\"alert-desc\">").concat(alert.desc, "</div>\n                        <div class=\"alert-meta\">").concat(alert.meta, "</div>\n                    </div>\n                    <label class=\"custom-checkbox\">\n                        <input type=\"checkbox\" ").concat(alert.checked ? 'checked' : '', " />\n                        <span></span>\n                    </label>\n                ");
                        alertList.appendChild(alertItem);
                    });
                    data.buttons.forEach(function (button) {
                        var btn = document.createElement('button');
                        btn.className = button.class;
                        btn.textContent = button.label;
                        alertActions.appendChild(btn);
                    });
                    updateAlertCount();
                    alertList.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
                        cb.addEventListener('change', function (e) {
                            var checkbox = e.target;
                            var alertItem = checkbox.closest('.alert-item');
                            if (checkbox.checked) {
                                alertItem === null || alertItem === void 0 ? void 0 : alertItem.classList.remove('unchecked');
                            }
                            else {
                                alertItem === null || alertItem === void 0 ? void 0 : alertItem.classList.add('unchecked');
                            }
                            updateAlertCount();
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
function loadAnnouncementData() {
    return __awaiter(this, void 0, void 0, function () {
        // Update announcement count badge
        function updateAnnouncementCount() {
            var checkboxes = announcementList.querySelectorAll('input[type="checkbox"]');
            var ticked = 0;
            checkboxes.forEach(function (cb) {
                if (cb.checked)
                    ticked++;
            });
            announcemntCounts.innerText = ticked.toString();
        }
        var response, data, announcementList, announcementActions, announcemntCounts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch('announcementData.json')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    announcementList = document.querySelector('#announcementPanel .announcement-list');
                    announcementActions = document.querySelector('#announcementPanel .announcement-actions');
                    announcemntCounts = document.getElementById('announcemntCounts');
                    if (!announcementList || !announcementActions || !announcemntCounts)
                        return [2 /*return*/];
                    announcementList.innerHTML = '';
                    announcementActions.innerHTML = '';
                    data.announcements.forEach(function (announcement) {
                        var announcementItem = document.createElement('div');
                        announcementItem.className = 'announcement-item';
                        if (!announcement.checked) {
                            announcementItem.classList.add('unchecked');
                        }
                        announcementItem.innerHTML = "\n                    <div class=\"announcement-info\">\n                        <div class=\"announcement-title\">".concat(announcement.title, "</div>\n                        <div class=\"announcement-desc\">").concat(announcement.desc, "</div>\n                        <div class=\"announcement-meta\">").concat(announcement.meta, "</div>\n                    </div>\n                    <label class=\"custom-checkbox\">\n                        <input type=\"checkbox\" ").concat(announcement.checked ? 'checked' : '', " />\n                        <span></span>\n                    </label>\n                ");
                        announcementList.appendChild(announcementItem);
                    });
                    data.buttons.forEach(function (button) {
                        var btn = document.createElement('button');
                        btn.className = button.class;
                        btn.textContent = button.label;
                        announcementActions.appendChild(btn);
                    });
                    updateAnnouncementCount();
                    announcementList.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
                        cb.addEventListener('change', function (e) {
                            var checkbox = e.target;
                            var announcementItem = checkbox.closest('.announcement-item');
                            if (checkbox.checked) {
                                announcementItem === null || announcementItem === void 0 ? void 0 : announcementItem.classList.remove('unchecked');
                            }
                            else {
                                announcementItem === null || announcementItem === void 0 ? void 0 : announcementItem.classList.add('unchecked');
                            }
                            updateAnnouncementCount();
                        });
                    });
                    return [2 /*return*/];
            }
        });
    });
}
// Load data on page load
document.addEventListener('DOMContentLoaded', function () {
    loadAlertData();
    loadAnnouncementData();
});
