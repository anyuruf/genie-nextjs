'use client';
import React from 'react';
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebar,
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';
import ZoneIcon from '@patternfly/react-icons/dist/esm/icons/zone-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';


export const AppHeader = ({children}:{children: React.ReactNode}) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const headerToolbar = (
    <Toolbar id="vertical-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          aria-label="Global navigation"
          isNavOpen={isNavOpen}
          onNavToggle={onNavToggle}
          id="vertical-nav-toggle"
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href="https://kinstree.org" target="_blank">
          <ZoneIcon/> Kinstree
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} id="vertical-sidebar" />;

  return (
    <Page header={header} sidebar={sidebar}>
      {children}
    </Page>
  );
};