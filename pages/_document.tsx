import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <meta name="theme-color" content="#000" />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default CustomDocument;
