import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const LanguageSwitcher = ({ isMobile = false }) => {
    const router = useRouter();
    const { locale, locales, asPath } = router;
    const [isOpen, setIsOpen] = useState(false);

    const languages = {
        en: { name: 'English', short: 'EN', flag: '/images/flags/gb.svg' },
        de: { name: 'Deutsch', short: 'DE', flag: '/images/flags/ch.svg' },
        fr: { name: 'Français', short: 'FR', flag: '/images/flags/ch.svg' }
    };

    // Мобильная версия - горизонтальные кнопки
    if (isMobile) {
        return (
            <div className="flex items-center justify-center space-x-2">
                {locales.map((loc) => (
                    <Link
                        key={loc}
                        href={asPath}
                        locale={loc}
                        className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${locale === loc
                                ? 'bg-secondary text-white font-semibold'
                                : 'bg-gray-200 text-primary hover:bg-gray-300'
                            }`}
                    >
                        <Image
                            src={languages[loc].flag}
                            alt={languages[loc].name}
                            width={20}
                            height={20}
                            className="rounded-full"
                        />
                        <span>{languages[loc].short}</span>
                    </Link>
                ))}
            </div>
        );
    }

    // Десктопная версия - выпадающий список
    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-white hover:text-secondary transition-colors"
            >
                <Image
                    src={languages[locale].flag}
                    alt={languages[locale].name}
                    width={20}
                    height={20}
                    className="rounded-full"
                />
                <span className="font-medium">{languages[locale].short}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    {/* Overlay для закрытия при клике вне */}
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown menu */}
                    <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg overflow-hidden z-20">
                        {locales.map((loc) => (
                            <Link
                                key={loc}
                                href={asPath}
                                locale={loc}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center space-x-3 px-4 py-3 transition-colors ${locale === loc
                                        ? 'bg-secondary text-white font-semibold cursor-default'
                                        : 'text-primary hover:bg-gray-100'
                                    }`}
                            >
                                <Image
                                    src={languages[loc].flag}
                                    alt={languages[loc].name}
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                                <span>{languages[loc].name}</span>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSwitcher;