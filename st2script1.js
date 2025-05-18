 const url = 'bible-studies/am-i-a-sinner-first-4-commandments.pdf'; // path to your PDF file
const container = document.getElementById('pdf-scroll-viewer');
    const scale = 1.5;

    pdfjsLib.getDocument(url).promise.then(pdf => {
      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        pdf.getPage(pageNumber).then(page => {
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          container.appendChild(canvas);

          page.render({
            canvasContext: context,
            viewport: viewport
          });
        });
      }
    });