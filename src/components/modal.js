import React from 'react';
import { Modal, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap for styling

const ArticleModal = ({ show, onHide, article }) => {

    if (!article) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
         <Modal.Title>{article.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={article.image} className="img-fluid mb-3" alt={article.title} />
        <p><b>Author:</b> {article.author}</p>
        <p>{article.content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary" href={article.url} target="_blank">Read on Website</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArticleModal;
