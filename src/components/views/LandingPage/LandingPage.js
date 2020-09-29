import React, { useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
  // componentDidMount, componentDidUpdate와 같은 방식으로
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/test/board/')
      .then((response) => console.log(response.data));
  }, []);

  return <div>LandingPage</div>;
}

export default LandingPage;
