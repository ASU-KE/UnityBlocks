import React, { useState, useEffect } from "react";
import ReactAutocomplete from "react-autocomplete";

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [rasData, setRasData] = useState(null);
  const [officerData, setOfficerData] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          `https://okedweb3.asu.edu/attask/api/wchm/departments/${inputValue}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "API-Token": "ja0OWEbXz78K",
              "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
            },
          }
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    if (inputValue.trim() !== "") {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  useEffect(() => {
    const fetchRasById = async () => {
      if (selectedItemId) {
        try {
          const response = await fetch(
            `https://okedweb3.asu.edu/attask/api/wchm/ras/${selectedItemId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "API-Token": "ja0OWEbXz78K",
                "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
              },
            }
          );
          const data = await response.json();
          //console.log(data);
          setRasData(data);
        } catch (error) {
          console.error("Error fetching data by ID:", error);
        }
      }
    };

    fetchRasById();
  }, [selectedItemId]);

  useEffect(() => {
    const fetchOfficerById = async () => {
      if (selectedItemId) {
        try {
          const response = await fetch(
            `https://okedweb3.asu.edu/attask/api/wchm/officer/${selectedItemId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "API-Token": "ja0OWEbXz78K",
                "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
              },
            }
          );
          const data = await response.json();
          //console.log(data);
          setOfficerData(data);
        } catch (error) {
          console.error("Error fetching data from API 2:", error);
        }
      }
    };

    fetchOfficerById();
  }, [selectedItemId]);

  return (
    <div>
      <ReactAutocomplete
        inputProps={{ placeholder: "Unit Name ..." }}
        items={suggestions}
        getItemValue={(item) => item.name}
        renderItem={(item, highlighted) => (
          <div
            key={item.Deptid}
            style={{ backgroundColor: highlighted ? "#eee" : "transparent" }}
          >
            {item.name}
          </div>
        )}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onSelect={(inputValue, item) => {
          setInputValue(inputValue);
          setSelectedItemId(item.Deptid);
        }}
        wrapperStyle={{
          className: "wchm-selection-field",
        }}
      />

      {selectedItemId && (
        <div className="mt-8">
          {rasData && (
            <div className="mb-8">
              <h3>
                <span className="highlight-gold">
                  Department Research Advancement Representatives
                </span>
              </h3>

              {rasData.map((contactInfo) => (
                <div className="mb-4">
                  <h4 className="mb-1">{contactInfo.Name}</h4>
                  <p className="mb-1">{contactInfo.Title}</p>
                  <p>
                    <a href={`mailto:${contactInfo.userId}@asu.edu`}>
                      {contactInfo.userId}@asu.edu
                    </a>
                  </p>
                </div>
              ))}
            </div>
          )}

          {officerData && (
            <div className="mb-8">
              <h3>
                <span className="highlight-gold">ORSPA Contacts</span>
              </h3>

              {officerData.map((contactInfo) => (
                <div className="mb-4">
                  <h4 className="mb-1">{contactInfo.Officer}</h4>
                  <p className="mb-1">{contactInfo.name}</p>
                  <p>
                    <a href={`mailto:${contactInfo.userId}@asu.edu`}>
                      {contactInfo.userId}@asu.edu
                    </a>
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export { Autocomplete };
