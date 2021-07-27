// instruments
import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// components
import { FileManager } from '../bus/Pages/FileManager/FileManager';
import { Loader } from '../components/Loader/Loader';

export const Routes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Switch>
            <Route path="/manager" render={() => <FileManager />} />
            <Redirect to="/manager" />
          </Switch>
        </>
      )}
    </>
  );
};
