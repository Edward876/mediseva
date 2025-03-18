import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Menu } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Globe size={20} />
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
      </Menu.Button>

      <AnimatePresence>
        <Menu.Items
          as={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-1 border border-gray-200 dark:border-gray-700"
        >
          {languages.map((language) => (
            <Menu.Item key={language.code}>
              {({ active }) => (
                <button
                  onClick={() => i18n.changeLanguage(language.code)}
                  className={`w-full px-4 py-2 text-left text-sm ${
                    active
                      ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-200'
                  } ${
                    i18n.language === language.code
                      ? 'font-semibold'
                      : 'font-normal'
                  }`}
                >
                  <span className="block text-sm">{language.nativeName}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {language.name}
                  </span>
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </AnimatePresence>
    </Menu>
  );
}