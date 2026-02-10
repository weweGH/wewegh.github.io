(function () {
    var DEFAULT_LANG = 'ko';

    function getTranslations() {
        return window.pageTranslations || {};
    }

    function updateButtons(lang) {
        document.querySelectorAll('.lang_btn').forEach(function (btn) {
            var isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }

    function applyTranslations(lang) {
        var translations = getTranslations();
        var dict = translations[lang] || translations[DEFAULT_LANG] || {};
        document.documentElement.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            if (el.hasAttribute('data-i18n-lock')) {
                return;
            }
            var key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            if (el.hasAttribute('data-i18n-lock')) {
                return;
            }
            var key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        updateButtons(lang);

        try {
            localStorage.setItem('site_lang', lang);
        } catch (e) {
            // ignore storage errors
        }
    }

    function resolveInitialLang() {
        var translations = getTranslations();
        var available = Object.keys(translations);
        if (!available.length) {
            return DEFAULT_LANG;
        }

        var saved = DEFAULT_LANG;
        try {
            var stored = localStorage.getItem('site_lang');
            if (stored && translations[stored]) {
                saved = stored;
            }
        } catch (e) {
            saved = DEFAULT_LANG;
        }

        if (!translations[saved]) {
            saved = available.includes(DEFAULT_LANG) ? DEFAULT_LANG : available[0];
        }

        return saved;
    }

    function init() {
        var toggleButtons = document.querySelectorAll('.lang_btn');
        if (!toggleButtons.length) {
            return;
        }

        toggleButtons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                applyTranslations(btn.getAttribute('data-lang') || DEFAULT_LANG);
            });
        });

        applyTranslations(resolveInitialLang());
    }

    document.addEventListener('DOMContentLoaded', init);
})();
