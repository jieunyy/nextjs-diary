import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function Search() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: '50%' }} />
      <Button variant="outline-success">Search</Button>
    </div>
  );
}

export default Search;

