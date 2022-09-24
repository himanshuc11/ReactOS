import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ReactElement } from 'react';
import withStyleSheet from 'utils/withStyleSheet';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return withStyleSheet(ctx);
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
