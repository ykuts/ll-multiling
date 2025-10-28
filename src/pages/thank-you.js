import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function ThankYou() {
    const { t } = useTranslation('contact');
    const router = useRouter();

    return (
        <Layout
            title={t('thankYou.title')}
            description={t('thankYou.description')}
        >
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary py-20">
                <Container>
                    <div className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
                        {/* Logo */}
                        <div className="mb-8">
                            <img 
                                src="/images/logo-white.png" 
                                alt="Label Ladder" 
                                className="w-40 mx-auto"
                            />
                        </div>

                        {/* Success Checkmark */}
                        <div className="w-24 h-24 mx-auto mb-8 bg-primary rounded-full flex items-center justify-center animate-scale-in">
                            <svg 
                                className="w-12 h-12 text-white" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={3} 
                                    d="M5 13l4 4L19 7" 
                                />
                            </svg>
                        </div>

                        {/* Message */}
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t('thankYou.heading')}
                        </h1>
                        <p className="text-xl text-accent mb-8">
                            {t('thankYou.message')}
                        </p>

                        {/* Button */}
                        <Button 
                            href="/" 
                            variant="secondary"
                            size="lg"
                            className="inline-block"
                        >
                            {t('thankYou.backButton')}
                        </Button>

                        {/* Contact Info */}
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <p className="text-sm text-accent mb-2">
                                {t('thankYou.needHelp')}
                            </p>
                            <a 
                                href="mailto:hello@labelladder.com" 
                                className="text-primary hover:text-white font-semibold transition-colors"
                            >
                                hello@labelladder.com
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            <style jsx>{`
                @keyframes scale-in {
                    from {
                        transform: scale(0);
                    }
                    to {
                        transform: scale(1);
                    }
                }
                .animate-scale-in {
                    animation: scale-in 0.5s ease-out;
                }
            `}</style>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'header', 'footer', 'contact'])),
        },
    };
}