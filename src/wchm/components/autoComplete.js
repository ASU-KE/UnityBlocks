import React, { useState, useEffect } from "react";
import ReactAutocomplete from "react-autocomplete";

const Autocomplete = ({ baseApiPath }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [officerData, setOfficerData] = useState(null);
  const [preAwardRasData, setPreAwardRasData] = useState(null);
  const [postAwardRasData, setPostAwardRasData] = useState(null);
  const [atfRasData, setAtfRasData] = useState(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await fetch(
          `${baseApiPath}v2/departments/${encodeURIComponent(inputValue)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
            },
          }
        );
        const data = await response.json();

        if (!Array.isArray(data)) {
          setSuggestions([]);
          return;
        }

        // Filter the data to include only active items
        const activeData = data.filter((item) => item.isActive === "Y");

        setSuggestions(activeData);
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
    const fetchPreAwardRasByDeptId = async () => {
      if (selectedItemId) {
        try {
          const response = await fetch(`${baseApiPath}v2/pre-award-ras/${selectedItemId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
            },
          });
          const data = await response.json();
          setPreAwardRasData(Array.isArray(data) ? data : []);
        } catch (error) {
          console.error("Error fetching data by ID:", error);
        }
      }
    };

    fetchPreAwardRasByDeptId();
  }, [selectedItemId]);

  useEffect(() => {
    const fetchPostAwardRasByDeptId = async () => {
      if (selectedItemId) {
        try {
          const response = await fetch(`${baseApiPath}v2/post-award-ras/${selectedItemId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
            },
          });
          const data = await response.json();
          setPostAwardRasData(Array.isArray(data) ? data : []);
        } catch (error) {
          console.error("Error fetching data by ID:", error);
        }
      }
    };

    fetchPostAwardRasByDeptId();
  }, [selectedItemId]);

  useEffect(() => {
    const fetchAtfRasByDeptId = async () => {
      if (selectedItemId) {
        try {
          const response = await fetch(`${baseApiPath}v2/after-the-fact-ras/${selectedItemId}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
            },
          });
          const data = await response.json();
          setAtfRasData(Array.isArray(data) ? data : []);
        } catch (error) {
          console.error("Error fetching data by ID:", error);
        }
      }
    };

    fetchAtfRasByDeptId();
  }, [selectedItemId]);

  useEffect(() => {
    const fetchOfficerById = async () => {
      if (selectedItemId) {
        try {
          const response = await fetch(
            `${baseApiPath}v2/officers/${selectedItemId}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": "8dd787c43de54148bf5e10686b6b6e20",
              },
            }
          );
          const data = await response.json();

          if (!Array.isArray(data)) {
            setOfficerData([]);
            return;
          }

          // Filter the data to include only active items with officer info
          const filteredData = data.filter((item) => item.Officer !== "");

          setOfficerData(filteredData);
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
          {preAwardRasData && preAwardRasData.length !== 0 && (
            <div className="mb-8">
              <h3>
                <span className="highlight-gold">
                  Pre-Award Research Advancement Representative
                </span>
              </h3>

              {preAwardRasData.map((contactInfo, index) => (
                <div
                  className="mb-4"
                  key={`pre-award-${contactInfo.userID || contactInfo.contactFullName || index}`}
                >
                  <h4 className="mb-1">{String(contactInfo.contactFullName || "")}</h4>
                  <p className="mb-1">{String(contactInfo.title || "")}</p>
                  <p>
                    <a href={`mailto:${String(contactInfo.email || "")}`}>
                      {String(contactInfo.email || "")}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          )}
          {postAwardRasData && postAwardRasData.length !== 0 && (
            <div className="mb-8">
              <h3>
                <span className="highlight-gold">
                  Post-Award Research Advancement Representative
                </span>
              </h3>

              {postAwardRasData.map((contactInfo, index) => (
                <div
                  className="mb-4"
                  key={`post-award-${contactInfo.userID || contactInfo.contactFullName || index}`}
                >
                  <h4 className="mb-1">{String(contactInfo.contactFullName || "")}</h4>
                  <p className="mb-1">{String(contactInfo.title || "")}</p>
                  <p>
                    <a href={`mailto:${String(contactInfo.email || "")}`}>
                      {String(contactInfo.email || "")}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          )}
          {atfRasData && atfRasData.length !== 0 && (
            <div className="mb-8">
              <h3>
                <span className="highlight-gold">
                  After-the-Fact Reporting Contact
                </span>
              </h3>

              {atfRasData.map((contactInfo, index) => (
                <div
                  className="mb-4"
                  key={`atf-${contactInfo.userID || contactInfo.contactFullName || index}`}
                >
                  <h4 className="mb-1">{String(contactInfo.contactFullName || "")}</h4>
                  <p className="mb-1">{String(contactInfo.title || "")}</p>
                  <p>
                    <a href={`mailto:${String(contactInfo.email || "")}`}>
                      {String(contactInfo.email || "")}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          )}

          {officerData && officerData.length !== 0 && (
            <div className="mb-8">
              <h3>
                <span className="highlight-gold">AMT Customer Service Liaison</span>
              </h3>

              {officerData.map((contactInfo, index) => (
                <div
                  className="mb-4"
                  key={`officer-${contactInfo.userID || contactInfo.contactFullName || index}`}
                >
                  <h4 className="mb-1">{String(contactInfo.contactFullName || "")}</h4>
                  {contactInfo.userID && (
                    <>
                      <p className="mb-1">{String(contactInfo.title || "")}</p>
                      <p>
                        <a href={`mailto:${String(contactInfo.email || "")}`}>
                          {String(contactInfo.email || "")}
                        </a>
                      </p>
                    </>
                  )}

                  {contactInfo.userID === null && (
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
