import "../styles/globals.css";
import Layout from "../component/Layout";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return ( 
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;