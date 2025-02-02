import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBatches } from '../../actions/batchActions';
import { Link } from 'react-router-dom';

const ShowBatches = () => {
  const dispatch = useDispatch();
  const { batches, loading, error } = useSelector((state) => state.batches);
  const [storedBatches, setStoredBatches] = useState([]);

  const joinedBatches = useSelector(state => state.batches.joinedBatches);
  useEffect(() => {
    dispatch(fetchBatches());
  }, [dispatch]);

  useEffect(() => {
    if (batches.length > 0 && joinedBatches) {
      const matchedBatches = Array.isArray(joinedBatches)
        ? batches.filter(batch => joinedBatches.includes(batch._id))
        : batches.filter(batch => joinedBatches._id === batch._id);
    }
  }, [batches, joinedBatches]);

  const handleBatchClick = (batch) => {
    localStorage.setItem('selectedBatch', JSON.stringify(batch));
  };

  return (
    <Card className="br3 shadow-3 mt4 ba2 br3 b--black">
      <Card.Body>
        <Card.Title className="f4">Your Joined Batches</Card.Title>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : joinedBatches.length > 0 ? (
          <ul className="list pl0 mt3">
            {joinedBatches.map((batch) => (
              <li key={batch._id} className="flex items-center justify-between pa3 bg-light-gray mb2 ba2 b--green b3" onClick={() => handleBatchClick(batch)}>
                <div className="batch-info p-3 br3 bg-yellow">
                  <h5 className="f5 ma0">{batch.name}</h5>
                  <p className="ma0"><strong>ID:</strong> {batch._id}</p>
                  <p className="ma0"><strong>Created By:</strong> {batch.createdBy}</p>
                </div>
                <Link to="/community" className="pa2 bg-blue white dib ml3 br2">Community</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't joined any batches yet.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default ShowBatches;
