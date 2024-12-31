import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chart from "react-apexcharts";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    padding: "10px 12px",
    fontSize: "0.875rem",
    backgroundColor: theme.palette.background.paper,
  },
  "& .MuiSelect-icon": {
    color: "#008CFF",
    fontSize: "1rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid white",
    borderRadius: "8px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "blue",
  },
}));

function App() {
  const cardData = [
    {
      title: "NC-BOT",
      paragraph:
        "Network centric bot to upgrade AG1-CSS rings and AG1 ring augmentation",
      additionalContent:
        "Dashboard for entire Enterprise for  different segments,customers,last miles,top consumers etc. Monitoring based on circuit irrespective of any segment, coustomer and location",
      link: "https://www.tesla.com/",
    },
    {
      title: "ESAT",
      paragraph: "Enterprise Service Automation and Testing",
      additionalContent: "Additional content for ESAT",
      link: "https://www.ril.com/",
    },
    {
      title: "IPSIM",
      paragraph: "L2 image management and config automation",
      additionalContent: "Additional content for IPSIM",
    },
    {
      title: "L2-OnBoarding",
      paragraph: "NPE:L2 device onboarding portal",
      additionalContent: "Additional content for L2-OnBoarding",
    },
    {
      title: "PTP",
      paragraph:
        "Network centric bot to upgrade AG1-CSS rings and AG1 ring augmentation",
      additionalContent: "Additional content for PTP",
    },
    {
      title: "BNG",
      paragraph:
        "Network centric bot to upgrade AG1-CSS rings and AG1 ring augmentation",
      additionalContent: "Additional content for BNG",
    },
    {
      title: "Project 1",
      paragraph: "Evaluating performance trends and anomalies over the year",
      additionalContent: "Additional content for Project 1",
    },
    {
      title: "Project 2",
      paragraph: "Detailed breakdown of server resource utilization",
      additionalContent: "Additional content for Project 2",
    },
  ];

  const titleColors = {
    "NC-BOT": "#FAA41B",
    ESAT: "#008CFF",
    IPSIM: "#0CC561",
    "L2-OnBoarding": "#FF1525",
    PTP: "#FAA41B",
    BNG: "#008CFF",
    "Project 1": "#0CC561",
    "Project 2": "#FF1525",
  };

  const [dateRanges, setDateRanges] = useState(
    cardData.reduce((acc, _, index) => {
      acc[index] = { activeUsers: "Last 7 Days", configChange: "Last 7 Days" };
      return acc;
    }, {})
  );

  const [seriesData, setSeriesData] = useState(
    cardData.reduce((acc, _, index) => {
      acc[index] = {
        users: [3250, 5000, 8000, 8500, 9000, 9500, 10000],
        changes: [2500, 5000, 7500, 8000, 8500, 9000, 10000],
      };
      // if you want different graph values for different cards then use the following data otherwise it will use the upper data as default one
      // if (cardData[index].title === "ESAT") {
      //   acc[index] = {
      //     users: [1500, 2500, 4500, 5000, 6000, 7500, 9000],
      //     changes: [2000, 4000, 6000, 6500, 7000, 8000, 9000],
      //   };
      // }
      // if (cardData[index].title === "IPSIM") {
      //   acc[index] = {
      //     users: [1500, 2500, 4500, 5000, 6000, 7500, 9000],
      //     changes: [2000, 4000, 6000, 6500, 7000, 8000, 9000],
      //   };
      // }
      return acc;
    }, {})
  );

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;
  const [expandedIndex, setExpandedIndex] = useState(null);

  const state = {
    options: {
      colors: ["#00A3E0", "#D1EAFF"],
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: "#000",
          },
        },
      },
      yaxis: {
        tickAmount: 4,
        max: 10000,
        labels: {
          formatter: (value) => value.toLocaleString(),
          style: {
            colors: "#000",
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        shared: true,
      },
      grid: {
        show: true,
        borderColor: "#e0e0e0",
      },
      plotOptions: {
        area: {
          fillTo: "origin",
          fillOpacity: 0.6,
        },
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 2,
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 100],
        },
      },
      animation: {
        easing: "easeInOutQuad",
        speed: 2000,
      },
    },
  };

  const handleDateRangeChange = (event, index, type) => {
    setDateRanges((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [type]: event.target.value,
      },
    }));

    setSeriesData((prev) => {
      const newSeriesData = { ...prev };

      return newSeriesData;
    });
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * cardsPerPage < cardData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleExpandCard = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index)); 
  };

  const displayedCards = cardData.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "./icons/dummy.jpg",
    "./icons/dummy1.jpg",
    "./icons/dummy2.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="App">
      <h1>
        <i className="fas fa-user"></i>{" "}
      </h1>

      <Box sx={{ flexGrow: 1, paddingTop: "60px" }}>
        <Grid container spacing={2}>
          {displayedCards.map((data, index) => {
            const isExpanded =
              expandedIndex === currentPage * cardsPerPage + index;
            const cardTitleColor = titleColors[data.title] || "#000";
            const isNcBotExpanded =
              expandedIndex ===
              cardData.findIndex((card) => card.title === "NC-BOT");
            const isEsatExpanded =
              expandedIndex ===
              cardData.findIndex((card) => card.title === "ESAT");
            const isPtpExpanded =
              expandedIndex ===
              cardData.findIndex((card) => card.title === "PTP");
            const isBngExpanded =
              expandedIndex ===
              cardData.findIndex((card) => card.title === "BNG");

            return (
              <Grid item xs={12} sm={6} key={index}>
                <Card
                  sx={{
                    height: isExpanded ? "auto" : "335px",
                    boxShadow: "0px 8px 16px rgba(0, 123, 255, 0.3)",
                    borderRadius: "12px",
                    transition:
                      "transform 0.3s ease-in-out, background-color 1s ease-in-out",
                    position: "relative",
                    backgroundColor: isExpanded ? cardTitleColor : "#fff",
                    color: isExpanded ? "#fff" : "#000",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",

                    marginTop:
                      data.title === "L2-OnBoarding" && isNcBotExpanded
                        ? "-275px"
                        : data.title === "IPSIM" && isEsatExpanded
                        ? "-255px"
                        : data.title === "Project 2" && isPtpExpanded
                        ? "-275px" 
                        : data.title === "Project 1" && isBngExpanded
                        ? "-275px"
                        : "0px", 
                    "@keyframes expand": {
                      "0%": {
                        transform: "scale(1)",
                      },
                      "100%": {
                        transform: "scale(1.02)",
                      },
                    },
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        color: isExpanded ? "#fff" : cardTitleColor,
                        mb: 0,
                        fontWeight: "bold",
                        fontFamily: "Poppins",
                        alignSelf: "flex-start",
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        mr: 39,
                        color: isExpanded ? "#fff" : "text.secondary",
                        fontFamily: "Poppins",
                        fontSize: 13,
                        textAlign: "left",
                      }}
                    >
                      {data.paragraph}
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="h6"
                            component="div"
                            sx={{
                              mb: 1,
                              fontWeight: "bold",
                              flexGrow: 1,
                              color: isExpanded ? "#fff" : cardTitleColor,
                              fontSize: "0.875rem",
                              fontFamily: "Poppins",
                            }}
                          >
                            Total Active Users
                          </Typography>
                          <FormControl sx={{ minWidth: 120 }}>
                            <CustomSelect
                              value={
                                dateRanges[currentPage * cardsPerPage + index]
                                  ?.activeUsers
                              }
                              onChange={(event) =>
                                handleDateRangeChange(
                                  event,
                                  currentPage * cardsPerPage + index,
                                  "activeUsers"
                                )
                              }
                            >
                              <MenuItem value="Last 7 Days">
                                Last 7 Days
                              </MenuItem>
                              <MenuItem value="Last 1 Month">
                                Last 1 Month
                              </MenuItem>
                              <MenuItem value="Last 6 Months">
                                Last 6 Months
                              </MenuItem>
                              <MenuItem value="Last Year">Last Year</MenuItem>
                            </CustomSelect>
                          </FormControl>
                        </Box>
                        <div className="mixed-chart">
                          <Chart
                            options={state.options}
                            series={[
                              {
                                name: "Active Users",
                                color: isExpanded ? "#fff" : cardTitleColor,
                                data:
                                  seriesData[currentPage * cardsPerPage + index]
                                    ?.users || [],
                              },
                            ]}
                            type="area"
                            width="100%"
                            height="150px"
                          />
                        </div>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            variant="h6"
                            component="div"
                            sx={{
                              mb: 1,
                              fontWeight: "bold",
                              flexGrow: 1,
                              color: isExpanded ? "#fff" : cardTitleColor,
                              fontSize: "0.875rem",
                              fontFamily: "Poppins",
                            }}
                          >
                            Config Change
                          </Typography>
                          <FormControl sx={{ minWidth: 120 }}>
                            <CustomSelect
                              value={
                                dateRanges[currentPage * cardsPerPage + index]
                                  ?.configChange
                              }
                              onChange={(event) =>
                                handleDateRangeChange(
                                  event,
                                  currentPage * cardsPerPage + index,
                                  "configChange"
                                )
                              }
                            >
                              <MenuItem value="Last 7 Days">
                                Last 7 Days
                              </MenuItem>
                              <MenuItem value="Last 1 Month">
                                Last 1 Month
                              </MenuItem>
                              <MenuItem value="Last 6 Months">
                                Last 6 Months
                              </MenuItem>
                              <MenuItem value="Last Year">Last Year</MenuItem>
                            </CustomSelect>
                          </FormControl>
                        </Box>

                        <div className="mixed-chart">
                          <Chart
                            options={state.options}
                            series={[
                              {
                                name: "Config Changes",
                                color: isExpanded ? "#fff" : cardTitleColor,
                                data:
                                  seriesData[currentPage * cardsPerPage + index]
                                    ?.changes || [],
                              },
                            ]}
                            type="area"
                            width="100%"
                            height="150px"
                          />
                        </div>
                      </Grid>
                    </Grid>
                    {isExpanded && (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          mt: 2,
                          ml: 2,
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Card
                            sx={{
                              marginRight: 2,
                              flex: "1 1 50%",
                              minWidth: "381px",
                              height: "200px",
                              padding: "0", 
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "center", 
                            }}
                          >
                            <CardContent
                              sx={{
                                padding: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  overflow: "hidden",
                                  display: "flex",
                                  alignItems: "center", 
                                  justifyContent: "center", 
                                }}
                              >
                                <img
                                  src={images[imageIndex]}
                                  alt="Slideshow"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "8px",
                                    marginTop: "0px",
                                  }}
                                />
                              </div>
                            </CardContent>
                          </Card>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              flex: "1 1 50%",
                              color: isExpanded ? "#fff" : "text.secondary",
                              fontFamily: "Poppins",
                              textAlign: "left",
                            }}
                          >
                            {data.additionalContent}
                          </Typography>
                        </Box>
                        <IconButton
                          sx={{
                            alignSelf: "center",
                            mt: 1,
                            color: "text.secondary",
                          }}
                        >
                          <a
                            className="App-link"
                            href={data.link}
                            // target="_blank"
                            // rel="noopener noreferrer"
                          >
                            <span
                              style={{
                                color: "black",
                                fontFamily: "poppins",
                                fontSize: 15,
                              }}
                            >
                              Take me to Application
                            </span>
                          </a>

                          <ArrowForwardIcon sx={{ color: "blue" }} />
                        </IconButton>
                      </Box>
                    )}

                    <IconButton
                      onClick={() =>
                        handleExpandCard(currentPage * cardsPerPage + index)
                      }
                      sx={{
                        color: isExpanded ? "#fff" : "#008CFF",
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        transform: isExpanded
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease-in-out",
                      }}
                    >
                      <ArrowRightAltIcon sx={{ transform: 'translateY(-3px)' , backgroundColor:"#DDDFE1", borderRadius:'50px'}}/>
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            sx={{
              color: "#008CFF",
              mx: 2,
              border: "1px solid #008CFF",
              borderRadius: "4px",
              padding: "6px 16px",
              position: "relative",
              top: "-10px",
            }}
          >
            Previous
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={(currentPage + 1) * cardsPerPage >= cardData.length}
            sx={{
              color: "#008CFF",
              mx: 2,
              border: "1px solid #008CFF",
              borderRadius: "4px",
              position: "relative",
              top: "-10px",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
