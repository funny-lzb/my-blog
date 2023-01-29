import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function BlogSearchBar() {
  return (
    <div className='blog-search-bar'>
      <label>Search</label>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="没有后端,功能待开发"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    </div>
  )
}
