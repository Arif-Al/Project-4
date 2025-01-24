import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DescriptionIcon from '@mui/icons-material/Description';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import AddIcon from '@mui/icons-material/Add';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'Home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'orders',
    title: 'Calendar',
    icon: <CalendarTodayIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'header',
    title: 'Enrolled',
    icon: <SchoolIcon />,
      children: [
      {
        segment: 'To do',
        title: 'To do',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'English 02',
        title: 'English 02',
        icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
      },
      {
        segment: 'Web Dev Frontend S02',
        title: 'Web Dev Frontend S02',
        icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
      },
      {
        segment: 'Professional Development',
        title: 'Professional Development',
        icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
      },
      {
        segment: 'English Communication',
        title: 'English Communication',
        icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
      },
      {
        segment: 'Xwave Digital Literacy (Sindhi)',
        title: 'Xwave Digital Literacy (Sindhi)',
        icon: <AssignmentTurnedInIcon className='text-primary fs-3' />
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    segment: 'Achieved Classes',
    title: 'Achieved Classes',
    icon: <MoveToInboxIcon />,
  
  },
  {
    segment: 'Settings',
    title: 'Settings',
    icon: <SettingsIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
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

 
function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function Header(props: any) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      plus={<AddIcon/>}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        {/* <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer> */}
      </DashboardLayout>
    </AppProvider>
  );
}
