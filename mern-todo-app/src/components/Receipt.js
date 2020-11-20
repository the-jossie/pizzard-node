import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getReceipt } from '../actions/paymentActions';

const Receipt = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReceipt(props));
  }, [props, dispatch]);

  const userPayment = useSelector(state => state.userPayment);

  return (
    <div>
      <h1>Congratulations {userPayment.amountPaid.fullName}</h1>
      <div>
        <p>
          Your payment of ${userPayment.amountPaid.amount} was successful
        </p>
        <p>
          Please keep your payment ID {userPayment.amountPaid.reference} for
          future reference
        </p>
      </div>
      <h1>
        <button>
          <Link to='/'>Go Home</Link>
        </button>
      </h1>
    </div>
  );
};

export default Receipt;
