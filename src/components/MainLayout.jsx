import { Grid, Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftNavigation from "./LeftNavigation";
import TransitionTest from "./TransitionTest";
import WelcomePage from "./WelcomePage";

export default function () {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4">my mui code sandbox</Typography>
          </Grid>
          <Grid item xs={2}>
            <LeftNavigation />
          </Grid>
          <Grid item xs={10}>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="transitions" element={<TransitionTest />} />
            </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </React.Fragment>
  );
}
