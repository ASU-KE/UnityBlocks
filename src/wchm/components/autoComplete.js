import React, { useState, useEffect } from "react";
import ReactAutocomplete from "react-autocomplete";

const Autocomplete = ({ baseApiPath }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [rasData, setRasData] = useState(null);
  const [officerData, setOfficerData] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          `${baseApiPath}departments/${inputValue}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
            },
          }
        );
        const data = await response.json();

        // Filter the data to include only active items
        const activeData = data.filter((item) => item.isActive === "Y");

        setSuggestions(activeData);
        //console.log(suggestions);
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
          const response = await fetch(`${baseApiPath}ras/${selectedItemId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
            },
          });
          const data = await response.json();
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
            `${baseApiPath}officer/${selectedItemId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
              },
            }
          );
          const data = await response.json();
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
        shouldItemRender={(item, inputValue) =>
          item.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        }
        getItemValue={(item) => item.name}
        renderItem={(item, isHighlighted) => (
          <div
            key={item.id}
            style={{ backgroundColor: isHighlighted ? "#eee" : "transparent" }}
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
          {rasData && rasData.length !== 0 && (
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

          {officerData && officerData.length !== 0 && (
            <div className="mb-8">
              <h3>
                <span className="highlight-gold">ORSPA Contacts</span>
              </h3>

              {officerData.map((contactInfo) => (
                <div className="mb-4">
                  <h4 className="mb-1">{contactInfo.Officer}</h4>
                  {contactInfo.userId && (
                    <>
                      <p className="mb-1">{contactInfo.name}</p>
                      <p>
                        <a href={`mailto:${contactInfo.userId}@asu.edu`}>
                          {contactInfo.userId}@asu.edu
                        </a>
                      </p>
                    </>
                  )}

                  {contactInfo.userId === null && (
                    <>
                      <p>Proposal and PreAward Items </p>
                      <p>
                        <a href="mailto:ProposalandNegotiation@asu.edu">
                          ProposalandNegotiation@asu.edu
                        </a>
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          <div></div>
        </div>
      )}
      {selectedItemId === "" && <p className="mt-4">No contacts were found.</p>}
    </div>
  );
};

export { Autocomplete };
