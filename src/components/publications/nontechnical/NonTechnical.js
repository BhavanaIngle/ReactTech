import React, { Fragment } from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import publicationsData from "../publications.json";

function NonTechnical() {
  const pubs = publicationsData?.publications;
  const sortedPubs = pubs?.sort((a, b) => {
    return Date.parse(b?.date) - Date.parse(a?.date);
  });

  const nonTechnicalPubs = sortedPubs.filter(
    (pub) => pub.type === "nontechnical"
  );
  return (
    <div style={{ maxHeight: "600px", overflowY: "auto" }}>
      <List sx={{ width: "100%" }}>
        {nonTechnicalPubs.map((pub, index) => {
          const showDivider = index !== nonTechnicalPubs.length - 1;
          const pubDate = new Date(pub.date).toLocaleString("en-us", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          });
          const pubSite = pub.site[0].toUpperCase() + pub.site.slice(1);
          return (
            <Fragment key={index}>
              <ListItem alignItems="flex-start" sx={{ paddingLeft: "0px" }}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={pub.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link href={pub.link} underline="hover" color="inherit">
                      <Typography variant="h5">{pub.title}</Typography>
                    </Link>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "flex", marginTop: "4px" }}
                        component="span"
                        variant="body2"
                      >
                        {pub.description}
                      </Typography>
                      <Typography
                        sx={{ display: "flex", marginTop: "8px" }}
                        component="span"
                        variant="caption"
                      >
                        Published on {pubDate}&nbsp;{"·"}&nbsp;
                        <Link
                          href={pub.siteUrl}
                          underline="hover"
                          color="inherit"
                        >
                          {pubSite}
                        </Link>
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              {showDivider && <Divider variant="fullWidth" component="li" />}
            </Fragment>
          );
        })}
      </List>
    </div>
  );
}

export default NonTechnical;
