'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function CV() {
	const [numPages, setNumPages] = useState<number | null>(null);

	function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
		setNumPages(numPages);
	}

	return (
		<div className='flex justify-center p-4'>
			<Document file='/CV.pdf' onLoadSuccess={onDocumentLoadSuccess} className='border shadow-lg'>
				{Array.from(new Array(numPages), (el, index) => (
					<Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} className='mb-4' />
				))}
			</Document>
		</div>
	);
}
