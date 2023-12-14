import React from 'react';

const AlertComponent = ({ alert, markAsFalseAlarm }) => {
  const handleMarkAsFalseAlarm = () => {
    markAsFalseAlarm(alert.id);
  };

  return (
    <div className="alert-item">
      <div className="alert-details">
        <div className="top-info">
        <p>{alert.alert_type} &#8226; {new Date(alert.timestamp).toLocaleString()}</p>

        </div>
        <div className="bottom-info">
          <p>Driver: {alert.driver_friendly_name}({alert.vehicle_friendly_name})</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleMarkAsFalseAlarm} className={`false-alarm-btn ${alert.markedAsFalse ? 'marked' : ''}`}>
          {alert.markedAsFalse ? 'False Alarm' : 'Mark as False Alarm'}
        </button>
      </div>
    </div>
  );
};

export default AlertComponent;
