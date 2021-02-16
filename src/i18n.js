import { createI18n } from 'vue-i18n'
import ru from './locales/ru.json'
import en from './locales/en.json'

export const SUPPORT_LOCALES = ['ru', 'en']

function customRule (choice, choicesLength) {
    if (choice === 0) {
        return 0
    }
    const teen = choice > 10 && choice < 20
    const endsWithOne = choice % 10 === 1
    if (!teen && endsWithOne) {
        return 1
    }
    if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2
    }

    return choicesLength < 4 ? 2 : 3
}
//
// function loadLocaleMessages () {
//     const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json#/i)
//     const messages = {}
//     locales.keys().forEach(key => {
//         const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//         if (matched && matched.length > 1) {
//             const locale = matched[1]
//             messages[locale] = locales(key)
//         }
//     })
//     console.log(messages)
//     return messages
// }


 export default createI18n({
        pluralizationRules: {
            ru: customRule
        },
        locale: process.env.VUE_APP_I18N_LOCALE || 'ru',
        fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
        messages: {
            ru,
            en
        }
})

