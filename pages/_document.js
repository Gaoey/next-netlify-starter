import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import { GATrackingID } from '../config'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
            });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        // const { isProduction } = this.props

        return (
            <html lang="en">
                <Head>
                    {/* We only want to add the scripts if in production */}
                    {/* {isProduction && ( */}
                    <>
                        {/* Global Site Tag (gtag.js) - Google Analytics */}
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${GATrackingID}`} />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GATrackingID}', {
                      page_path: window.location.pathname,
                    });
                  `
                            }} />
                    </>
                    {/* )} */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
