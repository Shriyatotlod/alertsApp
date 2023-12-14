import React from 'react';
import Alert from './AlertComponent';

const List = ({ alerts, markAsFalseAlarm }) => {
  return (
    <div className="alert-list">
      {alerts.map(alert => (
        <Alert key={alert.id} alert={alert} markAsFalseAlarm={markAsFalseAlarm} />
      ))}
    </div>
  );
};

export default List;
