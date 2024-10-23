"use client";
import * as React from "react";
import { createTheme } from "@mui/material/styles";
import MapIcon from "@mui/icons-material/Map";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Example Navigation with 10 categories and subcategories
const NAVIGATION: Navigation = [
  {
    segment: "category1",
    title: "Category 1",
    icon: <MapIcon />,
    children: [
      { segment: "subcategory1", title: "Subcategory 1" },
      { segment: "subcategory2", title: "Subcategory 2" },
    ],
  },
  {
    segment: "category2",
    title: "Category 2",
    icon: <MapIcon />,
    children: [
      { segment: "subcategory1", title: "Subcategory 1" },
      { segment: "subcategory2", title: "Subcategory 2" },
    ],
  },
  {
    segment: "category3",
    title: "Category 3",
    icon: <MapIcon />,
    children: [
      { segment: "subcategory1", title: "Subcategory 1" },
      { segment: "subcategory2", title: "Subcategory 2" },
    ],
  },
  // Add more categories (up to 10 categories)...
];

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutFullScreen(props: DemoProps) {
  const { window } = props;
  const [openCategories, setOpenCategories] = React.useState<string[]>([]);

  const router = useDemoRouter("/map");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  const handleCategoryClick = (category: string) => {
    setOpenCategories((prevState) =>
      prevState.includes(category)
        ? prevState.filter((cat) => cat !== category)
        : [...prevState, category]
    );
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-74.25987571760744!3d40.69767006358627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b60165%3A0x8b621f8a7a7d28a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633452834502!5m2!1sen!2s"
          style={{ flex: 1, border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </DashboardLayout>
    </AppProvider>
  );
}
