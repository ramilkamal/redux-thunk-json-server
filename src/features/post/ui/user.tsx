import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hook';
import { RootState } from '../../../app/providers/store';
import { fetchUser } from '../model/user.thunk';

export const User = ({ userId }: { userId: number }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: RootState) => state.user.user);
  const status = useAppSelector((state: RootState) => state.user.status);
  const error = useAppSelector((state: RootState) => state.user.error);

  React.useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};
