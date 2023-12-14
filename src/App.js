import React, { useState, useEffect } from 'react';
import AlertList from './components/List';
import SearchBar from './components/TopSearch';
import './styles.css';

const App = () => {
  const [alerts, setAlerts] = useState([]);
  const [filteredAlerts, setFilteredAlerts] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    fetch('https://mocki.io/v1/2969d345-5283-40be-97dd-2c7fc5a30fb3')
      .then(response => response.json())
      .then(data => {
        setAlerts(data);
        setFilteredAlerts(data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleFreeTextSearch = (searchQuery) => {
    const filtered = alerts.filter(alert => {
      const searchText = `${alert.alert_type} ${alert.driver_friendly_name} ${alert.vehicle_friendly_name}`;
      return searchText.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredAlerts(filtered);
    setShowSearchResults(true);
  };

  const handleSearchByVehicleNumber = (vehicleNumber) => {
    const filtered = alerts.filter(alert => {
      return alert.vehicle_friendly_name.toLowerCase().includes(vehicleNumber.toLowerCase());
    });
    setFilteredAlerts(filtered);
    setShowSearchResults(true);
  };

  const handleSearchByDateRange = (startDate, endDate) => {
    const filtered = alerts.filter(alert => {
      const alertDate = new Date(alert.timestamp);
      return alertDate >= new Date(startDate) && alertDate <= new Date(endDate);
    });
    setFilteredAlerts(filtered);
    setShowSearchResults(true);
  };

  const handleSearch = (searchData) => {
    const { freeText, vehicleNumber, dateRange } = searchData;
    if (freeText !== '') {
      handleFreeTextSearch(freeText);
    } else if (vehicleNumber !== '') {
      handleSearchByVehicleNumber(vehicleNumber);
    } else if (dateRange.start !== '' && dateRange.end !== '') {
      handleSearchByDateRange(dateRange.start, dateRange.end);
    } else {
      setFilteredAlerts(alerts);
      setShowSearchResults(false);
    }
  };

  const markAsFalseAlarm = (alertId) => {
    const updatedAlerts = alerts.map(alert => {
      if (alert.id === alertId) {
        return {
          ...alert,
          markedAsFalse: !alert.markedAsFalse 
        };
      }
      return alert;
    });
    setAlerts(updatedAlerts);
    setFilteredAlerts(updatedAlerts);
  };

  return (
    <div className="app-container">
      <h1>Alerts Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {showSearchResults ? (
        <div className="search-results">
          <p>Alerts:</p>
          {filteredAlerts.length > 0 ? (
            <AlertList alerts={filteredAlerts} markAsFalseAlarm={markAsFalseAlarm} />
          ) : (
            <p>Results Not found</p>
          )}
        </div>
      ) : (
        <AlertList alerts={filteredAlerts} markAsFalseAlarm={markAsFalseAlarm} />
      )}
    </div>
  );
};

export default App;
