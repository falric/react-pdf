/* eslint react/prop-types: 0, react/jsx-sort-props: 0 */

import React from 'react';

import ReactPDF, { Page, Document, Text } from '../../dist/react-pdf.es.js';

const doc = (
  <Document lang="sv-SE">
    <Page size="A4">
      <Text>Lorem Ipsum</Text>
    </Page>
  </Document>
);

ReactPDF.render(doc, `${__dirname}/output.pdf`);
